const asset = (file) => `${import.meta.env.BASE_URL}figma/${file}`;

const proofs = [
  { image: 'tiger-transfer-hero.png', title: 'Vibrant color', subtitle: 'Rich, consistent colors that last.' },
  { image: 'tiger-proof-detail.png', title: 'Crisp detail', subtitle: 'Prints fine lines and complex artwork.' },
  { image: 'tiger-proof-peel.png', title: 'Clean peel', subtitle: 'Hot or cold peel. No hassle.' },
  { image: 'tiger-proof-worn.png', title: 'Fast processing', subtitle: 'Printed and ready for local delivery.' },
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
      <source src="${asset('jiffy-hero-video.mp4')}?v=3" type="video/mp4" />
    </video>
    <div class="jiffy-hero__shade"></div>
    <header class="jiffy-hero__nav">
      <div class="jiffy-hero__brand"><img class="jiffy-hero__logo" src="${asset('jiffy-local-logo.svg')}" alt="Jiffy" /><span class="jiffy-hero__location">DALLAS-FORT WORTH</span></div>
      <nav class="jiffy-hero__links" aria-label="Main navigation"><a href="#transfers-section" data-nav-scroll="transfers">Transfers</a><a href="#blanks-section" data-nav-scroll="blanks">Blanks</a><span class="jiffy-hero__coming-soon" tabindex="0" aria-disabled="true">Custom<span role="tooltip">Available soon</span></span><div class="jiffy-hero__variant-switcher"><button class="jiffy-hero__sign-in" type="button" aria-expanded="false" aria-controls="section-one-variants">Sign in</button><div class="jiffy-hero__variant-menu" id="section-one-variants" hidden><button type="button" data-quality-variant="v1">Section 1 · V1</button><button type="button" data-quality-variant="v2">Section 1 · V2</button><button type="button" data-quality-variant="v3">Section 1 · V3</button></div></div></nav>
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
          <span class="jiffy-hero__delivery-address-group"><small>Delivering to</small><span class="jiffy-hero__delivery-address"></span></span>
          <span class="jiffy-hero__delivery-divider" aria-hidden="true"></span>
          <span class="jiffy-hero__delivery-window"><small>Next delivery window</small><strong>Today, 2 – 4 PM</strong><em>Order within <b class="jiffy-hero__delivery-countdown">--:--:--</b></em></span>
          <button class="jiffy-hero__delivery-clear" type="button" aria-label="Clear delivery address">×</button>
        </div>
      </form>
      <p class="jiffy-hero__hours"><img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 7 PM · Printed and driven from Dallas</p>
      <div class="jiffy-hero__delivery-outcome" hidden aria-live="polite"></div>
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
          <span class="hero-art__reflection" aria-hidden="true"></span>
          <button class="upload-button upload-button--quiet" type="button">Upload artwork</button>
          <input id="artwork-input" type="file" accept="image/png,image/jpeg,application/pdf" hidden />
        </article>

        <div class="quality-rack" aria-label="Quality proof gallery">
          ${proofs.map((proof, index) => `
            <figure class="proof-card proof-card--${index + 1}">
              <img src="${asset(proof.image)}" alt="${proof.title} proof for a DTF transfer" />
              <figcaption><strong>${proof.title}</strong><span>${proof.subtitle}</span></figcaption>
            </figure>
          `).join('')}
        </div>

        <aside class="conversion-panel" aria-label="Choose a DTF transfer path">
          <header class="conversion-panel__heading"><h2>Start with your artwork</h2><p>Choose how you want to build and scale your custom print transfers.</p></header>
          <div class="transfer-paths">
          <a class="transfer-choice" href="https://www.jiffy.com/transfers">
            <div class="transfer-choice__thumbnail"><img src="${asset('image50.png')}" alt="" /></div>
            <div class="transfer-choice__info"><div class="transfer-choice__title-row"><strong>DTF Transfers by size</strong><p class="transfer-choice__price"><b>from $0.06</b><small>/ sq. in.</small></p></div><p>Upload a single design, set your custom dimensions, and let us handle the rest. Perfect for individual logos, chest prints, or large back graphics.</p></div>
            <div class="transfer-choice__action"><img src="${asset('cloud-upload.svg')}" alt="" /><span>Upload your design</span></div>
          </a>
          <a class="transfer-choice" href="https://www.jiffy.com/jiffytransfers-DTFGANG001.html">
            <div class="transfer-choice__thumbnail"><img src="${asset('image52.png')}" alt="" /></div>
            <div class="transfer-choice__info"><div class="transfer-choice__title-row"><strong>Gang sheet-DTF transfers</strong><p class="transfer-choice__price"><b>from $11.59</b><small>/ foot</small></p></div><p>Maximize your value. Arrange multiple designs, duplicates, or varied sizes on a single roll. Use our interactive builder to pack your artwork efficiently.</p></div>
            <div class="transfer-choice__action"><i class="transfer-choice__grid" aria-hidden="true"></i><span>Build your gang sheet</span></div>
          </a>
          </div>
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
          <img src="${asset(proof.image)}" alt="${proof.title} proof for a DTF transfer" />
          <figcaption><strong>${proof.title}</strong><span>${proof.subtitle}</span></figcaption>
        </figure>
      `).join('')}
    </div>
  </section>
`;

const story = document.querySelector('.quality-story');
story.classList.add('quality-story--v1');
const compareStory = story.cloneNode(true);
compareStory.classList.add('quality-story--compare');
compareStory.classList.add('quality-story--v2', 'is-active');
compareStory.id = 'transfers-section';
compareStory.setAttribute('aria-label', 'Alternative Jiffy Local DTF quality story');
compareStory.querySelector('.hero-art').insertAdjacentHTML('afterbegin', `
  <div class="compare-hero-title"><h2>Your design.<br />Our quality.</h2></div>
`);
document.querySelector('.static-quality-compare').replaceWith(compareStory);
const carouselStory = story.cloneNode(true);
carouselStory.classList.add('quality-story--carousel');
carouselStory.classList.add('quality-story--v3');
carouselStory.id = 'transfers-section-v3';
carouselStory.setAttribute('aria-label', 'Carousel Jiffy Local DTF quality story');
compareStory.after(carouselStory);

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
      <article class="blanks-hero-art" aria-label="Blank apparel for a local tomorrow">
        <img src="${asset('blanks-editorial-hero.png')}" alt="Person wearing a blank shirt" />
        <div class="blanks-art-copy blanks-art-copy--top">Same<br />good<br />ideas<br />a brighter<br />DFW <span></span></div>
        <div class="blanks-art-copy blanks-art-copy--bottom">Blanks<br />for a more<br />local tomorrow <span></span></div>
        <div class="blanks-hero-title" aria-hidden="true">
          <p>Blank apparel</p>
          <h2>Choose the blank<br />that fits the idea<span>.</span></h2>
          <small>Scroll to compare 20+ styles</small>
        </div>
      </article>
      <main class="blanks-content">
        <div class="blanks-content-copy">
          <h2>Choose the blank<br />that fits the idea<span>.</span></h2>
          <p>Compare materials, weight, fit, and color before you choose.</p>
        </div>
      </main>
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
carouselStory.after(blanksSection);

// New S3: the quality showroom is the first visible experience. The older
// exploratory S1/S2/S3 variants remain in the file for reference but are
// deliberately hidden so they cannot compete with this single source of UI.
const s3Showroom = document.createElement('section');
s3Showroom.className = 's3-showroom';
s3Showroom.id = 'transfers-section';
s3Showroom.setAttribute('aria-labelledby', 's3-title');
s3Showroom.innerHTML = `
  <div class="s3-sticky">
    <div class="s3-canvas">
      <header class="s3-nav">
        <a href="#transfers-section" class="s3-logo-link" aria-label="Jiffy home"><img src="${asset('jiffy-local-logo.svg')}" alt="Jiffy Local" /></a>
        <span class="s3-location">DALLAS–FORT WORTH</span>
      </header>
      <div class="s3-copy">
        <p class="s3-eyebrow">DTF PROOF OF QUALITY</p>
        <h1 id="s3-title">Your design.<br />Our quality<span>.</span></h1>
        <p class="s3-lede">Richer detail. Truer color.<br />A higher standard in every transfer.</p>
      </div>
      <div class="s3-stage" aria-live="polite">
        <figure class="s3-frame s3-frame--anchor is-active"><img src="${asset('tiger-proof-worn.png')}" alt="Vivid tiger DTF transfer applied to a white shirt" /><figcaption><strong>Your design. Our quality.</strong><span>Finished, ready-to-wear DTF.</span></figcaption></figure>
        <figure class="s3-frame"><img src="${asset('tiger-transfer-hero.png')}" alt="Jiffy tiger DTF transfer held on clear film" /><figcaption><strong>Competitor vs. Jiffy</strong><span>Sharper, denser, cleaner transfer results.</span></figcaption></figure>
        <figure class="s3-frame"><img src="${asset('tiger-proof-detail.png')}" alt="Close-up of tiger DTF artwork" /><span class="s3-analysis-mark s3-analysis-mark--one" aria-hidden="true"></span><span class="s3-analysis-mark s3-analysis-mark--two" aria-hidden="true"></span><figcaption><strong>AI process</strong><span>Artwork analyzed and prepared for print.</span></figcaption></figure>
        <figure class="s3-frame"><img src="${asset('tiger-proof-peel.png')}" alt="Hand peeling DTF film from a printed shirt" /><figcaption><strong>Hot peel</strong><span>Clean release immediately after pressing.</span></figcaption></figure>
        <figure class="s3-frame"><img src="${asset('tiger-proof-color.png')}" alt="Macro view of vivid blue, orange, and black DTF detail" /><figcaption><strong>Color accuracy</strong><span>True color with fine detail, up close.</span></figcaption></figure>
      </div>
      <nav class="s3-index" aria-label="Explore quality proof">
        <button type="button" class="is-active" data-s3-step="1"><i></i><span>Competitor vs. Jiffy</span></button>
        <button type="button" data-s3-step="2"><i></i><span>AI process</span></button>
        <button type="button" data-s3-step="3"><i></i><span>Hot peel</span></button>
        <button type="button" data-s3-step="4"><i></i><span>Color accuracy</span></button>
      </nav>
      <button class="s3-upload" type="button" aria-label="Upload artwork. Drag and drop a file or select one."><span class="s3-upload-icon" aria-hidden="true">↑</span><span><strong>Upload artwork</strong><small>Drag &amp; drop or select a file</small></span></button>
      <input class="s3-file-input" type="file" accept="image/png,image/jpeg,application/pdf" hidden />
      <div class="s3-progress" aria-label="Quality proof controls"><button type="button" class="s3-arrow" data-s3-prev aria-label="Previous quality proof">←</button><span class="s3-progress-track" aria-hidden="true"><i></i></span><span class="s3-progress-count"><b>01</b><em>/ 05</em></span><button type="button" class="s3-arrow" data-s3-next aria-label="Next quality proof">→</button></div>
    </div>
  </div>
</section>`;
document.querySelector('#app').prepend(s3Showroom);
const originalHero = document.querySelector('.jiffy-hero');
originalHero?.after(s3Showroom);
const localPromiseStrip = document.createElement('section');
localPromiseStrip.className = 'local-promise-strip';
localPromiseStrip.setAttribute('aria-label', 'Jiffy Local advantages');
localPromiseStrip.innerHTML = `
  <div class="local-promise-strip__inner">
    <article class="local-promise-strip__item local-promise-strip__item--delivery" data-promise-item>
      <div class="local-promise-strip__copy"><p>Local delivery</p><h2>First local<br />delivery <mark>free.</mark></h2><span>Get your order delivered in the Dallas–Fort Worth area. On us.</span></div>
    </article>
    <article class="local-promise-strip__item local-promise-strip__item--apparel" data-promise-item>
      <div class="local-promise-strip__shirts" aria-hidden="true"><img src="${asset('product-figma-2.png')}" alt="" /><img src="${asset('product-figma-3.png')}" alt="" /><img src="${asset('product-figma-4.png')}" alt="" /></div>
      <div class="local-promise-strip__copy"><p>Apparel</p><h2>20+ shirt styles<br />from <mark>$2.41.</mark></h2><span>Premium blanks from leading brands, ready for your design.</span></div>
    </article>
    <article class="local-promise-strip__item local-promise-strip__item--printing" data-promise-item>
      <img class="local-promise-strip__print-image" src="${asset('s1v3-transfer-film.png')}" alt="DTF transfer film detail" />
      <div class="local-promise-strip__copy"><p>Custom printing</p><h2>Custom direct<br />to film from<br /><mark>$0.02 per line.</mark></h2><span>High-quality DTF printing for any design, big or small.</span></div>
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
document.querySelectorAll('.quality-story, .static-quality-compare').forEach((element) => {
  element.hidden = true;
  element.setAttribute('aria-hidden', 'true');
});

const setupS3Showroom = (showroom) => {
  // Keep this controller self-contained. The page has other scroll stories
  // below it, so it must never depend on a later story helper being initialized.
  const clampS3 = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const index = showroom.querySelector('.s3-index');
  showroom.querySelector('.s3-copy').append(index);
  const frames = [...showroom.querySelectorAll('.s3-frame')];
  const items = [...showroom.querySelectorAll('[data-s3-step]')];
  const fileInput = showroom.querySelector('.s3-file-input');
  const upload = showroom.querySelector('.s3-upload');
  const title = showroom.querySelector('h1');
  const lede = showroom.querySelector('.s3-lede');
  const progressCount = showroom.querySelector('.s3-progress-count b');
  const progressTotal = showroom.querySelector('.s3-progress-count em');
  const progressTrack = showroom.querySelector('.s3-progress-track');
  let autoStep = 0;
  let stepStartedAt = performance.now();
  let lastStep = 0;
  const lastFrame = frames.length - 1;
  const autoplayDuration = 3200;
  const render = () => {
    const bounds = showroom.getBoundingClientRect();
    const maxScroll = Math.max(1, showroom.offsetHeight - innerHeight);
    const sectionProgress = clampS3(-bounds.top / maxScroll);
    const isScrollControlled = sectionProgress > 0.08;
    const scrollPosition = sectionProgress * lastFrame;
    const scrollStep = clampS3(Math.round(scrollPosition), 0, lastFrame);
    const step = isScrollControlled ? scrollStep : clampS3(autoStep, 0, lastFrame);
    if (step !== lastStep) {
      stepStartedAt = performance.now();
      lastStep = step;
    }
    frames.forEach((frame, frameIndex) => frame.classList.toggle('is-active', frameIndex === step));
    const activeCopy = frames[step]?.querySelector('figcaption');
    if (activeCopy && step > 0) {
      title.textContent = activeCopy.querySelector('strong').textContent;
      lede.textContent = activeCopy.querySelector('span').textContent;
    } else {
      title.innerHTML = 'Your design.<br />Our quality<span>.</span>';
      lede.innerHTML = 'Richer detail. Truer color.<br />A higher standard in every transfer.';
    }
    items.forEach((item, index) => {
      item.classList.toggle('is-active', index === Math.max(0, step - 1));
      item.setAttribute('aria-current', index === Math.max(0, step - 1) ? 'step' : 'false');
    });
    showroom.style.setProperty('--s3-step', step);
    progressCount.textContent = String(step + 1).padStart(2, '0');
    progressTotal.textContent = `/ ${String(frames.length).padStart(2, '0')}`;
    if (isScrollControlled) {
      const localProgress = (scrollPosition - Math.floor(scrollPosition)) * 100;
      progressTrack.style.setProperty('--s3-fill', `${localProgress}%`);
    } else {
      progressTrack.style.setProperty('--s3-fill', '0%');
    }
  };
  showroom.querySelector('[data-s3-prev]').addEventListener('click', () => { autoStep = (autoStep + lastFrame) % frames.length; stepStartedAt = performance.now(); render(); });
  showroom.querySelector('[data-s3-next]').addEventListener('click', () => { autoStep = (autoStep + 1) % frames.length; stepStartedAt = performance.now(); render(); });
  items.forEach((item) => item.addEventListener('click', () => {
    const targetStep = Number(item.dataset.s3Step);
    autoStep = targetStep;
    stepStartedAt = performance.now();
    const maxScroll = Math.max(1, showroom.offsetHeight - innerHeight);
    const targetTop = showroom.offsetTop + (targetStep / lastFrame) * maxScroll;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  }));
  upload.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    if (fileInput.files?.[0]) upload.querySelector('strong').textContent = 'Artwork selected';
  });
  upload.addEventListener('dragover', (event) => { event.preventDefault(); upload.classList.add('is-dragging'); });
  upload.addEventListener('dragleave', () => upload.classList.remove('is-dragging'));
  upload.addEventListener('drop', (event) => {
    event.preventDefault();
    upload.classList.remove('is-dragging');
    const file = event.dataTransfer.files?.[0];
    if (file) upload.querySelector('strong').textContent = 'Artwork selected';
  });
  window.addEventListener('scroll', render, { passive: true });
  window.addEventListener('resize', render);
  requestAnimationFrame(render);
  const animateAutoplay = (now) => {
    if (!document.hidden) {
      const bounds = showroom.getBoundingClientRect();
      const maxScroll = Math.max(1, showroom.offsetHeight - innerHeight);
      const sectionProgress = clampS3(-bounds.top / maxScroll);
      const isScrollControlled = sectionProgress > 0.08;
      const isAtStart = bounds.top <= 24 && bounds.bottom >= innerHeight * 0.85 && !isScrollControlled;
      if (isAtStart) {
        const elapsed = now - stepStartedAt;
        if (elapsed >= autoplayDuration) {
          autoStep = (autoStep + 1) % frames.length;
          stepStartedAt = now;
          render();
        }
        progressTrack.style.setProperty('--s3-fill', `${Math.min(100, Math.max(0, (elapsed / autoplayDuration) * 100))}%`);
      } else if (isScrollControlled) {
        const scrollPosition = sectionProgress * lastFrame;
        const localProgress = (scrollPosition - Math.floor(scrollPosition)) * 100;
        progressTrack.style.setProperty('--s3-fill', `${localProgress}%`);
      }
    }
    requestAnimationFrame(animateAutoplay);
  };
  requestAnimationFrame(animateAutoplay);
};
setupS3Showroom(s3Showroom);

// S1 V1: an isolated scroll-to-carousel variant below the locked showroom.
// It reuses the approved quality images and copy, but owns its own state so
// the existing S1/S3 experience above remains unchanged.
const s1v1Cards = [
  { image: 'tiger-proof-worn.png', title: 'Your design. Our quality.', subtitle: 'Richer detail. Truer color. A higher standard in every transfer.' },
  { image: 'tiger-proof-detail.png', title: 'AI process', subtitle: 'Artwork analyzed and prepared for print.' },
  { image: 'tiger-proof-peel.png', title: 'Hot peel', subtitle: 'Clean release immediately after pressing.' },
  { image: 'tiger-proof-color.png', title: 'Color accuracy', subtitle: 'True color with fine detail, up close.' },
  { image: 'tiger-transfer-hero.png', title: 'Competitor vs. Jiffy', subtitle: 'Sharper, denser, cleaner transfer results.' },
];

const s1v1 = document.createElement('section');
s1v1.className = 's1v1-story';
s1v1.id = 'transfers-section-s1v1';
s1v1.setAttribute('aria-labelledby', 's1v1-title');
s1v1.innerHTML = `
  <div class="s1v1-sticky">
    <div class="s1v1-canvas">
      <header class="s1v1-nav">
        <a href="#transfers-section-s1v1" class="s1v1-logo" aria-label="Jiffy Local"><img src="${asset('jiffy-local-logo.svg')}" alt="Jiffy" /></a>
        <span>DALLAS–FORT WORTH</span>
      </header>

      <div class="s1v1-carousel" aria-live="polite" aria-label="DTF quality examples">
        ${s1v1Cards.map(({ image, title, subtitle }, index) => `
          <figure class="s1v1-card${index === 0 ? ' s1v1-first-card' : ''}" data-s1v1-card="${index}">
            <img src="${asset(image)}" alt="${title} proof for a DTF transfer" />
            <figcaption>
              <p class="s1v1-card-eyebrow">DTF PROOF OF QUALITY</p>
              <strong>${index === 0 ? 'Your design.<br />Our quality<span>.</span>' : title}</strong>
              <span>${subtitle}</span>
            </figcaption>
          </figure>
        `).join('')}
      </div>

      <div class="s1v1-actions" aria-label="Choose how to continue">
        <button class="s1v1-action s1v1-action--upload" type="button" aria-label="Upload artwork. Drag and drop a file or select one.">
          <span><strong>Upload your artwork</strong><small>Drag &amp; drop or select a file</small></span>
        </button>
        <a class="s1v1-action" href="https://www.jiffy.com/transfers">
          <span><strong>Shop transfers by size</strong><small>Choose the exact dimensions you need</small></span>
        </a>
        <a class="s1v1-action" href="https://www.jiffy.com/jiffytransfers-DTFGANG001.html">
          <span><strong>Build a gang sheet</strong><small>Pack more artwork into one sheet</small></span>
        </a>
      </div>
      <input class="s1v1-file-input" type="file" accept="image/png,image/jpeg,application/pdf" hidden />

      <div class="s1v1-controls" aria-label="Quality carousel controls">
        <button type="button" data-s1v1-prev aria-label="Previous quality example">←</button>
        <span class="s1v1-progress-track" aria-hidden="true"><i></i></span>
        <span class="s1v1-count"><b>01</b><em>/ 05</em></span>
        <button type="button" data-s1v1-next aria-label="Next quality example">→</button>
      </div>
    </div>
  </div>
`;
s3Showroom.after(s1v1);

const setupS1V1 = (section) => {
  const cards = [...section.querySelectorAll('.s1v1-card')];
  const progressTrack = section.querySelector('.s1v1-progress-track');
  const count = section.querySelector('.s1v1-count b');
  const fileInput = section.querySelector('.s1v1-file-input');
  const upload = section.querySelector('.s1v1-action--upload');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const autoplayDuration = 4000;
  let activeIndex = 0;
  let copyTimer;
  let startedAt = performance.now();
  let frame;
  let hasRevealed = false;
  let carouselStarted = false;
  let autoplayFinished = false;

  const clampLocal = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const easeLocal = (value) => value * value * (3 - 2 * value);

  const renderCards = () => {
    cards.forEach((card, index) => {
      const distance = index - activeIndex;
      card.classList.toggle('is-active', distance === 0);
      card.classList.toggle('is-next', carouselStarted && distance === 1);
      card.classList.toggle('is-prev', carouselStarted && distance === -1);
      card.classList.toggle('is-behind', carouselStarted && distance > 1);
      card.classList.toggle('is-past', carouselStarted && distance < -1);
      card.classList.remove('is-copy-ready');
      card.style.setProperty('--s1v1-distance', distance);
    });
    window.clearTimeout(copyTimer);
    if (hasRevealed) {
      copyTimer = window.setTimeout(() => {
        cards[activeIndex]?.classList.add('is-copy-ready');
      }, 260);
    }
    count.textContent = String(activeIndex + 1).padStart(2, '0');
    autoplayFinished = activeIndex === cards.length - 1;
    section.classList.toggle('is-carousel-finished', autoplayFinished);
    startedAt = performance.now();
  };

  const move = (direction) => {
    if (!carouselStarted) {
      if (direction < 0) return;
      carouselStarted = true;
      activeIndex = 0;
    }
    const nextIndex = activeIndex + direction;
    if (nextIndex < 0 || nextIndex >= cards.length) return;
    section.classList.add('is-carousel-started');
    activeIndex = nextIndex;
    renderCards();
  };

  const renderScroll = () => {
    frame = undefined;
    const bounds = section.getBoundingClientRect();
    const maxScroll = Math.max(1, section.offsetHeight - innerHeight);
    const progress = clampLocal(-bounds.top / maxScroll);
    const reveal = easeLocal(clampLocal((progress - .06) / .22));
    const inView = bounds.top < innerHeight && bounds.bottom > 0;
    if (reveal > .72 && !hasRevealed) {
      hasRevealed = true;
      startedAt = performance.now();
      window.clearTimeout(copyTimer);
      copyTimer = window.setTimeout(() => cards[activeIndex]?.classList.add('is-copy-ready'), 260);
    }
    section.style.setProperty('--s1v1-reveal', reveal.toFixed(3));
    section.classList.toggle('is-revealed', reveal > .72);
    section.classList.toggle('is-in-view', inView);
    progressTrack.style.setProperty('--s1v1-fill', `${Math.min(100, ((performance.now() - startedAt) / autoplayDuration) * 100)}%`);
  };

  const queueScroll = () => {
    if (!frame) frame = requestAnimationFrame(renderScroll);
  };

  section.querySelector('[data-s1v1-prev]').addEventListener('click', () => move(-1));
  section.querySelector('[data-s1v1-next]').addEventListener('click', () => move(1));
  upload.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    if (fileInput.files?.[0]) upload.querySelector('strong').textContent = 'Artwork selected';
  });
  upload.addEventListener('dragover', (event) => {
    event.preventDefault();
    upload.classList.add('is-dragging');
  });
  upload.addEventListener('dragleave', () => upload.classList.remove('is-dragging'));
  upload.addEventListener('drop', (event) => {
    event.preventDefault();
    upload.classList.remove('is-dragging');
    if (event.dataTransfer.files?.[0]) upload.querySelector('strong').textContent = 'Artwork selected';
  });
  window.addEventListener('scroll', queueScroll, { passive: true });
  window.addEventListener('resize', queueScroll);
  renderCards();
  renderScroll();

  const animate = (now) => {
    const bounds = section.getBoundingClientRect();
    const maxScroll = Math.max(1, section.offsetHeight - innerHeight);
    const progress = clampLocal(-bounds.top / maxScroll);
    const reveal = easeLocal(clampLocal((progress - .06) / .22));
    const inView = bounds.top < innerHeight && bounds.bottom > 0;
    if (!reducedMotion.matches && reveal > .72 && inView && !autoplayFinished && !document.hidden && now - startedAt >= autoplayDuration) move(1);
    if (reveal > .72 && inView) progressTrack.style.setProperty('--s1v1-fill', `${Math.min(100, ((now - startedAt) / autoplayDuration) * 100)}%`);
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);
};
setupS1V1(s1v1);

// S1 V3: a compact, persistent upload panel paired with the quality carousel.
// This is a separate experiment so the approved S1 and S1V1 experiences stay intact.
const s1v3Cards = [
  { image: 'tiger-transfer-hero.png', title: 'Competitor vs. Jiffy', subtitle: 'Sharper, denser, cleaner transfer results.', description: 'Compare fine edges, solid coverage, and a cleaner finish against the competing transfer.' },
  { image: 'tiger-proof-detail.png', title: 'AI process', subtitle: 'Artwork analyzed and prepared for print.', description: 'Your artwork is checked and prepared before print so detail and color stay true to the design.' },
  { image: 'tiger-proof-peel.png', title: 'Hot peel', subtitle: 'Clean release immediately after pressing.', description: 'A clean release immediately after pressing means less waiting between the press and the finished garment.' },
  { image: 'tiger-proof-color.png', title: 'Color accuracy', subtitle: 'True color with fine detail, up close.', description: 'Richer detail and truer color set a higher standard in every transfer.' },
];

const s1v3 = document.createElement('section');
s1v3.className = 's1v3-story';
s1v3.id = 'transfers-section-s1v3';
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
        <img src="${asset('s1v3-transfer-film.png')}" alt="A dark emerald DTF transfer film held by two hands" />
        <span class="s1v3-hero-shade" aria-hidden="true"></span>
        <figcaption class="s1v3-hero-copy">
          <p class="s1v3-eyebrow">DTF PROOF OF QUALITY</p>
          <strong>Your design.<br />Our quality<span>.</span></strong>
          <span>Richer detail. Truer color.<br />A higher standard in every transfer.</span>
        </figcaption>
        <button class="s1v3-upload" type="button" aria-label="Upload artwork. Drag and drop a file or select one.">
          <span class="s1v3-upload-icon"><img src="${asset('cloud-upload.svg')}" alt="" /></span>
          <strong class="s1v3-upload-drag">Drag your artwork</strong>
          <small class="s1v3-upload-subtitle">Drop a file anywhere in this panel</small>
          <span class="s1v3-upload-or" aria-hidden="true"><i></i><b>or</b><i></i></span>
          <span class="s1v3-upload-files">Upload from your files <b aria-hidden="true">↗</b></span>
          <small class="s1v3-upload-meta">PNG, JPG, or PDF&nbsp; · &nbsp;up to 50 MB</small>
        </button>
        <input class="s1v3-file-input" type="file" accept="image/png,image/jpeg,application/pdf" hidden />
      </figure>

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
            <button type="button" class="${index === 0 ? 'is-active' : ''}" data-s1v3-step="${index}" aria-current="${index === 0 ? 'step' : 'false'}">
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
s1v1.after(s1v3);

const setupS1V3 = (section) => {
  const cards = [...section.querySelectorAll('.s1v3-card')];
  const indexItems = [...section.querySelectorAll('[data-s1v3-step]')];
  const fileInput = section.querySelector('.s1v3-file-input');
  const upload = section.querySelector('.s1v3-upload');
  const autoplayDuration = 10000;
  let activeIndex = 0;
  let reveal = 0;
  let hasRevealed = false;
  let renderToken = 0;
  let copyTimer;
  let autoplayTimer;

  const isInView = () => {
    const bounds = section.getBoundingClientRect();
    return bounds.top < innerHeight && bounds.bottom > 0;
  };

  const scheduleAutoplay = () => {
    window.clearTimeout(autoplayTimer);
    if (!hasRevealed) return;
    autoplayTimer = window.setTimeout(() => {
      if (!document.hidden && isInView()) move(1);
      scheduleAutoplay();
    }, autoplayDuration);
  };

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
    else if (hasRevealed) copyTimer = window.setTimeout(() => cards[activeIndex]?.classList.add('is-copy-ready'), 280);
    if (!immediate && direction) {
      void cards[activeIndex]?.offsetWidth;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (token === renderToken) section.querySelector('.s1v3-card.is-active')?.classList.add('is-settled');
      }));
    }
  };

  const move = (direction) => {
    activeIndex = (activeIndex + direction + cards.length) % cards.length;
    render(direction);
  };

  indexItems.forEach((item) => item.addEventListener('click', () => {
    const target = Number(item.dataset.s1v3Step);
    if (target === activeIndex) return;
    const direction = target > activeIndex ? 1 : -1;
    activeIndex = target;
    render(direction);
    scheduleAutoplay();
  }));
  upload.addEventListener('click', () => fileInput.click());
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
    if (reveal > .72 && !hasRevealed) {
      hasRevealed = true;
      cards[activeIndex]?.classList.add('is-copy-ready');
      scheduleAutoplay();
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
  ['apparel-v2-product-1.png', 'tees', 'GILDAN · G500', 'Heavy Cotton™ T-Shirt', '$3.49', '$2.59'],
  ['apparel-v2-product-2.png', 'tees', 'GILDAN · G500', 'Heavy Cotton™ T-Shirt', '$3.49', '$2.59'],
  ['blanks-product-1.png', 'tees', 'GILDAN · G640', 'Softstyle® T-Shirt', '$3.29', '$2.49'],
  ['product-figma-1.png', 'tees', 'GILDAN · G640', 'Softstyle® T-Shirt', '$3.29', '$2.49'],
  ['blanks-product-3.png', 'tees', 'COMFORT COLORS · C1717', 'Heavyweight RS T-Shirt', '$8.99', '$6.89'],
  ['product-figma-2.png', 'tees', 'COMFORT COLORS · C1717', 'Heavyweight RS T-Shirt', '$8.99', '$6.89'],
  ['apparel-v2-product-5.png', 'tees', 'GILDAN · G300', 'Light Cotton T-Shirt', '$2.59', '$1.89'],
  ['blanks-product-2.png', 'tees', 'GILDAN · G300', 'Light Cotton T-Shirt', '$2.59', '$1.89'],
  ['apparel-v2-product-4.png', 'fleece', 'GILDAN · G180', 'Heavy Blend 50/50 Fleece Crew', '$9.49', '$7.31'],
  ['apparel-v2-product-7.png', 'fleece', 'GILDAN · G180', 'Heavy Blend 50/50 Fleece Crew', '$9.49', '$7.31'],
  ['apparel-v2-product-2.png', 'tees', 'GILDAN · G800', 'Unisex 50/50 T-Shirt', '$3.29', '$2.49'],
  ['product-figma-3.png', 'tees', 'GILDAN · G800', 'Unisex 50/50 T-Shirt', '$3.29', '$2.49'],
  ['apparel-v2-product-1.png', 'tees', 'GILDAN · G500B', 'Youth Heavy Cotton T-Shirt', '$3.79', '$2.62'],
  ['blanks-product-1.png', 'tees', 'GILDAN · G500B', 'Youth Heavy Cotton T-Shirt', '$3.79', '$2.62'],
  ['product-figma-1.png', 'tees', 'BELLA + CANVAS · 3001C', 'Unisex Jersey T-Shirt', '$5.19', '$4.29'],
  ['apparel-v2-product-5.png', 'tees', 'BELLA + CANVAS · 3001C', 'Unisex Jersey T-Shirt', '$5.19', '$4.29'],
  ['apparel-v2-product-3.png', 'hoodies', 'GILDAN · G185', 'Heavy Blend 50/50 Hoodie', '$12.99', '$9.76'],
  ['apparel-v2-product-6.png', 'hoodies', 'GILDAN · G185', 'Heavy Blend 50/50 Hoodie', '$12.99', '$9.76'],
  ['product-figma-4.png', 'performance', 'A4 · N3142', 'Men’s Cooling Performance T-Shirt', '$4.89', '$3.99'],
  ['apparel-v2-product-8.png', 'performance', 'A4 · N3142', 'Men’s Cooling Performance T-Shirt', '$4.89', '$3.99'],
];

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
            ${apparelV3Items.map(([image, category, brand, name, wasPrice, price]) => `
              <a class="apparel-v3__card" data-category="${category}" href="https://www.jiffy.com/" aria-label="${brand} ${name}, now from ${price}">
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
// available in one view, with chips providing the only lightweight control.
const finalBlanksCatalog = blanksSection.querySelector('.blanks-carousel-group');
finalBlanksCatalog.innerHTML = `
  <div class="blanks-static-toolbar">
    <div class="blanks-static-filters" role="group" aria-label="Filter blank apparel">
      <button type="button" class="is-active" data-apparel-filter="all" aria-pressed="true">All <span>20</span></button>
      <button type="button" data-apparel-filter="tees" aria-pressed="false">T-shirts <span>14</span></button>
      <button type="button" data-apparel-filter="fleece" aria-pressed="false">Fleece <span>2</span></button>
      <button type="button" data-apparel-filter="hoodies" aria-pressed="false">Hoodies <span>2</span></button>
      <button type="button" data-apparel-filter="performance" aria-pressed="false">Performance <span>2</span></button>
    </div>
    <p aria-live="polite"><b>20</b> blank styles</p>
  </div>
  <div class="blanks-static-grid" aria-label="Blank apparel styles">
    ${apparelV3Items.map(([image, category, brand, name, wasPrice, price]) => `
      <a href="https://www.jiffy.com/" class="blanks-product" data-category="${category}" aria-label="${brand} ${name}, now from ${price}">
        <img src="${asset(image)}" alt="${name}" />
        <small>${brand}</small><strong>${name}</strong>
        <span class="blanks-product__price"><em>was ${wasPrice}</em><b>from ${price}</b></span>
        <span class="blanks-product__rating">★★★★<i>★</i> <em>(2,500)</em></span>
      </a>`).join('')}
  </div>`;

apparelV2.remove();
apparelV3.remove();
carouselStory.after(blanksSection);

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
              <em aria-hidden="true">01</em><span><b id="coverage-story-title">Dallas–Fort Worth<span>.</span></b><small>Jiffy Local. Right here.</small></span>
            </button>
            <div class="coverage-story__index-details">
              <p>Transfers and blanks from the Jiffy micro-factory.</p>
              <aside class="coverage-story__panel-service" aria-label="Jiffy Local delivery details">
                <span>Jiffy Local</span><i aria-hidden="true"></i><span>5 AM–10 PM · 7 days</span><i aria-hidden="true"></i><strong>Free at $59+ · blanks + transfers</strong>
              </aside>
            </div>
          </article>
          <article class="coverage-story__index-item" data-coverage-item="1">
            <button type="button" data-coverage-step="1" aria-expanded="false">
              <em aria-hidden="true">02</em><span><b>Texas<span>.</span></b><small>Jiffy 1st. Next day.</small></span>
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
    <p class="shop-in-range__trust"><img src="${asset('shop-in-range-clock.svg')}" alt="" />7 days a week · 5 AM – 7 PM · Printed and driven from Dallas</p>
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
      ? document.querySelector('.quality-story.is-active')
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
    if (deliveryWindow) deliveryWindow.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  render();
  deliveryCountdown = window.setInterval(render, 1000);
};
const isDallasDeliveryAddress = (address) => /\bdallas\b|\b752\d{2}\b/i.test(address);
const showDeliveryStatus = ({ address, deadline, covered = isDallasDeliveryAddress(address) }) => {
  if (!addressSearch || !addressPanel || !deliveryStatus) return;
  shopInRange.hidden = true;
  if (!covered) {
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
  addressInput.value = address;
  addressSearch.classList.add('is-confirmed');
  addressSearch.classList.remove('is-on-light-surface');
  addressPanel.hidden = true;
  deliveryStatus.hidden = false;
  heroEyebrow.hidden = true;
  heroHours.hidden = true;
  if (heroTitle) heroTitle.textContent = "You're covered.";
  if (heroLede) heroLede.textContent = 'Your address is in the Jiffy Local service area. Order before the countdown ends to secure this window.';
  if (heroHours) {
    heroHours.hidden = false;
    heroHours.innerHTML = `<img src="${asset('jiffy-hero-clock.svg')}" alt="" />Local delivery · 7 days · 5 AM – 10 PM`;
  }
  if (deliveryOutcome) { deliveryOutcome.hidden = true; deliveryOutcome.replaceChildren(); }
  setDeliveryCountdown(deadline);
};
const clearDeliveryStatus = () => {
  window.clearInterval(deliveryCountdown);
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
  if (heroHours) heroHours.innerHTML = `<img src="${asset('jiffy-hero-clock.svg')}" alt="" />7 days a week · 5 AM – 7 PM · Printed and driven from Dallas`;
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
  // The visible local flow starts with the S3 showroom; the older quality
  // variants are intentionally hidden, so they must not drive compact mode.
  const sectionOne = s3Showroom || document.querySelector('.quality-story.is-active');
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
  const cards = [...section.querySelectorAll('.blanks-product')];
  const count = section.querySelector('.blanks-static-toolbar p');

  filters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.apparelFilter;
      const visibleCards = cards.filter((card) => category === 'all' || card.dataset.category === category);
      filters.forEach((item) => {
        const active = item === filter;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      cards.forEach((card) => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
      });
      count.innerHTML = `<b>${visibleCards.length}</b> blank ${visibleCards.length === 1 ? 'style' : 'styles'}`;
    });
  });
};
setupStaticApparelFilters(blanksSection);

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

