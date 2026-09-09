const items = [
  ['Printed and driven from Dallas', 'Your order leaves the Dallas micro-factory in a Jiffy van and comes straight to your door.', './printed-dallas.png'],
  ['Open 7 days, 5 AM to 10 PM', 'Every day is a same-day delivery day.', './stocked-locally.png'],
  ['Stocked locally', 'The blanks you need are stocked locally in Dallas.', './both-boxes.png'],
  ['The same Jiffy transfer quality', 'Local speed changes the delivery time—not the quality of the transfer.', './transfer-quality.png']
];

document.querySelector('#app').innerHTML = `
  <style>.hero-video{height:min(72vh,760px);overflow:hidden;background:#0B1F44}.hero-video video{display:block;width:100%;height:100%;object-fit:cover}.section{position:relative}.delivery-section,.products-section{padding:64px 5vw;background:#FAF8F4}.delivery-card{padding:20px;border:1px solid #E3DED6;border-radius:12px;background:#fff;display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center}.delivery-card h2{font-family:Poppins;margin:8px 0 4px;font-size:24px}.delivery-card p{font-family:Inter;color:#667085;margin:0}.open-pill{background:#31C982;color:#fff;border-radius:999px;padding:4px 12px;font:700 11px Inter}.delivery-card button{background:#FFC800;border:0;border-radius:12px;padding:14px 22px;font:600 14px Inter;color:#0B1F44}.windows{grid-column:1/-1;display:grid;grid-template-columns:70px repeat(8,1fr) 70px;border:1px solid #E3DED6;border-radius:8px;overflow:hidden;text-align:center;font:500 14px Inter;color:#8B95A8}.windows>*{padding:15px 8px;border-right:1px solid #E3DED6}.windows .current{color:#0B1F44;background:#fff}.windows b{border:0;color:#667085;font-size:11px}.windows strong{color:#0B1F44;font:700 16px Poppins}.products-section{display:grid;grid-template-columns:1fr 1.3fr 1.3fr;gap:24px;align-items:center}.products-intro p{color:#E2231A;font:700 12px Inter;letter-spacing:.08em}.products-intro h2{font:600 48px/1 Poppins;margin:10px 0}.products-intro span,.products-section article p{font:16px/1.4 Inter;color:#667085}.products-section article{display:flex;align-items:center;gap:18px;padding:22px;border:1px solid #E3DED6;border-radius:12px;background:#fff}.products-section img{width:150px;height:150px;object-fit:cover}.products-section h3{font:600 22px Poppins;margin:0 0 8px}.proof-strip{display:flex;justify-content:space-around;gap:24px;padding:28px 5vw;background:#FFC800;color:#12141C;font:600 17px Inter}@media(max-width:800px){.delivery-card,.products-section{display:flex;flex-direction:column;align-items:stretch}.windows{font-size:11px;overflow:auto}.products-section article{min-height:180px}.proof-strip{flex-direction:column;gap:12px}}
  </style><section class="hero-video" aria-label="Jiffy Dallas delivery">
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
  </main>
  <section class="delivery-section">
    <div class="delivery-card"><div><span class="open-pill">OPEN</span><h2>Delivery windows today</h2><p>Available windows depend on your address and order time.</p></div><button>Check delivery time →</button><div class="windows"><b>FROM<br><strong>5 AM</strong></b><span>5–7 AM</span><span>7–9 AM</span><span>9–11 AM</span><span class="current">11 AM–1 PM</span><span>1–3 PM</span><span>3–5 PM</span><span>5–7 PM</span><span>7–9 PM</span><b>TO<br><strong>10 PM</strong></b></div></div>
  </section>
  <section class="products-section"><div class="products-intro"><p>WHAT’S IN THE VAN</p><h2>Both boxes.<br>One van.</h2><span>Printed here. Stocked locally. Delivered together.</span></div><article><img src="./printed-dallas.png" alt="DTF transfers"><div><h3>DTF Transfers</h3><p>Vibrant prints. Ready to press, printed in Dallas.</p></div></article><article><img src="./stocked-locally.png" alt="Blank shirts"><div><h3>Blank shirts</h3><p>Premium blanks. Always in stock, local inventory.</p></div></article></section>
  <div class="proof-strip"><span>▣ &nbsp; Printed in Dallas</span><span>◈ &nbsp; Stocked locally</span><span>▦ &nbsp; Delivered 7 days a week</span><span>◷ &nbsp; 5 AM–10 PM</span></div>`;

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
  if (!inSection || event.deltaY <= 0 || Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;
  const atStart = carousel.scrollLeft <= 1;
  const atEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;
  const movingDown = event.deltaY > 0;
  if ((movingDown && atEnd) || (!movingDown && atStart)) return;
  event.preventDefault();
  carousel.scrollLeft = Math.min(carousel.scrollWidth - carousel.clientWidth, carousel.scrollLeft + event.deltaY);
}, { passive: false, capture: true });
  
