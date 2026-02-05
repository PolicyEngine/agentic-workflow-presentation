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

    <text x="400" y="30" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="13" fill="var(--warning)" fontStyle="italic">tests created after seeing rules-engineer's work</text>
  </svg>
);

// Step 3: Parallel Execution (5 agents)
const FlowDiagram3 = () => (
  <svg className="full-width-flow-svg" viewBox="0 0 750 420">
    <IconDefs />
    {/* document-collector */}
    <circle className="network-node" cx="80" cy="210" r="55" />
    <g transform="translate(80,200) scale(1.6)" className="svg-icon"><use href="#icon-books" /></g>
    <text className="network-label" x="80" y="285">doc-collector</text>

    {/* Lines to parallel agents */}
    <line className="network-line" x1="135" y1="175" x2="230" y2="70" />
    <line className="network-line" x1="135" y1="210" x2="230" y2="210" />
    <line className="network-line" x1="135" y1="245" x2="230" y2="350" />

    {/* parameter-architect (top) */}
    <circle className="network-node" cx="280" cy="70" r="50" />
    <g transform="translate(280,70) scale(1.4)" className="svg-icon"><use href="#icon-gear" /></g>
    <text className="network-label" x="280" y="140">param-architect</text>

    {/* test-creator (middle) */}
    <circle className="network-node" cx="280" cy="210" r="50" />
    <g transform="translate(280,210) scale(1.4)" className="svg-icon"><use href="#icon-flask" /></g>
    <text className="network-label" x="280" y="280">test-creator</text>

    {/* rules-engineer (bottom) */}
    <circle className="network-node" cx="280" cy="350" r="50" />
    <g transform="translate(280,358) scale(1.4)" className="svg-icon"><use href="#icon-lambda" /></g>
    <text className="network-label" x="280" y="420">rules-engineer</text>

    {/* Lines to impl-validator */}
    <line className="network-line" x1="330" y1="70" x2="450" y2="165" />
    <line className="network-line" x1="330" y1="210" x2="435" y2="210" />
    <line className="network-line" x1="330" y1="350" x2="450" y2="255" />

    {/* impl-validator */}
    <circle className="network-node" cx="490" cy="210" r="55" />
    <g transform="translate(490,210) scale(1.6)" className="svg-icon"><use href="#icon-search" /></g>
    <text className="network-label" x="490" y="285">impl-validator</text>

    {/* Line to output */}
    <line className="network-line" x1="545" y1="210" x2="615" y2="210" />
    <polygon className="flow-arrow" points="615,204 629,210 615,216" />

    {/* output */}
    <circle className="network-node" cx="670" cy="210" r="50" />
    <g transform="translate(670,210) scale(1.4)" className="svg-icon"><use href="#icon-document" /></g>
    <text className="network-label" x="670" y="280">output</text>
  </svg>
);

