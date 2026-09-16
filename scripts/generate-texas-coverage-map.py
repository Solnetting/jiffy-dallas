#!/usr/bin/env python3
"""Build the local Texas coverage SVG from official Census geometry exports.

The input files are downloaded from the Census Bureau's 2025 cartographic
boundary and TIGER/Line releases. The output stays self-contained: geographic
paths, roads, labels, and styling are all embedded in one SVG asset.
"""

from __future__ import annotations

import html
import math
import struct
import xml.etree.ElementTree as ET
from pathlib import Path


VIEW_W = 2400
VIEW_H = 1600
LON_MIN, LON_MAX = -107.5, -91.0
LAT_MIN, LAT_MAX = 24.0, 38.5

STATE_KML = Path("/tmp/cb_2025_us_state_500k.kml")
COUNTY_KML = Path("/tmp/cb_2025_us_county_500k.kml")
ROADS_DIR = Path("/tmp/tl_2025_48_prisecroads")
OUT = Path("assets/figma/texas-coverage-map.svg")

NS = {"k": "http://www.opengis.net/kml/2.2"}


def project(lon: float, lat: float) -> tuple[float, float]:
    x = (lon - LON_MIN) / (LON_MAX - LON_MIN) * VIEW_W
    y = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * VIEW_H
    return x, y


def parse_coords(text: str) -> list[tuple[float, float]]:
    points = []
    for item in text.split():
        parts = item.split(",")
        if len(parts) >= 2:
            points.append((float(parts[0]), float(parts[1])))
    return points


def area(points: list[tuple[float, float]]) -> float:
    return abs(sum(
        points[i - 1][0] * points[i][1] - points[i][0] * points[i - 1][1]
        for i in range(len(points))
    )) / 2


def simplify(points: list[tuple[float, float]], tolerance: float) -> list[tuple[float, float]]:
    if len(points) < 3:
        return points
    closed = points[0] == points[-1]
    work = points[:-1] if closed else points[:]

    def distance(point, start, end):
        x, y = point
        x1, y1 = start
        x2, y2 = end
        dx, dy = x2 - x1, y2 - y1
        if dx == 0 and dy == 0:
            return math.hypot(x - x1, y - y1)
        t = max(0, min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)))
        return math.hypot(x - (x1 + t * dx), y - (y1 + t * dy))

    def reduce(segment):
        if len(segment) <= 2:
            return segment
        start, end = segment[0], segment[-1]
        furthest = max(enumerate(segment[1:-1], 1), key=lambda pair: distance(pair[1], start, end))
        index, maximum = furthest[0], distance(furthest[1], start, end)
        if maximum <= tolerance:
            return [start, end]
        return reduce(segment[: index + 1])[:-1] + reduce(segment[index:])

    reduced = reduce(work)
    if closed:
        reduced.append(reduced[0])
    return reduced


def path_d(points: list[tuple[float, float]], tolerance: float = 0.0) -> str:
    if not points:
        return ""
    pts = simplify(points, tolerance) if tolerance else points
    projected = [project(lon, lat) for lon, lat in pts]
    return "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in projected) + (" Z" if pts[0] == pts[-1] else "")


def simple_data(placemark: ET.Element, name: str) -> str:
    for item in placemark.findall(".//k:SimpleData", NS):
        if item.attrib.get("name") == name:
            return (item.text or "").strip()
    return ""


def placemarks(path: Path) -> list[ET.Element]:
    root = ET.parse(path).getroot()
    return root.findall(".//k:Placemark", NS)


def rings(placemark: ET.Element) -> list[list[tuple[float, float]]]:
    result = []
    for node in placemark.findall(".//k:outerBoundaryIs/k:LinearRing/k:coordinates", NS):
        points = parse_coords(node.text or "")
        if len(points) > 2:
            result.append(points)
    return result


