
// Generated SVG Assets for Safe Shield
// These act as local image files that can be imported directly into components

// Helper for encoding
const svg = (content: string) => `data:image/svg+xml;utf8,${encodeURIComponent(content)}`;
import img1 from "./img-1.jpeg";
import img2 from "./img-2.jpeg";
import img3 from "./img-3.jpeg";
import img4 from "./img-4.jpeg";
import img5 from "./img-5.jpeg";
import img6 from "./img-6.jpeg";

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
export const ABOUT_IMG_ASBESTOS = img4;

// 3. About: Safety Nets (Blue Mesh Pattern)
export const ABOUT_IMG_NETS = img5;

// 4. About: Shrink Wrap (Plastic Texture)
export const ABOUT_IMG_WRAP = img6;

// 5. Gallery Images
export const GALLERY_IMG_1 = img1;
export const GALLERY_IMG_2 = img2;
export const GALLERY_IMG_3 = img3;
