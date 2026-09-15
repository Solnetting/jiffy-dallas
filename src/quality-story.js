const asset = (file) => `${import.meta.env.BASE_URL}figma/${file}`;

document.querySelector('#app').innerHTML = `
  <section class="jiffy-hero" aria-labelledby="jiffy-hero-title">
    <video class="jiffy-hero__image" autoplay muted loop playsinline aria-hidden="true">
      <source src="${asset('jiffy-hero-video.mp4')}?v=3" type="video/mp4" />
    </video>
    <div class="jiffy-hero__shade"></div>
    <header class="jiffy-hero__nav">
      <div class="jiffy-hero__brand"><img class="jiffy-hero__logo" src="${asset('jiffy-local-logo.svg')}" alt="Jiffy" /><span class="jiffy-hero__location">DALLAS-FORT WORTH</span></div>
      <nav class="jiffy-hero__links" aria-label="Main navigation"><a href="#transfers-section" data-nav-scroll="transfers">Transfers</a><a href="#blanks-section" data-nav-scroll="blanks">Blanks</a><span class="jiffy-hero__coming-soon" tabindex="0" aria-disabled="true">Custom<span role="tooltip">Available soon</span></span></nav>
    </header>
    <div class="jiffy-hero__content">
      <p class="jiffy-hero__eyebrow"><span></span>Now delivering · Dallas-Fort Worth</p>
      <h1 id="jiffy-hero-title">Transfers and blank shirts.<br /><mark>Delivered in hours.</mark><br />Everyday.</h1>
      <p class="jiffy-hero__lede">Order this morning. Press this afternoon.</p>
      <form class="jiffy-hero__address" action="https://www.jiffy.com/" method="get">
        <div class="jiffy-hero__address-panel">
          <label><img src="${asset('address-checker-panel-location.svg')}" alt="" /><input type="text" name="address" placeholder="Enter your delivery address" aria-label="Delivery address" /></label>
          <button type="submit"><span>Check your delivery time</span></button>
        </div>
        <div class="jiffy-hero__delivery-status" hidden aria-live="polite">
          <span class="jiffy-hero__delivery-address"></span>
          <span class="jiffy-hero__delivery-divider" aria-hidden="true"></span>
          <span class="jiffy-hero__delivery-window"><small>Today, 2 – 4 PM</small><strong class="jiffy-hero__delivery-countdown">--:--:--</strong></span>
          <button class="jiffy-hero__delivery-clear" type="button" aria-label="Clear delivery address">×</button>
        </div>
      </form>
      <p class="jiffy-hero__hours"><img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 10 PM · Printed and driven from Dallas</p>
      <div class="jiffy-hero__delivery-outcome" hidden aria-live="polite"></div>
    </div>
  </section>
`;

const blanksSection = document.createElement('section');
blanksSection.className = 'blanks-story blanks-story--static blanks-story--interactive';
blanksSection.id = 'blanks-section';
blanksSection.setAttribute('aria-label', 'Choose blank apparel');
blanksSection.innerHTML = `
  <div class="blanks-sticky">
    <div class="blanks-shell">
      <header class="blanks-header" aria-hidden="true">
        <div class="local-mark">Jiffy Local <span></span><small>Dallas–Fort Worth</small></div>
        <div class="story-words">Ideas <b>Local</b> Wear <i>Further</i><em></em></div>
      </header>
      <div class="blanks-hero-title">
        <h2>Choose the blank<br />that fits the idea<span>.</span></h2>
      </div>
      <article class="blanks-hero-art" aria-label="Blank apparel for a local tomorrow">
        <img src="${asset('blanks-editorial-hero.png')}" alt="Person wearing a blank shirt" />
        <figcaption class="blanks-hero-copy" aria-hidden="true">
          <span>Same<br />good<br />ideas<br />a brighter<br />DFW</span>
          <i aria-hidden="true"></i>
          <b>Blanks<br />for a more<br />local tomorrow</b>
        </figcaption>
      </article>
      <div class="blanks-carousel-group">
      <div class="blanks-products" aria-label="Popular blank apparel">
        ${[
          ['apparel-v2-product-1.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt', '$2.59'],
          ['apparel-v2-product-2.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt', '$2.59'],
          ['apparel-v2-product-3.png', 'GILDAN · G185', 'Heavy Blend® Hoodie', '$9.76'],
          ['apparel-v2-product-4.png', 'GILDAN · G185', 'Heavy Blend™ Crewneck', '$11.35'],
        ].map(([image, brand, name, price]) => `
          <a href="https://www.jiffy.com/" class="blanks-product">
            <img src="${asset(image)}" alt="${name}" />
            <small>${brand}</small><strong>${name}</strong><b>from ${price}</b>
            <span class="blanks-product__rating">★★★★<i>★</i> <em>(2,500)</em></span>
          </a>`).join('')}
      </div>
      <a class="blanks-cta" href="https://www.jiffy.com/">Browse blank apparel</a>
      </div>
    </div>
  </div>`;
const originalHero = document.querySelector('.jiffy-hero');
const localPromiseStrip = document.createElement('section');
localPromiseStrip.className = 'local-promise-strip';
localPromiseStrip.setAttribute('aria-label', 'Jiffy Local advantages');
localPromiseStrip.innerHTML = `
  <div class="local-promise-strip__inner">
    <article class="local-promise-strip__item local-promise-strip__item--delivery" data-promise-item>
      <div class="local-promise-strip__copy">
        <p>Delivery</p>
        <h2><mark class="local-promise-strip__headline-major">FREE</mark><br /><b class="local-promise-strip__headline-minor">DELIVERY.</b></h2>
        <span>Get your order delivered in the Dallas–Fort Worth area. On us.</span>
      </div>
    </article>
    <article class="local-promise-strip__item local-promise-strip__item--apparel" data-promise-item>
      <div class="local-promise-strip__shirts" aria-hidden="true">
        <img src="${asset('product-figma-2.png')}" alt="" />
        <img src="${asset('product-figma-3.png')}" alt="" />
        <img src="${asset('product-figma-4.png')}" alt="" />
      </div>
      <div class="local-promise-strip__copy">
        <p>Blanks</p>
        <h2>20+ shirt styles<br />from <mark>$2.41.</mark></h2>
        <span>Premium blanks from leading brands, ready for your design.</span>
      </div>
    </article>
    <article class="local-promise-strip__item local-promise-strip__item--printing" data-promise-item>
      <img class="local-promise-strip__print-image" src="${asset('s1v3-transfer-film.png')}" alt="" aria-hidden="true" />
      <div class="local-promise-strip__copy">
        <p>DTF</p>
        <h2><b class="local-promise-strip__headline-major">$0.02</b><br /><b class="local-promise-strip__headline-minor">PER LINE.</b></h2>
        <span>High-quality DTF printing for any design, big or small.</span>
      </div>
    </article>
  </div>`;
originalHero?.after(localPromiseStrip);
const promiseObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      localPromiseStrip.classList.add('is-revealed');
      promiseObserver.unobserve(localPromiseStrip);
    }
  });
}, { threshold:.35 });
promiseObserver.observe(localPromiseStrip);
// S1 V3 is the only Section 1 quality experience kept in the build.
const s1v3Cards = [
  { image: 'tiger-transfer-hero.png', title: 'Jiffy vs Others', subtitle: 'Sharper, denser, cleaner transfer results.', description: 'Compare fine edges, solid coverage, and a cleaner finish against the competing transfer.' },
  { image: 'tiger-proof-detail.png', title: 'AI process', subtitle: 'Artwork analyzed and prepared for print.', description: 'Your artwork is checked and prepared before print so detail and color stay true to the design.' },
  { image: 'tiger-proof-peel.png', title: 'Hot peel', subtitle: 'Clean release immediately after pressing.', description: 'A clean release immediately after pressing means less waiting between the press and the finished garment.' },
  { image: 'tiger-proof-color.png', title: 'Color accuracy', subtitle: 'True color with fine detail, up close.', description: 'Richer detail and truer color set a higher standard in every transfer.' },
];

