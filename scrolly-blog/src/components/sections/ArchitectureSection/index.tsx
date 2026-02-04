import { AnimatedSection } from '../../common/AnimatedSection';
import { WorkflowTimeline } from './WorkflowTimeline';
import { FullAgentFlow } from './FullAgentFlow';

export const ArchitectureSection = () => (
  <AnimatedSection>
    <h2>The architecture today</h2>
    <p>The <code>/encode-policy</code> command is the most comprehensive instantiation of these patterns—but <code>/review-pr</code> and <code>/fix-pr</code> use the same agents and skills for focused tasks. Here's how <code>/encode-policy</code> works in detail: it orchestrates specialized agents to transform a policy request like "Oregon TANF" into a complete pull request with parameters, variables, tests, and documentation. The orchestrator never writes code—it invokes specialized agents and checks quality gates between phases.</p>

    <h3>Workflow phases</h3>
    <WorkflowTimeline />

    <h3>Full agent flow</h3>
    <p>Here's the complete <code>/encode-policy</code> workflow showing all agents and the validation loop:</p>
    <FullAgentFlow />
  </AnimatedSection>
);
