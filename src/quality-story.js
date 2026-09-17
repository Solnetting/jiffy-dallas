import { setupStickyAddressGlow } from './jiffy-address-glow.js';

const asset = (file) => `${import.meta.env.BASE_URL}figma/${file}`;

document.querySelector('#app').innerHTML = `
  <section class="jiffy-hero" aria-labelledby="jiffy-hero-title">
    <img class="jiffy-hero__image" src="${asset('jiffy-hero-morning.png')}?v=1" alt="" aria-hidden="true" />
    <div class="jiffy-hero__shade"></div>
    <header class="jiffy-hero__nav">
      <div class="jiffy-hero__brand"><img class="jiffy-hero__logo" src="${asset('jiffy-local-logo.svg')}" alt="Jiffy" /><span class="jiffy-hero__location">DALLAS-FORT WORTH</span></div>
      <nav class="jiffy-hero__links" aria-label="Main navigation"><a href="#transfers-section" data-nav-scroll="transfers">Transfers</a><a href="#blanks-section" data-nav-scroll="blanks">Blanks</a><a class="jiffy-hero__sign-in" href="https://www.jiffy.com/account/login">Sign in</a></nav>
    </header>
    <div class="jiffy-hero__content">
      <p class="jiffy-hero__eyebrow"><span></span>Now delivering · Dallas-Fort Worth</p>
      <div class="jiffy-hero__headline">
        <p class="jiffy-hero__headline-label">Transfers + Blanks</p>
        <h1 id="jiffy-hero-title">Delivering<br /><mark>Together in Hours.</mark></h1>
      </div>
      <p class="jiffy-hero__lede">Order this morning. Press this afternoon.</p>
      <form class="jiffy-hero__address" action="https://www.jiffy.com/" method="get">
        <div class="jiffy-hero__sticky-brand local-mark" aria-label="Jiffy Local Dallas–Fort Worth">Jiffy Local <span aria-hidden="true"></span><small>Dallas–Fort Worth</small></div>
        <div class="jiffy-hero__address-panel">
          <label><img src="${asset('address-checker-panel-location.svg')}" alt="" /><input type="text" name="address" placeholder="Enter your delivery address" aria-label="Delivery address" /></label>
          <button type="submit"><span>Check your delivery time</span></button>
        </div>
        <nav class="jiffy-hero__sticky-links" aria-label="Main navigation"><a href="#transfers-section" data-nav-scroll="transfers">Transfers</a><a href="#blanks-section" data-nav-scroll="blanks">Blanks</a><a class="jiffy-hero__sign-in jiffy-hero__sticky-sign-in" href="https://www.jiffy.com/account/login">Sign in</a></nav>
        <div class="jiffy-hero__delivery-status" hidden aria-live="polite">
          <span class="jiffy-hero__delivery-address"></span>
          <span class="jiffy-hero__delivery-divider" aria-hidden="true"></span>
          <span class="jiffy-hero__delivery-window"><strong>Today, 2 – 4 PM</strong><small><span class="jiffy-hero__delivery-countdown">--:--:--</span> remaining</small></span>
          <button class="jiffy-hero__delivery-clear" type="button" aria-label="Clear delivery address">×</button>
        </div>
      </form>
      <p class="jiffy-hero__hours"><img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 10 PM · Printed and driven from Dallas</p>
      <div class="jiffy-hero__delivery-outcome" hidden aria-live="polite"></div>
    </div>
    <div class="jiffy-hero__covered" hidden aria-live="polite">
      <p class="jiffy-hero__covered-kicker">DELIVERY WINDOWS &amp; CUT-OFFS <b>LIVE</b></p>
      <div class="jiffy-hero__covered-title">
        <h1 data-covered-address>Dallas 75201</h1>
        <button type="button" class="jiffy-hero__covered-clear" data-covered-clear aria-label="Change delivery address">×</button>
      </div>
      <article class="jiffy-hero__covered-panel" aria-label="Delivery windows for this address">
        <div class="jiffy-hero__covered-map">
          <img src="${asset('delivery-proof-map.png')}" alt="Dallas delivery route map" />
          <span class="jiffy-hero__covered-map-address"><img src="${asset('address-checker-panel-location.svg')}" alt="" /><strong data-covered-map-address>Dallas 75201</strong></span>
          <span class="jiffy-hero__covered-map-control" aria-hidden="true">↗</span>
        </div>
        <section class="jiffy-hero__covered-current" aria-label="Next delivery window">
          <p class="jiffy-hero__covered-status"><span aria-hidden="true">✓</span> ADDRESS COVERED</p>
          <p class="jiffy-hero__covered-label">NEXT WINDOW</p>
          <strong class="jiffy-hero__covered-window">11 AM–1 PM</strong>
          <div class="jiffy-hero__covered-countdown"><span aria-hidden="true">◷</span><b data-covered-countdown>01:59:55</b></div>
        </section>
        <section class="jiffy-hero__covered-upcoming" aria-label="Upcoming delivery windows">
          <p class="jiffy-hero__covered-label">UPCOMING WINDOWS</p>
          <button type="button" class="jiffy-hero__covered-slot"><span>◷</span><strong>12 PM – 2 PM</strong><b aria-hidden="true">›</b></button>
          <button type="button" class="jiffy-hero__covered-slot"><span>◷</span><strong>3 PM – 5 PM</strong><b aria-hidden="true">›</b></button>
          <div class="jiffy-hero__covered-actions"><button type="button">SEE NEXT</button><button type="button">PROGRAM ORDER</button></div>
        </section>
      </article>
      <p class="jiffy-hero__covered-note"><span aria-hidden="true"></span>Dallas central distribution online. Order now to lock in your window.</p>
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
        <div class="story-words">Ideas <b>Local</b> Wear <i>Further</i><em></em></div>
      </header>
      <div class="blanks-hero-title">
        <h2>Choose the blank<br />that fits the idea<span>.</span></h2>
        <p class="blanks-hero-tag">Receive it in hours</p>
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
// S1 V3 is the only Section 1 quality experience kept in the build.
const s1v3Cards = [
  { image: 'tiger-transfer-hero.png', title: 'Jiffy vs Others', subtitle: 'Sharper, denser, cleaner transfer results.', description: 'Compare fine edges, solid coverage, and a cleaner finish against the competing transfer.' },
  { image: 'tiger-proof-detail.png', title: 'Ai process', subtitle: 'Artwork analyzed and prepared for print.', description: 'Your artwork is checked and prepared before print so detail and color stay true to the design.' },
  { image: 'tiger-proof-peel.png', title: 'Hot peel', subtitle: 'Clean release immediately after pressing.', description: 'A clean release immediately after pressing means less waiting between the press and the finished garment.' },
  { image: 'tiger-proof-color.png', title: 'Color accuracy', subtitle: 'True color with fine detail, up close.', description: 'Richer detail and truer color set a higher standard in every transfer.' },
];

const heroBridge = document.createElement('section');
heroBridge.className = 'hero-bridge';
heroBridge.id = 'delivery-pairing';
heroBridge.setAttribute('aria-label', 'Jiffy Local delivery benefits');
heroBridge.innerHTML = `
  <div class="hero-bridge__inner">
    <div class="hero-bridge__copy">
      <h2><span>FIRST DELIVERY</span><strong>FREE</strong></h2>
      <div class="hero-bridge__products" aria-label="Blanks and transfers">
        <span class="hero-bridge__product hero-bridge__product--shirt"><img src="${asset('delivery-shirt.svg')}" alt="" /><b>BLANKS</b></span>
        <span class="hero-bridge__plus" aria-hidden="true">+</span>
        <span class="hero-bridge__product hero-bridge__product--transfers"><img src="${asset('delivery-cards-star.svg')}" alt="" /><b>TRANSFERS</b></span>
      </div>
      <div class="hero-bridge__tag">TOGETHER IN ONE BOX</div>
      <p class="hero-bridge__hours">IN HOURS</p>
    </div>
    <figure class="hero-bridge__visual" aria-label="Blank shirt and DTF transfer materials ready for delivery">
      <img src="${asset('pairing-hero-box-topdown.png')}" alt="Yellow Jiffy box with a blank shirt, transfer roll, and printed transfer sheets" />
    </figure>
  </div>