function layoutPackedCards(cards, progress, rackWidth, commerce, proofExit) {
  const gap = 10;
  const sizeSteps = [0.48, 0.74, 1.1, 1.68];
  const sizeUnit = Math.max(62, (rackWidth - gap * (cards.length - 1)) / sizeSteps.reduce((sum, size) => sum + size, 0));
  let previous = null;
  cards.forEach((card, index) => {
    const enterStart = .10 + index * .04;
    const enterEnd = .18 + index * .04;
    const packStart = .14 + index * .04;
    const packEnd = .26 + index * .04;
    const entered = ease(ramp(progress, enterStart, enterEnd));
    const packed = ease(ramp(progress, packStart, packEnd));
    const x = previous ? previous.x + previous.width + gap : 0;
    const targetWidth = sizeUnit * (sizeSteps[index] ?? 1);
    const availableWidth = Math.max(targetWidth, rackWidth - x);
    const width = availableWidth * (1 - packed) + targetWidth * packed;
    card.style.width = `${width}px`;
    card.style.transform = `translate3d(${x}px,0,0)`;
    card.style.opacity = `${entered * (1 - Math.max(commerce, proofExit))}`;
    card.style.zIndex = `${index + 1}`;
    card.classList.toggle('is-collapsed', width < 460);
    previous = { x, width };
  });
}

