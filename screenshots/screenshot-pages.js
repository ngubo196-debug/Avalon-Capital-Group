const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const PAGES = [
  { name: '01-home', url: 'http://localhost:3001' },
  { name: '02-about', url: 'http://localhost:3001/about' },
  { name: '03-vantara', url: 'http://localhost:3001/vantara' },
  { name: '04-ada', url: 'http://localhost:3001/ada' },
  { name: '05-offers', url: 'http://localhost:3001/offers' },
  { name: '06-contact', url: 'http://localhost:3001/contact' },
  { name: '07-audit', url: 'http://localhost:3001/audit' },
  { name: '08-digital-card-luyanda', url: 'http://localhost:3001/digital-card/luyanda' },
  { name: '09-digital-card-saud', url: 'http://localhost:3001/digital-card/saud' },
  { name: '10-privacy-policy', url: 'http://localhost:3001/privacy-policy' },
  { name: '11-terms-of-service', url: 'http://localhost:3001/terms-of-service' },
];

const OUT_DIR = __dirname;
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

(async () => {
  const browser = await chromium.launch();

  for (const page of PAGES) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const p = await ctx.newPage();
    try {
      await p.goto(page.url, { waitUntil: 'networkidle', timeout: 15000 });
      // full-page screenshot
      await p.screenshot({
        path: path.join(OUT_DIR, `${page.name}-desktop.png`),
        fullPage: true,
      });
      // mobile viewport
      await p.setViewportSize({ width: 390, height: 844 });
      await p.screenshot({
        path: path.join(OUT_DIR, `${page.name}-mobile.png`),
        fullPage: true,
      });
      console.log(`OK  ${page.name}`);
    } catch (e) {
      console.log(`ERR ${page.name}: ${e.message}`);
    }
    await ctx.close();
  }

  await browser.close();
  console.log('Done. Screenshots saved to:', OUT_DIR);
})();
