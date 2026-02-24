import { AnimatedSection } from '../common/AnimatedSection';

const ideas = [
  {
    title: 'Documentation Pointers, Not Stale Examples',
    paragraphs: [
      "Most knowledge bases rot. You write example code, the codebase evolves, and now your examples are wrong.",
      'We solved this by having skills point to live code in the active repository instead of hardcoding examples. When Claude reads a skill, it gets instructions like \u201clook at the current implementation in the relevant country model repo\u201d\u2014always fresh, always branch-aware, zero maintenance.',
    ],
  },
  {
    title: 'Legal Code Is the Source of Truth',
    paragraphs: [
      "When implementing a government benefit program, the temptation is to copy what another jurisdiction does and tweak it. Our agents are instructed differently: read the actual regulation first, understand what the law says, then implement exactly that. Pattern-matching across jurisdictions is a tool, not a shortcut.",
    ],
  },
  {
    title: 'Zero Hard-Coding',
    paragraphs: [
      'Every dollar amount, every threshold, every phase-out rate lives in a parameter file\u2014never as a magic number in code. This is what makes PolicyEngine work: you can simulate policy reforms by changing parameters alone. Our agents enforce this automatically.',
    ],
  },
  {
    title: 'Claude Policing Claude',
    paragraphs: [
      "We use Claude Code hooks\u2014prompts that run before or after tool calls\u2014to enforce architectural rules. When Claude writes a file, another Claude prompt checks whether tax logic ended up somewhere it shouldn\u2019t be. If it did, the write gets blocked.",
      "The same mechanism auto-detects which PolicyEngine repo you\u2019re in and routes you to the right specialized agents. Open Claude Code in any PolicyEngine repository and it knows which agents to load\u2014country models get the rules-engineer, the API repos get the api-reviewer, the frontend gets the app-reviewer.",
    ],
  },
];

export const KeyIdeasSection = () => (
  <section className="section">
    <div className="container">
      <AnimatedSection>
        <h2>The Key Ideas</h2>
      </AnimatedSection>

      {ideas.map((idea) => (
        <AnimatedSection key={idea.title} className="idea-block">
          <h3 className="spaced-sans">{idea.title}</h3>
          {idea.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </AnimatedSection>
      ))}
    </div>
  </section>
);
