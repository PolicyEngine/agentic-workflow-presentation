export const SVGDefs = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      {/* Clipboard icon */}
      <g id="icon-clipboard">
        <rect x="-12" y="-16" width="24" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="-6" y="-20" width="12" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="-7" y1="-4" x2="7" y2="-4" stroke="currentColor" strokeWidth="2"/>
        <line x1="-7" y1="3" x2="7" y2="3" stroke="currentColor" strokeWidth="2"/>
        <line x1="-7" y1="10" x2="4" y2="10" stroke="currentColor" strokeWidth="2"/>
      </g>
      {/* Books/documents icon */}
      <g id="icon-books">
        <rect x="-14" y="-8" width="8" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10)"/>
        <rect x="-4" y="-10" width="8" height="24" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="6" y="-8" width="8" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(10)"/>
      </g>
      {/* Gear icon */}
      <g id="icon-gear">
        <circle cx="0" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M0,-16 L3,-12 L3,-10 L-3,-10 L-3,-12 Z" fill="currentColor"/>
        <path d="M0,16 L3,12 L3,10 L-3,10 L-3,12 Z" fill="currentColor"/>
        <path d="M-16,0 L-12,3 L-10,3 L-10,-3 L-12,-3 Z" fill="currentColor"/>
        <path d="M16,0 L12,3 L10,3 L10,-3 L12,-3 Z" fill="currentColor"/>
        <path d="M-11,-11 L-9,-8 L-7,-9 L-9,-12 Z" fill="currentColor" transform="rotate(0)"/>
        <path d="M11,-11 L9,-8 L7,-9 L9,-12 Z" fill="currentColor"/>
        <path d="M-11,11 L-9,8 L-7,9 L-9,12 Z" fill="currentColor"/>
        <path d="M11,11 L9,8 L7,9 L9,12 Z" fill="currentColor"/>
      </g>
      {/* Flask/beaker icon */}
      <g id="icon-flask">
        <path d="M-5,-16 L-5,-4 L-14,14 L14,14 L5,-4 L5,-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="-7" y1="-16" x2="7" y2="-16" stroke="currentColor" strokeWidth="2"/>
        <line x1="-9" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2"/>
      </g>
      {/* Lambda icon */}
      <g id="icon-lambda">
        <text x="0" y="8" fontFamily="Georgia, serif" fontSize="40" fontWeight="400" fill="currentColor" textAnchor="middle">λ</text>
      </g>
      {/* Lightning bolt icon */}
      <g id="icon-lightning">
        <polygon points="2,-16 -8,2 -1,2 -4,16 8,-2 1,-2" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
      </g>
      {/* Magnifying glass icon */}
      <g id="icon-search">
        <circle cx="-3" cy="-3" r="12" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="6" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </g>
      {/* Chain link icon */}
      <g id="icon-link">
        <ellipse cx="-6" cy="0" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-45)"/>
        <ellipse cx="6" cy="0" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-45)"/>
      </g>
      {/* Wrench icon */}
      <g id="icon-wrench">
        <path d="M-6,-16 C-12,-10 -12,-2 -6,4 L8,18 L14,12 L0,-2 C6,-8 6,-14 0,-16 L-2,-10 L-6,-10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </g>
      {/* Upload arrow icon */}
      <g id="icon-upload">
        <line x1="0" y1="12" x2="0" y2="-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <polyline points="-8,-2 0,-12 8,-2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="-12" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* Open book icon */}
      <g id="icon-book">
        <path d="M0,-12 L0,14" stroke="currentColor" strokeWidth="2"/>
        <path d="M0,-12 C-6,-14 -12,-12 -16,-8 L-16,12 C-12,8 -6,10 0,14" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M0,-12 C6,-14 12,-12 16,-8 L16,12 C12,8 6,10 0,14" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="-12" y1="-4" x2="-4" y2="-2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="-12" y1="2" x2="-4" y2="4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="-4" x2="4" y2="-2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="2" x2="4" y2="4" stroke="currentColor" strokeWidth="1.5"/>
      </g>
      {/* Document icon */}
      <g id="icon-document">
        <path d="M-10,-16 L6,-16 L14,-8 L14,16 L-10,16 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M6,-16 L6,-8 L14,-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="-5" y1="0" x2="9" y2="0" stroke="currentColor" strokeWidth="2"/>
        <line x1="-5" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="-5" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
      </g>
      {/* Chat bubble icon */}
      <g id="icon-chat">
        <path d="M-14,-10 L14,-10 C16,-10 16,-10 16,-8 L16,6 C16,8 16,8 14,8 L4,8 L-2,16 L-2,8 L-14,8 C-16,8 -16,8 -16,6 L-16,-8 C-16,-10 -16,-10 -14,-10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="-7" cy="-1" r="2" fill="currentColor"/>
        <circle cx="0" cy="-1" r="2" fill="currentColor"/>
        <circle cx="7" cy="-1" r="2" fill="currentColor"/>
      </g>
    </defs>
  </svg>
);
