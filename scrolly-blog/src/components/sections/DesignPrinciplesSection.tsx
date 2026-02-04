import { AnimatedSection } from '../common/AnimatedSection';

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const IsolationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    <line x1="8" y1="7" x2="16" y2="7"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);

const OrchestratorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
  </svg>
);

const ComposabilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="12" y1="2" x2="12" y2="22"></line>
  </svg>
);

export const DesignPrinciplesSection = () => (
  <AnimatedSection>
    <h2>Design principles</h2>
    <p>These principles emerged from the evolution:</p>

    <div className="principles-grid">
      <div className="principle-card">
        <div className="principle-icon">
          <DocumentIcon />
        </div>
        <div className="principle-title">Source authority</div>
        <p className="principle-desc">Collect only primary sources. Anchor parameters to legal documents—statutes, regulations, state plans—and use forms and benefit calculators as supporting references.</p>
      </div>

      <div className="principle-card">
        <div className="principle-icon">
          <IsolationIcon />
        </div>
        <div className="principle-title">Isolation</div>
        <p className="principle-desc">Certain agents operate in isolation to prevent confirmation bias. When agents cannot see each other's output, mismatches reveal actual bugs rather than shared misconceptions.</p>
      </div>

      <div className="principle-card">
        <div className="principle-icon">
          <BookIcon />
        </div>
        <div className="principle-title">Shared knowledge</div>
        <p className="principle-desc">Domain expertise lives in reusable modules shared by agents throughout the workflow. No redundancy, no forgetting.</p>
      </div>
    </div>

    <div className="principles-bottom">
      <div className="principle-card">
        <div className="principle-icon">
          <OrchestratorIcon />
        </div>
        <div className="principle-title">Orchestrator pattern</div>
        <p className="principle-desc">The orchestrator coordinates without implementing. It invokes specialized agents, checks quality gates, and manages workflow state—but never writes code itself.</p>
      </div>

      <div className="principle-card">
        <div className="principle-icon">
          <ComposabilityIcon />
        </div>
        <div className="principle-title">Composability</div>
        <p className="principle-desc">Agents and skills are primitives that can be combined into different workflows. A validator agent works in <code>/encode-policy</code>, <code>/review-pr</code>, and <code>/fix-pr</code> alike.</p>
      </div>
    </div>
  </AnimatedSection>
);
