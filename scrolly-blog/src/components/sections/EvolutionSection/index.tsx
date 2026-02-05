import { useState, useEffect } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../../common/AnimatedSection';
import { ExamplePanel } from './ExamplePanel';
import { narrativeSteps } from './narrativeData';

export const EvolutionSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedDiagram, setExpandedDiagram] = useState<number | null>(null);

  const onStepEnter = ({ data }: { data: number }) => {
    setCurrentStep(data);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedDiagram(null);
      }
    };
    if (expandedDiagram !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [expandedDiagram]);

  return (
    <AnimatedSection>
      <h2>The evolution: from prompt to workflow</h2>
      <p>Getting to 90 minutes with a single command took many iterations. Each solved problems revealed by the previous—and created new ones. Here are the six major milestones, illustrated with a concrete example: implementing New Hampshire's Temporary Assistance for Needy Families (TANF) program.</p>

      {/* Expanded diagram modal */}
      <AnimatePresence>
        {expandedDiagram !== null && (
          <motion.div
            className="diagram-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedDiagram(null)}
          >
            <motion.div
              className="diagram-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="diagram-modal-close"
                onClick={() => setExpandedDiagram(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="diagram-modal-title">
                Step {narrativeSteps[expandedDiagram].num}: {narrativeSteps[expandedDiagram].title}
              </div>
              <div className="diagram-modal-diagram">
                {narrativeSteps[expandedDiagram].diagram}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

                  {/* Full-width diagram - clickable */}
                  <div
                    className="step-diagram clickable"
                    onClick={() => setExpandedDiagram(index)}
                    title="Click to expand"
                  >
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
                    <div className="expand-hint">Click to expand</div>
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
