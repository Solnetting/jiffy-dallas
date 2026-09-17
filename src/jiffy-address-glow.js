// Aceternity MovingBorder's SVG path-following algorithm, using the approved
// single yellow gradient and six-second loop from the standalone preview.
export function setupStickyAddressGlow(addressSearch, addressPanel) {
  if (!addressSearch || !addressPanel) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let track;
  let path;
  let moving;
  let length = 0;
  let frameId;
  let start;

  const measure = () => {
    if (!path) return;
    const radius = parseFloat(getComputedStyle(addressPanel).borderTopLeftRadius);
    path.setAttribute('rx', radius);
    path.setAttribute('ry', radius);
    length = path.getTotalLength();
  };
  const frame = (time) => {
    if (!track) return;
    if (start === undefined) start = time;
    if (length) {
      const pxPerMillisecond = length / 6000;
      const progress = reducedMotion.matches ? 0 : ((time - start) * pxPerMillisecond) % length;
      const point = path.getPointAtLength(progress);
      moving.style.transform = `translateX(${point.x}px) translateY(${point.y}px) translateX(-50%) translateY(-50%)`;
    }
    frameId = requestAnimationFrame(frame);
  };
  const sync = () => {
    const active = addressSearch.classList.contains('is-sticky') && !addressSearch.hidden && !addressPanel.hidden;
    if (!active) {
      cancelAnimationFrame(frameId);
      track?.remove();
      track = path = moving = undefined;
      start = undefined;
      return;
    }
    if (track) return;
    track = document.createElement('div');
    track.className = 'jiffy-address-glow-track';
    track.setAttribute('aria-hidden', 'true');
    track.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%"><rect fill="none" width="100%" height="100%"></rect></svg><div class="jiffy-address-glow-moving"><div class="jiffy-address-glow-gradient"></div></div>';
    addressPanel.append(track);
    path = track.querySelector('rect');
    moving = track.querySelector('.jiffy-address-glow-moving');
    measure();
    frameId = requestAnimationFrame(frame);
  };
  const stateObserver = new MutationObserver(sync);
  stateObserver.observe(addressSearch, { attributes: true, attributeFilter: ['class', 'hidden'] });
  stateObserver.observe(addressPanel, { attributes: true, attributeFilter: ['hidden'] });
  const sizeObserver = new ResizeObserver(measure);
  sizeObserver.observe(addressPanel);
  sync();
}
