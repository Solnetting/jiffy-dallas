const asset = (file) => `./assets/figma/${file}`;

const proofs = [
  { image: 'tiger-proof-color.png', label: 'Color' },
  { image: 'tiger-proof-detail.png', label: 'Fine detail' },
  { image: 'tiger-proof-peel.png', label: 'Clean peel' },
  { image: 'tiger-proof-worn.png', label: 'Finished print' },
];

const products = [
  ['product-figma-1.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt (White)', '$2.59'],
  ['product-figma-2.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt (Black)', '$2.59'],
  ['product-figma-3.png', 'GILDAN · G185', 'Heavy Blend® Hoodie (Grey)', '$9.76'],
  ['product-figma-4.png', 'GILDAN · G185', 'Heavy Blend™ Crewneck (Black)', '$11.35'],
  ['product-figma-4.png', 'GILDAN · G185', 'Heavy Blend™ Crewneck (Black)', '$11.35'],
];

document.querySelector('#app').innerHTML = `
  <section class="jiffy-hero" aria-labelledby="jiffy-hero-title">
    <video class="jiffy-hero__image" autoplay muted loop playsinline aria-hidden="true">
      <source src="${asset('jiffy-hero-video.mp4')}?v=2" type="video/mp4" />
    </video>
    <div class="jiffy-hero__shade"></div>
    <header class="jiffy-hero__nav">
      <div class="jiffy-hero__brand">JIFFY <span class="jiffy-hero__location"><img src="${asset('jiffy-hero-pin-small.svg')}" alt="" />DALLAS-FORT WORTH</span></div>
      <nav class="jiffy-hero__links" aria-label="Main navigation"><a href="https://www.jiffy.com/transfers">Transfers</a><a href="https://www.jiffy.com/">Blanks</a><span class="jiffy-hero__coming-soon" tabindex="0" aria-disabled="true">Custom<span role="tooltip">Available soon</span></span><a class="jiffy-hero__sign-in" href="https://www.jiffy.com/account/login">Sign in</a></nav>
    </header>
    <div class="jiffy-hero__content">
      <p class="jiffy-hero__eyebrow"><span></span>Now delivering · Dallas-Fort Worth</p>
      <h1 id="jiffy-hero-title">Transfers and blank shirts.<br /><mark>Delivered in hours.</mark><br />Everyday.</h1>
      <p class="jiffy-hero__lede">Order this morning. Press this afternoon.</p>
      <form class="jiffy-hero__address" action="https://www.jiffy.com/" method="get">
        <label><img src="${asset('jiffy-hero-pin.svg')}" alt="" /><input type="text" name="address" placeholder="Enter your delivery address" aria-label="Delivery address" /></label>
        <button type="submit">Check delivery <img src="${asset('jiffy-hero-arrow.svg')}" alt="" /></button>
      </form>
      <p class="jiffy-hero__hours"><img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 10 PM · Printed and driven from Dallas</p>
    </div>
  </section>
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
          <h2>Start with your artwork</h2>
          <div class="transfer-paths">
          <a class="transfer-choice" href="https://www.jiffy.com/transfers">
            <img src="${asset('image50.png')}" alt="" />
            <span><strong>DTF Transfers by<br />size</strong><small>Upload a design and<br />choose the size.</small><em>From $0.06 / sq. in.</em></span><b>→</b>
          </a>
          <a class="transfer-choice" href="https://www.jiffy.com/jiffytransfers-DTFGANG001.html">
            <img src="${asset('image52.png')}" alt="" />
            <span><strong>Gang sheet- DTF<br />transfers</strong><small>Arrange multiple designs<br />on one sheet.</small><em>From $11.59 / foot</em></span><b>→</b>
          </a>
          </div>
          <nav class="specialty-links" aria-label="Specialty transfers"><a href="https://www.jiffy.com/transfers">Explore specialty transfers →</a><a href="https://www.jiffy.com/transfers">ProColor</a><a href="https://www.jiffy.com/transfers">Glitter</a><a href="https://www.jiffy.com/transfers">Glow-in-the-Dark</a><a href="https://www.jiffy.com/transfers">Reflective</a><a href="https://www.jiffy.com/transfers">Gold Foil</a></nav>
        </aside>

        <section class="apparel-rail" aria-labelledby="pair-title">
          <div class="rail-copy"><h2 id="pair-title">Pair with popular blanks</h2></div>
          <div class="rail-products">
            ${products.map(([image, brand, name, price], index) => `
              <a class="rail-product" href="https://www.jiffy.com/">
                <div class="rail-image"><img src="${asset(image)}" alt="${name}" /></div>
                <small>${brand}</small><strong>${name}</strong>
                <b>from ${price}</b><span class="stars"><img src="${asset(`rating-figma-${Math.min(index + 1, 5)}.svg`)}" alt="4 out of 5 stars" /><i>(2,500)</i></span>
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
  <div class="compare-hero-title"><h2>Your design.<br />Our quality.</h2></div>