`;

const s1v3 = document.createElement('section');
s1v3.className = 's1v3-story';
s1v3.id = 'transfers-section';
s1v3.setAttribute('aria-label', 'DTF quality carousel with artwork upload');
s1v3.innerHTML = `
  <div class="s1v3-sticky">
    <div class="s1v3-canvas">
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

      <div class="s1v3-upload" style="--s1v3-upload-texture:url('${asset('s1v3-transfer-support-texture.png')}');--s1v3-upload-light-texture:url('${asset('s1v3-transfer-support-texture-light.png')}')" role="group" aria-label="Upload artwork. Drag and drop a file or select one.">
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
            <div class="s1v3-index-item${index === 0 ? ' is-active' : ''}" data-s1v3-step="${index}" aria-current="${index === 0 ? 'step' : 'false'}">
              <span class="s1v3-index__label">
                <i aria-hidden="true"></i>
                <span class="s1v3-index__copy">
                  <strong>${title}</strong>
                  <small>${subtitle}</small>
                </span>
              </span>
              <p class="s1v3-index__description">${description}</p>
            </div>
          `).join('')}
        </nav>
      </div>
    </div>
      </div>
    </div>
  </div>
`;
originalHero?.after(heroBridge);
heroBridge.after(s1v3);

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
          <div class="delivery-proof__primary-window"><small>Next delivery window</small><strong>11 AM–1 PM</strong></div>
          <img src="${asset('delivery-proof-divider.svg')}" alt="" />
          <div class="delivery-proof__secondary-countdown"><small>Remaining</small><b data-delivery-proof-countdown>--:--:--</b></div>
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
s1v3.after(deliveryProof);

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

  const setActiveIndex = (target, immediate = false) => {
    const nextIndex = Math.max(0, Math.min(cards.length - 1, target));
    if (nextIndex === activeIndex) return;
    const direction = nextIndex > activeIndex ? 1 : -1;
    activeIndex = nextIndex;
    render(direction, immediate);
  };

  // The proof topics are a hover-driven index. They reveal the matching image
  // without behaving like buttons or toggling a collapsed state on click.
  indexItems.forEach((item) => item.addEventListener('mouseenter', () => {
    const target = Number(item.dataset.s1v3Step);
    setActiveIndex(target);
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

    // Once the upload panel has cleared, the remaining scroll distance becomes
    // a four-step proof sequence. Hovering an index item still jumps directly
    // to that card; the next scroll position resumes the sequence naturally.
    if (reveal > .98 && cards.length > 1) {
      const carouselProgress = Math.min(1, Math.max(0, (progress - .24) / .76));
      // Hold the first proof card while the user settles into S1. Without
      // this arrival buffer, a single wheel gesture can immediately advance
      // from the first tab to the second before the section is readable.
      const arrivalHold = .36;
      const sequenceProgress = Math.min(1, Math.max(0, (carouselProgress - arrivalHold) / (1 - arrivalHold)));
      const scrollIndex = carouselProgress < arrivalHold
        ? 0
        : Math.min(cards.length - 1, 1 + Math.floor(sequenceProgress * (cards.length - 1)));
      setActiveIndex(scrollIndex);
    }
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
      <p class="pairing-exploration__eyebrow">ONE CART · ONE SHIPPING THRESHOLD</p>
      <h2><span class="pairing-exploration__line">BLANKS + TRANSFERS<span>.</span></span><br /><span class="pairing-exploration__line">DELIVERED TOGETHER<span>.</span></span></h2>
      <p><span>One delivery for your blanks and transfers.</span><br /><strong>One free-shipping threshold for both.</strong></p>
    </div>
    <figure class="pairing-exploration__package" aria-label="Jiffy DTF delivery scene">
      <img src="${asset('pairing-bridge-generated.png')}" alt="Jiffy DTF box with blank apparel and loose transfers." />
    </figure>
  </div>`;
s1v3.after(blanksSection);
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
// The catalogue shows one representative swatch on each card. Keep the
// remaining colour count visible beside it so shoppers know there are more
// options without opening the product page.
const apparelAdditionalColours = {
  'GILDAN · G500': 5,
  'GILDAN · G640': 4,
  'COMFORT COLORS · C1717': 5,
  'GILDAN · G300': 4,
  'GILDAN · G180': 5,
  'GILDAN · G800': 5,
  'GILDAN · G500B': 3,
  'BELLA + CANVAS · 3001C': 5,
  'GILDAN · G185': 4,
  'A4 · N3142': 2,
};
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
      <a href="https://www.jiffy.com/" class="blanks-product" data-category="${category}" data-colours="${colours.join('|')}" aria-label="${brand} ${name}, ${colours.join(' or ')}, plus ${apparelAdditionalColours[brand] ?? 1} more colours, now from ${price}">
        <img src="${asset(apparelCardPortraits[index] || image)}" alt="${name}" />
        ${apparelCardMeta(brand)}<strong>${name}</strong>
        <span class="blanks-product__colour" aria-label="Colour ${colours[0]}, plus ${apparelAdditionalColours[brand] ?? 1} more"><i style="--swatch:${apparelColourSwatches[colours[0]]}"></i><span>${colours[0]}</span><b>+${apparelAdditionalColours[brand] ?? 1}</b></span>
        <span class="blanks-product__price"><em>was ${wasPrice}</em><b>from ${price}</b></span>
        <span class="blanks-product__rating">★★★★<i>★</i> <em>(2,500)</em></span>
      </a>`).join('')}
  </div>`;

apparelV2.remove();
apparelV3.remove();
const coverageMapLabels = [
  ['state', 495.3, 424.1, 'NEW MEXICO'], ['state', 995.5, 325.2, 'OKLAHOMA'], ['state', 1423.7, 398.1, 'ARKANSAS'],
  ['state', 1449.9, 717.6, 'LOUISIANA'], ['state state--texas', 938, 714.9, 'TEXAS'], ['state', 569.7, 1155.8, 'MEXICO'],
  ['state state--gulf', 1445, 1159.7, 'Gulf of Mexico'], ['city city--dfw', 1042, 579, 'Dallas–Fort Worth'],
  ['city', 1054.4, 803.8, 'Austin'], ['city', 998.5, 877.2, 'San Antonio'], ['city', 1233.5, 843.8, 'Houston'],
  ['city', 1083.4, 1017, 'Corpus Christi'], ['city', 921.2, 1043.2, 'Laredo'], ['city', 1020.4, 1155.6, 'McAllen'],
  ['city', 408.9, 656.3, 'El Paso'], ['city', 753.9, 514.9, 'Lubbock'], ['city', 759.2, 372.7, 'Amarillo'],
  ['city', 906.5, 615.2, 'Abilene'], ['city', 1231.2, 619.3, 'Tyler'], ['city', 1159.1, 770.7, 'College Station'],
  ['city', 1325.8, 812.5, 'Beaumont'], ['city city--quiet', 1344, 599.6, 'Shreveport'],
];
const coverageStory = document.createElement('section');
coverageStory.className = 'coverage-story';
coverageStory.id = 'delivery-coverage';
coverageStory.setAttribute('aria-labelledby', 'coverage-story-title');
coverageStory.innerHTML = `
  <div class="coverage-story__sticky">
    <div class="coverage-story__map-card" aria-label="Map moving from the Dallas–Fort Worth Jiffy Local coverage area to the Texas Jiffy 1st service area">
      <div class="coverage-story__map" role="img" aria-label="A map of the Jiffy Local Dallas–Fort Worth delivery area expanding to the Jiffy 1st Texas service view">
        <div class="coverage-story__map-scene">
          <img class="coverage-story__map-image coverage-story__map-image--quiet" src="${asset('texas-regional-wide-quiet.svg')}" alt="Map of Texas and its major delivery destinations" />
          <img class="coverage-story__map-image coverage-story__map-image--full" src="${asset('texas-regional-wide-complete.svg')}" alt="" aria-hidden="true" />
          <img class="coverage-story__map-image coverage-story__map-image--dfw" src="${asset('texas-dfw-service-area.svg')}" alt="" aria-hidden="true" />
        </div>
      </div>
      <p class="coverage-story__attribution">Map reference supplied by Jiffy</p>
      <div class="coverage-story__map-footer">
        <span data-coverage-caption>Dallas–Fort Worth · Jiffy Local coverage</span>
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
const coverageMapCard = coverageStory.querySelector('.coverage-story__map-card');
coverageMapCard.dataset.section = 'dfw';
const coverageMap = coverageStory.querySelector('.coverage-story__map');
const coverageMapScene = coverageStory.querySelector('.coverage-story__map-scene');
const createCoverageSvg = (name, attrs = {}) => {
  const node = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
  return node;
};
coverageMapScene.replaceChildren();
// Keep the two camera states on separate map layers. The Texas outline is part
// of the wide base artwork, so the DFW camera uses the same county map with
// that outline removed and draws its own local service boundary below.
const coverageMapDfwBase = document.createElement('img');
coverageMapDfwBase.className = 'coverage-story__map-image coverage-story__map-base--dfw';
coverageMapDfwBase.src = asset('texas-regional-wide-dfw.svg');
coverageMapDfwBase.alt = 'Map of the Dallas–Fort Worth delivery area';
const coverageMapTexasBase = document.createElement('img');
coverageMapTexasBase.className = 'coverage-story__map-image coverage-story__map-base--texas';
coverageMapTexasBase.src = asset('texas-regional-wide-base.svg');
coverageMapTexasBase.alt = 'Map of Texas and its major delivery destinations';
coverageMapScene.append(coverageMapDfwBase, coverageMapTexasBase);
const coverageMapLabelsSvg = createCoverageSvg('svg', { class: 'coverage-story__map-labels', viewBox: '-100 220 2200 1100', 'aria-hidden': 'true' });
coverageMapLabels.forEach(([type, x, y, text]) => {
  const quiet = type.includes('--quiet');
  const state = type.startsWith('state');
  const dfw = type.includes('--dfw');
  const dot = createCoverageSvg('circle', { class: dfw ? 'coverage-story__city-dot coverage-story__city-dot--dfw' : 'coverage-story__city-dot', cx: x, cy: y, r: dfw ? 3.2 : 2.2 });
  const textNode = createCoverageSvg('text', {
    class: state ? 'coverage-story__state' + (type.includes('--texas') ? ' coverage-story__state--texas' : '') : 'coverage-story__city' + (dfw ? ' coverage-story__city--dfw' : '') + (quiet ? ' coverage-story__city--quiet' : ''),
    // The supplied map artwork centers the DFW label at 1112/584 while its
    // marker stays at 1042/579. Keep that alignment instead of anchoring the
    // label immediately after the marker like the smaller city labels.
    x: state ? x : (dfw ? 1112 : x + 9),
    y: state ? y : (dfw ? 584 : y + 6),
    'text-anchor': state || dfw ? 'middle' : 'start',
  });
  textNode.textContent = text;
  if (state) {
    coverageMapLabelsSvg.append(dot, textNode);
  } else {
    const marker = createCoverageSvg('g', { class: 'coverage-story__city-marker' });
    marker.append(dot, textNode);
    coverageMapLabelsSvg.append(marker);
  }
});
coverageMapScene.append(coverageMapLabelsSvg);
const coverageMapDetail = createCoverageSvg('svg', { class: 'coverage-story__map-detail', viewBox: '-100 220 2200 1100', 'aria-hidden': 'true' });
coverageMapDetail.append(createCoverageSvg('path', {
  class: 'coverage-story__boundary',
  // Exact geometry from assets/figma/texas-dfw-service-area.svg.
  d: 'M1185.5 572.6L1187.9 564.5L1194 564.5L1194.3 527L1155.6 533.4L1155.4 528.4L1121.9 528.1L1122 527.5L1082 526.2L1042.6 526.5L1042.4 564.2L1032.5 564.2L1031.6 602.9L1064.8 602.8L1064.9 633.5L1066.7 634.2L1065.9 635.9L1068.3 635.7L1068.3 638.1L1072.4 639.4L1072.5 637.1L1075.1 635.3L1103.8 627.6L1114.5 646.1L1155.6 621.6L1152.1 621.3L1151.6 620.1L1150.6 620.3L1150.5 619L1178.2 618.8L1178.2 576.9L1188.7 576.9L1184.8 573.8L1185.5 572.6Z',
}));
coverageMapScene.append(coverageMapDetail);
const coverageMapWash = document.createElement('div');
coverageMapWash.className = 'coverage-story__map-wash';
const coverageMapVignette = document.createElement('div');
coverageMapVignette.className = 'coverage-story__map-vignette';
coverageMap.append(coverageMapWash, coverageMapVignette);

blanksSection.after(coverageStory);
coverageStory.after(pairingExploration);

const setupCoverageStory = () => {
  const items = [...coverageStory.querySelectorAll('[data-coverage-item]')];
  const steps = [...coverageStory.querySelectorAll('[data-coverage-step]')];
  const caption = coverageStory.querySelector('[data-coverage-caption]');
  const deliveryWindow = coverageStory.querySelector('[data-coverage-window]');
  const camera = coverageStory.querySelector('.coverage-story__map-scene');
  const localClamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const states = {
    dfw: { x: -6, y: 22, scale: 2.38, bearing: 15, caption: 'Dallas–Fort Worth · Jiffy Local coverage', window: 'Delivery in hours · 7 days' },
    texas: { x: 20, y: 0, scale: 1.07, bearing: 0, caption: 'Texas · Jiffy 1st service area', window: 'Next-day delivery · 7 days' },
  };
  let currentStep = 0;
  let activeState = '';
  let manualZoom = 0;
  let frame;

  const applyState = (name) => {
    const state = states[name] || states.dfw;
    if (activeState === name && manualZoom === 0) return;
    activeState = name;
    coverageMapCard.dataset.section = name;
    camera.style.setProperty('--coverage-map-x', state.x + '%');
    camera.style.setProperty('--coverage-map-y', state.y + '%');
    camera.style.setProperty('--coverage-map-scale', state.scale + manualZoom);
    camera.style.setProperty('--coverage-map-bearing', state.bearing + 'deg');
    camera.style.setProperty('--coverage-label-scale', (states.texas.scale / (state.scale + manualZoom)).toFixed(4));
    camera.style.setProperty('--coverage-dfw-font-size', name === 'dfw' ? '20px' : '14px');
    caption.textContent = state.caption;
    if (deliveryWindow) deliveryWindow.textContent = state.window;
  };

  const render = () => {
    frame = undefined;
    const maxScroll = Math.max(1, coverageStory.offsetHeight - innerHeight);
    const bounds = coverageStory.getBoundingClientRect();
    const progress = localClamp(-bounds.top / maxScroll);
    coverageStory.style.setProperty('--coverage-progress', progress.toFixed(3));
    coverageStory.style.setProperty('--coverage-map-blend', '0');
    const nextStep = progress >= .5 ? 1 : 0;
    if (nextStep !== currentStep) currentStep = nextStep;
    const stateName = currentStep === 1 ? 'texas' : 'dfw';
    applyState(stateName);
    items.forEach((item, index) => item.classList.toggle('is-active', index === currentStep));
    steps.forEach((step, index) => {
      const active = index === currentStep;
      step.classList.toggle('is-active', active);
      step.setAttribute('aria-current', active ? 'step' : 'false');
      step.setAttribute('aria-expanded', String(active));
    });
  };

  const queueRender = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };
  steps.forEach((step) => step.addEventListener('click', () => {
    const target = Number(step.dataset.coverageStep);
    currentStep = target;
    applyState(target === 1 ? 'texas' : 'dfw');
    items.forEach((item, index) => item.classList.toggle('is-active', index === target));
    steps.forEach((item, index) => {
      const active = index === target;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-current', active ? 'step' : 'false');
      item.setAttribute('aria-expanded', String(active));
    });
    const maxScroll = Math.max(1, coverageStory.offsetHeight - innerHeight);
    window.scrollTo({ top: coverageStory.offsetTop + (target * maxScroll), behavior: 'smooth' });
  }));
  window.addEventListener('scroll', queueRender, { passive: true });
  window.addEventListener('resize', queueRender);
  coverageStory.querySelectorAll('[data-coverage-camera]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.coverageCamera;
    if (action === 'reset') manualZoom = 0;
    if (action === 'zoom-in') manualZoom = Math.min(manualZoom + .12, .5);
    if (action === 'zoom-out') manualZoom = Math.max(manualZoom - .12, -.3);
    applyState(activeState || 'dfw');
  }));
  render();
  requestAnimationFrame(() => coverageMapLabelsSvg.classList.add('is-ready'));
};
setupCoverageStory();

