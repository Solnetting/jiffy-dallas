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
  </main>`;

const panels = [...document.querySelectorAll('.panel')];
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) entry.target.classList.add('is-active');
}), { root: document.querySelector('.carousel'), threshold: 0.65 });
panels.forEach((panel) => observer.observe(panel));

const section = document.querySelector('.section');
window.addEventListener('wheel', (event) => {
  const bounds = section.getBoundingClientRect();
  const active = bounds.top <= 0 && bounds.bottom >= window.innerHeight;
  const atStart = carousel.scrollLeft <= 1 && event.deltaY < 0;
  const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2 && event.deltaY > 0;
  if (!active || atStart || atEnd) return;
  event.preventDefault();
  carousel.scrollLeft += event.deltaY * 0.9;
}, { passive: false });
