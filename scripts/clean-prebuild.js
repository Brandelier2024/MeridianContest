const fs = require('fs');
const path = require('path');

const publicNext = path.join(__dirname, '..', 'public', '_next');

if (fs.existsSync(publicNext)) {
  try {
    fs.rmSync(publicNext, { recursive: true, force: true });
    console.log('[Prebuild Clean] Removed temporary public/_next directory.');
  } catch (err) {
    console.warn('[Prebuild Clean] Could not remove public/_next:', err.message);
  }
}

