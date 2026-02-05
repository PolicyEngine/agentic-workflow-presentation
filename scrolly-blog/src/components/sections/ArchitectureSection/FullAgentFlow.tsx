export const FullAgentFlow = () => (
  <div className="agent-flow-container" style={{ margin: '40px 0' }}>
    <svg className="agent-flow-svg" viewBox="0 0 1400 660">
      {/* Loop indicator - ellipse around development/validation agents */}
      <ellipse className="loop-indicator" cx="650" cy="300" rx="380" ry="240" />
      <text className="loop-label" x="650" y="640">iterate until tests pass</text>

      {/* === CONNECTIONS === */}

      {/* issue-manager → doc-collector */}
      <line className="network-line" x1="115" y1="300" x2="147" y2="300" />

      {/* doc-collector → parameter-architect */}
      <line className="network-line thick" x1="263" y1="300" x2="440" y2="100" />
      {/* doc-collector → rules-engineer */}
      <line className="network-line thick" x1="263" y1="300" x2="850" y2="148" />
      {/* doc-collector → test-creator */}
      <line className="network-line thick" x1="263" y1="300" x2="598" y2="300" />

      {/* parameter-architect → rules-engineer */}
      <line className="network-line thick" x1="440" y1="100" x2="870" y2="104" />

      {/* parameter-architect → reference-validator */}
      <line className="network-line thick" x1="440" y1="152" x2="380" y2="385" />
      {/* rules-engineer → reference-validator (via param connection points) */}
      <line className="network-line thick" x1="818" y1="100" x2="380" y2="385" />

      {/* rules-engineer → edge-case-gen */}
      <line className="network-line thick" x1="850" y1="152" x2="850" y2="342" />
      {/* test-creator → edge-case-gen */}
      <line className="network-line thick" x1="687" y1="337" x2="850" y2="342" />

      {/* parameter-architect → impl-validator */}
      <line className="network-line thick" x1="440" y1="152" x2="620" y2="480" />
      {/* rules-engineer → impl-validator */}
      <line className="network-line thick" x1="850" y1="148" x2="690" y2="490" />
      {/* test-creator → impl-validator */}
      <line className="network-line thick" x1="650" y1="352" x2="650" y2="475" />

      {/* parameter-architect → ci-fixer */}
      <line className="network-line thick" x1="440" y1="152" x2="1030" y2="300" />
      {/* rules-engineer → ci-fixer */}
      <line className="network-line thick" x1="870" y1="104" x2="1030" y2="300" />
      {/* test-creator → ci-fixer */}
      <line className="network-line thick" x1="702" y1="300" x2="1030" y2="300" />
      {/* reference-validator → ci-fixer */}
      <line className="network-line thick" x1="408" y1="420" x2="1030" y2="300" />
      {/* edge-case-gen → ci-fixer */}
      <line className="network-line thick" x1="888" y1="380" x2="1030" y2="300" />
      {/* impl-validator → ci-fixer */}
      <line className="network-line thick" x1="715" y1="537" x2="1020" y2="358" />

      {/* ci-fixer → pr-pusher */}
      <line className="network-line" x1="1030" y1="300" x2="1110" y2="300" />
      {/* pr-pusher → program-reviewer */}
      <line className="network-line" x1="1190" y1="300" x2="1210" y2="300" />
      {/* program-reviewer → Draft PR */}
      <line className="network-line" x1="1290" y1="300" x2="1310" y2="300" />

      {/* === NODES === */}

      {/* Outside left - issue-manager */}
      <circle className="network-node" cx="65" cy="300" r="50" />
      <g transform="translate(65,300) scale(1.5)"><use href="#icon-clipboard" className="svg-icon"/></g>
      <text className="network-label" x="65" y="370">issue-manager</text>

      {/* document-collector */}
      <circle className="network-node" cx="205" cy="300" r="58" />
      <g transform="translate(205,290) scale(1.7)"><use href="#icon-books" className="svg-icon"/></g>
      <text className="network-label" x="205" y="378">document-</text>
      <text className="network-label" x="205" y="396">collector</text>

      {/* P - parameter-architect - TOP LEFT on ellipse (smaller) */}
      <circle className="network-node" cx="440" cy="100" r="52" />
      <g transform="translate(440,100) scale(1.5)"><use href="#icon-gear" className="svg-icon"/></g>
      <text className="network-label" x="440" y="30">parameter-architect</text>

      {/* R - rules-engineer - TOP RIGHT on ellipse (smaller) */}
      <circle className="network-node" cx="870" cy="100" r="52" />
      <g transform="translate(870,100) scale(1.5)"><use href="#icon-lambda" className="svg-icon"/></g>
      <text className="network-label" x="870" y="30">rules-engineer</text>

      {/* Ref - reference-validator - LEFT inside, lower */}
      <circle className="network-node" cx="370" cy="420" r="38" />
      <g transform="translate(370,420) scale(1.1)"><use href="#icon-link" className="svg-icon"/></g>
      <text className="network-label" x="290" y="440">reference-</text>
      <text className="network-label" x="290" y="458">validator</text>

      {/* E - edge-case-gen - right side */}
      <circle className="network-node" cx="850" cy="380" r="38" />
      <g transform="translate(850,380) scale(1.1)"><use href="#icon-lightning" className="svg-icon"/></g>
      <text className="network-label" x="850" y="432">edge-case-gen</text>

      {/* T - test-creator - CENTER inside */}
      <circle className="network-node" cx="650" cy="300" r="52" />
      <g transform="translate(650,300) scale(1.5)"><use href="#icon-flask" className="svg-icon"/></g>
      <text className="network-label" x="650" y="240">test-creator</text>

      {/* I - impl-validator - bottom center ON ellipse line (bigger) */}
      <circle className="network-node" cx="650" cy="540" r="65" />
      <g transform="translate(650,540) scale(1.9)"><use href="#icon-search" className="svg-icon"/></g>
      <text className="network-label" x="650" y="625">impl-validator</text>

      {/* CI - ci-fixer - RIGHT side ON ellipse line */}
      <circle className="network-node" cx="1030" cy="300" r="60" />
      <g transform="translate(1030,300) scale(1.8)"><use href="#icon-wrench" className="svg-icon"/></g>
      <text className="network-label" x="1030" y="380">ci-fixer</text>

      {/* pr-pusher */}
      <circle className="network-node" cx="1150" cy="300" r="40" />
      <g transform="translate(1150,300) scale(1.2)"><use href="#icon-upload" className="svg-icon"/></g>
      <text className="network-label" x="1150" y="358">pr-pusher</text>

      {/* program-reviewer */}
      <circle className="network-node" cx="1250" cy="300" r="40" />
      <g transform="translate(1250,300) scale(1.2)"><use href="#icon-book" className="svg-icon"/></g>
      <text className="network-label" x="1250" y="358">program-</text>
      <text className="network-label" x="1250" y="376">reviewer</text>

      {/* Draft PR */}
      <circle className="network-node" cx="1350" cy="300" r="40" />
      <g transform="translate(1350,300) scale(1.2)"><use href="#icon-document" className="svg-icon"/></g>
      <text className="network-label" x="1350" y="358">Draft PR</text>
    </svg>
  </div>
);
