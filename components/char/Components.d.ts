// Components.d.ts — the complete catalog of the 1 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Vectorized303) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Иллюстрация_без_названия 30 3 [Vectorized]" (node 4:2)
export interface Vectorized303Props {
  className?: string;
  style?: React.CSSProperties;
}

declare const Vectorized303: React.FC<Vectorized303Props>;
declare global {
  interface Window {
    Vectorized303: React.FC<Vectorized303Props>;
  }
}