// Step 4: Add edge-case-generator + ci-fixer with loop (8 agents)
const FlowDiagram4 = () => (
  <svg className="full-width-flow-svg" viewBox="60 0 980 620">
    <IconDefs />

    {/* Loop indicator - ellipse around validation agents */}
    <ellipse cx="550" cy="280" rx="320" ry="210" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="8 4" opacity="0.35" />

    {/* === CONNECTIONS === */}

    {/* doc-collector → parameter-architect */}
    <line className="network-line thick" x1="183" y1="280" x2="360" y2="100" />
    {/* doc-collector → rules-engineer */}
    <line className="network-line thick" x1="183" y1="280" x2="720" y2="138" />
    {/* doc-collector → test-creator */}
    <line className="network-line thick" x1="183" y1="280" x2="498" y2="280" />

    {/* parameter-architect → rules-engineer */}
    <line className="network-line thick" x1="360" y1="100" x2="740" y2="104" />

    {/* parameter-architect → reference-validator */}
    <line className="network-line thick" x1="360" y1="142" x2="310" y2="365" />
    {/* rules-engineer → reference-validator (via param connection points) */}
    <line className="network-line thick" x1="688" y1="100" x2="310" y2="365" />

    {/* rules-engineer → edge-case-gen */}
    <line className="network-line thick" x1="720" y1="142" x2="720" y2="322" />
    {/* test-creator → edge-case-gen */}
    <line className="network-line thick" x1="587" y1="317" x2="720" y2="322" />

    {/* parameter-architect → impl-validator */}
    <line className="network-line thick" x1="360" y1="142" x2="520" y2="450" />
    {/* rules-engineer → impl-validator */}
    <line className="network-line thick" x1="720" y1="138" x2="590" y2="460" />
    {/* test-creator → impl-validator */}
    <line className="network-line thick" x1="550" y1="326" x2="550" y2="435" />

    {/* parameter-architect → ci-fixer */}
    <line className="network-line thick" x1="360" y1="142" x2="870" y2="280" />
    {/* rules-engineer → ci-fixer */}
    <line className="network-line thick" x1="740" y1="104" x2="870" y2="280" />
    {/* test-creator → ci-fixer */}
    <line className="network-line thick" x1="602" y1="280" x2="870" y2="280" />
    {/* reference-validator → ci-fixer */}
    <line className="network-line thick" x1="338" y1="400" x2="870" y2="280" />
    {/* edge-case-gen → ci-fixer */}
    <line className="network-line thick" x1="758" y1="360" x2="870" y2="280" />
    {/* impl-validator → ci-fixer */}
    <line className="network-line thick" x1="606" y1="487" x2="860" y2="330" />

    {/* === NODES === */}

    {/* document-collector */}
    <circle className="network-node" cx="130" cy="280" r="52" />
    <g transform="translate(130,270) scale(1.5)"><use href="#icon-books" className="svg-icon"/></g>
    <text className="network-label" x="130" y="352">document-</text>
    <text className="network-label" x="130" y="370">collector</text>

    {/* parameter-architect - TOP LEFT on ellipse */}
    <circle className="network-node" cx="360" cy="100" r="46" />
    <g transform="translate(360,100) scale(1.3)"><use href="#icon-gear" className="svg-icon"/></g>
    <text className="network-label" x="360" y="35">parameter-architect</text>

    {/* rules-engineer - TOP RIGHT on ellipse */}
    <circle className="network-node" cx="740" cy="100" r="46" />
    <g transform="translate(740,100) scale(1.3)"><use href="#icon-lambda" className="svg-icon"/></g>
    <text className="network-label" x="740" y="35">rules-engineer</text>

    {/* reference-validator - LEFT inside */}
    <circle className="network-node" cx="310" cy="400" r="34" />
    <g transform="translate(310,400) scale(1.0)"><use href="#icon-link" className="svg-icon"/></g>
    <text className="network-label" x="235" y="420">reference-</text>
    <text className="network-label" x="235" y="438">validator</text>

    {/* edge-case-gen - RIGHT inside */}
    <circle className="network-node" cx="720" cy="360" r="34" />
    <g transform="translate(720,360) scale(1.0)"><use href="#icon-lightning" className="svg-icon"/></g>
    <text className="network-label" x="720" y="410">edge-case-gen</text>

    {/* test-creator - CENTER inside */}
    <circle className="network-node" cx="550" cy="280" r="46" />
    <g transform="translate(550,280) scale(1.3)"><use href="#icon-flask" className="svg-icon"/></g>
    <text className="network-label" x="550" y="220">test-creator</text>

    {/* impl-validator - BOTTOM center ON ellipse */}
    <circle className="network-node" cx="550" cy="490" r="55" />
    <g transform="translate(550,490) scale(1.6)"><use href="#icon-search" className="svg-icon"/></g>
    <text className="network-label" x="550" y="565">impl-validator</text>

    {/* ci-fixer - RIGHT side ON ellipse */}
    <circle className="network-node" cx="870" cy="280" r="52" />
    <g transform="translate(870,280) scale(1.5)"><use href="#icon-wrench" className="svg-icon"/></g>
    <text className="network-label" x="870" y="352">ci-fixer</text>

    {/* output */}
    <line className="network-line" x1="870" y1="280" x2="940" y2="280" />
    <polygon className="flow-arrow" points="940,274 954,280 940,286" />
    <circle className="network-node" cx="990" cy="280" r="38" />
    <g transform="translate(990,280) scale(1.0)"><use href="#icon-document" className="svg-icon"/></g>
    <text className="network-label" x="990" y="335">output</text>

    {/* Loop label */}
    <text className="loop-label" x="550" y="585" textAnchor="middle">iterate until tests pass</text>
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
  <svg className="full-width-flow-svg" viewBox="0 0 1400 660">
    <IconDefs />

    {/* Loop indicator - ellipse around development/validation agents */}
    <ellipse cx="650" cy="300" rx="380" ry="240" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="8 4" opacity="0.35" />

    {/* === CONNECTIONS === */}

    {/* issue-manager → doc-collector */}
    <line className="network-line" x1="115" y1="300" x2="147" y2="300" />

    {/* doc-collector → parameter-architect */}
    <line className="network-line thick" x1="263" y1="300" x2="440" y2="100" />
    {/* doc-collector → rules-engineer */}
    <line className="network-line thick" x1="263" y1="300" x2="850" y2="148" />
    {/* doc-collector → test-creator */}
    <line className="network-line thick" x1="263" y1="300" x2="598" y2="300" />

    {/* parameter-architect → rules-engineer */}
    <line className="network-line thick" x1="440" y1="100" x2="870" y2="104" />

    {/* parameter-architect → reference-validator */}
    <line className="network-line thick" x1="440" y1="152" x2="380" y2="385" />
    {/* rules-engineer → reference-validator (via param connection points) */}
    <line className="network-line thick" x1="818" y1="100" x2="380" y2="385" />

    {/* rules-engineer → edge-case-gen */}
    <line className="network-line thick" x1="850" y1="152" x2="850" y2="342" />
    {/* test-creator → edge-case-gen */}
    <line className="network-line thick" x1="687" y1="337" x2="850" y2="342" />

    {/* parameter-architect → impl-validator */}
    <line className="network-line thick" x1="440" y1="152" x2="620" y2="480" />
    {/* rules-engineer → impl-validator */}
    <line className="network-line thick" x1="850" y1="148" x2="690" y2="490" />
    {/* test-creator → impl-validator */}
    <line className="network-line thick" x1="650" y1="352" x2="650" y2="475" />

    {/* parameter-architect → ci-fixer */}
    <line className="network-line thick" x1="440" y1="152" x2="1030" y2="300" />
    {/* rules-engineer → ci-fixer */}
    <line className="network-line thick" x1="870" y1="104" x2="1030" y2="300" />
    {/* test-creator → ci-fixer */}
    <line className="network-line thick" x1="702" y1="300" x2="1030" y2="300" />
    {/* reference-validator → ci-fixer */}
    <line className="network-line thick" x1="408" y1="420" x2="1030" y2="300" />
    {/* edge-case-gen → ci-fixer */}
    <line className="network-line thick" x1="888" y1="380" x2="1030" y2="300" />
    {/* impl-validator → ci-fixer */}
    <line className="network-line thick" x1="715" y1="537" x2="1020" y2="358" />

    {/* ci-fixer → pr-pusher */}
    <line className="network-line" x1="1030" y1="300" x2="1110" y2="300" />
    {/* pr-pusher → program-reviewer */}
    <line className="network-line" x1="1190" y1="300" x2="1210" y2="300" />
    {/* program-reviewer → Draft PR */}
    <line className="network-line" x1="1290" y1="300" x2="1310" y2="300" />

    {/* === NODES === */}

    {/* Outside left - issue-manager */}
    <circle className="network-node" cx="65" cy="300" r="50" />
    <g transform="translate(65,300) scale(1.5)" className="svg-icon"><use href="#icon-clipboard" /></g>
    <text className="network-label" x="65" y="370">issue-manager</text>

    {/* document-collector */}
    <circle className="network-node" cx="205" cy="300" r="58" />
    <g transform="translate(205,290) scale(1.7)" className="svg-icon"><use href="#icon-books" /></g>
    <text className="network-label" x="205" y="378">document-</text>
    <text className="network-label" x="205" y="396">collector</text>

    {/* parameter-architect - TOP LEFT on ellipse */}
    <circle className="network-node" cx="440" cy="100" r="52" />
    <g transform="translate(440,100) scale(1.5)" className="svg-icon"><use href="#icon-gear" /></g>
    <text className="network-label" x="440" y="30">parameter-architect</text>

    {/* rules-engineer - TOP RIGHT on ellipse */}
    <circle className="network-node" cx="870" cy="100" r="52" />
    <g transform="translate(870,100) scale(1.5)" className="svg-icon"><use href="#icon-lambda" /></g>
    <text className="network-label" x="870" y="30">rules-engineer</text>

    {/* reference-validator - LEFT inside */}
    <circle className="network-node" cx="370" cy="420" r="38" />
    <g transform="translate(370,420) scale(1.1)" className="svg-icon"><use href="#icon-link" /></g>
    <text className="network-label" x="290" y="440">reference-</text>
    <text className="network-label" x="290" y="458">validator</text>

    {/* edge-case-gen - RIGHT inside */}
    <circle className="network-node" cx="850" cy="380" r="38" />
    <g transform="translate(850,380) scale(1.1)" className="svg-icon"><use href="#icon-lightning" /></g>
    <text className="network-label" x="850" y="432">edge-case-gen</text>

    {/* test-creator - CENTER inside */}
    <circle className="network-node" cx="650" cy="300" r="52" />
    <g transform="translate(650,300) scale(1.5)" className="svg-icon"><use href="#icon-flask" /></g>
    <text className="network-label" x="650" y="240">test-creator</text>

    {/* impl-validator - BOTTOM center ON ellipse */}
    <circle className="network-node" cx="650" cy="540" r="65" />
    <g transform="translate(650,540) scale(1.9)" className="svg-icon"><use href="#icon-search" /></g>
    <text className="network-label" x="650" y="625">impl-validator</text>

    {/* ci-fixer - RIGHT side ON ellipse */}
    <circle className="network-node" cx="1030" cy="300" r="60" />
    <g transform="translate(1030,300) scale(1.8)" className="svg-icon"><use href="#icon-wrench" /></g>
    <text className="network-label" x="1030" y="380">ci-fixer</text>

    {/* pr-pusher */}
    <circle className="network-node" cx="1150" cy="300" r="40" />
    <g transform="translate(1150,300) scale(1.2)" className="svg-icon"><use href="#icon-upload" /></g>
    <text className="network-label" x="1150" y="358">pr-pusher</text>

    {/* program-reviewer */}
    <circle className="network-node" cx="1250" cy="300" r="40" />
    <g transform="translate(1250,300) scale(1.2)" className="svg-icon"><use href="#icon-book" /></g>
    <text className="network-label" x="1250" y="358">program-</text>
    <text className="network-label" x="1250" y="376">reviewer</text>

    {/* Draft PR */}
    <circle className="network-node" cx="1350" cy="300" r="40" />
    <g transform="translate(1350,300) scale(1.2)" className="svg-icon"><use href="#icon-document" /></g>
    <text className="network-label" x="1350" y="358">Draft PR</text>

    {/* Loop label */}
    <text className="loop-label" x="650" y="640" textAnchor="middle">iterate until tests pass</text>
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
          New Hampshire TANF end-to-end. One command, one output—parameters, variables, tests,
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
      'Parameters and variables don\'t match each other',
      'Manual iteration on failures',
      'Missing reference validation',
      'No edge case coverage',
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
          One command—<code>/encode-policy "New Hampshire TANF"</code>—triggers the entire workflow
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
