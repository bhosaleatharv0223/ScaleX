import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
const sizes = [375, 390, 428];
const pages = [
  { path: '/', name: 'home' },
  { path: '/services', name: 'services' },
  { path: '/about', name: 'about' },
  { path: '/case-studies', name: 'case-studies' },
  { path: '/contact', name: 'contact' },
];

for (const width of sizes) {
  await page.setViewportSize({ width, height: 900 });
  for (const entry of pages) {
    await page.goto(`http://127.0.0.1:4173${entry.path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(outDir, `${entry.name}-${width}.png`), fullPage: true });
  }
}

await browser.close();
console.log('Screenshots generated in', outDir);