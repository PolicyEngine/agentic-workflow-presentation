import { AnimatedSection } from '../common/AnimatedSection';

export const WhatsNextSection = () => (
  <AnimatedSection>
    <h2>What's next</h2>
    <p>The <code>/encode-policy</code> workflow handles individual programs. The next challenge is understanding how programs interact.</p>

    <div className="next-cards">
      <div className="next-card">
        <span className="next-card-badge">In Progress</span>
        <div className="next-card-title">Cross-program validation</div>
        <p className="next-card-desc">Benefit programs form a connected system—SNAP benefits count as unearned income for TANF, Medicaid enrollment affects SSI calculations, and some programs are mutually exclusive. A cross-program validator would detect these interactions during implementation rather than in production.</p>
      </div>

      <div className="next-card">
        <span className="next-card-badge">Exploring</span>
        <div className="next-card-title">Historical implementations</div>
        <p className="next-card-desc">Parameters support multiple effective dates, but program reforms often involve structural changes—eliminating deductions, adding eligibility categories, or restructuring formulas. We are testing approaches to handle these reforms across time.</p>
      </div>
    </div>

    <div className="footer">
      <p>PolicyEngine is a nonprofit building free, open-source tools for tax and benefit policy analysis. Learn more at <a href="https://policyengine.org">policyengine.org</a>.</p>
    </div>
  </AnimatedSection>
);