const s1v3 = document.createElement('section');
s1v3.className = 's1v3-story';
s1v3.id = 'transfers-section';
s1v3.setAttribute('aria-label', 'DTF quality carousel with artwork upload');
s1v3.innerHTML = `
  <div class="s1v3-sticky">
    <div class="s1v3-canvas">
      <header class="s1v3-nav">
        <div class="s1v3-local-mark">Jiffy Local <span></span><small>Dallas–Fort Worth</small></div>
      </header>
      <div class="s1v3-inner">
    <div class="s1v3-main">
      <figure class="s1v3-hero">
        <img src="${asset('tiger-transfer-hero.png')}" alt="A colorful DTF transfer film held by two hands" />
        <span class="s1v3-hero-shade" aria-hidden="true"></span>
        <figcaption class="s1v3-hero-copy">
          <p class="s1v3-eyebrow">DTF PROOF OF QUALITY</p>
          <h1>Your design.<br />Our quality<span>.</span></h1>
          <span>Richer detail. Truer color.<br />A higher standard in every transfer.</span>
        </figcaption>
      </figure>

      <div class="s1v3-upload" role="group" aria-label="Upload artwork. Drag and drop a file or select one.">
        <div class="s1v3-upload-header">
          <strong class="s1v3-upload-drag">Drag your artwork</strong>
          <small class="s1v3-upload-subtitle">Drop a file anywhere in this panel</small>
        </div>
        <div class="s1v3-upload-icon"><img src="${asset('cloud-upload.svg')}" alt="" /></div>
        <small class="s1v3-upload-meta">PNG, JPG, or PDF&nbsp; · &nbsp;up to 50 MB</small>
        <div class="s1v3-upload-actions">
          <span class="s1v3-upload-or" aria-hidden="true"><i></i><b>or</b><i></i></span>
          <button class="s1v3-upload-files" type="button">Upload from your files <b aria-hidden="true">↗</b></button>
          <div class="s1v3-upload-tertiary" aria-label="More transfer options">
            <button type="button">DTF Transfer by size</button>
            <button class="s1v3-theme-toggle" type="button" data-s1v3-theme-toggle aria-pressed="false" aria-label="Gang Sheet transfer. Switch to light mode">
              <span>Gang Sheet transfer</span>
            </button>
          </div>
        </div>
      </div>
      <input class="s1v3-file-input" type="file" accept="image/png,image/jpeg,application/pdf" hidden />

      <div class="s1v3-stage" aria-live="polite">
        <div class="s1v3-frames">
          ${s1v3Cards.map(({ image, title, subtitle }, index) => `
            <figure class="s1v3-card${index === 0 ? ' is-active' : ''}" data-s1v3-card="${index}">
              <img src="${asset(image)}" alt="${title} proof for a DTF transfer" />
              <figcaption><strong>${title}</strong><span>${subtitle}</span></figcaption>
            </figure>
          `).join('')}
        </div>
        <nav class="s1v3-index" aria-label="Explore quality proof">
          ${s1v3Cards.map(({ title, subtitle, description }, index) => `
            <button type="button" class="${index === 0 ? 'is-active' : ''}" data-s1v3-step="${index}" aria-current="${index === 0 ? 'step' : 'false'}" aria-expanded="${index === 0 ? 'true' : 'false'}">
              <span class="s1v3-index__label">
                <i aria-hidden="true"></i>
                <span class="s1v3-index__copy">
                  <strong>${title}</strong>
                  <small>${subtitle}</small>
                </span>
              </span>
              <p class="s1v3-index__description">${description}</p>
            </button>
          `).join('')}
        </nav>
      </div>
    </div>
      </div>
    </div>
  </div>
`;
localPromiseStrip.after(s1v3);

// This panel follows the promotional banner, but is reserved for addresses
// that qualify for Jiffy Local. Its schedule mirrors the confirmed delivery
// state in the persistent address bar.
const deliveryProof = document.createElement('section');
deliveryProof.className = 'delivery-proof';
deliveryProof.hidden = true;
deliveryProof.setAttribute('aria-labelledby', 'delivery-proof-title');
deliveryProof.innerHTML = `
  <div class="delivery-proof__inner">
    <header class="delivery-proof__header">
      <h2 id="delivery-proof-title">Today</h2>
      <div class="delivery-proof__header-copy">
        <div><strong>Delivery windows &amp; cut-offs</strong><b>Live</b></div>
        <p>Order before the cut-off to lock in your delivery window.</p>
      </div>
    </header>
    <article class="delivery-proof__panel" aria-label="Today's Jiffy Local delivery schedule">
      <div class="delivery-proof__map">
        <img src="${asset('delivery-proof-map.png')}" alt="Map of the Dallas–Fort Worth local delivery route" />
        <span class="delivery-proof__route-lock">Route lock</span>
        <div class="delivery-proof__map-confirmation">
          <div><small>From</small><strong>5 AM</strong></div>
          <p><b>Route Available</b><span>We can deliver to your area in this window.</span></p>
          <div><small>To</small><strong>10 PM</strong></div>
        </div>
      </div>
      <section class="delivery-proof__current" aria-label="Current delivery window">
        <h3>Current</h3>
        <div class="delivery-proof__current-window">
          <div><strong data-delivery-proof-countdown>--:--:--</strong><small>Remaining</small></div>
          <img src="${asset('delivery-proof-divider.svg')}" alt="" />
          <div><small>Cut-off 10 AM</small><b>11 AM–1 PM Window</b></div>
        </div>
      </section>
      <div class="delivery-proof__timeline" aria-label="Later delivery windows">
        <span class="delivery-proof__timeline-divider" aria-hidden="true"><img src="${asset('delivery-proof-timeline-divider.svg')}" alt="" /></span>
        <section class="delivery-proof__next">
          <h3>Next</h3>
          <div class="delivery-proof__slots">
            ${[
              ['Cut-off 11 AM', '12-2 PM'],
              ['Cut-off 12 PM', '1-3 PM'],
              ['Cut-off 1 PM', '2-4 PM'],
              ['Cut-off 2 PM', '3-5 PM'],
              ['Cut-off 3 PM', '4-6 PM'],
              ['Cut-off 4 PM', '5-7 PM'],
            ].map(([cutoff, window]) => `<div><small>${cutoff}</small><strong>${window}</strong></div>`).join('')}
          </div>
        </section>
      </div>
    </article>
  </div>`;
localPromiseStrip.after(deliveryProof);

