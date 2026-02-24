import { AnimatedSection } from '../common/AnimatedSection';

export const CTASection = () => (
  <>
    <section className="section section--teal section--no-border">
      <div className="container">
        <AnimatedSection>
          <div className="cta-content">
            <h2>Try It Yourself</h2>
            <p>
              If your team has domain knowledge scattered across docs, wikis, and
              tribal memory, a Claude Code plugin can consolidate it into
              something an AI agent actually uses. Start with a few skills, add
              agents for your key workflows, and let hooks enforce your rules.
            </p>
            <a
              href="https://github.com/PolicyEngine/policyengine-claude"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>

    <footer className="footer">PolicyEngine &middot; Open Source</footer>
  </>
);