const calmTestimonials = document.createElement('section');
calmTestimonials.className = 'calm-testimonials';
calmTestimonials.setAttribute('aria-labelledby', 'calm-testimonials-title');
const testimonials = [
  {
    image: 'author-portrait-2.png',
    quote: "We switched to their DTF transfers six months ago and haven't looked back. The color vibrancy is unmatched and our customers keep coming back for more. Best supplier we've worked with.",
    name: 'Sarah M.',
    role: 'Owner, Custom Prints Co.',
  },
  {
    image: 'author-portrait22.png',
    quote: "Their blank tees are the softest we've found at this price point. Combined with their DTF transfers, our turnaround time dropped by half. Game changer for our small shop.",
    name: 'Jordan P.',
    role: 'Owner, Print Lab Supply',
  },
  {
    image: 'author-portrait-1.png',
    quote: "The DTF transfers press perfectly every time. We've had zero issues with adhesion or fading, even on our most demanding orders. Highly recommend.",
    name: 'Maya R.',
    role: 'Owner, Maker Supply Co.',
  },
  {
    image: 'author-portrait.png',
    quote: "The consistency of their blanks is what keeps us coming back. We've tried other suppliers, but the quality here is unmatched. DTF transfers apply like a dream.",
    name: 'Chris T.',
    role: 'Founder, Press & Thread',
  },
  {
    image: 'author-daniela.png',
    quote: "Ink Drop Studio relies on these blanks for all our custom orders. The DTF transfers are easy to weed and the finish is incredibly professional. We've seen a huge increase in repeat business.",
    name: 'Daniela S.',
    role: 'Owner, Ink Drop Studio',
  },
  {
    image: 'author-kevin.png',
    quote: 'Fresh Press Co. has scaled significantly thanks to the reliability of these DTF transfers. The shipping is fast, the quality is consistent, and the customer service is top-tier.',
    name: 'Kevin W.',
    role: 'Owner, Fresh Press Co.',
  },
];
calmTestimonials.innerHTML = `
  <header class="calm-testimonials__header">
    <div class="calm-testimonials__title-block">
      <p class="calm-testimonials__eyebrow">Loved by makers nationwide</p>
      <h2 id="calm-testimonials-title" class="calm-testimonials__title">Real makers, real results</h2>
    </div>
  </header>
  <div class="calm-testimonials__viewport" role="region" aria-roledescription="carousel" aria-label="Customer testimonials">
    <div class="calm-testimonials__grid">
    ${testimonials.map(({ image, quote, name, role }) => `
      <article class="calm-testimonials__column">
        <figure class="calm-testimonials__portrait"><img src="${asset(`calm-testimonials/${image}`)}" alt="" loading="lazy" decoding="async" /></figure>
        <div class="calm-testimonials__details">
          <div class="calm-testimonials__rating" aria-label="5 out of 5 stars">★★★★★</div>
          <p class="calm-testimonials__quote">${quote}</p>
          <img class="calm-testimonials__line" src="${asset('calm-testimonials/line.svg')}" alt="" aria-hidden="true" />
          <div class="calm-testimonials__author"><strong>${name}</strong><span>${role}</span></div>
        </div>
      </article>`).join('')}
    </div>
    <div class="calm-testimonials__buttons" aria-label="Testimonial carousel controls"><button type="button" data-testimonials-prev aria-label="Previous testimonials" disabled>←</button><button type="button" data-testimonials-next aria-label="Next testimonials">→</button></div>
  </div>
  <div class="calm-testimonials__controls"><img class="calm-testimonials__pagination" src="${asset('calm-testimonials/pagination.svg')}" alt="" aria-hidden="true" /></div>`;
