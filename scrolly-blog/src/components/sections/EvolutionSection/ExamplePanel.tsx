import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExamplePanelProps {
  step: number;
}

type TabType = 'parameters' | 'variables' | 'tests';

// Parameter examples for each step (showing evolution)
const parameterSteps = [
  // Step 1: Single prompt - hard-coded, no metadata
  {
    title: "grant_standard.yaml",
    status: "error",
    statusLabel: "no metadata",
    code: `# Generated without structure
grant_amount: 710

# No reference provided
# No effective dates
# Just a magic number`,
    issues: [
      { type: 'error', text: '$710 hard-coded, no dates' },
      { type: 'error', text: 'No official reference' },
      { type: 'warning', text: 'Will break when rates change' },
    ]
  },
  // Step 2: Core pipeline - basic structure
  {
    title: "grant_standard.yaml",
    status: "warning",
    statusLabel: "partial",
    code: `description: CO TANF grant standard
1:
  1:
    2022-03-01: 440
metadata:
  unit: currency-USD
  period: month
  # reference: ???`,
    issues: [
      { type: 'success', text: 'Has date-based values' },
      { type: 'warning', text: 'Reference missing' },
      { type: 'error', text: 'Only 1 family size' },
    ]
  },
  // Step 3: Parallel - docs found issues
  {
    title: "grant_standard.yaml",
    status: "warning",
    statusLabel: "verified",
    code: `description: CO TANF grant standard
1:
  1:
    2022-03-01: 440
    2024-07-01: 466  # ← Added!
metadata:
  unit: currency-USD
  reference:
    - title: 9 CCR 2503-6
      href: https://...#page=52`,
    issues: [
      { type: 'success', text: 'Reference added from docs' },
      { type: 'success', text: '2024 rate found' },
      { type: 'warning', text: 'Still incomplete sizes' },
    ]
  },
  // Step 4: Validation loop - expanded
  {
    title: "grant_standard.yaml",
    status: "success",
    statusLabel: "expanded",
    code: `0:  # Child-only cases
  1:
    2022-03-01: 156
    2024-07-01: 165
  2:
    2022-03-01: 326
    2024-07-01: 345
1:  # 1 caretaker
  1:
    2022-03-01: 440
    2024-07-01: 466
  # ... all sizes covered`,
    issues: [
      { type: 'success', text: 'All family sizes 0-10' },
      { type: 'success', text: 'All caretaker counts' },
      { type: 'success', text: 'Both 2022 and 2024 rates' },
    ]
  },
  // Step 5: Modular skills - consistent patterns
  {
    title: "grant_standard/main.yaml",
    status: "success",
    statusLabel: "structured",
    code: `description: Colorado TANF grant
  standard by number of caretakers
  and children.
0:
  0:
    2022-03-01: 0
    2024-07-01: 0
  1:
    2022-03-01: 156
    2024-07-01: 165`,
    issues: [
      { type: 'success', text: 'Follows naming convention' },
      { type: 'success', text: 'parameter-patterns skill' },
      { type: 'success', text: 'Proper folder structure' },
    ]
  },
  // Step 6: Full workflow - production ready
  {
    title: "grant_standard/main.yaml",
    status: "success",
    statusLabel: "complete",
    code: `description: Colorado TANF grant
  standard by number of caretakers
  and children.
# 33 value combinations
# 2 time periods
metadata:
  unit: currency-USD
  period: month
  breakdown:
    - range(0, 3)
    - range(0, 11)
  reference:
    - title: 9 CCR 2503-6
      href: https://...#page=52`,
    issues: [
      { type: 'success', text: '66 values validated' },
      { type: 'success', text: 'Official reference linked' },
      { type: 'success', text: 'Ready for production' },
    ]
  },
];

