import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../../common/AnimatedSection';
import { ExamplePanel } from './ExamplePanel';
import { narrativeSteps } from './narrativeData';

export const EvolutionSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onStepEnter = ({ data }: { data: number }) => {
    setCurrentStep(data);
  };

  return (
    <AnimatedSection>
      <h2>The evolution: from prompt to workflow</h2>
      <p>Getting to 90 minutes with a single command took five iterations. Each solved problems revealed by the previous—and created new ones. Let's walk through each step with a concrete example: implementing Colorado TANF.</p>

      <div className="scrollytelling-container">
        <div className="scrolly-narrative">
          <Scrollama offset={0.33} onStepEnter={onStepEnter}>
            {narrativeSteps.map((step, index) => (
              <Step data={index} key={step.id}>
                <div className={`narrative-step ${currentStep === index ? 'active' : ''}`}>
                  <div className="step-header">
                    <div className="step-number">{step.num}</div>
                    <div className="step-title">{step.title}</div>
                    <div className="step-subtitle">— {step.subtitle}</div>
                  </div>

                  {/* Full-width diagram */}
                  <div className="step-diagram">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                      >
                        {step.diagram}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Text content */}
                  <div className="step-content">
                    {step.description}

                    <div className="wins-shortcomings">
                      <div className="wins">
                        <div className="wins-title">
                          <span>✓</span> What worked
                        </div>
                        <ul>
                          {step.wins.map((win, i) => (
                            <li key={i}>{win}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="shortcomings">
                        <div className="shortcomings-title">
                          <span>✗</span> What didn't
                        </div>
                        <ul>
                          {step.shortcomings.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="insight-box">
                      <div className="insight-label">Key Insight</div>
                      <p>{step.insight}</p>
                    </div>
                  </div>
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>

        <div className="scrolly-sticky">
          <ExamplePanel step={currentStep} />
        </div>
      </div>
    </AnimatedSection>
  );
};
