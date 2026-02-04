import type { ReactNode } from 'react';

export interface NarrativeStep {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  diagram: ReactNode;
  description: ReactNode;
  wins: string[];
  shortcomings: string[];
  insight: string;
}

// SVG Icon definitions
const IconDefs = () => (
  <defs>
    <g id="icon-clipboard">
      <rect x="-12" y="-16" width="24" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="-6" y="-20" width="12" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="-7" y1="-4" x2="7" y2="-4" stroke="currentColor" strokeWidth="2"/>
      <line x1="-7" y1="3" x2="7" y2="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="-7" y1="10" x2="4" y2="10" stroke="currentColor" strokeWidth="2"/>
    </g>
    <g id="icon-books">
      <rect x="-14" y="-8" width="8" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10)"/>
      <rect x="-4" y="-10" width="8" height="24" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="6" y="-8" width="8" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(10)"/>
    </g>
    <g id="icon-gear">
      <circle cx="0" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M0,-16 L3,-12 L3,-10 L-3,-10 L-3,-12 Z" fill="currentColor"/>
      <path d="M0,16 L3,12 L3,10 L-3,10 L-3,12 Z" fill="currentColor"/>
      <path d="M-16,0 L-12,3 L-10,3 L-10,-3 L-12,-3 Z" fill="currentColor"/>
      <path d="M16,0 L12,3 L10,3 L10,-3 L12,-3 Z" fill="currentColor"/>
      <path d="M-11,-11 L-9,-8 L-7,-9 L-9,-12 Z" fill="currentColor"/>
      <path d="M11,-11 L9,-8 L7,-9 L9,-12 Z" fill="currentColor"/>
      <path d="M-11,11 L-9,8 L-7,9 L-9,12 Z" fill="currentColor"/>
      <path d="M11,11 L9,8 L7,9 L9,12 Z" fill="currentColor"/>
    </g>
    <g id="icon-flask">
      <path d="M-5,-16 L-5,-4 L-14,14 L14,14 L5,-4 L5,-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <line x1="-7" y1="-16" x2="7" y2="-16" stroke="currentColor" strokeWidth="2"/>
      <line x1="-9" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2"/>
    </g>
    <g id="icon-lambda">
      <text x="0" y="8" fontFamily="Georgia, serif" fontSize="40" fontWeight="400" fill="currentColor" textAnchor="middle">λ</text>
    </g>
    <g id="icon-lightning">
      <polygon points="2,-16 -8,2 -1,2 -4,16 8,-2 1,-2" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    </g>
    <g id="icon-search">
      <circle cx="-3" cy="-3" r="12" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </g>
    <g id="icon-link">
      <ellipse cx="-6" cy="0" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-45)"/>
      <ellipse cx="6" cy="0" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-45)"/>
    </g>
    <g id="icon-wrench">
      <path d="M-6,-16 C-12,-10 -12,-2 -6,4 L8,18 L14,12 L0,-2 C6,-8 6,-14 0,-16 L-2,-10 L-6,-10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </g>
    <g id="icon-upload">
      <line x1="0" y1="12" x2="0" y2="-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <polyline points="-8,-2 0,-12 8,-2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="-12" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <g id="icon-book">
      <path d="M0,-12 L0,14" stroke="currentColor" strokeWidth="2"/>
      <path d="M0,-12 C-6,-14 -12,-12 -16,-8 L-16,12 C-12,8 -6,10 0,14" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M0,-12 C6,-14 12,-12 16,-8 L16,12 C12,8 6,10 0,14" fill="none" stroke="currentColor" strokeWidth="2"/>
    </g>
    <g id="icon-document">
      <path d="M-10,-16 L6,-16 L14,-8 L14,16 L-10,16 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M6,-16 L6,-8 L14,-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <line x1="-5" y1="0" x2="9" y2="0" stroke="currentColor" strokeWidth="2"/>
      <line x1="-5" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="2"/>
    </g>
    <g id="icon-chat">
      <path d="M-14,-10 L14,-10 C16,-10 16,-10 16,-8 L16,6 C16,8 16,8 14,8 L4,8 L-2,16 L-2,8 L-14,8 C-16,8 -16,8 -16,6 L-16,-8 C-16,-10 -16,-10 -14,-10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="-7" cy="-1" r="2" fill="currentColor"/>
      <circle cx="0" cy="-1" r="2" fill="currentColor"/>
      <circle cx="7" cy="-1" r="2" fill="currentColor"/>
    </g>
  </defs>
);