pairingExploration.after(calmTestimonials);

const setupTestimonialsCarousel = () => {
  const viewport = calmTestimonials.querySelector('.calm-testimonials__viewport');
  const track = calmTestimonials.querySelector('.calm-testimonials__grid');
  const cards = [...calmTestimonials.querySelectorAll('.calm-testimonials__column')];
  const previous = calmTestimonials.querySelector('[data-testimonials-prev]');
  const next = calmTestimonials.querySelector('[data-testimonials-next]');
  if (!viewport || !track || !cards.length || !previous || !next) return;
  let activeIndex = 0;

  const step = () => {
    const card = cards[0];
    if (!card) return 0;
    return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
  };
  const visibleCards = () => Math.max(1, Math.floor((viewport.clientWidth + 24) / Math.max(1, step())));
  const update = () => {
    const maxIndex = Math.max(0, cards.length - visibleCards());
    activeIndex = Math.min(activeIndex, maxIndex);
    track.style.transform = `translateX(${-activeIndex * step()}px)`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex >= maxIndex;
  };
  const move = (direction) => {
    const maxIndex = Math.max(0, cards.length - visibleCards());
    activeIndex = Math.max(0, Math.min(activeIndex + direction, maxIndex));
    update();
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  addEventListener('resize', update, { passive: true });
  update();
};
setupTestimonialsCarousel();

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
setupStickyAddressGlow(addressSearch, addressPanel);
const deliveryStatus = addressSearch?.querySelector('.jiffy-hero__delivery-status');
const deliveryAddress = addressSearch?.querySelector('.jiffy-hero__delivery-address');
const deliveryWindow = addressSearch?.querySelector('.jiffy-hero__delivery-countdown');
const deliveryProofCountdown = deliveryProof.querySelector('[data-delivery-proof-countdown]');
const coveredHero = document.querySelector('.jiffy-hero__covered');
const coveredAddress = coveredHero?.querySelector('[data-covered-address]');
const coveredMapAddress = coveredHero?.querySelector('[data-covered-map-address]');
const coveredCountdown = coveredHero?.querySelector('[data-covered-countdown]');
const coveredClear = coveredHero?.querySelector('[data-covered-clear]');
const deliveryClear = addressSearch?.querySelector('.jiffy-hero__delivery-clear');
const heroTitle = document.querySelector('#jiffy-hero-title');
const heroLede = document.querySelector('.jiffy-hero__lede');
const heroEyebrow = document.querySelector('.jiffy-hero__eyebrow');
const heroHours = document.querySelector('.jiffy-hero__hours');
const deliveryOutcome = document.querySelector('.jiffy-hero__delivery-outcome');
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
    if (coveredCountdown) coveredCountdown.textContent = countdown;
  };
  render();
  deliveryCountdown = window.setInterval(render, 1000);
};
const isDallasDeliveryAddress = (address) => /\bdallas\b|\b752\d{2}\b/i.test(address);
const showDeliveryStatus = ({ address, deadline, covered = isDallasDeliveryAddress(address) }) => {
  if (!addressSearch || !addressPanel || !deliveryStatus) return;
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
  deliveryProof.hidden = true;
  if (coveredAddress) coveredAddress.textContent = address;
  if (coveredMapAddress) coveredMapAddress.textContent = address;
  if (coveredHero) coveredHero.hidden = false;
  originalHero?.classList.add('is-covered');
  addressInput.value = address;
  addressSearch.classList.add('is-confirmed');
  addressSearch.classList.remove('is-on-light-surface');
  addressSearch.hidden = true;
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
  if (coveredHero) coveredHero.hidden = true;
  originalHero?.classList.remove('is-covered');
  if (addressSearchIsPortaled) restoreAddressSearch();
  addressSearch?.classList.remove('is-sticky', 'is-compact');
  addressSearchAnchor.removeAttribute('style');
  addressSearch?.classList.remove('is-confirmed');
  addressSearch?.classList.remove('is-on-light-surface');
  if (addressSearch) addressSearch.hidden = false;
  if (addressPanel) addressPanel.hidden = false;
  if (deliveryStatus) deliveryStatus.hidden = true;
  if (addressInput) addressInput.value = '';
  if (heroEyebrow) heroEyebrow.hidden = false;
  if (heroHours) heroHours.hidden = false;
  if (deliveryOutcome) { deliveryOutcome.hidden = true; deliveryOutcome.replaceChildren(); }
  if (heroTitle) heroTitle.innerHTML = 'Delivering<br /><mark>Together in Hours.</mark>';
  if (heroLede) heroLede.textContent = 'Order this morning. Press this afternoon.';
  if (heroHours) heroHours.innerHTML = `<img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 10 PM · Printed and driven from Dallas`;
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
deliveryClear?.addEventListener('click', clearDeliveryStatus);
coveredClear?.addEventListener('click', clearDeliveryStatus);
try {
  const savedDelivery = JSON.parse(window.localStorage.getItem(deliveryStateKey));
  if (savedDelivery?.address && savedDelivery.deadline > Date.now()) showDeliveryStatus({ ...savedDelivery, covered: isDallasDeliveryAddress(savedDelivery.address) });
} catch { window.localStorage.removeItem(deliveryStateKey); }
let addressSearchFrame;
const updateAddressSearch = () => {
  addressSearchFrame = undefined;
  if (!addressSearch) return;
  const isSticky = addressSearch.classList.contains('is-sticky');
  // The original hero form scrolls naturally until it reaches the viewport.
  // From that exact point it becomes one stable fixed form; the following
  // sections do not introduce another search-control geometry.
  const sourceTop = isSticky
    ? addressSearchAnchor.getBoundingClientRect().top
    : addressSearch.getBoundingClientRect().top;
  const shouldStick = sourceTop <= 12;
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
  // Keep one stable sticky-bar geometry after the hero; the address control
  // should not resize again when Section 1 reaches the viewport.
  addressSearch.classList.remove('is-compact');
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
let heroTargetGeometry = null;
let heroTargetViewportWidth = 0;

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
  const viewportWidthChanged = heroTargetViewportWidth !== window.innerWidth;
  if (visibleCards.length && (!heroTargetGeometry || viewportWidthChanged)) {
    const shellTop = blanksShell.getBoundingClientRect().top;
    const groupOffset = translateY(blanksCarouselGroup);
    const cardRects = visibleCards.map((card) => card.getBoundingClientRect());
    const rowTops = [];
    cardRects.forEach((rect) => {
      if (!rowTops.some((top) => Math.abs(top - rect.top) < 2)) rowTops.push(rect.top);
    });
    rowTops.sort((a, b) => a - b);
    const firstRowTop = rowTops[0];
    const secondRowTop = rowTops[1];
    const firstRowHeight = Math.max(...cardRects
      .filter((rect) => Math.abs(rect.top - firstRowTop) < 2)
      .map((rect) => rect.height));
    const secondRowHeight = Math.max(...cardRects
      .filter((rect) => Math.abs(rect.top - secondRowTop) < 2)
      .map((rect) => rect.height));
    // Match the editorial card to the two product rows beside it. Keep this
    // measurement stable during the handoff: recalculating it after the
    // catalogue has moved can briefly report one row and shrink the image.
    if (Number.isFinite(secondRowTop) && Number.isFinite(firstRowHeight) && Number.isFinite(secondRowHeight)) {
      const twoRowHeight = (secondRowTop - firstRowTop) + Math.max(firstRowHeight, secondRowHeight);
      if (twoRowHeight > 0) {
        heroTargetGeometry = {
          top: firstRowTop - shellTop - groupOffset,
          height: twoRowHeight,
        };
        heroTargetViewportWidth = window.innerWidth;
      }
    }
  }
  if (heroTargetGeometry) {
    blanksShell.style.setProperty('--hero-target-top', `${heroTargetGeometry.top.toFixed(1)}px`);
    blanksShell.style.setProperty('--hero-target-height', `${heroTargetGeometry.height.toFixed(1)}px`);
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
window.addEventListener('resize', () => {
  heroTargetGeometry = null;
  heroTargetViewportWidth = 0;
  renderAllStories();
});
renderAllStories();
