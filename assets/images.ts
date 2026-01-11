
// Generated SVG Assets for Safe Shield
// These act as local image files that can be imported directly into components

// Helper for encoding
const svg = (content: string) => `data:image/svg+xml;utf8,${encodeURIComponent(content)}`;

// 1. Hero Image - Abstract Scaffolding/Construction Site (Dark Blue/Industrial)
export const HERO_IMG = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0f172a"/>
      <stop offset="1" stop-color="#1e293b"/>
    </linearGradient>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M50 0L0 0 0 50" fill="none" stroke="#334155" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#grid)" opacity="0.3"/>
  <path d="M0 800 L400 200 L1200 600" stroke="#0ea5e9" stroke-width="2" fill="none" opacity="0.1"/>
  <path d="M200 800 L600 100 L1000 800" stroke="#f97316" stroke-width="2" fill="none" opacity="0.1"/>
</svg>
`);

// 2. About: Asbestos Containment (White/Clean/Sealed)
export const ABOUT_IMG_ASBESTOS = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <rect width="800" height="1000" fill="#f1f5f9"/>
  <path d="M0 0 L800 1000" stroke="#cbd5e1" stroke-width="400" opacity="0.5"/>
  <rect x="100" y="100" width="600" height="800" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="10"/>
  <text x="400" y="500" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="60" fill="#94a3b8" opacity="0.3">SEALED</text>
  <circle cx="700" cy="100" r="40" fill="#f97316" opacity="0.8"/>
</svg>
`);

// 3. About: Safety Nets (Blue Mesh Pattern)
export const ABOUT_IMG_NETS = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <rect width="800" height="1000" fill="#f0f9ff"/>
  <defs>
    <pattern id="net" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#0ea5e9" stroke-width="2"/>
    </pattern>
  </defs>
  <rect width="800" height="1000" fill="url(#net)"/>
  <text x="400" y="500" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="60" fill="#0ea5e9" opacity="0.8">SAFETY NET</text>
</svg>
`);

// 4. About: Shrink Wrap (Plastic Texture)
export const ABOUT_IMG_WRAP = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <rect width="800" height="1000" fill="#ffffff"/>
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" stitchTiles="stitch"/>
  </filter>
  <rect width="800" height="1000" fill="transparent" filter="url(#noise)" opacity="0.5"/>
  <path d="M0 500 C 200 400, 600 600, 800 500" stroke="#f1f5f9" stroke-width="20" fill="none"/>
  <text x="400" y="500" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="60" fill="#cbd5e1">SHRINK WRAP</text>
</svg>
`);

// 5. Gallery Images
export const GALLERY_IMG_1 = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#e2e8f0"/>
  <rect x="200" y="100" width="800" height="600" fill="#f8fafc"/>
  <text x="600" y="400" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#64748b">PROJECT: EXTERIOR</text>
</svg>
`);

export const GALLERY_IMG_2 = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="#0f172a"/>
  <path d="M0 0 L800 800 M800 0 L0 800" stroke="#0ea5e9" stroke-width="10" opacity="0.2"/>
  <text x="400" y="400" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#38bdf8">INDUSTRIAL NETS</text>
</svg>
`);

export const GALLERY_IMG_3 = svg(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="#fff7ed"/>
  <circle cx="400" cy="400" r="300" stroke="#f97316" stroke-width="20" fill="none" opacity="0.2"/>
  <text x="400" y="400" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#f97316">INTERIOR SEAL</text>
</svg>
`);