// Step 1: Single Prompt (1 thing)
const FlowDiagram1 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 500 200">
    <IconDefs />
    <circle className="network-node" cx="150" cy="100" r="60" />
    <g transform="translate(150,100) scale(1.8)" className="svg-icon"><use href="#icon-chat" /></g>
    <text className="network-label" x="150" y="180">Single Prompt</text>

    <line className="network-line" x1="210" y1="100" x2="280" y2="100" />
    <polygon className="flow-arrow" points="280,94 294,100 280,106" />

    <circle className="network-node" cx="350" cy="100" r="50" style={{ stroke: '#dc2626' }} />
    <g transform="translate(350,100) scale(1.4)" className="svg-icon" style={{ color: '#dc2626' }}><use href="#icon-document" /></g>
    <text className="network-label" x="350" y="170">Output</text>

    <circle cx="420" cy="55" r="30" fill="#fef2f2" stroke="#dc2626" strokeWidth="2.5"/>
    <text x="420" y="52" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="15" fontWeight="600" fill="#dc2626">70%</text>
    <text x="420" y="68" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#dc2626">errors</text>
  </svg>
);

// Step 2: Core Pipeline (4 agents, sequential)
const FlowDiagram2 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 800 220">
    <IconDefs />
    <circle className="network-node" cx="80" cy="110" r="50" />
    <g transform="translate(80,100) scale(1.4)" className="svg-icon"><use href="#icon-books" /></g>
    <text className="network-label" x="80" y="180">doc-collector</text>

    <line className="network-line" x1="130" y1="110" x2="170" y2="110" />
    <polygon className="flow-arrow" points="170,104 184,110 170,116" />

    <circle className="network-node" cx="230" cy="110" r="50" />
    <g transform="translate(230,110) scale(1.4)" className="svg-icon"><use href="#icon-gear" /></g>
    <text className="network-label" x="230" y="180">param-architect</text>

    <line className="network-line" x1="280" y1="110" x2="320" y2="110" />
    <polygon className="flow-arrow" points="320,104 334,110 320,116" />

    <circle className="network-node" cx="380" cy="110" r="50" />
    <g transform="translate(380,118) scale(1.4)" className="svg-icon"><use href="#icon-lambda" /></g>
    <text className="network-label" x="380" y="180">rules-engineer</text>

    <line className="network-line" x1="430" y1="110" x2="470" y2="110" />
    <polygon className="flow-arrow" points="470,104 484,110 470,116" />

    <circle className="network-node" cx="530" cy="110" r="50" />
    <g transform="translate(530,110) scale(1.4)" className="svg-icon"><use href="#icon-flask" /></g>
    <text className="network-label" x="530" y="180">test-creator</text>

    <line className="network-line" x1="580" y1="110" x2="620" y2="110" />
    <polygon className="flow-arrow" points="620,104 634,110 620,116" />

    <circle className="network-node" cx="680" cy="110" r="50" />
    <g transform="translate(680,110) scale(1.4)" className="svg-icon"><use href="#icon-document" /></g>
    <text className="network-label" x="680" y="180">output</text>

    <text x="400" y="30" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--warning)" fontStyle="italic">tests run after seeing implementation</text>
  </svg>
);

