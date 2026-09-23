import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CV_LANGS, CV_FILES } from './cv-content.mjs';
import { buildCvHtml } from './build-cv-html.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'assets');
const photoPath = path.join(root, 'images', '2..jpeg');

function toDataUri(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : 'image/jpeg';
  const base64 = fs.readFileSync(filePath).toString('base64');
  return `data:${mime};base64,${base64}`;
}

const photoDataUri = toDataUri(photoPath);
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

for (const lang of CV_LANGS) {
  const html = buildCvHtml(lang, photoDataUri);
  const pdfName = CV_FILES[lang];
  const pdfPath = path.join(assetsDir, pdfName);

  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  console.log('PDF généré :', pdfPath);
}

// Alias FR pour compatibilité
fs.copyFileSync(
  path.join(assetsDir, CV_FILES.fr),
  path.join(assetsDir, 'CV_Fatima_Ezzohra_Dadi.pdf')
);
console.log('Alias FR : assets/CV_Fatima_Ezzohra_Dadi.pdf');

await browser.close();