def state_geometry() -> tuple[list[tuple[float, float]], dict[str, list[list[tuple[float, float]]]]]:
    wanted = {"Texas", "Oklahoma", "Arkansas", "Louisiana", "New Mexico", "Kansas"}
    selected: dict[str, list[list[tuple[float, float]]]] = {}
    texas: list[tuple[float, float]] = []
    for placemark in placemarks(STATE_KML):
        name = simple_data(placemark, "NAME")
        if name not in wanted:
            continue
        state_rings = rings(placemark)
        selected[name] = state_rings
        if name == "Texas":
            texas = max(state_rings, key=area)
    if not texas:
        raise RuntimeError("Texas boundary was not found in the Census KML")
    return texas, selected


def county_geometry() -> list[list[tuple[float, float]]]:
    result = []
    for placemark in placemarks(COUNTY_KML):
        if simple_data(placemark, "STATEFP") != "48":
            continue
        result.extend(rings(placemark))
    return result


def read_dbf(path: Path) -> list[dict[str, str]]:
    data = path.read_bytes()
    header_length, record_length = struct.unpack_from("<HH", data, 8)
    fields = []
    offset = 32
    while data[offset] != 0x0D:
        raw_name = data[offset : offset + 11].split(b"\0", 1)[0]
        fields.append((raw_name.decode("ascii", "ignore"), data[offset + 16]))
        offset += 32
    records = []
    cursor = header_length
    while cursor + record_length <= len(data):
        if data[cursor] == 0x1A:
            break
        row = {}
        for index, (name, length) in enumerate(fields):
            start = cursor + 1 + sum(field[1] for field in fields[:index])
            row[name] = data[start : start + length].decode("latin-1", "ignore").strip()
        records.append(row)
        cursor += record_length
    return records


def read_shp(path: Path) -> list[list[list[tuple[float, float]]]]:
    data = path.read_bytes()
    cursor = 100
    records = []
    while cursor + 8 <= len(data):
        content_words = struct.unpack_from(">i", data, cursor + 4)[0]
        end = cursor + 8 + content_words * 2
        shape_type = struct.unpack_from("<i", data, cursor + 8)[0]
        if shape_type == 3:
            num_parts, num_points = struct.unpack_from("<ii", data, cursor + 44)
            parts_offset = cursor + 52
            points_offset = parts_offset + num_parts * 4
            parts = [struct.unpack_from("<i", data, parts_offset + i * 4)[0] for i in range(num_parts)]
            points = [struct.unpack_from("<dd", data, points_offset + i * 16) for i in range(num_points)]
            records.append([points[parts[i] : parts[i + 1] if i + 1 < len(parts) else None] for i in range(len(parts))])
        else:
            records.append([])
        cursor = end
    return records


def road_geometry() -> tuple[list[str], list[str]]:
    stem = next(ROADS_DIR.glob("*.shp"))
    attributes = read_dbf(stem.with_suffix(".dbf"))
    records = read_shp(stem)
    primary, secondary = [], []
    for index, lines in enumerate(records):
        if index >= len(attributes):
            continue
        mtfcc = attributes[index].get("MTFCC", "")
        target = primary if mtfcc == "S1100" else secondary if mtfcc == "S1200" else None
        if target is None:
            continue
        for line in lines:
            if len(line) < 2:
                continue
            if not any(LON_MIN - 1 <= lon <= LON_MAX + 1 and LAT_MIN - 1 <= lat <= LAT_MAX + 1 for lon, lat in line):
                continue
            target.append(path_d(line, 0.008))
    return primary, secondary


def city(lon: float, lat: float, label: str, dx: float = 14, dy: float = -10, major: bool = False) -> str:
    x, y = project(lon, lat)
    size = 30 if major else 24
    radius = 11 if major else 8
    weight = 800 if major else 650
    return f'''<g class="city{' city--major' if major else ''}" transform="translate({x:.1f} {y:.1f})">
  <circle class="city__halo" r="{radius * 3.2:.1f}"/>
  <circle class="city__dot" r="{radius}"/>
  <text x="{dx}" y="{dy}" font-size="{size}" font-weight="{weight}">{html.escape(label)}</text>
</g>'''


