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
    title: "parameter.yaml",
    status: "error",
    statusLabel: "no metadata",
    code: `grant_amount: 1333
age_threshold: 18
older_age_threshold: 19
resource_limit: 1000`,
    issues: [
      { type: 'error', text: '$1333 hard-coded, no dates' },
      { type: 'error', text: 'No official reference' },
      { type: 'error', text: 'All parameters in one file' },
      { type: 'warning', text: 'Will break when rates change' },
    ]
  },
  // Step 2: Core pipeline - basic structure
  {
    title: "grant_standard.yaml",
    status: "warning",
    statusLabel: "partial",
    code: `description: NH TANF grant standard

1:
  2025-07-01: 773

metadata:
  unit: currency-USD`,
    issues: [
      { type: 'success', text: 'Has date-based values' },
      { type: 'warning', text: 'Reference missing' },
      { type: 'warning', text: 'description does not meet PolicyEngine standard' },
      { type: 'error', text: 'Only 1 family size' },
    ]
  },
  // Step 3: Parallel - docs found issues
  {
    title: "grant_standard.yaml",
    status: "warning",
    statusLabel: "verified",
    code: `description: NH TANF grant standard
1:
  2025-07-01: 773
2:
  2025-07-01: 1058
# ... all sizes covered
metadata:
  unit: currency-USD
  period: month
  reference:
    - title: RSA 167:77
      href: https://gc.nh.gov/...`,
    issues: [
      { type: 'success', text: 'Reference added from docs' },
      { type: 'success', text: 'period added' },
      { type: 'warning', text: 'Missing label' },
    ]
  },
  // Step 4: Validation loop - expanded
  {
    title: "rate.yaml",
    status: "success",
    statusLabel: "expanded",
    code: `description: NH TANF payment
  standard FPL rate
values:
  2017-07-01: 0.6
metadata:
  unit: /1
  period: month
  label: NH TANF payment standard
  reference:
    - title: RSA 167:77-g
      href: https://gc.nh.gov/...`,
    issues: [
      { type: 'success', text: 'correct metadata section' },
      { type: 'success', text: 'dates align with legal reference date' },
      { type: 'success', text: 'using FPL rate instead of hardcoding' },
    ]
  },
  // Step 5: Modular skills - consistent patterns
  {
    title: "child_care_deduction.yaml",
    status: "success",
    statusLabel: "structured",
    code: `brackets:
  - threshold:
      2012-07-01: 0
    amount:
      2012-07-01: 200
  - threshold:
      2022-07-01: 6
    amount:
      2012-07-01: 175`,
    issues: [
      { type: 'success', text: 'Proper bracket structure' },
      { type: 'success', text: 'parameter-patterns skill' },
      { type: 'success', text: 'Proper folder structure' },
    ]
  },
  // Step 6: Full workflow - production ready
  {
    title: "nh/dhhs/tanf/",
    status: "success",
    statusLabel: "complete",
    code: `nh/dhhs/tanf/
├─ income/
│  ├─ child_care_deduction/
│  │  ├─ full_time_threshold.yaml
│  │  ├─ full_time.yaml
│  │  └─ part_time.yaml
│  └─ earned_income_disregard/
│     ├─ applicant_rate.yaml
│     └─ recipient_rate.yaml
├─ payment_standard/
│  └─ fpg_rate.yaml
└─ resources/
   ├─ applicant_limit.yaml
   └─ recipient_limit.yaml`,
    issues: [
      { type: 'success', text: '11 parameter files' },
      { type: 'success', text: 'All references linked' },
      { type: 'success', text: 'Ready for production' },
    ]
  },
];

