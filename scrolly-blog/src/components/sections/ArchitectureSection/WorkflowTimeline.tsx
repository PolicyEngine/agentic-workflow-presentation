import { useState } from 'react';

const phases = [
  {
    num: 1,
    title: 'Setup',
    agents: ['issue-manager'],
    desc: <>Establish coordination points for the workflow.</>,
    steps: [
      'Search for existing issues',
      'Create branch & draft PR',
      'Set up status tracking',
    ],
  },
  {
    num: 2,
    title: 'Development',
    agents: ['document-collector', 'parameter-architect', 'test-creator', 'rules-engineer'],
    desc: <><strong>Research</strong> official sources, then <strong>build</strong> in parallel tracks.</>,
    steps: [
      'Collect legal citations',
      'Create YAML parameters',
      'Write tests & variables',
    ],
  },
  {
    num: 3,
    title: 'Validation',
    agents: ['impl-validator', 'ref-validator', 'ci-fixer'],
    desc: <><strong>Validate</strong> code patterns, then <strong>fix</strong> until tests pass.</>,
    steps: [
      'Check naming & structure',
      'Verify citations',
      'Run tests locally (2-3 min)',
      'Delegate fixes to specialists',
    ],
  },
  {
    num: 4,
    title: 'Review',
    agents: ['program-reviewer', 'pr-pusher'],
    desc: <><strong>Review</strong> against regulations, then <strong>document</strong> the PR.</>,
    steps: [
      'Compare to source docs',
      'Update PR description',
      'Human makes merge decision',
    ],
  },
];

export const WorkflowTimeline = () => {
  const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set());

  const togglePhase = (num: number) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(num)) {
        next.delete(num);
      } else {
        next.add(num);
      }
      return next;
    });
  };

  return (
    <div className="workflow-timeline">
      <div className="workflow-header">
        <div className="workflow-command-label">Orchestrator Command</div>
        <div className="workflow-command">/encode-policy</div>
      </div>

      <div className="timeline-phases">
        {phases.map((phase) => (
          <div key={phase.num} className={`timeline-phase ${expandedPhases.has(phase.num) ? 'expanded' : ''}`}>
            <div
              className="timeline-phase-header"
              onClick={() => togglePhase(phase.num)}
              style={{ cursor: 'pointer' }}
            >
              <div className="timeline-phase-num">{phase.num}</div>
              <div className="timeline-phase-title">{phase.title}</div>
              <div className={`timeline-phase-chevron ${expandedPhases.has(phase.num) ? 'expanded' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {expandedPhases.has(phase.num) && (
              <div className="timeline-phase-card">
                <div className="timeline-agents">
                  {phase.agents.map((agent) => (
                    <span key={agent} className="timeline-agent">{agent}</span>
                  ))}
                </div>
                <p className="timeline-phase-desc">{phase.desc}</p>
                <ul className="timeline-steps">
                  {phase.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