const setupS1V3 = (section) => {
  const cards = [...section.querySelectorAll('.s1v3-card')];
  const indexItems = [...section.querySelectorAll('[data-s1v3-step]')];
  const fileInput = section.querySelector('.s1v3-file-input');
  const upload = section.querySelector('.s1v3-upload');
  const themeToggle = section.querySelector('[data-s1v3-theme-toggle]');
  let activeIndex = 0;
  let reveal = 0;
  let renderToken = 0;
  let copyTimer;

  const render = (direction = 0, immediate = false) => {
    renderToken += 1;
    const token = renderToken;
    cards.forEach((card, index) => {
      card.classList.remove('is-active', 'is-next', 'is-entering-right', 'is-entering-left', 'is-exiting-left', 'is-exiting-right', 'is-settled', 'is-copy-ready');
      if (index === activeIndex) {
        card.classList.add('is-active');
        if (immediate) card.classList.add('is-settled');
        else if (direction) card.classList.add(direction > 0 ? 'is-entering-right' : 'is-entering-left');
      } else if (!immediate && direction && index === (activeIndex - direction + cards.length) % cards.length) {
        card.classList.add(direction > 0 ? 'is-exiting-left' : 'is-exiting-right');
      }
    });
    indexItems.forEach((item, index) => {
      const active = index === activeIndex;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-current', active ? 'step' : 'false');
      item.setAttribute('aria-expanded', active ? String(!item.classList.contains('is-collapsed')) : 'false');
    });
    window.clearTimeout(copyTimer);
    if (immediate) cards[activeIndex]?.classList.add('is-copy-ready');
    else if (section.classList.contains('is-revealed')) copyTimer = window.setTimeout(() => cards[activeIndex]?.classList.add('is-copy-ready'), 280);
    if (!immediate && direction) {
      void cards[activeIndex]?.offsetWidth;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (token === renderToken) section.querySelector('.s1v3-card.is-active')?.classList.add('is-settled');
      }));
    }
  };

  indexItems.forEach((item) => item.addEventListener('click', () => {
    const target = Number(item.dataset.s1v3Step);
    if (target === activeIndex) {
      const collapsed = item.classList.toggle('is-collapsed');
      item.setAttribute('aria-expanded', String(!collapsed));
      return;
    }
    const direction = target > activeIndex ? 1 : -1;
    indexItems.forEach((indexItem) => indexItem.classList.remove('is-collapsed'));
    activeIndex = target;
    render(direction);
  }));
  themeToggle.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const lightMode = section.classList.toggle('is-light-mode');
    themeToggle.setAttribute('aria-pressed', String(lightMode));
    themeToggle.setAttribute('aria-label', `Gang Sheet transfer. Switch to ${lightMode ? 'dark' : 'light'} mode`);
  });
  upload.querySelector('.s1v3-upload-files').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    if (fileInput.files?.[0]) upload.querySelector('.s1v3-upload-files').textContent = 'Artwork selected';
  });
  upload.addEventListener('dragover', (event) => {
    event.preventDefault();
    upload.classList.add('is-dragging');
  });
  upload.addEventListener('dragleave', () => upload.classList.remove('is-dragging'));
  upload.addEventListener('drop', (event) => {
    event.preventDefault();
    upload.classList.remove('is-dragging');
    if (event.dataTransfer.files?.[0]) upload.querySelector('.s1v3-upload-files').textContent = 'Artwork selected';
  });
  const renderScroll = () => {
    const bounds = section.getBoundingClientRect();
    const maxScroll = Math.max(1, section.offsetHeight - innerHeight);
    const progress = Math.min(1, Math.max(0, -bounds.top / maxScroll));
    reveal = progress < .24 ? Math.min(1, Math.max(0, (progress - .03) / .21)) : 1;
    reveal = reveal * reveal * (3 - 2 * reveal);
    const inView = bounds.top < innerHeight && bounds.bottom > 0;
    section.style.setProperty('--s1v3-reveal', reveal.toFixed(3));
    section.classList.toggle('is-revealed', reveal > .72);
    section.classList.toggle('is-upload-mode', reveal > .58);
    section.classList.toggle('is-carousel-ready', reveal > .98);
    section.classList.toggle('is-in-view', inView);
  };
  window.addEventListener('scroll', renderScroll, { passive: true });
  window.addEventListener('resize', renderScroll);
  cards[0]?.classList.add('is-copy-ready');
  render(0, true);
  cards[0]?.classList.add('is-copy-ready');
  renderScroll();
};
setupS1V3(s1v3);

// Pairing bridge: the generated scene is the full-width visual, while the
// headline and supporting copy remain live DOM over its open left side.
const pairingExploration = document.createElement('section');
pairingExploration.className = 'pairing-exploration';
pairingExploration.setAttribute('aria-label', 'Transfers and blank apparel delivered together');
pairingExploration.innerHTML = `
  <div class="pairing-exploration__inner">
    <div class="pairing-exploration__copy">
      <h2><span class="pairing-exploration__line">PAIR IT UP<span>.</span></span><br /><span class="pairing-exploration__line">ONE DELIVERY<span>.</span></span></h2>
      <p><span>Transfers and blanks, delivered together.</span><br /><span>Delivered in hours, from the same local source.</span></p>
    </div>
    <figure class="pairing-exploration__package" aria-label="Jiffy DTF delivery scene">
      <img src="${asset('pairing-bridge-generated.png')}" alt="Jiffy DTF box with blank apparel and loose transfers." />
    </figure>
  </div>`;
s1v3.after(pairingExploration);
pairingExploration.after(blanksSection);
const pairingObserver = new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  pairingExploration.classList.add('is-visible');
  observer.disconnect();
}, { threshold: .2 });
pairingObserver.observe(pairingExploration);

const apparelV2 = document.createElement('section');
apparelV2.className = 'apparel-v2';
apparelV2.setAttribute('aria-labelledby', 'apparel-v2-title');
apparelV2.innerHTML = `
  <img class="apparel-v2__background" src="${asset('apparel-v2-background.png')}" alt="" />
  <div class="apparel-v2__shade"></div>
  <div class="apparel-v2__inner">
    <div class="apparel-v2__brand">Jiffy Local<span></span><small>Dallas–Fort Worth</small></div>
    <div class="apparel-v2__copy"><h2 id="apparel-v2-title">Choose the blank<br />that fits the idea<span>.</span></h2><p>Compare materials, weight, fit, and color before you choose.</p></div>
    <div class="apparel-v2__products" aria-label="Popular blanks">
      ${[
        ['apparel-v2-product-1.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt', '$2.59'],
        ['apparel-v2-product-2.png', 'GILDAN · G800', 'Heavy Cotton™ T-Shirt', '$2.59'],
        ['apparel-v2-product-3.png', 'GILDAN · G185', 'Heavy Blend® Hoodie', '$9.76'],
        ['apparel-v2-product-4.png', 'GILDAN · G185', 'Heavy Blend™ Crewneck', '$11.35'],
      ].map(([image, brand, name, price]) => `<a class="apparel-v2__product" href="https://www.jiffy.com/"><img src="${asset(image)}" alt="${name}" /><small>${brand}</small><strong>${name}</strong><b>from ${price}</b><span>★★★★<i>★</i> <em>(2,500)</em></span></a>`).join('')}
    </div>
    <button class="apparel-v2__next" type="button" aria-label="Show more popular blanks"><span aria-hidden="true">→</span></button>
  </div>`;
blanksSection.after(apparelV2);

