import { AnimatedSection } from '../common/AnimatedSection';

const PipelineStep = ({
  label,
  checkpoint,
}: {
  label: string;
  checkpoint?: boolean;
}) => (
  <>
    <span
      className={`pipeline-step${checkpoint ? ' pipeline-step--checkpoint' : ''}`}
    >
      {label}
    </span>
    <span className="pipeline-arrow">&rarr;</span>
  </>
);

export const CapabilitiesSection = () => (
  <section className="section section--dark">
    <AnimatedSection>
      <div className="container">
        <h2>What It Does</h2>
        <p className="section-lead">The plugin gives Claude three things:</p>
      </div>
    </AnimatedSection>
    <div className="container--wide">
      <div className="cap-grid">
        <AnimatedSection className="cap-card">
          <div className="cap-count">39</div>
          <h3 className="spaced-sans" style={{ color: 'var(--teal)' }}>
            Skills
          </h3>
          <p>
            Domain knowledge files covering everything from PolicyEngine
            variable patterns to tax law to NumPy vectorization. Each skill is
            written for three audiences: users learning the platform, analysts
            running simulations, and contributors writing code.
          </p>
        </AnimatedSection>
        <AnimatedSection className="cap-card" delay={0.1}>
          <div className="cap-count">30</div>
          <h3 className="spaced-sans" style={{ color: 'var(--teal)' }}>
            Agents
          </h3>
          <p>
            Specialized workers that handle specific jobs. A{' '}
            <code>rules-engineer</code> implements tax variables. A{' '}
            <code>test-creator</code> writes integration tests. A{' '}
            <code>document-collector</code> researches government regulations. A{' '}
            <code>program-reviewer</code> checks implementations against the
            law. They work together through orchestrated workflows.
          </p>
        </AnimatedSection>
        <AnimatedSection className="cap-card" delay={0.15}>
          <div className="cap-count">8</div>
          <h3 className="spaced-sans" style={{ color: 'var(--teal)' }}>
            Commands
          </h3>
          <p>
            Multi-agent workflows that chain agents together into end-to-end
            pipelines. <code>/encode-policy</code> takes a government program
            from legal text to working code, with regulatory checkpoints along
            the way.
          </p>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="pipeline-section">
          <p className="pipeline-intro">
            Our most complex workflow chains 6+ agents across 8 phases&mdash;from
            reading the law to pushing a validated PR.{' '}
            <a
              href="https://www.policyengine.org/us/encode-policy-multi-agent-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full blog post &rarr;
            </a>
          </p>
          <div className="pipeline-label spaced-sans">
            /encode-policy pipeline
          </div>
          <div className="pipeline">
            <PipelineStep label="1. Issue & PR setup" />
            <PipelineStep label="2. Document collection" />
            <PipelineStep label="Checkpoint" checkpoint />
            <PipelineStep label="3. Parameters → Tests + Variables ∥" />
            <PipelineStep label="Checkpoint" checkpoint />
            <PipelineStep label="4. Organization check" />
            <PipelineStep label="5. Test & fix" />
            <PipelineStep label="6. Format & push" />
            <PipelineStep label="7. Regulatory review" />
            <PipelineStep label="Checkpoint" checkpoint />
            <span className="pipeline-step">8. Final summary</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