const enableProofCardPreview = (cards) => cards.forEach((card) => {
  card.addEventListener('mouseenter', () => card.classList.add('is-previewed'));
  card.addEventListener('mouseleave', () => card.classList.remove('is-previewed'));
  card.addEventListener('focusin', () => card.classList.add('is-previewed'));
  card.addEventListener('focusout', () => card.classList.remove('is-previewed'));
});

let storyCompleted = false;
let compareCompleted = false;
let carouselCompleted = false;

function renderStory() {
  const maxScroll = Math.max(1, story.offsetHeight - window.innerHeight);
  const rawProgress = clamp(-story.getBoundingClientRect().top / maxScroll);
  if (rawProgress >= .995) storyCompleted = true;
  const progress = storyCompleted ? 1 : rawProgress;
  const reduce = ease(ramp(progress, .04, .22));
  const proofExit = ease(ramp(progress, .34, .38));
  const commerce = ease(ramp(progress, .36, .42));
  const commerceExit = ease(ramp(progress, .54, .7));
  const apparel = commerce;
  const gutter = 160 * reduce;
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
  shell.style.setProperty('--commerce-exit', commerceExit.toFixed(3));
  shell.style.setProperty('--commerce-opacity', (commerce * (1 - commerceExit)).toFixed(3));
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
  layoutPackedCards(proofCards, progress, rackWidth, commerce, proofExit);
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
  const proofExit = ease(ramp(progress, .34, .38));
  const commerce = ease(ramp(progress, .36, .42));
  const commerceExit = ease(ramp(progress, .54, .7));
  // Let the blanks rail follow the transfer paths with only a short beat.
  const apparel = commerce;
  const gutter = 160 * reduce;
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
  compareShell.style.setProperty('--commerce-exit', commerceExit.toFixed(3));
  compareShell.style.setProperty('--commerce-opacity', (commerce * (1 - commerceExit)).toFixed(3));
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
  layoutPackedCards(compareProofCards, progress, rackWidth, commerce, proofExit);
  const shown = Math.min(5, 1 + compareProofCards.filter((_, index) => progress >= .12 + index * .15).length);
  compareCount.innerHTML = `<b>${String(shown).padStart(2, '0')}</b> / 05`;
}

