const fs = require('fs');
const path = require('path');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('[Postbuild Asset Sync] Starting static asset distribution...');
  const rootDir = path.resolve(__dirname, '..');
  const standaloneDir = path.join(rootDir, '.next', 'standalone');
  const publicDir = path.join(rootDir, 'public');
  const nextStaticDir = path.join(rootDir, '.next', 'static');

  if (fs.existsSync(standaloneDir)) {
    if (fs.existsSync(publicDir)) {
      copyDirRecursive(publicDir, path.join(standaloneDir, 'public'));
      console.log('[Postbuild Asset Sync] Successfully synced public/ to .next/standalone/public');
    }
    if (fs.existsSync(nextStaticDir)) {
      copyDirRecursive(nextStaticDir, path.join(standaloneDir, '.next', 'static'));
      console.log('[Postbuild Asset Sync] Successfully synced .next/static to .next/standalone/.next/static');
    }
  }

  if (fs.existsSync(nextStaticDir) && fs.existsSync(publicDir)) {
    copyDirRecursive(nextStaticDir, path.join(publicDir, '_next', 'static'));
    console.log('[Postbuild Asset Sync] Successfully synced .next/static to public/_next/static');
  }

  console.log('[Postbuild Asset Sync] Static asset distribution completed successfully.');
} catch (error) {
  console.error('[Postbuild Asset Sync] Error during asset sync:', error);
}

