const asset = (file) => `./assets/figma/${file}`;

const proofs = [
  { image: 'tiger-proof-color.png', label: 'Color' },
  { image: 'tiger-proof-detail.png', label: 'Fine detail' },
  { image: 'tiger-proof-peel.png', label: 'Clean peel' },
  { image: 'tiger-proof-worn.png', label: 'Finished print' },
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
          <img src="${asset('tiger-transfer-hero.png')}" alt="A maker holding a vivid tiger DTF transfer" />
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
  <section class="static-quality-compare" aria-labelledby="static-quality-title">
    <div class="static-quality-grid">
      <article class="static-quality-intro">
        <img src="${asset('tiger-transfer-hero.png')}" alt="Maker holding a tiger DTF transfer" />
        <div class="static-quality-copy">
          <p>Jiffy Local / DTF Transfers</p>
          <h2 id="static-quality-title">Your design.<br />Our quality.</h2>
        </div>
        <button class="static-upload" type="button">Upload artwork</button>
      </article>
      ${proofs.map((proof, index) => `
        <figure class="static-proof">
          <img src="${asset(proof.image)}" alt="${proof.label} proof for a DTF transfer" />
          <figcaption>${String(index + 1).padStart(2, '0')} / ${proof.label}</figcaption>
        </figure>
      `).join('')}
    </div>
  </section>
`;

const story = document.querySelector('.quality-story');
const compareStory = story.cloneNode(true);
compareStory.classList.add('quality-story--compare');
compareStory.setAttribute('aria-label', 'Alternative Jiffy Local DTF quality story');
compareStory.querySelector('.hero-art').insertAdjacentHTML('afterbegin', `
  <div class="compare-hero-title"><p>Jiffy Local / DTF Transfers</p><h2>Your design.<br />Our quality.</h2></div>
`);
document.querySelector('.static-quality-compare').replaceWith(compareStory);
const carouselStory = story.cloneNode(true);
carouselStory.classList.add('quality-story--carousel');
carouselStory.setAttribute('aria-label', 'Carousel Jiffy Local DTF quality story');
compareStory.after(carouselStory);

const shell = document.querySelector('.story-shell');
const rack = document.querySelector('.quality-rack');
const proofCards = [...document.querySelectorAll('.proof-card')];
const fileInput = document.querySelector('#artwork-input');
const quietButton = document.querySelector('.upload-button--quiet');
const solidButton = document.querySelector('[data-upload]');
const count = document.querySelector('.story-count');
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ramp = (value, start, end) => clamp((value - start) / (end - start));
const ease = (value) => value * value * (3 - 2 * value);

function layoutPackedCards(cards, progress, rackWidth, commerce) {
  const gap = 16;
  const slotWidth = Math.max(72, (rackWidth - gap * 3) / 4);
  let previous = null;
  cards.forEach((card, index) => {
    const enterStart = .12 + index * .15;
    const enterEnd = .2 + index * .15;
    const packStart = index === cards.length - 1 ? .72 : .12 + (index + 1) * .15;
    const packEnd = index === cards.length - 1 ? .8 : .2 + (index + 1) * .15;
    const entered = ease(ramp(progress, enterStart, enterEnd));
    const packed = ease(ramp(progress, packStart, packEnd));
    const x = previous ? previous.x + previous.width + gap : 0;
    const availableWidth = Math.max(slotWidth, rackWidth - x);
    const width = availableWidth * (1 - packed) + slotWidth * packed;
    card.style.width = `${width}px`;
    card.style.transform = `translate3d(${x}px,0,0)`;
    card.style.opacity = `${entered * (1 - commerce)}`;
    card.style.zIndex = `${index + 1}`;
    previous = { x, width };
  });
}

function renderStory() {
  const maxScroll = Math.max(1, story.offsetHeight - window.innerHeight);
  const progress = clamp(-story.getBoundingClientRect().top / maxScroll);
  const reduce = ease(ramp(progress, .04, .22));
  const commerce = ease(ramp(progress, .79, .91));
  const apparel = ease(ramp(progress, .88, .99));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .68);
  const rackLeft = gutter + heroWidth + 24;
  const rackWidth = Math.max(280, window.innerWidth - gutter - rackLeft);
  const panelTop = window.innerHeight * .21 * reduce;
  const rackHeight = window.innerHeight - panelTop - 76 * reduce;

  shell.style.setProperty('--reduce', reduce.toFixed(3));
  shell.style.setProperty('--stack', '1');
  shell.style.setProperty('--commerce', commerce.toFixed(3));
  shell.style.setProperty('--apparel', apparel.toFixed(3));
  shell.style.setProperty('--gutter', `${gutter}px`);
  shell.style.setProperty('--hero-left', `${gutter}px`);
  shell.style.setProperty('--hero-width', `${heroWidth}px`);
  shell.style.setProperty('--hero-top', `${panelTop}px`);
  shell.style.setProperty('--hero-bottom', `${76 * reduce}px`);
  shell.style.setProperty('--rack-left', `${rackLeft}px`);
  shell.style.setProperty('--rack-width', `${rackWidth}px`);
  shell.style.setProperty('--rack-height', `${rackHeight}px`);
  shell.style.setProperty('--rack-top', `${panelTop}px`);
  shell.style.setProperty('--title-opacity', ease(ramp(progress, .2, .32)).toFixed(3));
  shell.style.setProperty('--header-opacity', ease(ramp(progress, .21, .33)).toFixed(3));
  layoutPackedCards(proofCards, progress, rackWidth, commerce);
  const displayed = Math.min(5, 1 + proofCards.filter((_, index) => progress >= .12 + index * .15).length);
  count.innerHTML = `<b>${String(displayed).padStart(2, '0')}</b> / 05`;
}

const compareShell = compareStory.querySelector('.story-shell');
const compareProofCards = [...compareStory.querySelectorAll('.proof-card')];
const compareCount = compareStory.querySelector('.story-count');
const compareFileInput = compareStory.querySelector('#artwork-input');
const compareButtons = [...compareStory.querySelectorAll('.upload-button')];

function renderCompareStory() {
  const maxScroll = Math.max(1, compareStory.offsetHeight - window.innerHeight);
  const progress = clamp(-compareStory.getBoundingClientRect().top / maxScroll);
  const reduce = ease(ramp(progress, .04, .22));
  const commerce = ease(ramp(progress, .79, .91));
  const apparel = ease(ramp(progress, .88, .99));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .74);
  const rackLeft = gutter + heroWidth + 24;
  const rackWidth = Math.max(280, window.innerWidth - gutter - rackLeft);
  const compareTop = window.innerHeight * .065 * reduce;
  const rackHeight = window.innerHeight - compareTop - 76 * reduce;

  compareShell.style.setProperty('--reduce', reduce.toFixed(3));
  compareShell.style.setProperty('--stack', '1');
  compareShell.style.setProperty('--commerce', commerce.toFixed(3));
  compareShell.style.setProperty('--apparel', apparel.toFixed(3));
  compareShell.style.setProperty('--gutter', `${gutter}px`);
  compareShell.style.setProperty('--hero-left', `${gutter}px`);
  compareShell.style.setProperty('--hero-width', `${heroWidth}px`);
  compareShell.style.setProperty('--hero-top', `${compareTop}px`);
  compareShell.style.setProperty('--hero-bottom', `${76 * reduce}px`);
  compareShell.style.setProperty('--rack-left', `${rackLeft}px`);
  compareShell.style.setProperty('--rack-width', `${rackWidth}px`);
  compareShell.style.setProperty('--rack-height', `${rackHeight}px`);
  compareShell.style.setProperty('--compare-top', `${compareTop}px`);
  compareShell.style.setProperty('--title-opacity', '1');
  compareShell.style.setProperty('--header-opacity', '0');
  layoutPackedCards(compareProofCards, progress, rackWidth, commerce);
  const shown = Math.min(5, 1 + compareProofCards.filter((_, index) => progress >= .12 + index * .15).length);
  compareCount.innerHTML = `<b>${String(shown).padStart(2, '0')}</b> / 05`;
}

const carouselShell = carouselStory.querySelector('.story-shell');
const carouselCards = [...carouselStory.querySelectorAll('.proof-card')];
const carouselCount = carouselStory.querySelector('.story-count');
const carouselFileInput = carouselStory.querySelector('#artwork-input');
const carouselButtons = [...carouselStory.querySelectorAll('.upload-button')];

function renderCarouselStory() {
  const maxScroll = Math.max(1, carouselStory.offsetHeight - window.innerHeight);
  const progress = clamp(-carouselStory.getBoundingClientRect().top / maxScroll);
  const reduce = ease(ramp(progress, .04, .22));
  const slide = Math.min(3, Math.floor(ramp(progress, .2, .72) * 4));
  const commerce = ease(ramp(progress, .79, .91));
  const apparel = ease(ramp(progress, .88, .99));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .68);
  const rackLeft = gutter + heroWidth + 16;
  const rackWidth = Math.max(280, window.innerWidth - gutter - rackLeft);
  const panelTop = window.innerHeight * .21 * reduce;
  const rackHeight = window.innerHeight - panelTop - 76 * reduce;

  carouselShell.style.setProperty('--reduce', reduce.toFixed(3));
  carouselShell.style.setProperty('--stack', '0');
  carouselShell.style.setProperty('--commerce', commerce.toFixed(3));
  carouselShell.style.setProperty('--apparel', apparel.toFixed(3));
  carouselShell.style.setProperty('--gutter', `${gutter}px`);
  carouselShell.style.setProperty('--hero-left', `${gutter}px`);
  carouselShell.style.setProperty('--hero-width', `${heroWidth}px`);
  carouselShell.style.setProperty('--hero-top', `${panelTop}px`);
  carouselShell.style.setProperty('--hero-bottom', `${76 * reduce}px`);
  carouselShell.style.setProperty('--rack-left', `${rackLeft}px`);
  carouselShell.style.setProperty('--rack-width', `${rackWidth}px`);
  carouselShell.style.setProperty('--rack-height', `${rackHeight}px`);
  carouselShell.style.setProperty('--rack-top', `${panelTop}px`);
  carouselShell.style.setProperty('--title-opacity', ease(ramp(progress, .2, .32)).toFixed(3));
  carouselShell.style.setProperty('--header-opacity', ease(ramp(progress, .21, .33)).toFixed(3));
  carouselCards.forEach((card, index) => {
    card.style.width = `${rackWidth}px`;
    card.style.transform = `translate3d(${(index - slide) * rackWidth}px,0,0)`;
    card.style.opacity = `${progress < .16 ? 0 : 1 - commerce}`;
    card.style.zIndex = `${index + 1}`;
  });
  const shown = Math.min(5, 1 + Math.floor(clamp(slide / 4) * 4.95));
  carouselCount.innerHTML = `<b>${String(shown).padStart(2, '0')}</b> / 05`;
}

function renderAllStories() { renderStory(); renderCompareStory(); renderCarouselStory(); }
window.addEventListener('scroll', renderAllStories, { passive: true });
window.addEventListener('resize', renderAllStories);
renderAllStories();

[quietButton, solidButton].forEach((button) => button.addEventListener('click', () => fileInput.click()));
fileInput.addEventListener('change', () => {
  const name = fileInput.files?.[0]?.name;
  if (name) [quietButton, solidButton].forEach((button) => { button.textContent = 'Artwork selected'; });
});
compareButtons.forEach((button) => button.addEventListener('click', () => compareFileInput.click()));
compareFileInput.addEventListener('change', () => {
  if (compareFileInput.files?.[0]) compareButtons.forEach((button) => { button.textContent = 'Artwork selected'; });
});
carouselButtons.forEach((button) => button.addEventListener('click', () => carouselFileInput.click()));
carouselFileInput.addEventListener('change', () => {
  if (carouselFileInput.files?.[0]) carouselButtons.forEach((button) => { button.textContent = 'Artwork selected'; });
});