// Apparel V3 keeps all 20 cards in one rail. Product names are based on the
// documented top blank sellers; price treatment remains static until it is
// connected to the product catalog.
const apparelV3Items = [
  ['apparel-v2-product-1.png', 'tees', 'GILDAN · G500', 'Heavy Cotton™ T-Shirt', '$3.49', '$2.59', ['White']],
  ['apparel-v2-product-2.png', 'tees', 'GILDAN · G500', 'Heavy Cotton™ T-Shirt', '$3.49', '$2.59', ['Black']],
  ['blanks-product-1.png', 'tees', 'GILDAN · G640', 'Softstyle® T-Shirt', '$3.29', '$2.49', ['White']],
  ['product-figma-1.png', 'tees', 'GILDAN · G640', 'Softstyle® T-Shirt', '$3.29', '$2.49', ['White']],
  ['blanks-product-3.png', 'tees', 'COMFORT COLORS · C1717', 'Heavyweight RS T-Shirt', '$8.99', '$6.89', ['White']],
  ['product-figma-2.png', 'tees', 'COMFORT COLORS · C1717', 'Heavyweight RS T-Shirt', '$8.99', '$6.89', ['White']],
  ['apparel-v2-product-5.png', 'tees', 'GILDAN · G300', 'Light Cotton T-Shirt', '$2.59', '$1.89', ['Navy']],
  ['blanks-product-2.png', 'tees', 'GILDAN · G300', 'Light Cotton T-Shirt', '$2.59', '$1.89', ['White']],
  ['apparel-v2-product-4.png', 'fleece', 'GILDAN · G180', 'Heavy Blend 50/50 Fleece Crew', '$9.49', '$7.31', ['Grey']],
  ['apparel-v2-product-7.png', 'fleece', 'GILDAN · G180', 'Heavy Blend 50/50 Fleece Crew', '$9.49', '$7.31', ['Grey']],
  ['apparel-v2-product-2.png', 'tees', 'GILDAN · G800', 'Unisex 50/50 T-Shirt', '$3.29', '$2.49', ['Black']],
  ['product-figma-3.png', 'tees', 'GILDAN · G800', 'Unisex 50/50 T-Shirt', '$3.29', '$2.49', ['White']],
  ['apparel-v2-product-1.png', 'tees', 'GILDAN · G500B', 'Youth Heavy Cotton T-Shirt', '$3.79', '$2.62', ['White']],
  ['blanks-product-1.png', 'tees', 'GILDAN · G500B', 'Youth Heavy Cotton T-Shirt', '$3.79', '$2.62', ['White']],
  ['product-figma-1.png', 'tees', 'BELLA + CANVAS · 3001C', 'Unisex Jersey T-Shirt', '$5.19', '$4.29', ['Navy']],
  ['apparel-v2-product-5.png', 'tees', 'BELLA + CANVAS · 3001C', 'Unisex Jersey T-Shirt', '$5.19', '$4.29', ['Navy']],
  ['apparel-v2-product-3.png', 'hoodies', 'GILDAN · G185', 'Heavy Blend 50/50 Hoodie', '$12.99', '$9.76', ['Grey']],
  ['apparel-v2-product-6.png', 'hoodies', 'GILDAN · G185', 'Heavy Blend 50/50 Hoodie', '$12.99', '$9.76', ['Grey']],
  ['product-figma-4.png', 'performance', 'A4 · N3142', 'Men’s Cooling Performance T-Shirt', '$4.89', '$3.99', ['White']],
  ['apparel-v2-product-8.png', 'performance', 'A4 · N3142', 'Men’s Cooling Performance T-Shirt', '$4.89', '$3.99', ['White']],
];

const apparelColourSwatches = { White: '#ffffff', Black: '#111318', Grey: '#a9a9a4', Navy: '#14213d' };
const apparelColourOptions = [...new Set(apparelV3Items.flatMap(([, , , , , , colours]) => colours))]
  .map((name) => ({ name, count: apparelV3Items.filter((item) => item[6].includes(name)).length, swatch: apparelColourSwatches[name] }));
const apparelCardMeta = (brand) => {
  const [brandName, styleCode] = brand.split(' · ');
  const brandMark = brandName === 'GILDAN'
    ? `<img src="${asset('brand-logos/gildan.svg')}" alt="Gildan" />`
    : `<b>${brandName}</b>`;

  return `
    <span class="blanks-product__meta">
      <span class="blanks-product__brand">${brandMark}<span>${styleCode}</span></span>
    </span>`;
};

const apparelV3 = document.createElement('section');
apparelV3.className = 'apparel-v3';
apparelV3.setAttribute('aria-labelledby', 'apparel-v3-title');
apparelV3.innerHTML = `
  <div class="apparel-v3__inner">
    <header class="apparel-v3__topline">
      <div class="apparel-v3__brand">Jiffy Local<span></span><small>Dallas–Fort Worth</small></div>
      <nav class="apparel-v3__nav" aria-label="Jiffy Local sections"><a href="#">Ideas</a><a href="#delivery-coverage">Local</a><a href="#apparel-v3-title">Wear</a><a href="#">Further</a><i aria-hidden="true"></i></nav>
    </header>
    <div class="apparel-v3__showcase">
      <figure class="apparel-v3__portrait">
        <img src="${asset('portrait-card-standing.png')}" alt="Woman wearing a white blank T-shirt" />
        <figcaption><span>Same<br />good<br />ideas<br />a brighter<br />DFW</span><i aria-hidden="true"></i><b>Blanks<br />for a more<br />local tomorrow</b></figcaption>
      </figure>
      <div class="apparel-v3__main">
        <header class="apparel-v3__copy">
          <p>BLANK APPAREL</p>
          <h2 id="apparel-v3-title">Choose the blank<br />that fits the idea<span>.</span></h2>
          <span>Compare materials, weight, fit, and color before you choose.</span>
        </header>
        <div class="apparel-v3__rail-head">
          <a href="https://www.jiffy.com/" class="apparel-v3__browse">Browse blank apparel</a>
          <div class="apparel-v3__controls" aria-label="Apparel carousel controls">
            <button class="apparel-v3__arrow" type="button" data-apparel-v3-prev aria-label="Previous blank">←</button>
            <div class="apparel-v3__progress" role="progressbar" aria-label="Apparel carousel progress" aria-valuemin="1" aria-valuemax="20" aria-valuenow="1"><i></i></div>
            <p class="apparel-v3__count" aria-live="polite"><b>01</b><span>/</span><em>20</em></p>
            <button class="apparel-v3__arrow" type="button" data-apparel-v3-next aria-label="Next blank">→</button>
          </div>
        </div>
        <div class="apparel-v3__viewport" tabindex="0" aria-label="Browse blank apparel">
          <div class="apparel-v3__track">
            ${apparelV3Items.map(([image, category, brand, name, wasPrice, price, colours]) => `
              <a class="apparel-v3__card" data-category="${category}" data-colours="${colours.join('|')}" href="https://www.jiffy.com/" aria-label="${brand} ${name}, now from ${price}">
                <img src="${asset(image)}" alt="${name}" />
                <span class="apparel-v3__card-copy"><small>${brand}</small><strong>${name}</strong><span class="apparel-v3__price"><em>was ${wasPrice}</em><b>from ${price}</b></span><span class="apparel-v3__rating" aria-label="4 out of 5 stars">★★★★<i>★</i><em>(2,500)</em></span></span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
apparelV2.after(apparelV3);