const carouselShell = carouselStory.querySelector('.story-shell');
const carouselCards = [...carouselStory.querySelectorAll('.proof-card')];
const carouselCount = carouselStory.querySelector('.story-count');
const carouselFileInput = carouselStory.querySelector('#artwork-input');
const carouselButtons = [...carouselStory.querySelectorAll('.upload-button')];

enableProofCardPreview(proofCards);
enableProofCardPreview(compareProofCards);
enableProofCardPreview(carouselCards);

const enableHeroTilt = (card) => {
  if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let frame;
  const reset = () => {
    card.classList.remove('is-tilting');
    card.style.removeProperty('--tilt-x');
    card.style.removeProperty('--tilt-y');
    card.style.removeProperty('--reflection-x');
    card.style.removeProperty('--reflection-y');
  };
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      card.classList.add('is-tilting');
      card.style.setProperty('--tilt-x', `${(-y * 1.5).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${(x * 3).toFixed(2)}deg`);
      card.style.setProperty('--reflection-x', `${((x + .5) * 100).toFixed(1)}%`);
      card.style.setProperty('--reflection-y', `${((y + .5) * 100).toFixed(1)}%`);
    });
  });
  card.addEventListener('pointerleave', reset);
};
enableHeroTilt(compareStory.querySelector('.hero-art'));

