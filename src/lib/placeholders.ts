/**
 * Meridian Ice Cream - Robust SVG Data URI Placeholders
 * Self-contained, zero-network fallbacks that preserve exact aspect ratio and visual polish
 * if external or local images fail or are missing.
 */

function encodeSvg(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    svgString.replace(/\s+/g, " ").trim()
  )}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function createStepPlaceholder(
  stepNum: number,
  title: string,
  bg: string,
  accent: string
): string {
  const safeTitle = escapeXml(title.toUpperCase());
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1125" width="900" height="1125">
      <defs>
        <radialGradient id="glow-${stepNum}" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${bg}" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="frame-${stepNum}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0.1"/>
        </linearGradient>
      </defs>

      <rect width="900" height="1125" fill="${bg}"/>
      <rect width="900" height="1125" fill="url(#glow-${stepNum})"/>

      <!-- Delicate Decorative Arch / Border -->
      <rect x="36" y="36" width="828" height="1053" rx="28" fill="none" stroke="url(#frame-${stepNum})" stroke-width="2" stroke-dasharray="8 8"/>
      <rect x="52" y="52" width="796" height="1021" rx="22" fill="none" stroke="${accent}" stroke-width="1" stroke-opacity="0.25"/>

      <!-- Meridian Emblem & Est. 1999 -->
      <g transform="translate(450, 220)" text-anchor="middle">
        <circle r="72" fill="${bg}" stroke="${accent}" stroke-width="2.5"/>
        <circle r="60" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="4 4" stroke-opacity="0.6"/>
        <!-- Stylized Ice Cream Scoop Art -->
        <path d="M-28 -4 C-28 -34, 28 -34, 28 -4 C34 -4, 38 6, 32 14 C28 20, 22 22, 16 22 L-16 22 C-22 22, -28 20, -32 14 C-38 6, -34 -4, -28 -4 Z" fill="${accent}"/>
        <path d="M-18 26 L18 26 L0 60 Z" fill="${accent}" opacity="0.85"/>
        <text y="112" font-family="'Montagu Slab', Georgia, serif" font-size="20" font-weight="700" fill="${accent}" letter-spacing="0.28em">MERIDIAN</text>
        <text y="136" font-family="'Pliant', sans-serif" font-size="13" font-weight="700" fill="${accent}" opacity="0.75" letter-spacing="0.22em">PUNE • EST. 1999</text>
      </g>

      <!-- Center Step Content -->
      <g transform="translate(450, 620)" text-anchor="middle">
        <rect x="-90" y="-36" width="180" height="42" rx="21" fill="${accent}" opacity="0.2"/>
        <text y="-10" font-family="'Pliant', sans-serif" font-size="20" font-weight="800" fill="${accent}" letter-spacing="0.18em">STEP 0${stepNum}</text>
        
        <text y="90" font-family="'Bricolage Grotesque', sans-serif" font-size="64" font-weight="800" fill="#fdf8f7" letter-spacing="0.02em">
          ${safeTitle}
        </text>

        <path d="M-120 135 L120 135" stroke="${accent}" stroke-width="2" stroke-opacity="0.4"/>
        <circle cx="0" cy="135" r="4" fill="${accent}"/>

        <text y="180" font-family="'Pliant', sans-serif" font-size="20" fill="#fdf8f7" opacity="0.85" letter-spacing="0.08em">
          100% PURE WHOLE MILK DAIRY
        </text>
      </g>

      <!-- Bottom Tag -->
      <g transform="translate(450, 1010)" text-anchor="middle">
        <text font-family="'Pliant', sans-serif" font-size="14" font-weight="700" fill="${accent}" opacity="0.6" letter-spacing="0.24em">THE CHURN CRAFT • NO SHORTCUTS</text>
      </g>
    </svg>
  `;
  return encodeSvg(svg);
}

export function createTubPlaceholder(
  name: string,
  tag: string,
  price: string,
  bg: string,
  accent: string
): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  const safeTag = escapeXml(tag.toUpperCase());
  const safeName = escapeXml(name.toUpperCase());
  const safePrice = escapeXml(price);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1350" width="900" height="1350">
      <defs>
        <radialGradient id="tub-glow-${slug}" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${bg}" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="rim-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0.15"/>
        </linearGradient>
      </defs>

      <rect width="900" height="1350" fill="${bg}"/>
      <rect width="900" height="1350" fill="url(#tub-glow-${slug})"/>

      <!-- Inner Border Arch -->
      <rect x="40" y="40" width="820" height="1270" rx="42" fill="none" stroke="url(#rim-${slug})" stroke-width="2.5"/>

      <!-- Floating Tub Iconography -->
      <g transform="translate(450, 360)" text-anchor="middle">
        <circle r="160" fill="${bg}" stroke="${accent}" stroke-width="3" stroke-opacity="0.4"/>
        <path d="M-90 -30 L90 -30 L70 90 L-70 90 Z" fill="${accent}" opacity="0.85"/>
        <ellipse cx="0" cy="-30" rx="98" ry="24" fill="${accent}"/>
        <ellipse cx="0" cy="-30" rx="84" ry="18" fill="${bg}"/>
        <text y="-24" font-family="'Pliant', sans-serif" font-size="12" font-weight="800" fill="${accent}" letter-spacing="0.2em">CONTEST QR</text>
        <circle cx="-35" cy="-70" r="45" fill="${accent}" opacity="0.95"/>
        <circle cx="35" cy="-70" r="45" fill="${accent}" opacity="0.95"/>
        <circle cx="0" cy="-90" r="48" fill="#fdf8f7"/>
        <circle cx="0" cy="-90" r="12" fill="${accent}"/>
      </g>

      <!-- Center Info -->
      <g transform="translate(450, 780)" text-anchor="middle">
        <rect x="-110" y="-32" width="220" height="40" rx="20" fill="${accent}" opacity="0.25"/>
        <text y="-7" font-family="'Pliant', sans-serif" font-size="17" font-weight="800" fill="${accent}" letter-spacing="0.16em">
          ${safeTag}
        </text>

        <text y="75" font-family="'Bricolage Grotesque', sans-serif" font-size="52" font-weight="800" fill="#fdf8f7" letter-spacing="0.01em">
          ${safeName}
        </text>

        <text y="130" font-family="'Pliant', sans-serif" font-size="22" font-weight="700" fill="${accent}" letter-spacing="0.1em">
          500ml PURE WHOLE MILK TUB
        </text>

        <path d="M-100 170 L100 170" stroke="${accent}" stroke-width="2" stroke-opacity="0.4"/>
        <circle cx="0" cy="170" r="4" fill="${accent}"/>

        <text y="240" font-family="'Montagu Slab', Georgia, serif" font-size="48" font-weight="800" fill="#fdf8f7">
          ${safePrice}
        </text>
      </g>

      <!-- Contest Lid QR Seal Callout -->
      <g transform="translate(450, 1190)" text-anchor="middle">
        <rect x="-240" y="-28" width="480" height="56" rx="28" fill="${bg}" stroke="${accent}" stroke-width="1.5"/>
        <text y="6" font-family="'Pliant', sans-serif" font-size="15" font-weight="700" fill="${accent}" letter-spacing="0.12em">
          ★ SCAN QR UNDER LID TO WIN ★
        </text>
      </g>
    </svg>
  `;
  return encodeSvg(svg);
}

export function createGenericPlaceholder(
  title: string,
  subtitle: string,
  width = 900,
  height = 900,
  bg = "#4a0a10",
  accent = "#ffbc7d"
): string {
  const safeTitle = escapeXml(title.toUpperCase());
  const safeSubtitle = escapeXml(subtitle.toUpperCase());
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill="${bg}"/>
      <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) * 0.42}" fill="none" stroke="${accent}" stroke-width="2" stroke-opacity="0.3"/>
      <circle cx="${width / 2}" cy="${height / 2}" r="${Math.min(width, height) * 0.38}" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="6 6" stroke-opacity="0.2"/>
      <g transform="translate(${width / 2}, ${height / 2})" text-anchor="middle">
        <text y="-20" font-family="'Bricolage Grotesque', sans-serif" font-size="40" font-weight="800" fill="#fdf8f7">
          ${safeTitle}
        </text>
        <text y="30" font-family="'Pliant', sans-serif" font-size="20" font-weight="700" fill="${accent}" letter-spacing="0.12em">
          ${safeSubtitle}
        </text>
      </g>
    </svg>
  `;
  return encodeSvg(svg);
}