// Step 3: Parallel Execution (5 agents)
const FlowDiagram3 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 750 380">
    <IconDefs />
    {/* document-collector */}
    <circle className="network-node" cx="80" cy="190" r="55" />
    <g transform="translate(80,180) scale(1.6)" className="svg-icon"><use href="#icon-books" /></g>
    <text className="network-label" x="80" y="265">doc-collector</text>

    {/* Lines to parallel agents */}
    <line className="network-line" x1="135" y1="150" x2="210" y2="80" />
    <line className="network-line" x1="135" y1="190" x2="210" y2="190" />
    <line className="network-line" x1="135" y1="230" x2="210" y2="300" />

    {/* parameter-architect (top) */}
    <circle className="network-node" cx="280" cy="80" r="50" />
    <g transform="translate(280,80) scale(1.4)" className="svg-icon"><use href="#icon-gear" /></g>
    <text className="network-label" x="280" y="150">param-architect</text>

    {/* test-creator (middle) */}
    <circle className="network-node" cx="280" cy="190" r="50" />
    <g transform="translate(280,190) scale(1.4)" className="svg-icon"><use href="#icon-flask" /></g>
    <text className="network-label" x="280" y="260">test-creator</text>

    {/* rules-engineer (bottom) */}
    <circle className="network-node" cx="280" cy="300" r="50" />
    <g transform="translate(280,308) scale(1.4)" className="svg-icon"><use href="#icon-lambda" /></g>
    <text className="network-label" x="280" y="370">rules-engineer</text>

    {/* Lines to impl-validator */}
    <line className="network-line" x1="330" y1="80" x2="420" y2="160" />
    <line className="network-line" x1="330" y1="190" x2="420" y2="190" />
    <line className="network-line" x1="330" y1="300" x2="420" y2="220" />

    {/* impl-validator */}
    <circle className="network-node" cx="490" cy="190" r="55" />
    <g transform="translate(490,190) scale(1.6)" className="svg-icon"><use href="#icon-search" /></g>
    <text className="network-label" x="490" y="265">impl-validator</text>

    {/* Line to output */}
    <line className="network-line" x1="545" y1="190" x2="600" y2="190" />
    <polygon className="flow-arrow" points="600,184 614,190 600,196" />

    {/* output */}
    <circle className="network-node" cx="670" cy="190" r="50" />
    <g transform="translate(670,190) scale(1.4)" className="svg-icon"><use href="#icon-document" /></g>
    <text className="network-label" x="670" y="260">output</text>

    {/* Parallel indicator */}
    <rect x="200" y="45" width="160" height="290" rx="10" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="8 4" opacity="0.5"/>
    <text x="280" y="30" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="var(--accent)" fontWeight="600">PARALLEL</text>
  </svg>
);

