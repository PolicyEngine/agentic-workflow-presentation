import { useState } from 'react';

// Agent positions (scaled down from FlowDiagram4 to fit with skills below)
const agents = {
  'doc-collector': { x: 80, y: 240, r: 45, icon: '#icon-books', label: 'document-collector', labelY: 305 },
  'param-architect': { x: 220, y: 90, r: 45, icon: '#icon-gear', label: 'parameter-architect', labelY: 30 },
  'test-creator': { x: 220, y: 240, r: 45, icon: '#icon-flask', label: 'test-creator', labelY: 305 },
  'rules-engineer': { x: 220, y: 390, r: 45, icon: '#icon-lambda', label: 'rules-engineer', labelY: 455 },
  'edge-case-gen': { x: 350, y: 310, r: 40, icon: '#icon-lightning', label: 'edge-case-gen', labelY: 368 },
  'impl-validator': { x: 520, y: 90, r: 52, icon: '#icon-search', label: 'impl-validator', labelY: 30 },
  'ref-validator': { x: 490, y: 420, r: 40, icon: '#icon-link', label: 'reference-validator', labelY: 478 },
  'ci-fixer': { x: 620, y: 240, r: 52, icon: '#icon-wrench', label: 'ci-fixer', labelY: 315 },
};

// Skills and which agents they connect to
const skills = [
  { id: 'variable', label: 'variable', x: 120, agents: ['doc-collector', 'param-architect', 'rules-engineer'] },
  { id: 'testing', label: 'testing', x: 230, agents: ['test-creator', 'edge-case-gen', 'impl-validator'] },
  { id: 'code-style', label: 'code-style', x: 340, agents: ['param-architect', 'rules-engineer', 'ci-fixer'] },
  { id: 'parameter', label: 'parameter', x: 450, agents: ['param-architect', 'ref-validator'] },
  { id: 'vectorize', label: 'vectorize', x: 560, agents: ['impl-validator', 'ci-fixer'] },
];

const skillY = 540;
const skillWidth = 90;
const skillHeight = 36;

// Icon definitions
const IconDefs = () => (
  <defs>
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
  </defs>
);

export const FlowDiagram5 = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Agent-to-agent connections (same as FlowDiagram4)
  const agentConnections = [
    ['doc-collector', 'param-architect'],
    ['doc-collector', 'test-creator'],
    ['doc-collector', 'rules-engineer'],
    ['test-creator', 'edge-case-gen'],
    ['rules-engineer', 'edge-case-gen'],
    ['test-creator', 'impl-validator'],
    ['test-creator', 'ci-fixer'],
    ['param-architect', 'impl-validator'],
    ['param-architect', 'ci-fixer'],
    ['rules-engineer', 'ci-fixer'],
    ['param-architect', 'ref-validator'],
    ['rules-engineer', 'ref-validator'],
    ['impl-validator', 'ci-fixer'],
    ['ref-validator', 'ci-fixer'],
    ['edge-case-gen', 'ci-fixer'],
  ];

  return (
    <svg className="full-width-flow-svg" viewBox="0 0 720 620">
      <IconDefs />

      {/* Loop indicator ellipse */}
      <ellipse
        className="loop-indicator"
        cx="370"
        cy="240"
        rx="280"
        ry="200"
      />

      {/* Agent-to-agent connections */}
      {agentConnections.map(([from, to], i) => {
        const a1 = agents[from as keyof typeof agents];
        const a2 = agents[to as keyof typeof agents];
        return (
          <line
            key={i}
            className="network-line"
            x1={a1.x}
            y1={a1.y}
            x2={a2.x}
            y2={a2.y}
          />
        );
      })}

      {/* Skill-to-agent connection lines */}
      {skills.map((skill) =>
        skill.agents.map((agentId) => {
          const agent = agents[agentId as keyof typeof agents];
          const isHighlighted = hoveredSkill === skill.id;
          return (
            <line
              key={`${skill.id}-${agentId}`}
              x1={skill.x}
              y1={skillY}
              x2={agent.x}
              y2={agent.y + agent.r}
              stroke="var(--accent)"
              strokeWidth={isHighlighted ? 2.5 : 1}
              strokeDasharray={isHighlighted ? "none" : "4 3"}
              opacity={hoveredSkill === null ? 0.4 : isHighlighted ? 1 : 0.15}
              style={{ transition: 'all 0.2s ease' }}
            />
          );
        })
      )}

      {/* Agent nodes */}
      {Object.entries(agents).map(([id, agent]) => {
        const isConnectedToHovered = hoveredSkill
          ? skills.find(s => s.id === hoveredSkill)?.agents.includes(id)
          : false;
        return (
          <g key={id}>
            <circle
              className="network-node"
              cx={agent.x}
              cy={agent.y}
              r={agent.r}
              style={{
                opacity: hoveredSkill === null ? 1 : isConnectedToHovered ? 1 : 0.4,
                transition: 'opacity 0.2s ease',
              }}
            />
            <g
              transform={`translate(${agent.x},${agent.y + (id === 'rules-engineer' ? 8 : 0)}) scale(${agent.r / 35})`}
              className="svg-icon"
              style={{
                opacity: hoveredSkill === null ? 1 : isConnectedToHovered ? 1 : 0.4,
                transition: 'opacity 0.2s ease',
              }}
            >
              <use href={agent.icon} />
            </g>
            <text
              className="network-label"
              x={agent.x}
              y={agent.labelY}
              style={{
                opacity: hoveredSkill === null ? 1 : isConnectedToHovered ? 1 : 0.4,
                transition: 'opacity 0.2s ease',
              }}
            >
              {agent.label}
            </text>
          </g>
        );
      })}

      {/* Skills row */}
      <text
        x="30"
        y={skillY + skillHeight / 2 + 5}
        fontFamily="JetBrains Mono"
        fontSize="11"
        fill="var(--text-mid)"
        fontWeight="600"
      >
        Skills
      </text>

      {skills.map((skill) => {
        const isHovered = hoveredSkill === skill.id;
        return (
          <g
            key={skill.id}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x={skill.x - skillWidth / 2}
              y={skillY}
              width={skillWidth}
              height={skillHeight}
              rx="5"
              fill={isHovered ? "var(--accent)" : "var(--accent-light)"}
              stroke="var(--accent)"
              strokeWidth={isHovered ? 2 : 1.5}
              style={{ transition: 'all 0.2s ease' }}
            />
            <text
              x={skill.x}
              y={skillY + skillHeight / 2 + 5}
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontSize="12"
              fill={isHovered ? "white" : "var(--accent)"}
              fontWeight={isHovered ? 600 : 400}
              style={{ transition: 'all 0.2s ease', pointerEvents: 'none' }}
            >
              {skill.label}
            </text>
          </g>
        );
      })}

      <text x="640" y={skillY + skillHeight / 2 + 5} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="16" fill="var(--accent)">...</text>

      {/* Caption */}
      <text
        x="370"
        y="600"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="12"
        fill="var(--text-mid)"
        fontStyle="italic"
      >
        Hover over a skill to see which agents use it
      </text>
    </svg>
  );
};
