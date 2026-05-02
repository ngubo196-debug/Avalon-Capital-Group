const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', 'public', 'assets', 'acg-logo.jpg');
const PUBLIC = path.join(__dirname, '..', 'public');
const APP_DIR = path.join(__dirname, '..', 'app');

const SIZES = [
  { name: 'favicon-16x16.png',    size: 16  },
  { name: 'favicon-32x32.png',    size: 32  },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png',         size: 192 },
  { name: 'icon-512.png',         size: 512 },
];

function buildIco(pngBuffer, w, h) {
  const dataOffset = 6 + 16;
  const hdr = Buffer.alloc(6);
  hdr.writeUInt16LE(0, 0);
  hdr.writeUInt16LE(1, 2);
  hdr.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(w >= 256 ? 0 : w, 0);
  entry.writeUInt8(h >= 256 ? 0 : h, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1,  4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(dataOffset,       12);

  return Buffer.concat([hdr, entry, pngBuffer]);
}

async function main() {
  for (const { name, size } of SIZES) {
    await sharp(SOURCE).resize(size, size).png().toFile(path.join(PUBLIC, name));
    console.log(`  ✓ ${name} (${size}x${size})`);
  }

  const png32 = await sharp(SOURCE).resize(32, 32).png().toBuffer();
  const ico   = buildIco(png32, 32, 32);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), ico);
  console.log('  ✓ favicon.ico (32x32 ICO with embedded PNG)');
}

main().catch(err => { console.error(err); process.exit(1); });