// Step 4: Add edge-case-generator + ci-fixer with loop (8 agents)
const FlowDiagram4 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 950 420">
    <IconDefs />

    {/* Loop indicator */}
    <ellipse cx="520" cy="210" rx="280" ry="180" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="10 5" opacity="0.4"/>
    <text x="520" y="405" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="12" fill="var(--text-mid)" fontStyle="italic">iterate until tests pass</text>

    {/* document-collector */}
    <circle className="network-node" cx="70" cy="210" r="50" />
    <g transform="translate(70,200) scale(1.4)" className="svg-icon"><use href="#icon-books" /></g>
    <text className="network-label" x="70" y="280">doc-collector</text>

    {/* Lines to parallel agents */}
    <line className="network-line" x1="120" y1="170" x2="185" y2="100" />
    <line className="network-line" x1="120" y1="210" x2="185" y2="210" />
    <line className="network-line" x1="120" y1="250" x2="185" y2="320" />

    {/* parameter-architect */}
    <circle className="network-node" cx="250" cy="100" r="45" />
    <g transform="translate(250,100) scale(1.2)" className="svg-icon"><use href="#icon-gear" /></g>
    <text className="network-label" x="250" y="160">param-architect</text>

    {/* test-creator */}
    <circle className="network-node" cx="250" cy="210" r="45" />
    <g transform="translate(250,210) scale(1.2)" className="svg-icon"><use href="#icon-flask" /></g>
    <text className="network-label" x="250" y="270">test-creator</text>

    {/* rules-engineer */}
    <circle className="network-node" cx="250" cy="320" r="45" />
    <g transform="translate(250,328) scale(1.2)" className="svg-icon"><use href="#icon-lambda" /></g>
    <text className="network-label" x="250" y="380">rules-engineer</text>

    {/* edge-case-generator */}
    <line className="network-line" x1="295" y1="220" x2="350" y2="270" />
    <line className="network-line" x1="295" y1="310" x2="350" y2="270" />
    <circle className="network-node" cx="400" cy="270" r="42" />
    <g transform="translate(400,270) scale(1.1)" className="svg-icon"><use href="#icon-lightning" /></g>
    <text className="network-label" x="400" y="328">edge-case-gen</text>

    {/* Lines to validators */}
    <line className="network-line" x1="295" y1="100" x2="480" y2="100" />
    <line className="network-line" x1="295" y1="210" x2="540" y2="180" />
    <line className="network-line" x1="442" y1="270" x2="540" y2="220" />
    <line className="network-line" x1="295" y1="320" x2="480" y2="320" />

    {/* impl-validator */}
    <circle className="network-node" cx="540" cy="100" r="45" />
    <g transform="translate(540,100) scale(1.2)" className="svg-icon"><use href="#icon-search" /></g>
    <text className="network-label" x="540" y="35">impl-validator</text>

    {/* reference-validator */}
    <circle className="network-node" cx="540" cy="320" r="42" />
    <g transform="translate(540,320) scale(1.1)" className="svg-icon"><use href="#icon-link" /></g>
    <text className="network-label" x="540" y="378">ref-validator</text>

    {/* Lines to ci-fixer */}
    <line className="network-line" x1="585" y1="115" x2="660" y2="180" />
    <line className="network-line" x1="540" y1="200" x2="660" y2="200" />
    <line className="network-line" x1="582" y1="305" x2="660" y2="220" />

    {/* ci-fixer */}
    <circle className="network-node" cx="720" cy="200" r="50" />
    <g transform="translate(720,200) scale(1.4)" className="svg-icon"><use href="#icon-wrench" /></g>
    <text className="network-label" x="720" y="270">ci-fixer</text>

    {/* output */}
    <line className="network-line" x1="770" y1="200" x2="820" y2="200" />
    <polygon className="flow-arrow" points="820,194 834,200 820,206" />
    <circle className="network-node" cx="880" cy="200" r="45" />
    <g transform="translate(880,200) scale(1.2)" className="svg-icon"><use href="#icon-document" /></g>
    <text className="network-label" x="880" y="260">output</text>
  </svg>
);

// Step 5: Add skills layer
const FlowDiagram5 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 800 340">
    <IconDefs />
    {/* Row labels */}
    <text x="65" y="75" textAnchor="end" fontFamily="JetBrains Mono" fontSize="13" fill="var(--text-mid)" fontWeight="600">Agents</text>
    <text x="65" y="220" textAnchor="end" fontFamily="JetBrains Mono" fontSize="13" fill="var(--text-mid)" fontWeight="600">Skills</text>

    {/* Agents row */}
    <circle className="network-node" cx="140" cy="70" r="38" />
    <g transform="translate(140,62) scale(1.0)" className="svg-icon"><use href="#icon-books" /></g>

    <circle className="network-node" cx="230" cy="70" r="38" />
    <g transform="translate(230,70) scale(1.0)" className="svg-icon"><use href="#icon-gear" /></g>

    <circle className="network-node" cx="320" cy="70" r="38" />
    <g transform="translate(320,70) scale(1.0)" className="svg-icon"><use href="#icon-flask" /></g>

    <circle className="network-node" cx="410" cy="70" r="38" />
    <g transform="translate(410,78) scale(1.0)" className="svg-icon"><use href="#icon-lambda" /></g>

    <circle className="network-node" cx="500" cy="70" r="38" />
    <g transform="translate(500,70) scale(1.0)" className="svg-icon"><use href="#icon-lightning" /></g>

    <circle className="network-node" cx="590" cy="70" r="38" />
    <g transform="translate(590,70) scale(1.0)" className="svg-icon"><use href="#icon-search" /></g>

    <circle className="network-node" cx="680" cy="70" r="38" />
    <g transform="translate(680,70) scale(1.0)" className="svg-icon"><use href="#icon-wrench" /></g>

    <text x="750" y="77" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="20" fill="var(--text-mid)">...</text>

    {/* Lines from agents to skills */}
    <line x1="140" y1="108" x2="120" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="230" y1="108" x2="120" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="230" y1="108" x2="230" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="320" y1="108" x2="230" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="320" y1="108" x2="340" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="410" y1="108" x2="340" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="410" y1="108" x2="450" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="500" y1="108" x2="230" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="500" y1="108" x2="340" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="590" y1="108" x2="450" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="590" y1="108" x2="560" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="680" y1="108" x2="340" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="680" y1="108" x2="560" y2="180" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>

    {/* Skills row */}
    <rect x="75" y="190" width="90" height="42" rx="5" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="120" y="217" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--accent)">variable</text>

    <rect x="185" y="190" width="90" height="42" rx="5" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="230" y="217" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--accent)">testing</text>

    <rect x="295" y="190" width="90" height="42" rx="5" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="340" y="217" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--accent)">code-style</text>

    <rect x="405" y="190" width="90" height="42" rx="5" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="450" y="217" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--accent)">parameter</text>

    <rect x="515" y="190" width="90" height="42" rx="5" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="560" y="217" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--accent)">vectorize</text>

    <text x="640" y="217" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="18" fill="var(--accent)">...</text>

    {/* Key insight */}
    <text x="400" y="280" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500" fill="var(--text-mid)" fontStyle="italic">Multiple agents load the same skills → consistent patterns</text>

    {/* Error rate */}
    <circle cx="720" cy="280" r="28" fill="rgba(34, 197, 94, 0.15)" stroke="#22c55e" strokeWidth="2"/>
    <text x="720" y="277" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="15" fontWeight="700" fill="#22c55e">15%</text>
    <text x="720" y="293" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#22c55e">errors</text>
  </svg>
);