// Variable examples for each step
const variableSteps = [
  // Step 1: Single prompt - naive implementation
  {
    title: "co_tanf_eligible.py",
    status: "error",
    statusLabel: "wrong",
    code: `def formula(person, period):
    income = person("income", period)
    return income < 700
    # Hard-coded! Wrong threshold!
    # Wrong entity (person vs unit)`,
    issues: [
      { type: 'error', text: '$700 ≠ actual threshold' },
      { type: 'error', text: 'Wrong entity type' },
      { type: 'error', text: 'No reference attribute' },
    ]
  },
  // Step 2: Core pipeline - better structure
  {
    title: "co_tanf_eligible.py",
    status: "warning",
    statusLabel: "partial",
    code: `class co_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR

    def formula(spm_unit, period, p):
        return spm_unit("income", period)
               < 1000  # Still hard-coded`,
    issues: [
      { type: 'success', text: 'Proper Variable class' },
      { type: 'success', text: 'Correct entity type' },
      { type: 'error', text: 'Threshold still hard-coded' },
    ]
  },
  // Step 3: Parallel - test reveals issues
  {
    title: "co_tanf_eligible.py",
    status: "warning",
    statusLabel: "flagged",
    code: `class co_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR
    defined_for = StateCode.CO

    def formula(spm_unit, period, p):
        # Test says this is wrong!
        return income_eligible`,
    issues: [
      { type: 'success', text: 'Added defined_for' },
      { type: 'warning', text: 'Test mismatch detected' },
      { type: 'warning', text: 'Missing income check' },
    ]
  },
  // Step 4: Validation loop - fixed
  {
    title: "co_tanf_eligible.py",
    status: "success",
    statusLabel: "fixed",
    code: `class co_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR
    defined_for = StateCode.CO

    def formula(spm_unit, period, p):
        demographic = spm_unit(
            "is_demographic_tanf_eligible",
            period)
        income = spm_unit(
            "co_tanf_income_eligible",
            period)
        return demographic & income`,
    issues: [
      { type: 'success', text: 'Uses existing variables' },
      { type: 'success', text: 'Both eligibility checks' },
      { type: 'success', text: 'All tests pass' },
    ]
  },
  // Step 5: Modular skills - with docs
  {
    title: "co_tanf_eligible.py",
    status: "success",
    statusLabel: "documented",
    code: `class co_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    label = "Colorado TANF eligible"
    definition_period = YEAR
    defined_for = StateCode.CO
    reference = "9 CCR 2503-6"

    def formula(spm_unit, period, p):
        # Properly documented...`,
    issues: [
      { type: 'success', text: 'Has label attribute' },
      { type: 'success', text: 'Has reference attribute' },
      { type: 'success', text: 'Follows variable-patterns' },
    ]
  },
  // Step 6: Full workflow - production
  {
    title: "co_tanf_eligible.py",
    status: "success",
    statusLabel: "complete",
    code: `from policyengine_us.model_api import *

class co_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    label = "Colorado TANF eligible"
    definition_period = YEAR
    defined_for = StateCode.CO

    def formula(spm_unit, period, p):
        demographic = spm_unit(
            "is_demographic_tanf_eligible",
            period)
        income = spm_unit(
            "co_tanf_income_eligible",
            period)
        return demographic & income`,
    issues: [
      { type: 'success', text: 'Validated against regs' },
      { type: 'success', text: 'All edge cases tested' },
      { type: 'success', text: 'PR ready for review' },
    ]
  },
];

