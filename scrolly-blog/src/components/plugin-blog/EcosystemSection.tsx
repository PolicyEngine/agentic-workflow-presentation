import { AnimatedSection } from '../common/AnimatedSection';

interface EcoLayer {
  layer: string;
  repos: string;
  bundle: string;
  agents: string;
  commands: string;
}

const layers: EcoLayer[] = [
  {
    layer: 'Country Models',
    repos: 'us, uk, canada, il, ng + 4 more',
    bundle: 'country-models',
    agents: 'rules-engineer, test-creator, document-collector + 13 more',
    commands: '/encode-policy, /review-pr, /fix-pr, /create-pr',
  },
  {
    layer: 'API',
    repos: 'api, api-v2, household-api',
    bundle: 'api-development',
    agents: 'api-reviewer',
    commands: '/review-pr, /fix-pr, /create-pr',
  },
  {
    layer: 'Frontend',
    repos: 'app, app-v2, calculators',
    bundle: 'app-development',
    agents: 'app-reviewer, 4 SEO checkers',
    commands: '/new-tool, /audit-seo, /review-pr',
  },
  {
    layer: 'Data Science',
    repos: 'microdf, microimpute, microcalibrate, us-data, uk-data',
    bundle: 'data-science',
    agents: '\u2014',
    commands: '\u2014',
  },
  {
    layer: 'Analysis',
    repos: 'crfb-tob-impacts, newsletters, dashboards',
    bundle: 'analysis-tools',
    agents: '\u2014',
    commands: '\u2014',
  },
  {
    layer: 'Content',
    repos: 'marketing, social',
    bundle: 'content',
    agents: 'content-orchestrator, neutrality-reviewer',
    commands: '/generate-content',
  },
];

export const EcosystemSection = () => (
  <section className="section section--gray">
    <div className="container">
      <AnimatedSection>
        <h2>Ecosystem Breakdown</h2>
        <p className="ecosystem-intro">
          The plugin adapts to whichever repository you open. Each layer of the
          PolicyEngine ecosystem has its own plugin bundle, agents, and commands.
        </p>
      </AnimatedSection>
    </div>
    <div className="container--full">
      <AnimatedSection>
        <div className="ecosystem-grid">
          <div className="eco-row eco-row--header">
            <div className="eco-cell">Layer</div>
            <div className="eco-cell">Repos</div>
            <div className="eco-cell">Plugin Bundle</div>
            <div className="eco-cell">Key Agents</div>
            <div className="eco-cell">Key Commands</div>
          </div>
          {layers.map((row) => (
            <div className="eco-row" key={row.layer}>
              <div className="eco-cell eco-layer">{row.layer}</div>
              <div className="eco-cell">
                <span className="eco-repos">{row.repos}</span>
              </div>
              <div className="eco-cell">
                <code>{row.bundle}</code>
              </div>
              <div className="eco-cell">
                {row.agents === '\u2014' ? (
                  <span className="eco-muted">{row.agents}</span>
                ) : (
                  row.agents
                )}
              </div>
              <div className="eco-cell">
                {row.commands === '\u2014' ? (
                  <span className="eco-muted">{row.commands}</span>
                ) : (
                  <code>{row.commands}</code>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);
