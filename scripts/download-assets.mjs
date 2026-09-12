import { readFile, mkdir, writeFile } from 'node:fs/promises';
const assets = JSON.parse(await readFile(new URL('../figma-assets.json', import.meta.url), 'utf8'));
const dir = new URL('../assets/figma/', import.meta.url);
await mkdir(dir, { recursive: true });
for (let i=0; i<assets.length; i+=6) {
  await Promise.all(assets.slice(i, i+6).map(async (asset) => {
    const response = await fetch(asset.url);
    if (!response.ok) throw new Error(`${asset.file}: ${response.status}`);
    await writeFile(new URL(asset.file, dir), Buffer.from(await response.arrayBuffer()));
    console.log(asset.file);
  }));
}