// Step 6: Full workflow (all agents)
const FlowDiagram6 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 1100 520">
    <IconDefs />

    {/* Loop indicator */}
    <ellipse cx="480" cy="260" rx="280" ry="220" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="12 6" opacity="0.5"/>
    <text x="480" y="500" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--text-mid)" fontStyle="italic" fontWeight="500">iterate until tests pass</text>

    {/* issue-manager */}
    <circle className="network-node" cx="55" cy="260" r="45" />
    <g transform="translate(55,260) scale(1.2)" className="svg-icon"><use href="#icon-clipboard" /></g>
    <text className="network-label" x="55" y="320">issue-manager</text>

    <line className="network-line" x1="100" y1="260" x2="130" y2="260" />

    {/* document-collector */}
    <circle className="network-node" cx="180" cy="260" r="50" />
    <g transform="translate(180,250) scale(1.4)" className="svg-icon"><use href="#icon-books" /></g>
    <text className="network-label" x="180" y="328">doc-collector</text>

    {/* Lines to parallel agents */}
    <line className="network-line" x1="230" y1="220" x2="290" y2="120" />
    <line className="network-line" x1="230" y1="260" x2="290" y2="260" />
    <line className="network-line" x1="230" y1="300" x2="290" y2="400" />

    {/* parameter-architect */}
    <circle className="network-node" cx="350" cy="120" r="48" />
    <g transform="translate(350,120) scale(1.3)" className="svg-icon"><use href="#icon-gear" /></g>
    <text className="network-label" x="350" y="55">param-architect</text>

    {/* test-creator */}
    <circle className="network-node" cx="350" cy="260" r="48" />
    <g transform="translate(350,260) scale(1.3)" className="svg-icon"><use href="#icon-flask" /></g>
    <text className="network-label" x="350" y="328">test-creator</text>

    {/* rules-engineer */}
    <circle className="network-node" cx="350" cy="400" r="48" />
    <g transform="translate(350,408) scale(1.3)" className="svg-icon"><use href="#icon-lambda" /></g>
    <text className="network-label" x="350" y="468">rules-engineer</text>

    {/* edge-case-generator */}
    <line className="network-line" x1="398" y1="272" x2="450" y2="320" />
    <line className="network-line" x1="398" y1="388" x2="450" y2="340" />
    <circle className="network-node" cx="500" cy="330" r="42" />
    <g transform="translate(500,330) scale(1.1)" className="svg-icon"><use href="#icon-lightning" /></g>
    <text className="network-label" x="500" y="390">edge-case-gen</text>

    {/* Lines to validators */}
    <line className="network-line" x1="398" y1="120" x2="580" y2="120" />
    <line className="network-line" x1="398" y1="260" x2="640" y2="220" />
    <line className="network-line" x1="542" y1="330" x2="640" y2="270" />
    <line className="network-line" x1="398" y1="400" x2="580" y2="400" />

    {/* impl-validator */}
    <circle className="network-node" cx="640" cy="120" r="50" />
    <g transform="translate(640,120) scale(1.4)" className="svg-icon"><use href="#icon-search" /></g>
    <text className="network-label" x="640" y="55">impl-validator</text>

    {/* reference-validator */}
    <circle className="network-node" cx="640" cy="400" r="42" />
    <g transform="translate(640,400) scale(1.1)" className="svg-icon"><use href="#icon-link" /></g>
    <text className="network-label" x="640" y="460">ref-validator</text>

    {/* Lines to ci-fixer */}
    <line className="network-line" x1="690" y1="135" x2="750" y2="220" />
    <line className="network-line" x1="640" y1="245" x2="750" y2="245" />
    <line className="network-line" x1="682" y1="385" x2="750" y2="270" />

    {/* ci-fixer */}
    <circle className="network-node" cx="810" cy="245" r="55" />
    <g transform="translate(810,245) scale(1.5)" className="svg-icon"><use href="#icon-wrench" /></g>
    <text className="network-label" x="810" y="320">ci-fixer</text>

    {/* pr-pusher */}
    <line className="network-line" x1="865" y1="245" x2="900" y2="245" />
    <circle className="network-node" cx="945" cy="245" r="38" />
    <g transform="translate(945,245) scale(1.0)" className="svg-icon"><use href="#icon-upload" /></g>
    <text className="network-label" x="945" y="300">pr-pusher</text>

    {/* program-reviewer */}
    <line className="network-line" x1="983" y1="245" x2="1010" y2="245" />
    <circle className="network-node" cx="1050" cy="245" r="38" />
    <g transform="translate(1050,245) scale(1.0)" className="svg-icon"><use href="#icon-book" /></g>
    <text className="network-label" x="1050" y="300">reviewer</text>
  </svg>
);

