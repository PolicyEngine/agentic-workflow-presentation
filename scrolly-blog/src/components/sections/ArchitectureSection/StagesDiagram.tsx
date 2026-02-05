import { useState } from 'react';

// Agent positions
const agents = {
  'issue-manager': { x: 65, y: 290, r: 40, icon: '#icon-clipboard', label: 'issue-manager', labelY: 348, stage: 1 },
  'doc-collector': { x: 170, y: 290, r: 48, icon: '#icon-books', label: ['document-', 'collector'], labelY: 358, stage: 2 },
  'param-architect': { x: 330, y: 100, r: 48, icon: '#icon-gear', label: 'parameter-architect', labelY: 38, stage: 2 },
  'test-creator': { x: 330, y: 290, r: 48, icon: '#icon-flask', label: 'test-creator', labelY: 358, stage: 2 },
  'rules-engineer': { x: 330, y: 480, r: 48, icon: '#icon-lambda', label: 'rules-engineer', labelY: 548, stage: 2 },
  'edge-case-gen': { x: 470, y: 370, r: 40, icon: '#icon-lightning', label: 'edge-case-gen', labelY: 428, stage: 2 },
  'impl-validator': { x: 640, y: 100, r: 54, icon: '#icon-search', label: 'impl-validator', labelY: 38, stage: 3 },
  'ref-validator': { x: 610, y: 505, r: 40, icon: '#icon-link', label: 'reference-validator', labelY: 563, stage: 3 },
  'ci-fixer': { x: 760, y: 290, r: 54, icon: '#icon-wrench', label: 'ci-fixer', labelY: 365, stage: 3 },
  'pr-pusher': { x: 870, y: 290, r: 32, icon: '#icon-upload', label: 'pr-pusher', labelY: 338, stage: 4 },
  'program-reviewer': { x: 945, y: 290, r: 32, icon: '#icon-book', label: ['program-', 'reviewer'], labelY: 338, stage: 4 },
  'draft-pr': { x: 1020, y: 290, r: 32, icon: '#icon-document', label: 'Draft PR', labelY: 338, stage: 4 },
};

// Stage definitions
const stages = [
  { num: 1, title: 'Setup', x1: 0, x2: 115, color: 'rgba(13, 115, 119, 0.08)' },
  { num: 2, title: 'Development', x1: 115, x2: 555, color: 'rgba(13, 115, 119, 0.05)' },
  { num: 3, title: 'Validation', x1: 555, x2: 825, color: 'rgba(13, 115, 119, 0.08)' },
  { num: 4, title: 'Review', x1: 825, x2: 1060, color: 'rgba(13, 115, 119, 0.05)' },
];

// Skills (static, no hover) with agent connections
const skills = [
  { id: 'variable', label: 'variable', x: 180, agents: ['doc-collector', 'param-architect', 'rules-engineer'] },
  { id: 'testing', label: 'testing', x: 310, agents: ['test-creator', 'edge-case-gen', 'impl-validator'] },
  { id: 'code-style', label: 'code-style', x: 440, agents: ['param-architect', 'rules-engineer', 'ci-fixer'] },
  { id: 'parameter', label: 'parameter', x: 570, agents: ['param-architect', 'ref-validator'] },
  { id: 'vectorize', label: 'vectorize', x: 700, agents: ['impl-validator', 'ci-fixer'] },
  { id: 'review', label: 'review', x: 830, agents: ['program-reviewer', 'ci-fixer'] },
];

const skillY = 620;
const skillWidth = 85;
const skillHeight = 32;

// Icon definitions
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
  </defs>
);