def main() -> None:
    texas, states = state_geometry()
    counties = county_geometry()
    primary, secondary = road_geometry()
    texas_d = path_d(texas, 0.012)
    output = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VIEW_W} {VIEW_H}" role="img" aria-labelledby="map-title map-description">
  <title id="map-title">Texas delivery coverage map</title>
  <desc id="map-description">A vector map based on 2025 U.S. Census cartographic boundaries and TIGER/Line roads, styled for the Jiffy Local delivery coverage section.</desc>
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfcf4"/><stop offset="1" stop-color="#eef5eb"/></linearGradient>
    <linearGradient id="gulf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ed8ef"/><stop offset="1" stop-color="#75bfdf"/></linearGradient>
    <filter id="terrain-soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="20"/></filter>
    <filter id="road-soft" x="-3%" y="-3%" width="106%" height="106%"><feGaussianBlur stdDeviation="0.32"/></filter>
  </defs>
  <rect width="{VIEW_W}" height="{VIEW_H}" fill="url(#paper)"/>
  <path d="M0 1130C340 1020 620 1065 930 1205S1470 1455 1770 1340 2160 1230 2400 1280V1600H0Z" fill="url(#gulf)"/>
  <path d="M0 1148C330 1048 610 1090 924 1226S1450 1473 1752 1360" fill="none" stroke="#e8f8fb" stroke-width="10" opacity=".85"/>
  <path d="M0 1175C330 1080 600 1119 910 1254S1430 1492 1735 1385" fill="none" stroke="#6fb8d7" stroke-width="3" opacity=".6"/>
  <g fill="#d4e9cc" opacity=".58" filter="url(#terrain-soft)">
    <ellipse cx="400" cy="340" rx="250" ry="105"/><ellipse cx="800" cy="650" rx="240" ry="130"/>
    <ellipse cx="1350" cy="560" rx="280" ry="170"/><ellipse cx="1220" cy="1010" rx="290" ry="190"/>
    <ellipse cx="580" cy="1100" rx="220" ry="140"/><ellipse cx="1640" cy="930" rx="300" ry="160"/>
  </g>
  <g class="neighbor-states">
