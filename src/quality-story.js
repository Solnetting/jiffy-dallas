const asset = (file) => `./assets/figma/${file}`;

const proofs = [
  { image: 'apparel-shot1.png', label: 'Color' },
  { image: 'apparel-shot2.png', label: 'Detail' },
  { image: 'apparel-shot3.png', label: 'Release' },
  { image: 'apparel-shot4.png', label: 'Worn' },
];

const products = [
  ['product-image4.png', 'Gildan G800', 'Heavy Cotton™ T-Shirt', '$2.59'],
  ['product-image5.png', 'Gildan G500', 'Heavy Cotton™ T-Shirt', '$2.59'],
  ['product-image6.png', 'Gildan G185', 'Heavy Blend® Hoodie', '$9.76'],
  ['product-image7.png', 'Gildan G185', 'Heavy Blend™ Crewneck', '$11.35'],
];

document.querySelector('#app').innerHTML = `
  <section class="quality-story" aria-label="Jiffy Local DTF quality story">
    <div class="story-sticky">
      <div class="story-shell">
        <header class="story-header" aria-hidden="true">
          <div class="local-mark">Jiffy Local <span></span><small>Dallas–Fort Worth</small></div>
          <div class="story-words">Ideas <b>Local</b> Wear <i>Further</i><em></em></div>
        </header>
        <h1 class="story-title">Your design. Our quality<span>.</span></h1>

        <article class="hero-art" aria-label="DTF transfer quality">
          <img src="${asset('property1-frame77.png')}" alt="A maker holding a printed DTF transfer" />
          <button class="upload-button upload-button--quiet" type="button">Upload artwork</button>
          <input id="artwork-input" type="file" accept="image/png,image/jpeg,application/pdf" hidden />
        </article>

        <div class="quality-rack" aria-label="Quality proof gallery">
          ${proofs.map((proof, index) => `
            <figure class="proof-card proof-card--${index + 1}">
              <img src="${asset(proof.image)}" alt="${proof.label} proof for a DTF transfer" />
              <figcaption>${String(index + 1).padStart(2, '0')} / ${proof.label}</figcaption>
            </figure>
          `).join('')}
        </div>

        <aside class="conversion-panel" aria-label="Choose a DTF transfer path">
          <button class="upload-button upload-button--solid" type="button" data-upload>Upload artwork</button>
          <a class="transfer-choice" href="https://www.jiffy.com/transfers">
            <img src="${asset('image50.png')}" alt="" />
            <span><strong>DTF Transfers by size</strong><small>Upload one design. Choose the size.</small></span><b>→</b>
          </a>
          <a class="transfer-choice" href="https://www.jiffy.com/jiffytransfers-DTFGANG001.html">
            <img src="${asset('image52.png')}" alt="" />
            <span><strong>Gang sheet — DTF transfers</strong><small>Arrange multiple designs on one sheet.</small></span><b>→</b>
          </a>
        </aside>

        <section class="apparel-rail" aria-labelledby="pair-title">
          <div class="rail-copy"><h2 id="pair-title">Pair with apparel</h2><p>Add blanks to the same cart.</p></div>
          <div class="rail-products">
            ${products.map(([image, brand, name, price]) => `
              <a class="rail-product" href="https://www.jiffy.com/">
                <div class="rail-image"><img src="${asset(image)}" alt="${name}" /></div>
                <small>${brand}</small><strong>${name}</strong>
                <span class="stars">★★★★<i>★</i></span><b>from ${price}</b>
                <em>⚡ Jiffy Local</em>
              </a>
            `).join('')}
          </div>
        </section>
        <p class="story-count" aria-hidden="true"><b>01</b> / 05</p>
      </div>
    </div>
  </section>
`;

const story = document.querySelector('.quality-story');
const shell = document.querySelector('.story-shell');
const fileInput = document.querySelector('#artwork-input');
const quietButton = document.querySelector('.upload-button--quiet');
const solidButton = document.querySelector('[data-upload]');
const count = document.querySelector('.story-count');
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ramp = (value, start, end) => clamp((value - start) / (end - start));
const ease = (value) => value * value * (3 - 2 * value);

function renderStory() {
  const maxScroll = Math.max(1, story.offsetHeight - window.innerHeight);
  const progress = clamp(-story.getBoundingClientRect().top / maxScroll);
  const reduce = ease(ramp(progress, .08, .24));
  const stacked = ease(ramp(progress, .22, .68));
  const commerce = ease(ramp(progress, .72, .9));
  const apparel = ease(ramp(progress, .84, .98));
  const photoIndex = Math.min(5, 1 + Math.floor(ramp(progress, .15, .78) * 4.95));

  shell.style.setProperty('--reduce', reduce.toFixed(3));
  shell.style.setProperty('--stacked', stacked.toFixed(3));
  shell.style.setProperty('--commerce', commerce.toFixed(3));
  shell.style.setProperty('--apparel', apparel.toFixed(3));
  shell.style.setProperty('--gallery-shift', commerce.toFixed(3));
  shell.style.setProperty('--hero-width', `${100 - reduce * 68}%`);
  shell.style.setProperty('--hero-top', `${4 + reduce * 9}vh`);
  shell.style.setProperty('--title-opacity', ease(ramp(progress, .08, .18)).toFixed(3));
  shell.style.setProperty('--header-opacity', ease(ramp(progress, .09, .19)).toFixed(3));
  count.innerHTML = `<b>${String(photoIndex).padStart(2, '0')}</b> / 05`;
}

window.addEventListener('scroll', renderStory, { passive: true });
window.addEventListener('resize', renderStory);
renderStory();

[quietButton, solidButton].forEach((button) => button.addEventListener('click', () => fileInput.click()));
fileInput.addEventListener('change', () => {
  const name = fileInput.files?.[0]?.name;
  if (name) [quietButton, solidButton].forEach((button) => { button.textContent = 'Artwork selected'; });
});
