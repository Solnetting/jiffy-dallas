const items = [
  ['Printed and driven from Dallas', 'Your order leaves the Dallas micro-factory in a Jiffy van and comes straight to your door.', './printed-dallas.png'],
  ['Open 7 days, 5 AM to 10 PM', 'Every day is a same-day delivery day.', './stocked-locally.png'],
  ['Stocked locally', 'The blanks you need are stocked locally in Dallas.', './both-boxes.png'],
  ['The same Jiffy transfer quality', 'Local speed changes the delivery time—not the quality of the transfer.', './transfer-quality.png']
];

document.querySelector('#app').innerHTML = `
  <style>.hero-video{height:min(72vh,760px);overflow:hidden;background:#0B1F44}.hero-video video{display:block;width:100%;height:100%;object-fit:cover}.section{position:relative}</style>
  <section class="hero-video" aria-label="Jiffy Dallas delivery">
    <video src="./hero-seedance.mp4" autoplay muted loop playsinline></video>
  </section>
  <main class="section">
    <header class="section-header"><p>JIFFY DFW SPECIALIST</p><h1>WHY IT’S HOURS, NOT DAYS.</h1></header>
    <div class="carousel" aria-label="Why Jiffy delivers in hours">
      ${items.map((item, index) => `<article class="panel ${index === 0 ? 'is-active' : ''}">
        <div class="image-wrap"><img src="${item[2]}" alt="" /></div>
        <div class="copy"><h2>${item[0]}</h2><p>${item[1]}</p></div>
      </article>`).join('')}
    </div>
  </main><div style="height:100vh;background:#FAF8F4" aria-hidden="true"></div>`;

const panels = [...document.querySelectorAll('.panel')];
const carousel = document.querySelector('.carousel');
const setActivePanel = (panel) => panels.forEach((item) => item.classList.toggle('is-active', item === panel));
const updateActivePanel = () => {
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2) {
    setActivePanel(panels[panels.length - 1]);
    return;
  }
  const edge = carousel.getBoundingClientRect().left + 24;
  const active = panels.reduce((closest, panel) => {
    const distance = Math.abs(panel.getBoundingClientRect().left - edge);
    return distance < closest.distance ? { panel, distance } : closest;
  }, { panel: panels[0], distance: Infinity }).panel;
  setActivePanel(active);
};
carousel.addEventListener('scroll', updateActivePanel, { passive: true });
panels.forEach((panel) => panel.addEventListener('mouseenter', () => setActivePanel(panel)));
updateActivePanel();

const section = document.querySelector('.section');
window.addEventListener('wheel', (event) => {
  const bounds = section.getBoundingClientRect();
  const inSection = bounds.top <= 50 && bounds.bottom >= 50;
  if (!inSection || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
  const atStart = carousel.scrollLeft <= 1;
  const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;
  const movingDown = event.deltaY > 0;
  if ((movingDown && atEnd) || (!movingDown && atStart)) return;
  event.preventDefault();
  carousel.scrollLeft += event.deltaY;
}, { passive: false, capture: true });
  