// Test examples for each step
const testSteps = [
  // Step 1: Single prompt - no tests
  {
    title: "test_co_tanf.yaml",
    status: "error",
    statusLabel: "missing",
    code: `# No tests generated
#
# "Tests? What tests?"
#   - Single prompt, 2024`,
    issues: [
      { type: 'error', text: 'No tests at all' },
      { type: 'error', text: 'Can\'t verify correctness' },
      { type: 'warning', text: 'Bug goes undetected' },
    ]
  },
  // Step 2: Core pipeline - tests match impl
  {
    title: "test_co_tanf.yaml",
    status: "warning",
    statusLabel: "circular",
    code: `- name: Basic eligibility
  period: 2023
  input:
    income: 600
  output:
    co_tanf_eligible: true
    # Matches the buggy $700 check!`,
    issues: [
      { type: 'warning', text: 'Test derived from impl' },
      { type: 'error', text: 'Confirms bug, not regs' },
      { type: 'success', text: 'At least tests exist' },
    ]
  },
  // Step 3: Parallel - tests from docs
  {
    title: "test_co_tanf.yaml",
    status: "success",
    statusLabel: "independent",
    code: `- name: Per 9 CCR 2503-6
  period: 2023
  input:
    state_code: CO
    # From regulations table
    is_demographic_tanf_eligible: true
    co_tanf_income_eligible: true
  output:
    co_tanf_eligible: true`,
    issues: [
      { type: 'success', text: 'Based on regulations' },
      { type: 'success', text: 'Independent of impl' },
      { type: 'success', text: 'Can catch real bugs' },
    ]
  },
  // Step 4: Validation loop - edge cases
  {
    title: "test_co_tanf.yaml",
    status: "success",
    statusLabel: "expanded",
    code: `- name: Demographic but not income
  period: 2023
  input:
    is_demographic_tanf_eligible: true
    co_tanf_income_eligible: false
  output:
    co_tanf_eligible: false

- name: Income but not demographic
  # ... more edge cases`,
    issues: [
      { type: 'success', text: 'Edge cases added' },
      { type: 'success', text: 'Both pass/fail scenarios' },
      { type: 'success', text: 'Generated by edge-case-gen' },
    ]
  },
  // Step 5: Modular skills - integration
  {
    title: "test_co_tanf_integration.yaml",
    status: "success",
    statusLabel: "integration",
    code: `- name: Full benefit calculation
  period: 2023
  input:
    state_code: CO
    people:
      parent:
        age: 30
      child:
        age: 5
    spm_units:
      unit:
        members: [parent, child]
  output:
    co_tanf: 440  # From table`,
    issues: [
      { type: 'success', text: 'End-to-end test' },
      { type: 'success', text: 'Realistic household' },
      { type: 'success', text: 'Follows testing-patterns' },
    ]
  },
  // Step 6: Full workflow - comprehensive
  {
    title: "test_co_tanf*.yaml",
    status: "success",
    statusLabel: "complete",
    code: `# 9 test files generated:
# - co_tanf.yaml
# - co_tanf_eligible.yaml
# - co_tanf_grant_standard.yaml
# - co_tanf_income_eligible.yaml
# - co_tanf_integration.yaml
# ... and 4 more

# 27 test cases total`,
    issues: [
      { type: 'success', text: '27 test cases' },
      { type: 'success', text: 'All edge cases covered' },
      { type: 'success', text: 'CI passing' },
    ]
  },
];

const tabs: { key: TabType; label: string; icon: string }[] = [
  { key: 'parameters', label: 'Parameters', icon: '⚙️' },
  { key: 'variables', label: 'Variables', icon: '📄' },
  { key: 'tests', label: 'Tests', icon: '🧪' },
];

const getStepData = (tab: TabType, step: number) => {
  switch (tab) {
    case 'parameters':
      return parameterSteps[step] || parameterSteps[0];
    case 'variables':
      return variableSteps[step] || variableSteps[0];
    case 'tests':
      return testSteps[step] || testSteps[0];
  }
};

export const ExamplePanel = ({ step }: ExamplePanelProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('parameters');
  const data = getStepData(activeTab, step);

  return (
    <div className="example-panel">
      <div className="example-header">
        <span className="example-title">Colorado TANF</span>
        <span className="example-badge">Step {step + 1}</span>
      </div>

      {/* Tab navigation */}
      <div className="example-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`example-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${step}-${activeTab}`}
          className="example-body"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* File header */}
          <div className="example-section">
            <div className="example-file">
              <span className="example-file-icon">
                {activeTab === 'parameters' ? '⚙️' : activeTab === 'variables' ? '📄' : '🧪'}
              </span>
              <span className="example-file-name">{data.title}</span>
              <span className={`example-file-status ${data.status}`}>{data.statusLabel}</span>
            </div>
          </div>

          {/* Code block */}
          <div className="example-section">
            <pre className="example-code">{data.code}</pre>
          </div>

          {/* Status indicators */}
          <div className="example-section">
            <div className="example-section-title">Status</div>
            <div className="example-output">
              {data.issues.map((issue, i) => (
                <div key={i} className={`example-output-line ${issue.type}`}>
                  <span className="icon">
                    {issue.type === 'success' ? '✓' : issue.type === 'error' ? '✗' : '⚠'}
                  </span>
                  <span>{issue.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