function renderCarouselStory() {
  const maxScroll = Math.max(1, carouselStory.offsetHeight - window.innerHeight);
  const rawProgress = clamp(-carouselStory.getBoundingClientRect().top / maxScroll);
  if (rawProgress >= .995) carouselCompleted = true;
  const progress = carouselCompleted ? 1 : rawProgress;
  const reduce = ease(ramp(progress, .04, .22));
  const carouselPhase = ramp(progress, .2, .72) * 4;
  const slide = Math.min(3, Math.floor(carouselPhase));
  const betweenSlides = slide === 3 ? 0 : ease(ramp(carouselPhase - slide, .72, 1));
  const proofExit = ease(ramp(progress, .34, .38));
  const commerce = ease(ramp(progress, .36, .42));
  const commerceExit = ease(ramp(progress, .54, .7));
  const apparel = commerce;
  const gutter = 160 * reduce;
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
  carouselShell.style.setProperty('--commerce-exit', commerceExit.toFixed(3));
  carouselShell.style.setProperty('--commerce-opacity', (commerce * (1 - commerceExit)).toFixed(3));
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
    card.style.opacity = `${progress < .16 ? 0 : 1 - Math.max(commerce, proofExit)}`;
    card.style.zIndex = `${index + 1}`;
  });
  const shown = slide === 3 ? 5 : Math.min(5, 1 + slide + (betweenSlides > .5 ? 1 : 0));
  carouselCount.innerHTML = `<b>${String(shown).padStart(2, '0')}</b> / 05`;
}

