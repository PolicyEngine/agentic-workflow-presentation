import { AnimatedSection } from '../common/AnimatedSection';

export const ManualProcessSection = () => (
  <AnimatedSection>
    <h2>The manual process</h2>
    <p>When we add a new program to PolicyEngine, someone has to translate dozens of pages of legal language into working code. The process follows a predictable pattern: research official sources, extract eligibility rules and benefit formulas, write YAML parameters with legal citations, implement the calculation logic, create integration tests, validate against source documents, and handle multiple rounds of review.</p>
    <p>Each program requires approximately <strong>1,500 lines of code</strong> across multiple files. It typically takes 2-3 weeks. We built a system to do it in <strong>90 minutes</strong>.</p>
  </AnimatedSection>
);
