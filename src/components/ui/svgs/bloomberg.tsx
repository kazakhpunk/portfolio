import type { SVGProps } from "react";

// Bloomberg ships no open brand mark and is absent from Simple Icons, Font
// Awesome, and devicon, so this is a monogram drawn to sit at the same optical
// weight as the real logos beside it. currentColor keeps it legible in both themes.
const Bloomberg = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 4h8.4c2.5 0 4.1 1.2 4.1 3.3 0 1.4-.7 2.4-2 2.9 1.6.4 2.5 1.6 2.5 3.2 0 2.4-1.8 3.8-4.7 3.8H3zm3.1 2.4v3h4.6c1.1 0 1.7-.5 1.7-1.5s-.6-1.5-1.7-1.5zm0 5.2v3.2h5c1.2 0 1.9-.6 1.9-1.6s-.7-1.6-1.9-1.6zM18.4 18h2.3v2h-2.3zm0-3.6h2.3v2.4h-2.3z" />
  </svg>
);

export { Bloomberg };
