import { AnimatedSection } from '../common/AnimatedSection';

const lessons = [
  {
    bold: 'Structure beats volume.',
    text: ' A well-organized 200-line skill file is worth more than a 2,000-line knowledge dump. Claude works best when knowledge is modular and clearly scoped.',
  },
  {
    bold: 'Agents need constraints, not just capabilities.',
    text: " The most impactful additions weren\u2019t new features\u2014they were guardrails. Regulatory checkpoints. Architecture enforcement. The rule that agents must read the law before writing code.",
  },
  {
    bold: 'Plugins are prompt engineering at scale.',
    text: " You\u2019re not training a model. You\u2019re building a structured context that makes a general-purpose model behave like a domain expert. That\u2019s powerful and accessible\u2014anyone can do it.",
  },
];

export const LessonsSection = () => (
  <section className="section">
    <div className="container">
      <AnimatedSection>
        <h2>What We Learned</h2>
      </AnimatedSection>

      {lessons.map((l) => (
        <AnimatedSection key={l.bold} className="lesson">
          <p>
            <strong>{l.bold}</strong>
            {l.text}
          </p>
        </AnimatedSection>
      ))}
    </div>
  </section>
);
