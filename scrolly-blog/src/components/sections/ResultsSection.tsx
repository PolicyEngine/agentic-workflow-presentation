import { AnimatedSection } from '../common/AnimatedSection';

export const ResultsSection = () => (
  <AnimatedSection>
    <h2>Results</h2>

    <div className="results-section">
      <div className="results-stats">
        <div className="stat-card">
          <div className="stat-number">90 min</div>
          <div className="stat-label">Per implementation</div>
          <div className="stat-detail">Down from 2-3 weeks</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">45+</div>
          <div className="stat-label">Programs in production</div>
          <div className="stat-detail">TANF across states & Illinois programs</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">60K+</div>
          <div className="stat-label">Lines of code</div>
          <div className="stat-detail">Consistent patterns & quality</div>
        </div>
      </div>

      <div className="results-description">
        <p>Specialized agents handle the mechanical work—research, parameterization, testing, documentation—while humans review the final PR and make the merge decision. Our API partner <a href="https://www.myfriendben.org">MyFriendBen</a> uses the Illinois implementations to power their benefits screening tool.</p>
      </div>
    </div>
  </AnimatedSection>
);