const blanksShell = blanksSection.querySelector('.blanks-shell');
function renderBlanksStory() {
  if (!blanksSection.classList.contains('blanks-story--interactive')) return;
  const progress = clamp(-blanksSection.getBoundingClientRect().top / Math.max(1, window.innerHeight));
  const heroProgress = ease(ramp(progress, 0, .68));
  const catalogProgress = ease(ramp(progress, .82, .98));
  blanksShell.style.setProperty('--hero-progress', heroProgress.toFixed(3));
  blanksShell.style.setProperty('--catalog-progress', catalogProgress.toFixed(3));
  blanksShell.style.setProperty('--header-color', navigationColor(heroProgress));
}

function renderAllStories() { renderStory(); renderCompareStory(); renderCarouselStory(); renderBlanksStory(); }
window.addEventListener('scroll', renderAllStories, { passive: true });
window.addEventListener('resize', renderAllStories);
renderAllStories();

const variantTrigger = document.querySelector('.jiffy-hero__sign-in');
const variantMenu = document.querySelector('.jiffy-hero__variant-menu');
const qualityVariants = { v1: story, v2: compareStory, v3: carouselStory };
const closeVariantMenu = () => {
  variantTrigger.setAttribute('aria-expanded', 'false');
  variantMenu.hidden = true;
};
const setQualityVariant = (chosen, { scroll = false } = {}) => {
  const selectedSection = qualityVariants[chosen];
  if (!selectedSection) return;
  Object.entries(qualityVariants).forEach(([name, section]) => {
    const active = name === chosen;
    section.classList.toggle('is-active', active);
    section.toggleAttribute('hidden', !active);
    section.setAttribute('aria-hidden', String(!active));
  });
  variantMenu.querySelectorAll('[data-quality-variant]').forEach((button) => {
    const active = button.dataset.qualityVariant === chosen;
    button.setAttribute('aria-pressed', String(active));
  });
  renderAllStories();
  if (scroll) requestAnimationFrame(() => {
    window.scrollTo({ top: selectedSection.getBoundingClientRect().top + window.scrollY, behavior: 'auto' });
    renderAllStories();
  });
};
setQualityVariant('v2');
variantTrigger.addEventListener('click', () => {
  const open = variantTrigger.getAttribute('aria-expanded') === 'true';
  if (open) closeVariantMenu();
  else {
    variantTrigger.setAttribute('aria-expanded', 'true');
    variantMenu.hidden = false;
  }
});
variantMenu.addEventListener('click', (event) => {
  const button = event.target.closest('[data-quality-variant]');
  if (!button) return;
  const chosen = button.dataset.qualityVariant;
  setQualityVariant(chosen, { scroll: true });
  closeVariantMenu();
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.jiffy-hero__variant-switcher')) closeVariantMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeVariantMenu();
});

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

// The new S3 is the sole quality experience. Remove the retired variants
// after their legacy setup has completed so duplicate IDs and hidden variant
// state cannot interfere with refreshes or later scroll events.
document.querySelectorAll('.quality-story, .static-quality-compare').forEach((element) => element.remove());
