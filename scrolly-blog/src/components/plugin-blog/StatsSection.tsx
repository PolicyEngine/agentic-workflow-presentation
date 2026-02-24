import { AnimatedSection } from '../common/AnimatedSection';

const stats = [
  { number: '39', label: 'Skills across\n7 categories' },
  { number: '30', label: 'Specialized\nagents' },
  { number: '8', label: 'Orchestrated\ncommands' },
  { number: '3', label: 'Hook types for\nenforcement' },
  { number: '7', label: 'Plugin\nbundles' },
];

export const StatsSection = () => (
  <section className="section section--gray">
    <AnimatedSection>
      <div className="container">
        <h2>The Numbers</h2>
      </div>
    </AnimatedSection>
    <div className="container--wide">
      <AnimatedSection>
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div
                className="stat-label"
                dangerouslySetInnerHTML={{
                  __html: s.label.replace('\n', '<br/>'),
                }}
              />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);
