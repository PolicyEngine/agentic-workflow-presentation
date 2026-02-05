export const FullAgentFlow = () => (
  <div className="agent-flow-container" style={{ margin: '40px 0' }}>
    <svg className="agent-flow-svg" viewBox="0 0 1300 680">
      {/* Loop indicator - ellipse around development/validation agents */}
      <ellipse className="loop-indicator" cx="600" cy="340" rx="350" ry="290" />
      <text className="loop-label" x="600" y="650">iterate until tests pass</text>

      {/* CONNECTIONS */}
      <line className="network-line" x1="115" y1="340" x2="138" y2="340" />
      <line className="network-line thick" x1="262" y1="300" x2="345" y2="165" />
      <line className="network-line thick" x1="262" y1="340" x2="338" y2="340" />
      <line className="network-line thick" x1="262" y1="380" x2="345" y2="515" />
      <line className="network-line thick" x1="462" y1="365" x2="570" y2="425" />
      <line className="network-line thick" x1="449" y1="525" x2="570" y2="425" />
      <line className="network-line thick" x1="462" y1="340" x2="735" y2="120" />
      <line className="network-line thick" x1="462" y1="340" x2="880" y2="340" />
      <line className="network-line thick" x1="462" y1="120" x2="735" y2="120" />
      <line className="network-line thick" x1="455" y1="145" x2="880" y2="340" />
      <line className="network-line thick" x1="462" y1="560" x2="915" y2="400" />
      <line className="network-line thick" x1="444" y1="165" x2="805" y2="560" />
      <line className="network-line thick" x1="462" y1="560" x2="805" y2="560" />
      <line className="network-line thick" x1="855" y1="165" x2="915" y2="285" />
      <line className="network-line thick" x1="805" y1="560" x2="915" y2="400" />
      <line className="network-line thick" x1="614" y1="425" x2="880" y2="340" />
      <line className="network-line" x1="1015" y1="340" x2="1028" y2="340" />
      <line className="network-line" x1="1102" y1="340" x2="1118" y2="340" />
      <line className="network-line" x1="1192" y1="340" x2="1208" y2="340" />

      {/* NODES */}
      <circle className="network-node" cx="65" cy="340" r="55" />
      <g transform="translate(65,340) scale(1.6)"><use href="#icon-clipboard" className="svg-icon"/></g>
      <text className="network-label" x="65" y="418">issue-manager</text>

      <circle className="network-node" cx="200" cy="340" r="62" />
      <g transform="translate(200,330) scale(1.8)"><use href="#icon-books" className="svg-icon"/></g>
      <text className="network-label" x="200" y="425">document-</text>
      <text className="network-label" x="200" y="445">collector</text>

      <circle className="network-node" cx="400" cy="120" r="62" />
      <g transform="translate(400,120) scale(1.8)"><use href="#icon-gear" className="svg-icon"/></g>
      <text className="network-label" x="400" y="42">parameter-architect</text>

      <circle className="network-node" cx="400" cy="340" r="62" />
      <g transform="translate(400,340) scale(1.8)"><use href="#icon-flask" className="svg-icon"/></g>
      <text className="network-label" x="400" y="425">test-creator</text>

      <circle className="network-node" cx="400" cy="560" r="62" />
      <g transform="translate(400,568) scale(1.8)"><use href="#icon-lambda" className="svg-icon"/></g>
      <text className="network-label" x="400" y="645">rules-engineer</text>

      <circle className="network-node" cx="570" cy="425" r="55" />
      <g transform="translate(570,425) scale(1.6)"><use href="#icon-lightning" className="svg-icon"/></g>
      <text className="network-label" x="570" y="503">edge-case-gen</text>

      <circle className="network-node" cx="805" cy="120" r="72" />
      <g transform="translate(805,120) scale(2.0)"><use href="#icon-search" className="svg-icon"/></g>
      <text className="network-label" x="805" y="42">impl-validator</text>

      <circle className="network-node" cx="770" cy="600" r="55" />
      <g transform="translate(770,600) scale(1.6)"><use href="#icon-link" className="svg-icon"/></g>
      <text className="network-label" x="770" y="678">reference-validator</text>

      <circle className="network-node" cx="950" cy="340" r="72" />
      <g transform="translate(950,340) scale(2.0)"><use href="#icon-wrench" className="svg-icon"/></g>
      <text className="network-label" x="950" y="435">ci-fixer</text>

      <circle className="network-node" cx="1065" cy="340" r="40" />
      <g transform="translate(1065,340) scale(1.2)"><use href="#icon-upload" className="svg-icon"/></g>
      <text className="network-label" x="1065" y="398">pr-pusher</text>

      <circle className="network-node" cx="1155" cy="340" r="40" />
      <g transform="translate(1155,340) scale(1.2)"><use href="#icon-book" className="svg-icon"/></g>
      <text className="network-label" x="1155" y="398">program-</text>
      <text className="network-label" x="1155" y="416">reviewer</text>

      <circle className="network-node" cx="1245" cy="340" r="40" />
      <g transform="translate(1245,340) scale(1.2)"><use href="#icon-document" className="svg-icon"/></g>
      <text className="network-label" x="1245" y="398">Draft PR</text>
    </svg>
  </div>
);