// The final apparel experience is a static catalogue: all 20 products stay
// available in one view, with category chips and a colour menu providing the
// lightweight catalogue controls.
const apparelCardPortraits = Array.from({ length: 20 }, (_, index) =>
  `apparel-portraits/portrait-${String(index + 1).padStart(2, '0')}.png`,
);
const finalBlanksCatalog = blanksSection.querySelector('.blanks-carousel-group');
finalBlanksCatalog.innerHTML = `
  <p class="blanks-content-eyebrow">Apparel <span>(20)</span></p>
  <div class="blanks-static-toolbar">
    <div class="blanks-static-filters" role="group" aria-label="Filter blank apparel">
      <button type="button" class="is-active" data-apparel-filter="all" aria-pressed="true">All <span>20</span></button>
      <button type="button" data-apparel-filter="tees" aria-pressed="false">T-shirts <span>14</span></button>
      <button type="button" data-apparel-filter="fleece" aria-pressed="false">Fleece <span>2</span></button>
      <button type="button" data-apparel-filter="hoodies" aria-pressed="false">Hoodies <span>2</span></button>
      <button type="button" data-apparel-filter="performance" aria-pressed="false">Performance <span>2</span></button>
      <div class="blanks-static-colour">
        <button type="button" class="blanks-colour-trigger" data-apparel-colour-toggle aria-expanded="false" aria-controls="blanks-colour-menu">
          <span>Colours</span><b data-apparel-colour-count hidden></b><i aria-hidden="true">⌄</i>
        </button>
        <div class="blanks-colour-menu" id="blanks-colour-menu" hidden>
          <div class="blanks-colour-menu__header"><strong>Filter by colour</strong><button type="button" data-apparel-colour-clear hidden>Clear</button></div>
          <div class="blanks-colour-options" role="group" aria-label="Choose colours">
            ${apparelColourOptions.map(({ name, count: colourCount, swatch }) => `
              <label class="blanks-colour-option">
                <input type="checkbox" value="${name}" data-apparel-colour />
                <span class="blanks-colour-option__check" aria-hidden="true"></span>
                <span class="blanks-colour-option__swatch" style="--swatch:${swatch}"></span>
                <span>${name}</span><small>${colourCount}</small>
              </label>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <p aria-live="polite"><b>20</b> blank styles</p>
  </div>
  <div class="blanks-static-grid" aria-label="Blank apparel styles">
    ${apparelV3Items.map(([image, category, brand, name, wasPrice, price, colours], index) => `
      <a href="https://www.jiffy.com/" class="blanks-product" data-category="${category}" data-colours="${colours.join('|')}" aria-label="${brand} ${name}, ${colours.join(' or ')}, now from ${price}">
        <img src="${asset(apparelCardPortraits[index] || image)}" alt="${name}" />
        ${apparelCardMeta(brand)}<strong>${name}</strong>
        <span class="blanks-product__colour" aria-label="Colour ${colours[0]}"><i style="--swatch:${apparelColourSwatches[colours[0]]}"></i>${colours[0]}</span>
        <span class="blanks-product__price"><em>was ${wasPrice}</em><b>from ${price}</b></span>
        <span class="blanks-product__rating">★★★★<i>★</i> <em>(2,500)</em></span>
      </a>`).join('')}
  </div>`;

apparelV2.remove();
apparelV3.remove();
const coverageStory = document.createElement('section');
coverageStory.className = 'coverage-story';
coverageStory.id = 'delivery-coverage';
coverageStory.setAttribute('aria-labelledby', 'coverage-story-title');
coverageStory.innerHTML = `
  <div class="coverage-story__sticky">
    <div class="coverage-story__map-card" aria-label="Map moving from the Dallas–Fort Worth Jiffy Local coverage area to the Texas Jiffy 1st service area">
      <div class="coverage-story__map" role="img" aria-label="A map of the Jiffy Local Dallas–Fort Worth delivery area expanding to the Jiffy 1st Texas service view">
        <div class="coverage-story__map-scene">
          <img class="coverage-story__map-image" src="${asset('texas-map-reference.png')}" alt="Map of Texas and its major delivery destinations" />
        </div>
      </div>
      <p class="coverage-story__attribution">Map reference supplied by Jiffy</p>
      <div class="coverage-story__map-footer">
        <span data-coverage-caption>Dallas–Fort Worth · Jiffy Local coverage</span>
        <div><i></i><strong data-coverage-window>Delivery in hours · 7 days</strong></div>
      </div>
    </div>
    <div class="coverage-story__inner">
      <div class="coverage-story__copy">
        <p class="coverage-story__eyebrow">DELIVERY AREA</p>
        <nav class="coverage-story__index" aria-label="Delivery coverage" aria-live="polite">
          <article class="coverage-story__index-item is-active" data-coverage-item="0">
            <button class="is-active" type="button" data-coverage-step="0" aria-current="step" aria-expanded="true">
              <div class="coverage-story__step-meta"><em aria-hidden="true">01</em><span class="coverage-story__delivery-tag">Same day</span></div>
              <span class="coverage-story__active-label"><b id="coverage-story-title">Dallas–Fort Worth<span>.</span></b><small>Jiffy Local. Right here.</small></span>
            </button>
            <div class="coverage-story__index-details">
              <p>Transfers and blanks from the Jiffy micro-factory.<strong>free at $59</strong></p>
              <aside class="coverage-story__panel-service coverage-story__panel-service--local" aria-label="Jiffy Local delivery details">
                <span>5 AM–10 PM</span><i aria-hidden="true"></i><span>7 days</span>
              </aside>
            </div>
          </article>
          <article class="coverage-story__index-item" data-coverage-item="1">
            <button type="button" data-coverage-step="1" aria-expanded="false">
              <div class="coverage-story__step-meta"><em aria-hidden="true">02</em><span class="coverage-story__delivery-tag">Next day</span></div>
              <span class="coverage-story__active-label"><b>Texas<span>.</span></b><small>Jiffy 1st. Next day.</small></span>
            </button>
            <div class="coverage-story__index-details">
              <p>Statewide fulfillment when Jiffy Local is not the route.</p>
              <aside class="coverage-story__panel-service coverage-story__panel-service--first" aria-label="Jiffy 1st delivery details">
                <span>Jiffy 1st</span><i aria-hidden="true"></i><span>Delivery · 7 days</span><i aria-hidden="true"></i><strong>Receive it next day</strong>
              </aside>
            </div>
          </article>
        </nav>
      </div>
    </div>
    <p class="coverage-story__scroll-cue" aria-hidden="true"><span></span>Scroll to expand the map</p>
  </div>`;
blanksSection.after(coverageStory);

const setupCoverageStory = () => {
  const items = [...coverageStory.querySelectorAll('[data-coverage-item]')];
  const steps = [...coverageStory.querySelectorAll('[data-coverage-step]')];
  const caption = coverageStory.querySelector('[data-coverage-caption]');
  const deliveryWindow = coverageStory.querySelector('[data-coverage-window]');
  const localClamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smooth = (value) => value * value * (3 - 2 * value);
  let currentStep = 0;
  let frame;

  const render = () => {
    frame = undefined;
    const maxScroll = Math.max(1, coverageStory.offsetHeight - innerHeight);
    const bounds = coverageStory.getBoundingClientRect();
    const progress = localClamp(-bounds.top / maxScroll);
    const mapBlend = smooth(localClamp((progress - .18) / .64));
    coverageStory.style.setProperty('--coverage-progress', progress.toFixed(3));
    coverageStory.style.setProperty('--coverage-map-blend', mapBlend.toFixed(3));
    // One continuous Texas map: camera starts tightly on DFW, then pulls out
    // to the full state for Jiffy 1st. Nothing crossfades or swaps.
    coverageStory.style.setProperty('--coverage-map-scale', (2.55 - (mapBlend * 1.55)).toFixed(3));
    coverageStory.style.setProperty('--coverage-map-x', '0px');

    const nextStep = progress >= .5 ? 1 : 0;
    if (nextStep !== currentStep) currentStep = nextStep;
    items.forEach((item, index) => {
      const active = index === currentStep;
      item.classList.toggle('is-active', active);
    });
    steps.forEach((step, index) => {
      const active = index === currentStep;
      step.classList.toggle('is-active', active);
      step.setAttribute('aria-current', active ? 'step' : 'false');
      step.setAttribute('aria-expanded', String(active));
    });
    const first = currentStep === 1;
    caption.textContent = first ? 'Texas · Jiffy 1st service area' : 'Dallas–Fort Worth · Jiffy Local coverage';
    deliveryWindow.textContent = first ? 'Next-day delivery · 7 days' : 'Delivery in hours · 7 days';
  };

  const queueRender = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };
  steps.forEach((step) => step.addEventListener('click', () => {
    const target = Number(step.dataset.coverageStep);
    const maxScroll = Math.max(1, coverageStory.offsetHeight - innerHeight);
    window.scrollTo({ top: coverageStory.offsetTop + (target * maxScroll), behavior: 'smooth' });
  }));
  window.addEventListener('scroll', queueRender, { passive: true });
  window.addEventListener('resize', queueRender);
  render();
};
setupCoverageStory();

const shopInRange = document.createElement('section');
shopInRange.className = 'shop-in-range';
shopInRange.setAttribute('aria-labelledby', 'shop-in-range-title');
shopInRange.innerHTML = `
  <img class="shop-in-range__background" src="${asset('shop-in-range-background.png')}" alt="" />
  <div class="shop-in-range__shade"></div>
  <div class="shop-in-range__inner">
    <header><h2 id="shop-in-range-title">Is your shop in range?</h2><p>Type it in. If we cover you, you'll see the next window.</p></header>
    <form class="shop-in-range__form">
      <strong>Check your delivery time</strong>
      <label><img src="${asset('shop-in-range-pin.svg')}" alt="" /><input type="text" name="shop-address" placeholder="Enter your delivery address" aria-label="Delivery address" /></label>
      <button type="submit">Check delivery time</button>
    </form>
    <p class="shop-in-range__trust"><img src="${asset('shop-in-range-clock.svg')}" alt="" />7 days a week · 5 AM – 10 PM · Printed and driven from Dallas</p>
  </div>`;
coverageStory.after(shopInRange);

const supportChat = document.createElement('button');
supportChat.className = 'support-chat';
supportChat.type = 'button';
supportChat.setAttribute('aria-label', 'Open help chat');
supportChat.innerHTML = '<span class="support-chat__tooltip" role="tooltip">Do you need help?</span><span class="support-chat__glyph" aria-hidden="true"><i></i><i></i><i></i></span>';
document.body.append(supportChat);

document.querySelectorAll('[data-nav-scroll]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const section = link.dataset.navScroll === 'transfers'
      ? s1v3
      : blanksSection;
    section?.scrollIntoView({
      behavior: link.dataset.navScroll === 'blanks' ? 'auto' : 'smooth',
      block: 'start',
    });
    history.replaceState(null, '', link.getAttribute('href'));
  });
});

const addressSearch = document.querySelector('.jiffy-hero__address');
const addressForm = addressSearch;
const addressInput = addressSearch?.querySelector('input[name="address"]');
const addressPanel = addressSearch?.querySelector('.jiffy-hero__address-panel');
const deliveryStatus = addressSearch?.querySelector('.jiffy-hero__delivery-status');
const deliveryAddress = addressSearch?.querySelector('.jiffy-hero__delivery-address');
const deliveryWindow = addressSearch?.querySelector('.jiffy-hero__delivery-countdown');
const deliveryProofCountdown = deliveryProof.querySelector('[data-delivery-proof-countdown]');
const deliveryClear = addressSearch?.querySelector('.jiffy-hero__delivery-clear');
const heroTitle = document.querySelector('#jiffy-hero-title');
const heroLede = document.querySelector('.jiffy-hero__lede');
const heroEyebrow = document.querySelector('.jiffy-hero__eyebrow');
const heroHours = document.querySelector('.jiffy-hero__hours');
const deliveryOutcome = document.querySelector('.jiffy-hero__delivery-outcome');
const shopInRangeForm = document.querySelector('.shop-in-range__form');
const shopInRangeInput = shopInRangeForm?.querySelector('input[name="shop-address"]');
const addressSearchAnchor = document.createElement('div');
addressSearch?.before(addressSearchAnchor);
let addressSearchIsPortaled = false;
const portalAddressSearch = () => {
  if (!addressSearch || addressSearchIsPortaled) return;
  document.body.append(addressSearch);
  addressSearchIsPortaled = true;
};
const restoreAddressSearch = () => {
  if (!addressSearch || !addressSearchIsPortaled) return;
  addressSearchAnchor.after(addressSearch);
  addressSearchIsPortaled = false;
};
let deliveryCountdown;

const deliveryStateKey = 'jiffy-local-delivery-window';
const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const setDeliveryCountdown = (deadline) => {
  window.clearInterval(deliveryCountdown);
  const render = () => {
    const remaining = Math.max(0, deadline - Date.now());
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    const countdown = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (deliveryWindow) deliveryWindow.textContent = countdown;
    if (deliveryProofCountdown) deliveryProofCountdown.textContent = countdown;
  };
  render();
  deliveryCountdown = window.setInterval(render, 1000);
};
const isDallasDeliveryAddress = (address) => /\bdallas\b|\b752\d{2}\b/i.test(address);
const showDeliveryStatus = ({ address, deadline, covered = isDallasDeliveryAddress(address) }) => {
  if (!addressSearch || !addressPanel || !deliveryStatus) return;
  shopInRange.hidden = true;
  if (!covered) {
    deliveryProof.hidden = true;
    addressSearch.hidden = true;
    heroEyebrow.hidden = true;
    heroHours.hidden = true;
    if (heroTitle) heroTitle.textContent = 'Not there yet.';
    if (heroLede) heroLede.textContent = `${address.split(',')[0]} is next on the map. Leave your email and we’ll let you know when Jiffy Local arrives.`;
    if (deliveryOutcome) {
      deliveryOutcome.hidden = false;
      deliveryOutcome.innerHTML = `<p class="jiffy-hero__outside-address">⌖ &nbsp; ${escapeHtml(address)}</p><form class="jiffy-hero__waitlist"><input type="email" required placeholder="you@yourshop.com" aria-label="Email address" /><button type="submit">Join the waitlist <span>→</span></button></form><p>Need it now? <a href="https://www.jiffy.com/">Shop standard from Jiffy.</a> <button type="button" data-change-address>Change address</button></p>`;
      deliveryOutcome.querySelector('[data-change-address]')?.addEventListener('click', clearDeliveryStatus);
      deliveryOutcome.querySelector('form')?.addEventListener('submit', (event) => {
        event.preventDefault();
        const button = event.currentTarget.querySelector('button');
        button.textContent = 'You’re on the waitlist ✓';
        button.disabled = true;
      });
    }
    return;
  }
  deliveryAddress.textContent = address;
  deliveryProof.hidden = false;
  addressInput.value = address;
  addressSearch.classList.add('is-confirmed');
  addressSearch.classList.remove('is-on-light-surface');
  addressPanel.hidden = true;
  deliveryStatus.hidden = false;
  heroEyebrow.hidden = true;
  heroHours.hidden = true;
  if (heroTitle) heroTitle.textContent = "You're covered.";
  if (heroLede) heroLede.textContent = '';
  if (deliveryOutcome) { deliveryOutcome.hidden = true; deliveryOutcome.replaceChildren(); }
  setDeliveryCountdown(deadline);
};
const clearDeliveryStatus = () => {
  window.clearInterval(deliveryCountdown);
  deliveryProof.hidden = true;
  addressSearch?.classList.remove('is-confirmed');
  addressSearch?.classList.remove('is-on-light-surface');
  if (addressSearch) addressSearch.hidden = false;
  if (addressPanel) addressPanel.hidden = false;
  if (deliveryStatus) deliveryStatus.hidden = true;
  if (addressInput) addressInput.value = '';
  if (heroEyebrow) heroEyebrow.hidden = false;
  if (heroHours) heroHours.hidden = false;
  if (deliveryOutcome) { deliveryOutcome.hidden = true; deliveryOutcome.replaceChildren(); }
  if (heroTitle) heroTitle.innerHTML = 'Transfers and blank shirts.<br /><mark>Delivered in hours.</mark><br />Everyday.';
  if (heroLede) heroLede.textContent = 'Order this morning. Press this afternoon.';
  if (heroHours) heroHours.innerHTML = `<img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 10 PM · Printed and driven from Dallas`;
  shopInRange.hidden = false;
  window.localStorage.removeItem(deliveryStateKey);
};
addressForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const address = addressInput?.value.trim();
  if (!address) {
    addressInput?.focus();
    return;
  }
  const delivery = { address, deadline: Date.now() + (2 * 60 * 60 * 1000), covered: isDallasDeliveryAddress(address) };
  window.localStorage.setItem(deliveryStateKey, JSON.stringify(delivery));
  showDeliveryStatus(delivery);
});
shopInRangeForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const address = shopInRangeInput?.value.trim();
  if (!address) {
    shopInRangeInput?.focus();
    return;
  }
  if (addressInput) addressInput.value = address;
  addressForm?.requestSubmit();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
deliveryClear?.addEventListener('click', clearDeliveryStatus);
try {
  const savedDelivery = JSON.parse(window.localStorage.getItem(deliveryStateKey));
  if (savedDelivery?.address && savedDelivery.deadline > Date.now()) showDeliveryStatus({ ...savedDelivery, covered: isDallasDeliveryAddress(savedDelivery.address) });
} catch { window.localStorage.removeItem(deliveryStateKey); }
let addressSearchFrame;
const updateAddressSearch = () => {
  addressSearchFrame = undefined;
  if (!addressSearch) return;
  // The visible Section 1 flow is the retained S1V3 experience.
  const sectionOne = s1v3;
  const sectionOneTop = sectionOne ? sectionOne.getBoundingClientRect().top + window.scrollY : Infinity;
  const isSticky = addressSearch.classList.contains('is-sticky');
  // The original hero form scrolls naturally until it reaches the viewport.
  // From that exact point it becomes the same fixed form; Section 1 only
  // changes its compact styling, it does not introduce a new search control.
  const sourceTop = isSticky
    ? addressSearchAnchor.getBoundingClientRect().top
    : addressSearch.getBoundingClientRect().top;
  const shouldStick = sourceTop <= 12;
  const shouldCompact = window.scrollY >= sectionOneTop - 16;
  if (shouldStick && !isSticky) {
    const { width, height } = addressSearch.getBoundingClientRect();
    addressSearchAnchor.style.cssText = `width:${width}px;height:${height}px;flex:0 0 ${height}px`;
    portalAddressSearch();
    addressSearch.classList.add('is-sticky');
  } else if (!shouldStick && isSticky) {
    addressSearch.classList.remove('is-sticky');
    restoreAddressSearch();
    addressSearchAnchor.removeAttribute('style');
  }
  addressSearch.classList.toggle('is-compact', shouldStick && shouldCompact);
};
window.addEventListener('scroll', () => {
  if (!addressSearchFrame) addressSearchFrame = requestAnimationFrame(updateAddressSearch);
}, { passive: true });
window.addEventListener('resize', () => {
  restoreAddressSearch();
  addressSearch?.classList.remove('is-sticky', 'is-compact');
  addressSearchAnchor.removeAttribute('style');
  updateAddressSearch();
});
updateAddressSearch();

const apparelNext = apparelV2.querySelector('.apparel-v2__next');
const apparelProducts = apparelV2.querySelector('.apparel-v2__products');
apparelNext?.addEventListener('click', () => {
  apparelProducts?.scrollBy({ left: apparelProducts.clientWidth * .82, behavior: 'smooth' });
});

const setupApparelV3 = (section) => {
  const viewport = section.querySelector('.apparel-v3__viewport');
  const track = section.querySelector('.apparel-v3__track');
  const cards = [...section.querySelectorAll('.apparel-v3__card')];
  const filters = [...section.querySelectorAll('[data-apparel-v3-filter]')];
  const previous = section.querySelector('[data-apparel-v3-prev]');
  const next = section.querySelector('[data-apparel-v3-next]');
  const progress = section.querySelector('.apparel-v3__progress');
  const progressFill = progress.querySelector('i');
  const count = section.querySelector('.apparel-v3__count');
  let category = 'all';
  let activeIndex = 0;
  let visibleCards = cards;
  let pointerStart = null;
  let suppressClick = false;

  const displayNumber = (value) => String(value).padStart(2, '0');
  const update = (animate = true) => {
    visibleCards = cards.filter((card) => category === 'all' || card.dataset.category === category);
    activeIndex = Math.max(0, Math.min(activeIndex, visibleCards.length - 1));
    cards.forEach((card) => {
      const itemIndex = visibleCards.indexOf(card);
      card.hidden = itemIndex === -1;
      card.classList.toggle('is-active', itemIndex === activeIndex);
      card.classList.toggle('is-neighbor', Math.abs(itemIndex - activeIndex) === 1);
    });
    const activeCard = visibleCards[activeIndex];
    if (!activeCard) return;
    track.classList.toggle('is-instant', !animate);
    const offset = Math.min(activeCard.offsetLeft, Math.max(0, track.scrollWidth - viewport.clientWidth));
    track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    if (!animate) requestAnimationFrame(() => track.classList.remove('is-instant'));
    const total = visibleCards.length;
    const current = activeIndex + 1;
    count.innerHTML = `<b>${displayNumber(current)}</b><span>/</span><em>${displayNumber(total)}</em>`;
    progress.setAttribute('aria-valuemax', String(total));
    progress.setAttribute('aria-valuenow', String(current));
    progress.setAttribute('aria-label', `Blank ${current} of ${total}`);
    progressFill.style.width = `${(current / total) * 100}%`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === total - 1;
  };

  const move = (direction) => {
    const nextIndex = Math.max(0, Math.min(activeIndex + direction, visibleCards.length - 1));
    if (nextIndex === activeIndex) return;
    activeIndex = nextIndex;
    update();
  };

  filters.forEach((filter) => filter.addEventListener('click', () => {
    category = filter.dataset.apparelV3Filter;
    activeIndex = 0;
    filters.forEach((button) => button.setAttribute('aria-pressed', String(button === filter)));
    update(false);
  }));
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  viewport.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
  });
  viewport.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    pointerStart = event.clientX;
    suppressClick = false;
    viewport.setPointerCapture?.(event.pointerId);
    viewport.classList.add('is-dragging');
  });
  viewport.addEventListener('pointerup', (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    viewport.classList.remove('is-dragging');
    if (Math.abs(distance) < 38) return;
    suppressClick = true;
    move(distance < 0 ? 1 : -1);
  });
  viewport.addEventListener('pointercancel', () => {
    pointerStart = null;
    viewport.classList.remove('is-dragging');
  });
  viewport.addEventListener('click', (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    suppressClick = false;
  }, true);
  window.addEventListener('resize', () => update(false));
  update(false);
};
const setupStaticApparelFilters = (section) => {
  const filters = [...section.querySelectorAll('[data-apparel-filter]')];
  const colourToggle = section.querySelector('[data-apparel-colour-toggle]');
  const colourMenu = section.querySelector('#blanks-colour-menu');
  const colourInputs = [...section.querySelectorAll('[data-apparel-colour]')];
  const colourClear = section.querySelector('[data-apparel-colour-clear]');
  const colourCount = section.querySelector('[data-apparel-colour-count]');
  const cards = [...section.querySelectorAll('.blanks-product')];
  const count = section.querySelector('.blanks-static-toolbar p');
  let category = 'all';

  const closeColourMenu = () => {
    colourMenu.hidden = true;
    colourToggle.setAttribute('aria-expanded', 'false');
  };

  const update = () => {
    const selectedColours = new Set(colourInputs.filter((input) => input.checked).map((input) => input.value));
    const visibleCards = cards.filter((card) => {
      const matchesCategory = category === 'all' || card.dataset.category === category;
      const cardColours = (card.dataset.colours || '').split('|');
      const matchesColour = selectedColours.size === 0 || cardColours.some((colour) => selectedColours.has(colour));
      return matchesCategory && matchesColour;
    });

    filters.forEach((item) => {
      const active = item.dataset.apparelFilter === category;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card) => card.hidden = !visibleCards.includes(card));
    count.innerHTML = `<b>${visibleCards.length}</b> blank ${visibleCards.length === 1 ? 'style' : 'styles'}`;
    colourClear.hidden = selectedColours.size === 0;
    colourCount.hidden = selectedColours.size === 0;
    colourCount.textContent = selectedColours.size;
    colourToggle.classList.toggle('has-selection', selectedColours.size > 0);
  };

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      category = filter.dataset.apparelFilter;
      update();
    });
  });

  colourToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = colourToggle.getAttribute('aria-expanded') === 'true';
    colourMenu.hidden = isOpen;
    colourToggle.setAttribute('aria-expanded', String(!isOpen));
  });
  colourMenu.addEventListener('click', (event) => event.stopPropagation());
  colourInputs.forEach((input) => input.addEventListener('change', update));
  colourClear.addEventListener('click', () => {
    colourInputs.forEach((input) => input.checked = false);
    update();
  });
  document.addEventListener('click', closeColourMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && colourToggle.getAttribute('aria-expanded') === 'true') {
      closeColourMenu();
      colourToggle.focus();
    }
  });
  update();
};
setupStaticApparelFilters(blanksSection);

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const ramp = (value, start, end) => clamp((value - start) / (end - start));
const ease = (value) => value * value * (3 - 2 * value);
const navigationColor = (progress) => {
  const tone = ease(ramp(progress, .06, .18));
  return `rgb(${Math.round(255 - 239 * tone)}, ${Math.round(255 - 215 * tone)}, ${Math.round(255 - 171 * tone)})`;
};

const blanksShell = blanksSection.querySelector('.blanks-shell');
const blanksCarouselGroup = blanksSection.querySelector('.blanks-carousel-group');
const blanksStaticGrid = blanksSection.querySelector('.blanks-static-grid');

const translateY = (element) => {
  const transform = getComputedStyle(element).transform;
  if (!transform || transform === 'none') return 0;
  const values = transform.includes('matrix3d')
    ? transform.slice(9, -1).split(',').map(Number)
    : transform.slice(7, -1).split(',').map(Number);
  return values[transform.includes('matrix3d') ? 13 : 5] || 0;
};

function renderBlanksStory() {
  if (!blanksSection.classList.contains('blanks-story--interactive')) return;
  const maxScroll = Math.max(1, blanksSection.offsetHeight - window.innerHeight);
  const scrolled = Math.max(0, -blanksSection.getBoundingClientRect().top);
  // Keep the hero handoff short and predictable. The remaining section height
  // is reserved for moving through the full 20-item catalogue after the image
  // has settled into its left column.
  const transitionDistance = Math.min(maxScroll, Math.max(1, window.innerHeight * 1.4));
  const progress = clamp(scrolled / transitionDistance);
  const heroProgress = ease(ramp(progress, 0, .68));
  const catalogProgress = ease(ramp(progress, .68, .9));
  const catalogScroll = clamp((scrolled - transitionDistance) / Math.max(1, maxScroll - transitionDistance));
  // offsetTop is the layout position before the group's translate transform.
  // Using getBoundingClientRect here would feed the previous transform back
  // into the next frame and stop the final rows short of the viewport edge.
  const groupTopInShell = blanksCarouselGroup.offsetTop;
  const visibleGroupHeight = Math.max(0, window.innerHeight - groupTopInShell);
  // Keep a small amount of breathing room below the paired image and final
  // product row, while moving both together so their shared baseline stays
  // aligned through the end of the scroll.
  const catalogBottomGap = Math.min(48, Math.max(24, window.innerHeight * .04));
  const maxCatalogTranslate = Math.max(0, blanksCarouselGroup.offsetHeight - visibleGroupHeight + catalogBottomGap);
  const visibleCards = blanksStaticGrid
    ? [...blanksStaticGrid.querySelectorAll('.blanks-product:not([hidden])')]
    : [];
  if (visibleCards.length) {
    const shellTop = blanksShell.getBoundingClientRect().top;
    const groupOffset = translateY(blanksCarouselGroup);
    const cardRects = visibleCards.map((card) => card.getBoundingClientRect());
    const rowTops = [];
    cardRects.forEach((rect) => {
      if (!rowTops.some((top) => Math.abs(top - rect.top) < 2)) rowTops.push(rect.top);
    });
    rowTops.sort((a, b) => a - b);
    const firstRowTop = rowTops[0];
    const secondRowTop = rowTops[1] ?? firstRowTop;
    const firstRowHeight = Math.max(...cardRects
      .filter((rect) => Math.abs(rect.top - firstRowTop) < 2)
      .map((rect) => rect.height));
    const secondRowHeight = Math.max(...cardRects
      .filter((rect) => Math.abs(rect.top - secondRowTop) < 2)
      .map((rect) => rect.height));
    const twoRowHeight = (secondRowTop - firstRowTop) + Math.max(firstRowHeight, secondRowHeight);
    blanksShell.style.setProperty('--hero-target-top', `${(firstRowTop - shellTop - groupOffset).toFixed(1)}px`);
    blanksShell.style.setProperty('--hero-target-height', `${twoRowHeight.toFixed(1)}px`);
  }
  blanksShell.style.setProperty('--hero-progress', heroProgress.toFixed(3));
  blanksShell.style.setProperty('--catalog-progress', catalogProgress.toFixed(3));
  blanksShell.style.setProperty('--catalog-translate', `${(-maxCatalogTranslate * catalogScroll).toFixed(1)}px`);
  blanksShell.style.setProperty('--hero-catalog-translate', `${(-catalogBottomGap * catalogScroll).toFixed(1)}px`);
  blanksShell.style.setProperty('--hero-title-color', heroProgress > .62 ? '#14213d' : '#fff');
  blanksShell.style.setProperty('--header-color', navigationColor(heroProgress));
}

function renderAllStories() { renderBlanksStory(); }
window.addEventListener('scroll', renderAllStories, { passive: true });
window.addEventListener('resize', renderAllStories);
renderAllStories();
