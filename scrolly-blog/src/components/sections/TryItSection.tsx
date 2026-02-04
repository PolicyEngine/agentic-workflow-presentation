import { AnimatedSection } from '../common/AnimatedSection';

export const TryItSection = () => (
  <AnimatedSection>
    <h2>Try it yourself</h2>
    <p>The <code>/encode-policy</code> command is part of the <a href="https://github.com/PolicyEngine/policyengine-claude">policyengine-claude</a> repository. To implement a new benefit program:</p>

    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
        <span className="terminal-title">claude-code — zsh</span>
      </div>
      <div className="terminal-body">
        <pre><code><span className="terminal-comment"># Add the marketplace</span>{'\n'}
<span className="terminal-command">/plugin marketplace add PolicyEngine/policyengine-claude</span>{'\n'}
{'\n'}
<span className="terminal-comment"># Install the complete plugin (includes encode-policy command)</span>{'\n'}
<span className="terminal-command">/plugin install complete@policyengine-claude</span>{'\n'}
{'\n'}
<span className="terminal-comment"># Run the workflow</span>{'\n'}
<span className="terminal-command">/encode-policy "Iowa TANF"</span></code></pre>
      </div>
    </div>

    <p>The workflow guides you through each phase, checks quality gates, and fixes issues automatically.</p>
  </AnimatedSection>
);