'''
    for name, state_rings in states.items():
        if name == "Texas":
            continue
        for ring in state_rings:
            output += f'    <path d="{path_d(ring, 0.02)}" fill="#f4f7ed" stroke="#9aa5a9" stroke-width="1.5" opacity=".48"/>\n'
    output += '  </g>\n'
    output += f'  <path d="{texas_d}" fill="#f8faf1" stroke="#43566f" stroke-width="2.3" opacity=".9"/>\n'
    output += '  <g class="county-lines" fill="none" stroke="#c7d8d2" stroke-width="0.65" opacity=".42">\n'
    for ring in counties:
        output += f'    <path d="{path_d(ring, 0.018)}"/>\n'
    output += '  </g>\n'
    output += '  <g class="waterways" fill="none" stroke="#8dcdec" stroke-linecap="round">\n'
    output += '''    <path d="M180 390C420 420 610 380 800 442S1110 540 1380 500" stroke-width="11" opacity=".7"/>
    <path d="M1510 250C1470 420 1530 565 1492 730S1540 960 1510 1110" stroke-width="8" opacity=".72"/>
    <path d="M370 870C600 800 770 900 950 930S1250 1010 1510 920" stroke-width="8" opacity=".66"/>
    <path d="M1040 1200C1110 1050 1150 915 1120 780S1120 550 1210 420" stroke-width="8" opacity=".68"/>
    <path d="M570 1260C720 1150 810 1050 875 930S940 720 930 560" stroke-width="7" opacity=".66"/>
    <path d="M1660 920C1750 900 1810 938 1818 1005S1760 1115 1695 1090 1625 975 1660 920Z" fill="#9ed8ef" stroke-width="5"/>
  </g>
  <g class="roads roads--secondary" fill="none" stroke="#b9d1e5" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round" opacity=".48" filter="url(#road-soft)">
'''
    for road in secondary:
        output += f'    <path d="{road}"/>\n'
    output += '  </g>\n  <g class="roads roads--primary" fill="none" stroke="#91b1d6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".62" filter="url(#road-soft)">\n'
    for road in primary:
        output += f'    <path d="{road}"/>\n'
    output += '''  </g>
  <g class="urban-rings" fill="none" stroke="#9fb8d8" stroke-width="3" opacity=".56">
    <circle cx="''' + f'''{project(-97.04, 32.90)[0]:.1f}" cy="{project(-97.04, 32.90)[1]:.1f}" r="48"/><circle cx="{project(-97.04, 32.90)[0]:.1f}" cy="{project(-97.04, 32.90)[1]:.1f}" r="82"/><circle cx="{project(-97.04, 32.90)[0]:.1f}" cy="{project(-97.04, 32.90)[1]:.1f}" r="116"/>
  </g>
  <g class="labels" font-family="Inter, Arial, sans-serif" fill="#294d78">
'''
    output += city(-101.8313, 35.2220, "Amarillo", 14, -12)
    output += city(-101.8552, 33.5779, "Lubbock", 14, -12)
    output += city(-99.7331, 32.4487, "Abilene", 14, -12)
    output += city(-97.04, 32.90, "Dallas–Fort Worth", 18, -15, True)
    output += city(-95.3011, 32.3513, "Tyler", 14, -12)
    output += city(-97.7431, 30.2672, "Austin", 14, -12)
    output += city(-96.3344, 30.6230, "College Station", 14, -12)
    output += city(-95.3698, 29.7604, "Houston", 18, -15, True)
    output += city(-98.4936, 29.4241, "San Antonio", 18, -15, True)
    output += city(-94.1266, 30.0802, "Beaumont", 14, -12)
    output += city(-97.3964, 27.8006, "Corpus Christi", 14, -12)
    output += city(-99.5075, 27.5306, "Laredo", 14, -12)
    output += city(-98.2300, 26.2034, "McAllen", 14, -12)
    output += f'''    <g class="map-region-labels" fill="#6f8298" font-size="29" letter-spacing="8" font-weight="550">
      <text x="{project(-100.3, 31.15)[0]:.1f}" y="{project(-100.3, 31.15)[1]:.1f}">T E X A S</text>
      <text x="{project(-94.2, 36.5)[0]:.1f}" y="{project(-94.2, 36.5)[1]:.1f}">A R K A N S A S</text>
      <text x="{project(-92.6, 31.0)[0]:.1f}" y="{project(-92.6, 31.0)[1]:.1f}">L O U I S I A N A</text>
      <text x="{project(-106.7, 25.0)[0]:.1f}" y="{project(-106.7, 25.0)[1]:.1f}">N U E V O  L E Ó N</text>
      <text x="{project(-95.9, 25.0)[0]:.1f}" y="{project(-95.9, 25.0)[1]:.1f}" font-style="italic">Gulf of</text>
      <text x="{project(-95.7, 24.55)[0]:.1f}" y="{project(-95.7, 24.55)[1]:.1f}" font-style="italic">Mexico</text>
    </g>
  </g>
  <g class="hub-marker">
    <circle cx="{project(-97.04, 32.90)[0]:.1f}" cy="{project(-97.04, 32.90)[1]:.1f}" r="28" fill="#ffc800" opacity=".2"/>
    <circle cx="{project(-97.04, 32.90)[0]:.1f}" cy="{project(-97.04, 32.90)[1]:.1f}" r="10" fill="#ffc800" stroke="#14213d" stroke-width="5"/>
  </g>
  <style>
    .city__halo {{ fill: #dbeaf1; opacity: .45; }}
    .city__dot {{ fill: #24466f; stroke: #f8faf1; stroke-width: 6; }}
    .city--major .city__dot {{ fill: #ffc800; stroke: #24466f; stroke-width: 7; }}
    text {{ paint-order: stroke; stroke: #f8faf1; stroke-width: 4px; stroke-linejoin: round; }}
    .map-region-labels text {{ stroke-width: 6px; }}
  </style>
</svg>
'''
    OUT.write_text(output, encoding="utf-8")
    print(f"wrote {OUT} ({len(output):,} bytes)")
    print(f"Texas boundary points: {len(texas)}; counties: {len(counties)}; roads: {len(primary)} primary, {len(secondary)} secondary")


if __name__ == "__main__":
    main()
