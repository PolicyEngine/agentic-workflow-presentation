export const WorkflowTimeline = () => (
  <div className="workflow-timeline">
    <div className="workflow-header">
      <div className="workflow-command-label">Orchestrator Command</div>
      <div className="workflow-command">/encode-policy</div>
    </div>

    <div className="timeline-phases">
      {/* Phase 1 */}
      <div className="timeline-phase">
        <div className="timeline-phase-header">
          <div className="timeline-phase-num">1</div>
          <div className="timeline-phase-title">Setup</div>
        </div>
        <div className="timeline-phase-card">
          <div className="timeline-agents">
            <span className="timeline-agent">issue-manager</span>
          </div>
          <p className="timeline-phase-desc">Establish coordination points for the workflow.</p>
          <ul className="timeline-steps">
            <li>Search for existing issues</li>
            <li>Create branch & draft PR</li>
            <li>Set up status tracking</li>
          </ul>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="timeline-phase">
        <div className="timeline-phase-header">
          <div className="timeline-phase-num">2</div>
          <div className="timeline-phase-title">Development</div>
        </div>
        <div className="timeline-phase-card">
          <div className="timeline-agents">
            <span className="timeline-agent">document-collector</span>
            <span className="timeline-agent">parameter-architect</span>
            <span className="timeline-agent">test-creator</span>
            <span className="timeline-agent">rules-engineer</span>
          </div>
          <p className="timeline-phase-desc"><strong>Research</strong> official sources, then <strong>build</strong> in parallel tracks.</p>
          <ul className="timeline-steps">
            <li>Collect legal citations</li>
            <li>Create YAML parameters</li>
            <li>Write tests & variables</li>
          </ul>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="timeline-phase">
        <div className="timeline-phase-header">
          <div className="timeline-phase-num">3</div>
          <div className="timeline-phase-title">Validation</div>
        </div>
        <div className="timeline-phase-card">
          <div className="timeline-agents">
            <span className="timeline-agent">impl-validator</span>
            <span className="timeline-agent">ref-validator</span>
            <span className="timeline-agent">ci-fixer</span>
          </div>
          <p className="timeline-phase-desc"><strong>Validate</strong> code patterns, then <strong>fix</strong> until tests pass.</p>
          <ul className="timeline-steps">
            <li>Check naming & structure</li>
            <li>Verify citations</li>
            <li>Run tests locally (2-3 min)</li>
            <li>Delegate fixes to specialists</li>
          </ul>
        </div>
      </div>

      {/* Phase 4 */}
      <div className="timeline-phase">
        <div className="timeline-phase-header">
          <div className="timeline-phase-num">4</div>
          <div className="timeline-phase-title">Review</div>
        </div>
        <div className="timeline-phase-card">
          <div className="timeline-agents">
            <span className="timeline-agent">program-reviewer</span>
            <span className="timeline-agent">pr-pusher</span>
          </div>
          <p className="timeline-phase-desc"><strong>Review</strong> against regulations, then <strong>document</strong> the PR.</p>
          <ul className="timeline-steps">
            <li>Compare to source docs</li>
            <li>Update PR description</li>
            <li>Human makes merge decision</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