export const narrativeSteps: NarrativeStep[] = [
  {
    id: 'iter1',
    num: 1,
    title: 'Single prompt',
    subtitle: '70% error rate',
    diagram: <FlowDiagram1 />,
    description: (
      <>
        <p>
          We started with the simplest approach: a single prompt asking Claude to implement
          Colorado TANF end-to-end. One command, one output—parameters, variables, tests,
          everything in one shot.
        </p>
        <p>
          The prompt included program requirements, coding conventions, file structure rules,
          and testing standards. Too many concerns for one context to hold.
        </p>
      </>
    ),
    wins: [
      'Simple to start—just one prompt to maintain',
      'Sometimes produced working code',
      'Fast iteration on prompt wording',
    ],
    shortcomings: [
      '70% of outputs had errors',
      'Hard-coded values instead of parameters',
      'No citations to source documents',
      'Tests passed but formulas were wrong',
    ],
    insight:
      'Too many concerns for one context. The model couldn\'t hold coding standards, legal requirements, and testing patterns all at once.',
  },
  {
    id: 'iter2',
    num: 2,
    title: 'Core pipeline',
    subtitle: '4 agents, sequential',
    diagram: <FlowDiagram2 />,
    description: (
      <>
        <p>
          If one prompt couldn't handle everything, we'd divide the work. We introduced
          <strong> agents</strong>—specialized AI workers that each focus on a single concern.
        </p>
        <p>
          A <code>document-collector</code> gathers sources. A <code>parameter-architect</code> structures
          data. A <code>rules-engineer</code> implements logic. A <code>test-creator</code> writes validations.
        </p>
      </>
    ),
    wins: [
      'Each agent focused on one task',
      'Clearer, shorter prompts',
      'Easier to debug which step failed',
      'Could improve agents independently',
    ],
    shortcomings: [
      'Tests run after seeing implementation',
      'Tests confirm bugs instead of catching them',
      'Sequential execution is slow',
      'No validation step',
    ],
    insight:
      'Dividing work helped, but agents running sequentially created a new problem: test-creator saw the implementation before writing tests.',
  },
  {
    id: 'iter3',
    num: 3,
    title: 'Parallel execution',
    subtitle: '5 agents, 40% error rate',
    diagram: <FlowDiagram3 />,
    description: (
      <>
        <p>
          The deeper problem: <strong>tests designed to pass, not to verify</strong>. When
          test-creator sees rules-engineer's code first, it writes tests that validate what
          was built—not what the regulation requires.
        </p>
        <p>
          We run test-creator and rules-engineer in parallel. Both read the same documentation,
          neither sees the other's output. An <code>impl-validator</code> checks the results.
        </p>
      </>
    ),
    wins: [
      'Tests verify requirements, not implementation',
      'Parallel execution catches real bugs',
      'Error rate dropped to 40%',
      'Added impl-validator for quality checks',
    ],
    shortcomings: [
      'No edge case coverage',
      'Manual iteration on failures',
      'Missing reference validation',
      'Hard to scale more agents',
    ],
    insight:
      'Agent isolation prevents confirmation bias. When tests fail, it reveals actual discrepancies between implementation and requirements.',
  },
  {
    id: 'iter4',
    num: 4,
    title: 'Validation loop',
    subtitle: '8 agents with CI feedback',
    diagram: <FlowDiagram4 />,
    description: (
      <>
        <p>
          We added more specialized agents: <code>edge-case-generator</code> for boundary tests,
          <code>reference-validator</code> to check citations, and <code>ci-fixer</code> to
          automatically iterate on failures.
        </p>
        <p>
          The workflow now loops—when tests fail, ci-fixer analyzes the error and retries
          until everything passes. No more manual debugging.
        </p>
      </>
    ),
    wins: [
      'Automatic iteration on failures',
      'Edge cases covered systematically',
      'Citations validated against sources',
      'Less manual intervention needed',
    ],
    shortcomings: [
      'Agents had inconsistent patterns',
      'Prompts grew long with repeated rules',
      'Same instructions in every agent',
      'Hard to maintain consistency',
    ],
    insight:
      'More agents meant more capability, but also more inconsistency. The same rules about naming, structure, and style were repeated everywhere.',
  },
  {
    id: 'iter5',
    num: 5,
    title: 'Modular skills',
    subtitle: '15% error rate',
    diagram: <FlowDiagram5 />,
    description: (
      <>
        <p>
          We introduced <strong>skills</strong>—reusable knowledge modules that agents load on
          demand. Instead of repeating instructions in every prompt, we extracted shared
          knowledge into focused documents.
        </p>
        <p>
          The <code>variable-patterns</code> skill teaches proper class structure. The <code>testing</code>
          skill ensures consistent test format. Multiple agents load the same skills.
        </p>
      </>
    ),
    wins: [
      'Consistent patterns across all agents',
      'Shorter, focused agent prompts',
      'Error rate dropped to 15%',
      'Easy to add new agents',
    ],
    shortcomings: [
      'Missing start-to-end orchestration',
      'No PR creation or review step',
      'Manual handoff between stages',
    ],
    insight:
      'Skills let us scale without redundancy. One skill, many agents—consistent patterns everywhere.',
  },
  {
    id: 'iter6',
    num: 6,
    title: 'Full workflow',
    subtitle: 'Complete pipeline',
    diagram: <FlowDiagram6 />,
    description: (
      <>
        <p>
          The final architecture adds orchestration agents: <code>issue-manager</code> finds or creates
          GitHub issues, <code>pr-pusher</code> creates the pull request, and <code>program-reviewer</code>
          validates against regulations before marking ready for human review.
        </p>
        <p>
          One command—<code>/encode-policy "Colorado TANF"</code>—triggers the entire workflow
          and produces a draft PR in about 90 minutes.
        </p>
      </>
    ),
    wins: [
      'End-to-end automation',
      '90 minutes per implementation',
      'Consistent quality across 42 states',
      'Human reviews final PR only',
    ],
    shortcomings: [
      'Complex to debug across layers',
      'Requires clear documentation',
    ],
    insight:
      'The complete pipeline: issue → research → parallel implementation → validation loop → PR. Each agent does one thing well, skills ensure consistency.',
  },
];
