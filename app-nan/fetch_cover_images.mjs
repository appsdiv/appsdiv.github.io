// fetch_cover_images.mjs
// Node 18+
// Usage: node fetch_cover_images.mjs

import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_JSON  = path.resolve(__dirname, 'app.json');
const OUTPUT_JSON = path.resolve(__dirname, 'gallery-local.json');
const IMAGES_DIR  = path.resolve(__dirname, 'images');

function ensureDirSync(dir) {
  if (!fssync.existsSync(dir)) fssync.mkdirSync(dir, { recursive: true });
}

function sanitizeFilename(s, max = 64) {
  return (s || 'item')
    .toString()
    .normalize('NFKD')
    .replace(/[^\p{Letter}\p{Number}\-_.]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, max) || 'item';
}

function extFromUrl(u) {
  try {
    const p = new URL(u).pathname;
    const ext = path.extname(p).toLowerCase();
    // default to .jpg if no extension
    return ext && ext.length <= 5 ? ext : '.jpg';
  } catch {
    return '.jpg';
  }
}

function download(url, dest, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, (res) => {
      // Follow redirects
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && maxRedirects > 0) {
        const nextUrl = new URL(res.headers.location, url).toString();
        res.resume();
        return download(nextUrl, dest, maxRedirects - 1).then(resolve).catch(reject);
      }

      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }

      const file = fssync.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
      file.on('error', (err) => reject(err));
    });
    req.on('error', reject);
  });
}

async function main() {
  ensureDirSync(IMAGES_DIR);

  const raw = await fs.readFile(INPUT_JSON, 'utf8');
  const data = JSON.parse(raw);

  const items = Array.isArray(data.items) ? data.items : [];
  console.log(`Found ${items.length} items.`);

  let success = 0, skip = 0, fail = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i] || {};
    const id   = item.id ?? i + 1;
    const slug = sanitizeFilename(item.slug || item.title || `item-${id}`);
    const url  = item.coverImage || item.coverImageUrl || item.cover || '';

    if (!url) {
      console.warn(`[#${id}] Missing coverImage, skipping download.`);
      fail++;
      continue;
    }

    const ext = extFromUrl(url);
    const filename = `${id}-${slug}${ext}`;
    const dest = path.join(IMAGES_DIR, filename);

    if (fssync.existsSync(dest) && fssync.statSync(dest).size > 0) {
      // Already downloaded
      item.coverImageRemote = url;
      item.coverImage = `images/${filename}`;
      skip++;
      continue;
    }

    try {
      console.log(`[#${id}] Downloading -> ${filename}`);
      await download(url, dest);
      item.coverImageRemote = url;
      item.coverImage = `images/${filename}`;
      success++;
    } catch (e) {
      console.error(`[#${id}] Failed: ${e.message}`);
      fail++;
    }
  }

  const out = {
    generatedAt: data.generatedAt || new Date().toISOString(),
    processedAt: new Date().toISOString(),
    total: items.length,
    items
  };

  await fs.writeFile(OUTPUT_JSON, JSON.stringify(out, null, 2), 'utf8');
  console.log(`\nDone.\nSuccess: ${success}, Skipped: ${skip}, Failed: ${fail}`);
  console.log(`Wrote ${path.basename(OUTPUT_JSON)} with local image paths.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