`);
document.querySelector('.static-quality-compare').replaceWith(compareStory);
const carouselStory = story.cloneNode(true);
carouselStory.classList.add('quality-story--carousel');
carouselStory.setAttribute('aria-label', 'Carousel Jiffy Local DTF quality story');
compareStory.after(carouselStory);

const blanksSection = document.createElement('section');
blanksSection.className = 'blanks-story';
blanksSection.setAttribute('aria-label', 'Choose blank apparel');
blanksSection.innerHTML = `
  <div class="blanks-sticky">
    <div class="blanks-shell">
      <header class="blanks-header" aria-hidden="true">
        <div class="local-mark">Jiffy Local <span></span><small>Dallas–Fort Worth</small></div>
        <div class="story-words">Ideas <b>Local</b> Wear <i>Further</i><em></em></div>
      </header>
      <article class="blanks-hero-art" aria-label="Blank apparel for a local tomorrow">
        <img src="${asset('blanks-editorial-hero.png')}" alt="Person wearing a blank shirt" />
        <div class="blanks-art-copy blanks-art-copy--top">Same<br />good<br />ideas<br />a brighter<br />DFW <span></span></div>
        <div class="blanks-art-copy blanks-art-copy--bottom">Blanks<br />for a more<br />local tomorrow <span></span></div>
      </article>
      <main class="blanks-content">
        <div class="blanks-content-copy">
          <h2>Choose the blank<br />that fits the idea<span>.</span></h2>
          <p>Compare materials, weight, fit, and color before you choose.</p>
        </div>
        <div class="blanks-products">
          ${[
            ['blanks-product-1.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt (White)', '$2.59'],
            ['blanks-product-2.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt (Black)', '$2.59'],
            ['blanks-product-3.png', 'GILDAN · G185', 'Heavy Blend® Hoodie (Grey)', '$9.76'],
            ['blanks-product-4.png', 'GILDAN · G185', 'Heavy Blend™ Crewneck (Black)', '$11.35'],
          ].map(([image, brand, name, price]) => `
            <a href="https://www.jiffy.com/" class="blanks-product">
              <img src="${asset(image)}" alt="${name}" />
              <small>${brand}</small><strong>${name}</strong><b>from ${price}</b>
            </a>`).join('')}
        </div>
        <a class="blanks-cta" href="https://www.jiffy.com/">Browse blank apparel →</a>
      </main>
    </div>
  </div>`;
carouselStory.after(blanksSection);

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
const navigationColor = (progress) => {
  const tone = ease(ramp(progress, .06, .18));
  return `rgb(${Math.round(255 - 239 * tone)}, ${Math.round(255 - 215 * tone)}, ${Math.round(255 - 171 * tone)})`;
};

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

let storyCompleted = false;
let compareCompleted = false;
let carouselCompleted = false;

function renderStory() {
  const maxScroll = Math.max(1, story.offsetHeight - window.innerHeight);
  const rawProgress = clamp(-story.getBoundingClientRect().top / maxScroll);
  if (rawProgress >= .995) storyCompleted = true;
  const progress = storyCompleted ? 1 : rawProgress;
  const reduce = ease(ramp(progress, .04, .22));
  const proofExit = ease(ramp(progress, .66, .73));
  const commerce = ease(ramp(progress, .70, .78));
  const apparel = ease(ramp(progress, .75, .83));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .70);
  const uploadStart = window.innerWidth * .045 + quietButton.offsetWidth * .5;
  const finalHeroWidth = (window.innerWidth - window.innerWidth * .09) * .30;
  const uploadLeft = uploadStart + (finalHeroWidth * .5 - uploadStart) * reduce;
  const rackLeft = gutter + heroWidth + 24;
  const rackWidth = Math.max(280, window.innerWidth - gutter - rackLeft);
  const panelTop = window.innerHeight * .21 * reduce;
  const rackHeight = window.innerHeight - panelTop - 76 * reduce;

  shell.style.setProperty('--reduce', reduce.toFixed(3));
  shell.style.setProperty('--stack', '1');
  shell.style.setProperty('--commerce', commerce.toFixed(3));
  shell.style.setProperty('--apparel', apparel.toFixed(3));
  shell.style.setProperty('--proof-exit', proofExit.toFixed(3));
  shell.style.setProperty('--gutter', `${gutter}px`);
  shell.style.setProperty('--hero-left', `${gutter}px`);
  shell.style.setProperty('--hero-width', `${heroWidth}px`);
  shell.style.setProperty('--hero-top', `${panelTop}px`);
  shell.style.setProperty('--hero-bottom', `${76 * reduce}px`);
  shell.style.setProperty('--upload-target-y', 'calc(100svh - 148px)');
  shell.style.setProperty('--upload-left', `${uploadLeft}px`);
  shell.style.setProperty('--rack-left', `${rackLeft}px`);
  shell.style.setProperty('--rack-width', `${rackWidth}px`);
  shell.style.setProperty('--rack-height', `${rackHeight}px`);
  shell.style.setProperty('--rack-top', `${panelTop}px`);
  shell.style.setProperty('--title-opacity', ease(ramp(progress, .2, .32)).toFixed(3));
  shell.style.setProperty('--header-opacity', '1');
  shell.style.setProperty('--story-header-color', navigationColor(progress));
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
  const rawProgress = clamp(-compareStory.getBoundingClientRect().top / maxScroll);
  if (rawProgress >= .995) compareCompleted = true;
  const progress = compareCompleted ? 1 : rawProgress;
  const reduce = ease(ramp(progress, .04, .22));
  const proofExit = ease(ramp(progress, .66, .73));
  const commerce = ease(ramp(progress, .70, .78));
  const apparel = ease(ramp(progress, .75, .83));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .70);
  const uploadStart = window.innerWidth * .045 + compareButtons[0].offsetWidth * .5;
  const finalHeroWidth = (window.innerWidth - window.innerWidth * .09) * .30;
  const uploadLeft = uploadStart + (finalHeroWidth * .5 - uploadStart) * reduce;
  const rackLeft = gutter + heroWidth + 24;
  const rackWidth = Math.max(280, window.innerWidth - gutter - rackLeft);
  const compareTop = window.innerHeight * .055 * reduce;
  const rackHeight = window.innerHeight - compareTop - 76 * reduce;

  compareShell.style.setProperty('--reduce', reduce.toFixed(3));
  compareShell.style.setProperty('--stack', '1');
  compareShell.style.setProperty('--commerce', commerce.toFixed(3));
  compareShell.style.setProperty('--apparel', apparel.toFixed(3));
  compareShell.style.setProperty('--proof-exit', proofExit.toFixed(3));
  compareShell.style.setProperty('--gutter', `${gutter}px`);
  compareShell.style.setProperty('--hero-left', `${gutter}px`);
  compareShell.style.setProperty('--hero-width', `${heroWidth}px`);
  compareShell.style.setProperty('--hero-top', `${compareTop}px`);
  compareShell.style.setProperty('--hero-bottom', `${76 * reduce}px`);
  compareShell.style.setProperty('--upload-target-y', 'calc(100svh - 148px)');
  compareShell.style.setProperty('--upload-left', `${uploadLeft}px`);
  compareShell.style.setProperty('--rack-left', `${rackLeft}px`);
  compareShell.style.setProperty('--rack-width', `${rackWidth}px`);
  compareShell.style.setProperty('--rack-height', `${rackHeight}px`);
  compareShell.style.setProperty('--compare-top', `${compareTop}px`);
  compareShell.style.setProperty('--title-opacity', '1');
  compareShell.style.setProperty('--header-opacity', '1');
  compareShell.style.setProperty('--story-header-color', navigationColor(progress));
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
  const rawProgress = clamp(-carouselStory.getBoundingClientRect().top / maxScroll);
  if (rawProgress >= .995) carouselCompleted = true;
  const progress = carouselCompleted ? 1 : rawProgress;
  const reduce = ease(ramp(progress, .04, .22));
  const carouselPhase = ramp(progress, .2, .72) * 4;
  const slide = Math.min(3, Math.floor(carouselPhase));
  const betweenSlides = slide === 3 ? 0 : ease(ramp(carouselPhase - slide, .72, 1));
  const proofExit = ease(ramp(progress, .66, .73));
  const commerce = ease(ramp(progress, .70, .78));
  const apparel = ease(ramp(progress, .75, .83));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .70);
  const uploadStart = window.innerWidth * .045 + carouselButtons[0].offsetWidth * .5;
  const finalHeroWidth = (window.innerWidth - window.innerWidth * .09) * .30;
  const uploadLeft = uploadStart + (finalHeroWidth * .5 - uploadStart) * reduce;
  const rackLeft = gutter + heroWidth + 16;
  const rackWidth = Math.max(280, window.innerWidth - gutter - rackLeft);
  const panelTop = window.innerHeight * .21 * reduce;
  const rackHeight = window.innerHeight - panelTop - 76 * reduce;

  carouselShell.style.setProperty('--reduce', reduce.toFixed(3));
  carouselShell.style.setProperty('--stack', '0');
  carouselShell.style.setProperty('--commerce', commerce.toFixed(3));
  carouselShell.style.setProperty('--apparel', apparel.toFixed(3));
  carouselShell.style.setProperty('--proof-exit', proofExit.toFixed(3));
  carouselShell.style.setProperty('--gutter', `${gutter}px`);
  carouselShell.style.setProperty('--hero-left', `${gutter}px`);
  carouselShell.style.setProperty('--hero-width', `${heroWidth}px`);
  carouselShell.style.setProperty('--hero-top', `${panelTop}px`);
  carouselShell.style.setProperty('--hero-bottom', `${76 * reduce}px`);
  carouselShell.style.setProperty('--upload-target-y', 'calc(100svh - 148px)');
  carouselShell.style.setProperty('--upload-left', `${uploadLeft}px`);
  carouselShell.style.setProperty('--rack-left', `${rackLeft}px`);
  carouselShell.style.setProperty('--rack-width', `${rackWidth}px`);
  carouselShell.style.setProperty('--rack-height', `${rackHeight}px`);
  carouselShell.style.setProperty('--rack-top', `${panelTop}px`);
  carouselShell.style.setProperty('--title-opacity', ease(ramp(progress, .2, .32)).toFixed(3));
  carouselShell.style.setProperty('--header-opacity', '1');
  carouselShell.style.setProperty('--story-header-color', navigationColor(progress));
  carouselCards.forEach((card, index) => {
    card.style.width = `${rackWidth}px`;
    card.style.transform = `translate3d(${(index - slide - betweenSlides) * rackWidth}px,0,0)`;
    card.style.opacity = `${progress < .16 ? 0 : 1 - commerce}`;
    card.style.zIndex = `${index + 1}`;
  });
  const shown = slide === 3 ? 5 : Math.min(5, 1 + slide + (betweenSlides > .5 ? 1 : 0));
  carouselCount.innerHTML = `<b>${String(shown).padStart(2, '0')}</b> / 05`;
}

const blanksShell = blanksSection.querySelector('.blanks-shell');
let blanksCompleted = false;
function renderBlanksStory() {
  const maxScroll = Math.max(1, blanksSection.offsetHeight - window.innerHeight);
  const rawProgress = clamp(-blanksSection.getBoundingClientRect().top / maxScroll);
  if (rawProgress >= .995) blanksCompleted = true;
  const progress = blanksCompleted ? 1 : rawProgress;
  const reduce = ease(ramp(progress, .05, .32));
  const reveal = ease(ramp(progress, .25, .43));
  const gutter = window.innerWidth * .045 * reduce;
  const heroWidth = (window.innerWidth - gutter * 2) * (1 - reduce * .70);
  const panelTop = window.innerHeight * .15 * reduce;
  blanksShell.style.setProperty('--reduce', reduce.toFixed(3));
  blanksShell.style.setProperty('--reveal', reveal.toFixed(3));
  blanksShell.style.setProperty('--gutter', `${gutter}px`);
  blanksShell.style.setProperty('--hero-width', `${heroWidth}px`);
  blanksShell.style.setProperty('--hero-top', `${panelTop}px`);
  blanksShell.style.setProperty('--hero-bottom', `${Math.max(46, 72 * reduce)}px`);
  blanksShell.style.setProperty('--header-color', navigationColor(progress));
}

function renderAllStories() { renderStory(); renderCompareStory(); renderCarouselStory(); renderBlanksStory(); }
window.addEventListener('scroll', renderAllStories, { passive: true });
window.addEventListener('resize', renderAllStories);
renderAllStories();

[quietButton, solidButton].filter(Boolean).forEach((button) => button.addEventListener('click', () => fileInput.click()));
fileInput.addEventListener('change', () => {
  const name = fileInput.files?.[0]?.name;
  if (name) [quietButton, solidButton].filter(Boolean).forEach((button) => { button.textContent = 'Artwork selected'; });
});
compareButtons.forEach((button) => button.addEventListener('click', () => compareFileInput.click()));
compareFileInput.addEventListener('change', () => {
  if (compareFileInput.files?.[0]) compareButtons.forEach((button) => { button.textContent = 'Artwork selected'; });
});
carouselButtons.forEach((button) => button.addEventListener('click', () => carouselFileInput.click()));
carouselFileInput.addEventListener('change', () => {
  if (carouselFileInput.files?.[0]) carouselButtons.forEach((button) => { button.textContent = 'Artwork selected'; });
});
