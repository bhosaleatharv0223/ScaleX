const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
  const sizes = [375, 390, 428];
  const pages = [
    { path: '/', name: 'home' },
    { path: '/services', name: 'services' },
    { path: '/about', name: 'about' },
    { path: '/case-studies', name: 'case-studies' },
    { path: '/contact', name: 'contact' },
  ];

  const outDir = path.resolve(__dirname, '../screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const size of sizes) {
    await page.setViewportSize({ width: size, height: 900 });
    for (const entry of pages) {
      await page.goto(`http://127.0.0.1:4173${entry.path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      await page.screenshot({ path: path.join(outDir, `${entry.name}-${size}.png`), fullPage: true });
    }
  }

  await browser.close();
})();