// Variable examples for each step
const variableSteps = [
  // Step 1: Single prompt - naive implementation
  {
    title: "nh_tanf_eligible.py",
    status: "error",
    statusLabel: "wrong",
    code: `def formula(person, period):
    income = person("income", period)
    return income < 783
    # Hard-coded! Wrong threshold!
    # Wrong entity (person vs unit)`,
    issues: [
      { type: 'error', text: '$783 ≠ actual threshold' },
      { type: 'error', text: 'Wrong entity type' },
      { type: 'error', text: 'No reference attribute' },
    ]
  },
  // Step 2: Core pipeline - better structure
  {
    title: "nh_income_eligible.py",
    status: "warning",
    statusLabel: "partial",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR

    def formula(spm_unit, period, params):
        p = params(period).gov.states
            .nh.dhhs.tanf
        return spm_unit("income", period)
               < p.grant_standard`,
    issues: [
      { type: 'success', text: 'Proper Variable class' },
      { type: 'success', text: 'Correct entity type' },
      { type: 'error', text: 'definition period matters' },
    ]
  },
  // Step 3: Parallel - test reveals issues
  {
    title: "nh_tanf_eligible.py",
    status: "warning",
    statusLabel: "flagged",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR
    defined_for = StateCode.NH

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
    title: "nh_tanf_eligible.py",
    status: "success",
    statusLabel: "fixed",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    definition_period = YEAR
    defined_for = StateCode.NH

    def formula(spm_unit, period, p):
        demographic = spm_unit(
            "is_demographic_tanf_eligible",
            period)
        income = spm_unit(
            "nh_tanf_income_eligible",
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
    title: "nh_tanf_eligible.py",
    status: "success",
    statusLabel: "documented",
    code: `class nh_tanf_eligible(Variable):
    value_type = bool
    entity = SPMUnit
    label = "New Hampshire TANF eligible"
    definition_period = YEAR
    defined_for = StateCode.NH
    reference = "https://gc.nh.gov/rsa/html...

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
    title: "nh/dhhs/tanf/",
    status: "success",
    statusLabel: "complete",
    code: `nh/dhhs/tanf/
├─ eligibility/
│  ├─ nh_tanf_eligible.py
│  ├─ nh_tanf_income_eligible.py
│  └─ nh_tanf_resources_eligible.py
└─ income/
   ├─ nh_tanf_child_care_deduction.py
   ├─ nh_tanf_countable_earned_income.py
   ├─ nh_tanf_countable_income.py
   └─ nh_tanf_payment_standard.py
nh_tanf.py`,
    issues: [
      { type: 'success', text: '8 variable files' },
      { type: 'success', text: 'All edge cases tested' },
      { type: 'success', text: 'PR ready for review' },
    ]
  },
];

// Test examples for each step
const testSteps = [
  // Step 1: Single prompt - no tests
  {
    title: "test_nh_tanf.yaml",
    status: "error",
    statusLabel: "missing",
    code: `# No tests generated
#
# "Tests? What tests?"
#   - Single prompt, 2025`,
    issues: [
      { type: 'error', text: 'No tests at all' },
      { type: 'error', text: 'Can\'t verify correctness' },
      { type: 'warning', text: 'Bug goes undetected' },
    ]
  },
  // Step 2: Core pipeline - tests match impl
  {
    title: "test_nh_tanf.yaml",
    status: "warning",
    statusLabel: "circular",
    code: `- name: Basic eligibility
  period: 2025
  input:
    income: 700
  output:
    nh_tanf_eligible: true
    # Matches the buggy $773 check!`,
    issues: [
      { type: 'warning', text: 'Test derived from impl' },
      { type: 'error', text: 'Confirms bug, not regs' },
      { type: 'success', text: 'At least tests exist' },
    ]
  },
  // Step 3: Parallel - tests from docs
  {
    title: "test_nh_tanf.yaml",
    status: "success",
    statusLabel: "independent",
    code: `- name: Per 9 CCR 2503-6
  period: 2023
  input:
    state_code: NH
    # From regulations table
    is_demographic_tanf_eligible: true
    nh_tanf_income_eligible: true
  output:
    nh_tanf_eligible: true`,
    issues: [
      { type: 'success', text: 'Based on regulations' },
      { type: 'success', text: 'Independent of impl' },
      { type: 'success', text: 'Can catch real bugs' },
    ]
  },
  // Step 4: Validation loop - edge cases
  {
    title: "test_nh_tanf.yaml",
    status: "success",
    statusLabel: "expanded",
    code: `- name: Demographic but not income
  period: 2023
  input:
    is_demographic_tanf_eligible: true
    nh_tanf_income_eligible: false
  output:
    nh_tanf_eligible: false

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
    title: "test_nh_tanf_integration.yaml",
    status: "success",
    statusLabel: "integration",
    code: `- name: Full benefit calculation
  period: 2023
  input:
    state_code: NH
    people:
      parent:
        age: 30
      child:
        age: 5
    spm_units:
      unit:
        members: [parent, child]
  output:
    nh_tanf: 1_058  # From working-reference.md`,
    issues: [
      { type: 'success', text: 'End-to-end test' },
      { type: 'success', text: 'Realistic household' },
      { type: 'success', text: 'Follows testing-patterns' },
    ]
  },
  // Step 6: Full workflow - comprehensive
  {
    title: "dhhs/tanf/",
    status: "success",
    statusLabel: "complete",
    code: `dhhs/tanf/
├─ integration.yaml
├─ nh_tanf_child_care_deduction.yaml
├─ nh_tanf_countable_earned_income.yaml
├─ nh_tanf_eligible.yaml
├─ nh_tanf_income_eligible.yaml
├─ nh_tanf_payment_standard.yaml
├─ nh_tanf_resources_eligible.yaml
└─ nh_tanf.yaml`,
    issues: [
      { type: 'success', text: '8 test files with 65 test cases' },
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
        <span className="example-title">New Hampshire TANF</span>
        <span className="example-badge">Iteration {step + 1}</span>
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
