const items = [
  ['Printed and driven from Dallas', 'Your order leaves the Dallas micro-factory in a Jiffy van and comes straight to your door.', './printed-dallas.png'],
  ['Open 7 days, 5 AM to 10 PM', 'Every day is a same-day delivery day.', './stocked-locally.png'],
  ['Stocked locally', 'The blanks you need are stocked locally in Dallas.', './both-boxes.png'],
  ['The same Jiffy transfer quality', 'Local speed changes the delivery time—not the quality of the transfer.', './transfer-quality.png']
];

document.querySelector('#app').innerHTML = `
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
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  entry.target.classList.toggle('is-active', entry.isIntersecting);
}), { root: document.querySelector('.carousel'), threshold: 0.65 });
panels.forEach((panel) => observer.observe(panel));

const section = document.querySelector('.section');
const syncCarouselToPage = () => {
  const bounds = section.getBoundingClientRect();
  const travel = section.offsetHeight - window.innerHeight;
  const progress = Math.max(0, Math.min(1, -bounds.top / travel));
  carousel.scrollLeft = progress * (carousel.scrollWidth - carousel.clientWidth);
};
window.addEventListener('scroll', syncCarouselToPage, { passive: true });
window.addEventListener('resize', syncCarouselToPage);
syncCarouselToPage();
  