export const StagesDiagram = () => {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  // Agent-to-agent connections
  const agentConnections = [
    ['issue-manager', 'doc-collector'],
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
    ['ci-fixer', 'pr-pusher'],
    ['pr-pusher', 'program-reviewer'],
    ['program-reviewer', 'draft-pr'],
  ];

  return (
    <div className="stages-diagram-container">
      <svg className="stages-diagram-svg" viewBox="0 -60 1060 740">
        <IconDefs />

        {/* Stage background regions */}
        {stages.map((stage) => {
          const isHovered = hoveredStage === stage.num;
          return (
            <g key={stage.num}>
              <rect
                x={stage.x1}
                y={-60}
                width={stage.x2 - stage.x1}
                height={740}
                fill={isHovered ? 'rgba(13, 115, 119, 0.12)' : stage.color}
                style={{ transition: 'fill 0.2s ease', cursor: 'pointer' }}
                onMouseEnter={() => setHoveredStage(stage.num)}
                onMouseLeave={() => setHoveredStage(null)}
              />
              {/* Vertical divider line */}
              {stage.num < 4 && (
                <line
                  x1={stage.x2}
                  y1={-60}
                  x2={stage.x2}
                  y2={680}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity={0.4}
                />
              )}
              {/* Stage number and title - positioned above the diagram */}
              <g
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredStage(stage.num)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                <circle
                  cx={(stage.x1 + stage.x2) / 2}
                  cy={-30}
                  r={18}
                  fill={isHovered ? 'var(--accent)' : 'var(--bg-card)'}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  style={{ transition: 'fill 0.2s ease' }}
                />
                <text
                  x={(stage.x1 + stage.x2) / 2}
                  y={-24}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono"
                  fontSize="14"
                  fontWeight="700"
                  fill={isHovered ? 'white' : 'var(--accent)'}
                  style={{ transition: 'fill 0.2s ease' }}
                >
                  {stage.num}
                </text>
                <text
                  x={(stage.x1 + stage.x2) / 2}
                  y={-2}
                  textAnchor="middle"
                  fontFamily="JetBrains Mono"
                  fontSize="11"
                  fontWeight="600"
                  fill={isHovered ? 'var(--accent)' : 'var(--text-mid)'}
                  style={{ transition: 'fill 0.2s ease' }}
                >
                  {stage.title}
                </text>
              </g>
            </g>
          );
        })}

        {/* Loop indicator ellipse (only around stages 2-3) - animated */}
        <ellipse
          className="loop-indicator"
          cx="465"
          cy="290"
          rx="310"
          ry="235"
          style={{
            opacity: hoveredStage === null ? 0.6 : (hoveredStage === 2 || hoveredStage === 3) ? 1 : 0.15,
            transition: 'opacity 0.2s ease',
          }}
        />
        <text
          x="465"
          y="545"
          textAnchor="middle"
          fontFamily="JetBrains Mono"
          fontSize="11"
          fill="var(--text-mid)"
          fontStyle="italic"
          style={{
            opacity: hoveredStage === null ? 1 : (hoveredStage === 2 || hoveredStage === 3) ? 1 : 0.3,
            transition: 'opacity 0.2s ease',
          }}
        >
          iterate until tests pass
        </text>

        {/* Agent-to-agent connections */}
        {agentConnections.map(([from, to], i) => {
          const a1 = agents[from as keyof typeof agents];
          const a2 = agents[to as keyof typeof agents];
          const isInHoveredStage = hoveredStage !== null && (a1.stage === hoveredStage || a2.stage === hoveredStage);
          return (
            <line
              key={i}
              className="network-line"
              x1={a1.x}
              y1={a1.y}
              x2={a2.x}
              y2={a2.y}
              style={{
                opacity: hoveredStage === null ? 0.5 : isInHoveredStage ? 0.8 : 0.08,
                transition: 'opacity 0.2s ease',
              }}
            />
          );
        })}

        {/* Agent nodes */}
        {Object.entries(agents).map(([id, agent]) => {
          const isInHoveredStage = hoveredStage === null || agent.stage === hoveredStage;
          return (
            <g key={id}>
              <circle
                className="network-node"
                cx={agent.x}
                cy={agent.y}
                r={agent.r}
                style={{
                  opacity: isInHoveredStage ? 1 : 0.3,
                  transition: 'opacity 0.2s ease',
                }}
              />
              <g
                transform={`translate(${agent.x},${agent.y + (id === 'rules-engineer' ? 8 : id === 'doc-collector' ? -6 : 0)}) scale(${agent.r / 38})`}
                className="svg-icon"
                style={{
                  opacity: isInHoveredStage ? 1 : 0.3,
                  transition: 'opacity 0.2s ease',
                }}
              >
                <use href={agent.icon} />
              </g>
              {Array.isArray(agent.label) ? (
                agent.label.map((line, i) => (
                  <text
                    key={i}
                    className="network-label"
                    x={agent.x}
                    y={agent.labelY + i * 14}
                    style={{
                      opacity: isInHoveredStage ? 1 : 0.3,
                      transition: 'opacity 0.2s ease',
                      fontSize: '11px',
                    }}
                  >
                    {line}
                  </text>
                ))
              ) : (
                <text
                  className="network-label"
                  x={agent.x}
                  y={agent.labelY}
                  style={{
                    opacity: isInHoveredStage ? 1 : 0.3,
                    transition: 'opacity 0.2s ease',
                    fontSize: '11px',
                  }}
                >
                  {agent.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Skill-to-agent connection lines (static) */}
        {skills.map((skill) =>
          skill.agents.map((agentId) => {
            const agent = agents[agentId as keyof typeof agents];
            return (
              <line
                key={`${skill.id}-${agentId}`}
                x1={skill.x}
                y1={skillY}
                x2={agent.x}
                y2={agent.y + agent.r}
                stroke="var(--accent)"
                strokeWidth="1"
                strokeDasharray="4 3"
                opacity="0.35"
              />
            );
          })
        )}

        {/* Skills row (static) */}
        <text
          x="70"
          y={skillY + skillHeight / 2 + 4}
          fontFamily="JetBrains Mono"
          fontSize="10"
          fill="var(--text-mid)"
          fontWeight="600"
        >
          Skills
        </text>

        {skills.map((skill) => (
          <g key={skill.id}>
            <rect
              x={skill.x - skillWidth / 2}
              y={skillY}
              width={skillWidth}
              height={skillHeight}
              rx="5"
              fill="var(--accent-light)"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <text
              x={skill.x}
              y={skillY + skillHeight / 2 + 4}
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontSize="11"
              fill="var(--accent)"
            >
              {skill.label}
            </text>
          </g>
        ))}

        <text x="940" y={skillY + skillHeight / 2 + 4} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fill="var(--accent)">...</text>
      </svg>
    </div>
  );
};
