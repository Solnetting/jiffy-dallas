const items = [
  ['Printed and driven from Dallas', 'Your order leaves the Dallas micro-factory in a Jiffy van and comes straight to your door.', '/images/printed-dallas.png'],
  ['Open 7 days, 5 AM to 10 PM', 'Every day is a same-day delivery day.', '/images/stocked-locally.png'],
  ['Stocked locally', 'The blanks you need are stocked locally in Dallas.', '/images/both-boxes.png'],
  ['The same Jiffy transfer quality', 'Local speed changes the delivery time—not the quality of the transfer.', '/images/transfer-quality.png']
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
