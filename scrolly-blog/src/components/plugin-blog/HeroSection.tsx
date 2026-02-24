import { AnimatedSection } from '../common/AnimatedSection';

export const HeroSection = () => (
  <header className="hero">
    <div className="container">
      <AnimatedSection>
        <span className="hero-label spaced-sans">PolicyEngine + Claude Code</span>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h1>How We Turned Claude into a Policy Expert</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="hero-subtitle">Without training a model</p>
      </AnimatedSection>
      <AnimatedSection delay={0.35}>
        <div className="hero-intro">
          <p>
            PolicyEngine models tax and benefit policy for 50+ US state programs
            and multiple countries. Our ecosystem spans 40+ repositories,
            thousands of parameters, and a codebase where a single misread
            regulation can produce wrong numbers for millions of households.
          </p>
          <p>
            We needed our AI coding agent to understand all of it. So we built{' '}
            <strong>policyengine-claude</strong>&mdash;a{' '}
            <a
              href="https://code.claude.com/docs/en/plugins"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code plugin
            </a>{' '}
            that packages our entire domain into something Claude can use at
            runtime.
          </p>
          <p>
            <em>
              No fine-tuning. No training data. Just structured knowledge,
              specialized agents, and a few clever guardrails.
            </em>
          </p>
        </div>
      </AnimatedSection>
    </div>
  </header>
);
