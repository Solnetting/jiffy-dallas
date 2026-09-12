import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || '/Users/carlosmera/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1728, height: 1000 }, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('response', r => { if(r.status()>=400 && r.url().includes('127.0.0.1')) errors.push(`${r.status()}: ${r.url()}`); });
await mkdir('verification', { recursive: true });
await page.goto(process.env.PREVIEW_URL || 'http://127.0.0.1:5173', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'verification/desktop-hero.png' });
const report = { errors, desktop: {}, motion: [], mobile: {} };
report.desktop = await page.evaluate(() => ({
  width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
  fonts: [...document.fonts].map(f=>({family:f.family,weight:f.weight,status:f.status})),
  sections: [...document.querySelectorAll('.chapter')].map(e=>({id:e.id||'footer',height:e.offsetHeight,top:e.offsetTop,pin:getComputedStyle(e).top})),
}));
assert.equal(report.desktop.width, report.desktop.scrollWidth, 'Desktop has horizontal overflow');
// Static comparison uses reduced motion, which also provides the accessible linear layout.
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.evaluate(async () => {
  document.querySelectorAll('img').forEach(i => i.loading='eager');
  await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));
});
await page.screenshot({ path: 'verification/desktop-full.png', fullPage: true });
for (const id of ['transfers','apparel','quality']) await page.locator(`#${id}`).screenshot({path:`verification/desktop-${id}.png`});
assert.equal(await page.evaluate(()=>[...document.images].filter(i=>!i.complete||!i.naturalWidth).length),0,'Broken images');
await page.emulateMedia({ reducedMotion: 'no-preference' });
await page.evaluate(()=>window.scrollTo(0,0));
await page.waitForTimeout(100);
for (const y of [350,750,1400,2300,3200,100000,2200,700,0]) {
  await page.evaluate(y=>window.scrollTo(0,y),y);
  await page.waitForTimeout(70);
  report.motion.push(await page.evaluate(()=>({scroll:scrollY,front:document.elementFromPoint(innerWidth/2,innerHeight/2)?.closest('.chapter')?.id||'footer',chapters:[...document.querySelectorAll('.chapter')].map(e=>({id:e.id||'footer',top:Math.round(e.getBoundingClientRect().top),bottom:Math.round(e.getBoundingClientRect().bottom)}))})));
}
assert.equal(await page.evaluate(()=>scrollY),0,'Scroll cannot return to hero');
// Verify real overlap, without relying on a wheel-event animation queue.
await page.evaluate(()=>window.scrollTo(0,400));
await page.waitForTimeout(100);
const overlap=await page.evaluate(()=>({hero:document.querySelector('#hero').getBoundingClientRect().top,next:document.querySelector('#transfers').getBoundingClientRect().top}));
assert.equal(overlap.hero,0,'Hero did not pin');
assert(overlap.next>0 && overlap.next<717,'Next panel did not move over the hero');
await page.screenshot({path:'verification/desktop-transition.png'});
await page.evaluate(()=>{const e=document.querySelector('#transfers');window.scrollTo(0,e.offsetTop)});
await page.locator('.transfer-card').first().click();
assert(await page.locator('#delivery-choice').isVisible());
assert.equal(await page.locator('#choose-standard').getAttribute('href'),'https://www.jiffy.com/transfers');
await page.screenshot({path:'verification/delivery-panel.png'});
await page.keyboard.press('Escape');
assert(!(await page.locator('#delivery-choice').isVisible()));
await page.locator('#artwork').setInputFiles({name:'sample.png',mimeType:'image/png',buffer:Buffer.from('preview')});
assert.match(await page.locator('.upload-status').textContent(),/sample.png selected/);
await page.evaluate(()=>window.scrollTo(0,0));
await page.locator('#hero-address').fill('2100 Ross Ave, Dallas, TX 75201');
await page.locator('.hero-address button').click();
assert.match(await page.locator('.hero-address .address-status').textContent(),/not connected/);
assert.equal(await page.getByText('You’re covered.',{exact:true}).count(),0,'Fake address coverage');
await page.reload({waitUntil:'networkidle'});
await page.setViewportSize({width:390,height:844});
await page.evaluate(()=>window.scrollTo(0,0));
await page.screenshot({path:'verification/mobile-hero.png'});
report.mobile=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
assert.equal(report.mobile.width,report.mobile.scrollWidth,'Mobile horizontal overflow');
await page.emulateMedia({reducedMotion:'reduce'});
await page.screenshot({path:'verification/mobile-full.png',fullPage:true});
await page.emulateMedia({reducedMotion:'no-preference'});
await page.evaluate(()=>window.scrollTo(0,100000));
await page.waitForTimeout(100);
assert(await page.locator('.footer-base').isVisible());
assert.equal(errors.length,0,errors.join('\n'));
await writeFile('verification/report.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
await browser.close();
