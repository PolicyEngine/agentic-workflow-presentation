import './index.css';
import { SVGDefs } from './components/diagrams/SVGDefs';
import { TitleSection } from './components/sections/TitleSection';
import { ManualProcessSection } from './components/sections/ManualProcessSection';
import { EvolutionSection } from './components/sections/EvolutionSection';
import { DesignPrinciplesSection } from './components/sections/DesignPrinciplesSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { ResultsSection } from './components/sections/ResultsSection';
import { TryItSection } from './components/sections/TryItSection';
import { WhatsNextSection } from './components/sections/WhatsNextSection';

function App() {
  return (
    <>
      <SVGDefs />
      <div className="scrolly-container">
        <article className="article-wrapper">
          <TitleSection />

          <hr />

          <ManualProcessSection />

          <hr />

          <EvolutionSection />

          <hr />

          <DesignPrinciplesSection />

          <hr />

          <ArchitectureSection />

          <hr />

          <ResultsSection />

          <hr />

          <TryItSection />

          <hr />

          <WhatsNextSection />
        </article>
      </div>
    </>
  );
}

export default App;
