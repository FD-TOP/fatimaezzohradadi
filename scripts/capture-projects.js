const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const dir = path.join(__dirname, '..', 'images', 'shots');
  fs.mkdirSync(dir, { recursive: true });
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  async function shot({ url, name, waitMs = 2500, waitSel, scrollY = 0 }) {
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 70000 });
      if (waitSel) {
        try {
          await page.waitForSelector(waitSel, { timeout: 12000 });
        } catch (_) {}
      }
      await new Promise((r) => setTimeout(r, waitMs));
      if (scrollY) {
        await page.evaluate((y) => window.scrollTo(0, y), scrollY);
        await new Promise((r) => setTimeout(r, 600));
      }
      await page.screenshot({ path: path.join(dir, name), type: 'png' });
      console.log('ok', name);
    } catch (e) {
      console.error('fail', name, e.message);
    }
  }

  await shot({ url: 'https://synappco.vercel.app/', name: 'synappco-home.png', waitMs: 2000 });
  await shot({
    url: 'https://synappco.vercel.app/expertises',
    name: 'synappco-expertises.png',
    waitMs: 2000,
  });
  await shot({
    url: 'https://synappco.vercel.app/secteurs',
    name: 'synappco-secteurs.png',
    waitMs: 2000,
  });
  await shot({
    url: 'https://fd-top.github.io/thaijap/index.html?table=3',
    name: 'thaijap-client.png',
    waitMs: 5000,
    waitSel: 'img, .item, .card, .menu, button, article',
  });
  await shot({
    url: 'https://fd-top.github.io/thaijap/admin.html',
    name: 'thaijap-admin.png',
    waitMs: 4000,
  });
  await shot({
    url: 'https://kapavenir-site.vercel.app/',
    name: 'kapavenir-home.png',
    waitMs: 2500,
  });
  await shot({
    url: 'https://kapavenir-site.vercel.app/',
    name: 'kapavenir-services.png',
    waitMs: 1800,
    scrollY: 900,
  });
  await shot({
    url: 'https://lafakh.vercel.app/index.php',
    name: 'lafakh-home.png',
    waitMs: 8000,
  });
  await shot({
    url: 'https://lafakh.vercel.app/portfolio.php',
    name: 'lafakh-portfolio.png',
    waitMs: 4000,
  });
  await shot({
    url: 'http://127.0.0.1:8766/index.html',
    name: 'portfolio-home.png',
    waitMs: 2500,
  });
  await shot({
    url: 'http://127.0.0.1:8766/projets.html',
    name: 'portfolio-projets.png',
    waitMs: 2000,
  });

  await browser.close();
})();
