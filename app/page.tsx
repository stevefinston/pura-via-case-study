import Image from 'next/image';

const evidenceItems = [
  { tone: "implemented", label: "Implemented", text: "Interactive guest + operator prototypes" },
  { tone: "verified", label: "Verified", text: "Build, runtime integrity, and packaging checks" },
  { tone: "unresolved", label: "Unvalidated", text: "Demand, partnerships, economics, and legal path" },
];

const lifecycle = [
  { name: "Pending", detail: "Below the commitment threshold", tone: "pending" },
  { name: "Confirmed", detail: "Threshold reached", tone: "confirmed" },
  { name: "Guaranteed", detail: "Committed regardless of added demand", tone: "guaranteed" },
  { name: "Full", detail: "No remaining seats", tone: "full" },
  { name: "Canceled", detail: "Will not operate", tone: "canceled" },
];

const decisions = [
  { decision: "Start with one corridor", reason: "Concentrate a sparse supply-and-demand problem into a schedule people can understand.", tradeoff: "No broad route catalog or on-demand promise." },
  { decision: "Make the threshold visible", reason: "Pending confirmation becomes a legible product state instead of an unexplained delay.", tradeoff: "Cancellation and deadline policy still need real-world validation." },
  { decision: "Use a controlled dispatch pool", reason: "Eligibility and vessel fit are prerequisites; price is only one selection input.", tradeoff: "The prototype does not implement operator onboarding or scoring." },
  { decision: "Separate public and private surfaces", reason: "Guests need ride confidence, not operator identities, offers, or selection mechanics.", tradeoff: "Production authorization and data isolation remain future work." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pura Via case study home"><Image className="brand-icon" src="/pura-via-icon.png" alt="" aria-hidden="true" width={42} height={42} priority /><span>Pura Via</span></a>
        <nav aria-label="Case study sections"><a href="#strategy">Strategy</a><a href="#experience">Experience</a><a href="#architecture">Architecture</a><a href="#evidence">Evidence</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Independent product development · Logistics systems</p>
          <h1>Coordinating the trip<br />without pretending to operate it.</h1>
          <p className="hero-lede">Pura Via is a validation-stage concept for aggregating guest demand, reserving seats, scheduling shared departures, and coordinating a controlled pool of licensed water-transport operators.</p>
          <div className="hero-actions"><a className="button button-primary" href="#problem">Read the case study</a><a className="button button-secondary" href="#evidence">Review the evidence</a></div>
          <dl className="hero-meta" aria-label="Project summary"><div><dt>Role</dt><dd>Independent developer</dd></div><div><dt>Stage</dt><dd>Interactive prototype</dd></div><div><dt>Stack</dt><dd>React · TypeScript · Vite</dd></div></dl>
        </div>
        <aside className="dispatch-card" aria-label="Synthetic dispatch scenario">
          <div className="dispatch-topline"><span>Scenario · PV-104</span><span className="signal">Eligible</span></div>
          <div className="route-line"><span className="route-node" aria-hidden="true" /><span className="route-track" aria-hidden="true" /><span className="route-node route-node-end" aria-hidden="true" /></div>
          <div className="route-labels"><strong>Punta Cacique</strong><strong>Playas del Coco</strong></div>
          <div className="dispatch-facts"><div><span>Departure</span><strong>9:00 AM</strong></div><div><span>Guests</span><strong>4 of 5</strong></div><div><span>Posted payout</span><strong>$160</strong></div></div>
          <div className="threshold" role="img" aria-label="Four of five seats represented"><span style={{ width: "80%" }} /></div>
          <p>One seat away from a viable shared departure.</p><small>Synthetic prototype data. No live service or operator assignment.</small>
        </aside>
      </section>

      <section className="evidence-strip" id="evidence" aria-labelledby="evidence-title">
        <div><p className="eyebrow">At a glance</p><h2 id="evidence-title">Evidence before adjectives.</h2></div>
        <ul>{evidenceItems.map((item) => <li key={item.label}><span className={`status-dot ${item.tone}`} aria-hidden="true" /><span><strong>{item.label}</strong>{item.text}</span></li>)}</ul>
      </section>

      <section className="section problem-section" id="problem">
        <div className="section-intro"><p className="eyebrow">01 · The coordination problem</p><h2>A useful trip can fail before a boat ever moves.</h2><p>Individual guests may want the same crossing without wanting a private charter. Operators need enough committed demand to justify a run. Concierges need a trustworthy answer—not an improvised chain of calls.</p></div>
        <div className="tension-grid" aria-label="Stakeholder tensions">
          <article><span>Guest</span><h3>“Can I reserve one seat?”</h3><p>Needs clear timing, price, confirmation rules, and support.</p></article>
          <article><span>Concierge</span><h3>“Can I recommend this?”</h3><p>Needs a legible guest experience and a clear responsibility boundary.</p></article>
          <article><span>Operator</span><h3>“Is this run worth taking?”</h3><p>Needs viable demand, vessel-fit details, response time, and a known payout.</p></article>
        </div>
        <p className="scenario-note"><strong>Route scenario:</strong> Punta Cacique ↔ Playas del Coco illustrates the hypothesis. It does not imply a resort affiliation, approved pickup, or active service.</p>
      </section>

      <section className="section strategy-section" id="strategy">
        <div className="section-intro inverse"><p className="eyebrow">02 · Product strategy</p><h2>Solve density before scale.</h2><p>A marketplace spanning many routes and departure times would spread early demand too thin. Pura Via starts with one corridor and a limited schedule, combining per-seat reservations until enough passengers commit to confirm a trip.</p></div>
        <div className="threshold-model">
          <div className="threshold-copy"><span className="model-number">04 / 05</span><strong>interested seats</strong><p>A run remains pending until its operating condition is met.</p></div>
          <div className="seat-model" role="img" aria-label="Four held seats and one open seat">{[0, 1, 2, 3, 4].map((seat) => <span key={seat} className={seat === 4 ? "open-seat" : "held-seat"} aria-hidden="true" />)}</div>
          <div className="model-arrow" aria-hidden="true">→</div><div className="model-outcome"><span>Threshold reached</span><strong>Confirm the shared departure</strong><p>Then coordinate the eligible operator and guest instructions.</p></div>
        </div>
        <div className="wedge-principles"><div><strong>Concentrated</strong><span>One corridor before a network</span></div><div><strong>Scheduled</strong><span>A few legible windows, not false on-demand availability</span></div><div><strong>Conditional</strong><span>Pending is a real state with a deadline</span></div></div>
      </section>

      <section className="section system-section" id="system">
        <div className="section-intro compact"><p className="eyebrow">03 · System and trust model</p><h2>A coordination layer with a hard maritime boundary.</h2></div>
        <div className="system-map" aria-label="Pura Via system relationship map">
          <div className="actor-card"><span>Demand side</span><strong>Guest</strong><p>Discovers a departure and reserves seats.</p></div>
          <div className="actor-card"><span>Trust channel</span><strong>Concierge</strong><p>Explains the scenario and supports the guest.</p></div>
          <div className="coordination-plane"><Image className="coordination-icon" src="/pura-via-icon.png" alt="" aria-hidden="true" width={56} height={56} sizes="56px" /><div><strong>Pura Via</strong><p>Demand aggregation · reservation state · schedules · communication · dispatch coordination</p></div></div>
          <div className="actor-card operator-actor"><span>Execution side</span><strong>Licensed operator</strong><p>Owns the boat, crew, safety, permits, insurance, and maritime execution.</p></div>
        </div>
        <div className="boundary-grid">
          <article><p className="mini-label">Coordination responsibility</p><h3>What the product is designed to manage</h3><ul><li>Demand and seat inventory</li><li>Departure state and scheduling</li><li>Guest communication and support</li><li>Operator eligibility and dispatch workflow</li></ul></article>
          <article><p className="mini-label coral-label">Maritime responsibility</p><h3>What remains with the licensed operator</h3><ul><li>Vessels, captains, and crews</li><li>Safety and operational acceptability</li><li>Permits, licensing, and insurance</li><li>Dock, beach, weather, and boarding execution</li></ul></article>
        </div>
        <p className="boundary-caveat">This is a proposed product boundary, not a legal conclusion. Legal classification, contracts, insurance, hotel permission, and operating rules remain unresolved.</p>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-intro"><p className="eyebrow">04 · Two surfaces, one shared state</p><h2>Show each stakeholder only what helps them act.</h2></div>
        <div className="prototype-callout">
          <div><span className="surface-label">Interactive prototype</span><strong>Explore the guest and private operator flows.</strong><p>Synthetic demonstration only—no payments, reservations, or real dispatch.</p></div>
          <a className="button button-primary" href="https://pura-via-prototype.vercel.app" target="_blank" rel="noreferrer">Launch interactive prototype ↗</a>
        </div>
        <div className="experience-grid">
          <article className="experience-card guest-card">
            <div className="experience-copy"><span className="surface-label">Guest + concierge</span><h3>Make conditional service understandable.</h3><p>Choose a departure, adjust party size, see confirmation progress, hold seats, and reach concierge support. Operator identities and offer mechanics stay out of view.</p><ul><li>Departure selection and sorting</li><li>Party-size controls and threshold progress</li><li>Demo-only seat hold with no payment</li><li>Concierge and licensed-partner trust language</li></ul></div>
            <div className="phone phone-guest" aria-label="Synthetic guest interface representation"><div className="phone-top"><span>PV</span><strong>Pura Via</strong><span>•••</span></div><div className="phone-route"><small>Shared route</small><strong>Punta Cacique → Coco</strong></div><div className="phone-heading"><strong>Select a departure</strong><span>Sort</span></div><div className="departure-demo selected-demo"><span>9:00 AM</span><span>● ● ● ○ ○</span><strong>2 more</strong></div><div className="departure-demo"><span>11:30 AM</span><span>● ● ● ● ○</span><strong>1 more</strong></div><div className="party-demo"><span>Your party</span><strong>− &nbsp; 2 &nbsp; +</strong></div><div className="phone-note">2 more guests needed to confirm</div><div className="phone-action">Hold 2 seats</div><small className="synthetic-label">Synthetic UI · date-neutral</small></div>
          </article>
          <article className="experience-card operator-card">
            <div className="experience-copy"><span className="surface-label">Private operator dispatch</span><h3>Control the pool before exposing the work.</h3><p>Only runs that fit an operator&apos;s availability and vessel capabilities are shown. Operators can accept an individual posted payout or make a structured counteroffer.</p><ul><li>Availability and eligibility filtering</li><li>Run detail and individual payout</li><li>Five-dollar counteroffer increments</li><li>Assigned runs and offers awaiting selection</li></ul></div>
            <div className="operator-panel" aria-label="Synthetic operator interface representation"><div className="operator-panel-top"><div><small>Qualified opportunities</small><strong>Available runs</strong></div><span>Online</span></div><div className="op-run"><span className="op-id">PV-104</span><strong>Punta Cacique → Coco</strong><div><span>9:00 AM · 4 guests</span><b>$160 payout</b></div></div><div className="op-run"><span className="op-id">PV-105</span><strong>Punta Cacique → Coco</strong><div><span>11:30 AM · 5 guests</span><b>$185 payout</b></div></div><div className="selection-policy">Assignment considers eligibility, reliability, vessel fit, response time, and price.</div><small className="synthetic-label">Synthetic UI · fictional run records</small></div>
          </article>
        </div>
      </section>

      <section className="section lifecycle-section" id="states">
        <div className="section-intro compact"><p className="eyebrow">05 · Departure state model</p><h2>“Available” is not a single state.</h2><p>The domain model defines five states. The working guest prototype focuses on pending threshold progress; the full lifecycle remains a documented design.</p></div>
        <div className="lifecycle-flow" tabIndex={0} aria-label="Departure lifecycle states; scroll horizontally on small screens">{lifecycle.map((state, index) => <div className="lifecycle-node-wrap" key={state.name}><article className={`lifecycle-node ${state.tone}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{state.name}</strong><p>{state.detail}</p></article>{index < lifecycle.length - 1 && <span className="flow-connector" aria-hidden="true">→</span>}</div>)}</div>
        <p className="flow-note">Confirmed and guaranteed can each proceed to full. Pending may instead cancel at its decision deadline. The diagram is a compact state vocabulary, not a deployed orchestration engine.</p>
      </section>

      <section className="section decisions-section" id="decisions">
        <div className="section-intro compact"><p className="eyebrow">06 · Decisions and tradeoffs</p><h2>The prototype is narrow by design.</h2></div>
        <div className="decision-table" role="table" aria-label="Product decisions and tradeoffs"><div className="decision-row decision-head" role="row"><span role="columnheader">Decision</span><span role="columnheader">Why</span><span role="columnheader">Cost accepted</span></div>{decisions.map((item) => <div className="decision-row" role="row" key={item.decision}><strong role="cell">{item.decision}</strong><span role="cell">{item.reason}</span><span role="cell">{item.tradeoff}</span></div>)}</div>
      </section>

      <section className="section architecture-section" id="architecture">
        <div className="section-intro inverse compact"><p className="eyebrow">07 · Prototype architecture</p><h2>Enough fidelity to test the conversation. No fake backend.</h2><p>The implementation uses explicit local state and a protected mobile runtime so product behavior can be demonstrated without implying production infrastructure.</p></div>
        <div className="architecture-stack" aria-label="Prototype architecture layers"><div><span>Presentation</span><strong>React 19 components</strong><p>Guest and operator surfaces with shared visual language.</p></div><div><span>Interaction</span><strong>Typed local state</strong><p>Selections, party size, availability, accepted runs, and offers exist only in memory.</p></div><div><span>Mobile runtime</span><strong>Device-safe primitives</strong><p>Scrollable phone viewport, bottom sheets, keyboard behavior, gesture handling, and iPhone/Pixel frames.</p></div><div><span>Build</span><strong>TypeScript + Vite</strong><p>Static client output and Cloudflare-compatible packaging checks.</p></div></div>
        <div className="technical-details"><details open><summary>UI and interaction decisions</summary><p>Fixed reservation action, compact information hierarchy, accessible labels and live outputs, drag-safe mobile scrolling, phone-scoped bottom sheets, and scroll reset when switching between guest and operator demos.</p></details><details><summary>Privacy and state decisions</summary><p>Guest and concierge screens do not expose operator identity, offers, or selection details. Prototype state is ephemeral: there is no API, persistence layer, authentication, payment processor, notification service, or manifest transmission.</p></details><details><summary>Responsive and runtime decisions</summary><p>The source prototype preserves calibrated iPhone and Pixel device chrome, safe areas, keyboard insets, and touch/drag suppression. Those runtime tests validate the presentation shell rather than live transport operations.</p></details></div>
      </section>

      <section className="section verification-section" id="verification">
        <div className="section-intro compact"><p className="eyebrow">08 · Implementation and verification</p><h2>What is built, what was checked, and what that does not prove.</h2></div>
        <div className="verification-grid"><article><span className="check-mark" aria-hidden="true">✓</span><strong>Source integrity</strong><p>28 protected mobile-runtime files match their recorded checksums.</p></article><article><span className="check-mark" aria-hidden="true">✓</span><strong>Production build</strong><p>Type checking and the Vite production build complete successfully.</p></article><article><span className="check-mark" aria-hidden="true">✓</span><strong>Packaging tests</strong><p>Four tests verify asset serving, app-route fallback, write/API behavior, and required output files.</p></article><article><span className="check-mark" aria-hidden="true">✓</span><strong>Browser runtime</strong><p>Eight tests cover gestures, sheets, keyboard behavior, device switching, and stacked flows.</p></article></div>
        <div className="evidence-boundary"><strong>Verification boundary</strong><p>Passing checks show that the local prototype builds and its presentation runtime behaves as tested. They do not demonstrate customer demand, operator participation, legal approval, dispatch reliability, or production readiness.</p></div>
      </section>

      <section className="section limitations-section" id="limits"><div className="limitations-grid"><div><p className="eyebrow">Deliberate non-goals</p><h2>What I left out.</h2><ul><li>Broad or open operator marketplace</li><li>Dynamic routing and real-time boat tracking</li><li>Native mobile apps</li><li>Automated operator ranking</li><li>Complex loyalty or hotel commission systems</li></ul></div><div><p className="eyebrow coral-text">Current limitations</p><h2>What is not built.</h2><ul><li>Production identity and access control</li><li>Payments, refunds, or reservation persistence</li><li>Notifications or manifest transmission</li><li>Operational dispatch and admin tooling</li><li>Legal, insurance, operator, or hotel approval</li></ul></div></div></section>

      <section className="section next-section" id="next">
        <div className="section-intro inverse compact"><p className="eyebrow">09 · Next validation steps</p><h2>Learn before hardening.</h2><p>Production infrastructure should follow evidence about the operating model—not precede it.</p></div>
        <ol className="next-list"><li><span>01</span><div><strong>Operator economics</strong><p>Validate the guaranteed amount, capacity, notice, cancellation, weather, and manifest requirements for one run.</p></div></li><li><span>02</span><div><strong>Legal and insurance path</strong><p>Clarify platform classification, shared-seat permissions, consumer terms, and responsibility boundaries with qualified professionals.</p></div></li><li><span>03</span><div><strong>Concierge trust</strong><p>Test comprehension of pending confirmation, vendor requirements, pickup constraints, and the preferred booking handoff.</p></div></li><li><span>04</span><div><strong>Demand behavior</strong><p>Only after approvals, measure whether guests select shared departures and whether concentrated schedules reach viable thresholds.</p></div></li></ol>
      </section>

      <section className="section demonstration-section"><div><p className="eyebrow">What this project demonstrates</p><h2>Product judgment under operational uncertainty.</h2></div><div className="demonstration-copy"><p>I translated an ambiguous logistics idea into explicit stakeholders, states, trust boundaries, and testable interfaces—while keeping implementation claims separate from business hypotheses.</p><ul><li>Narrowing scope around the riskiest assumptions</li><li>Designing for competing stakeholder needs</li><li>Building interactive flows with honest system boundaries</li><li>Using verification evidence without overstating maturity</li></ul></div></section>

      <footer className="site-footer"><div><Image className="footer-icon" src="/pura-via-icon.png" alt="" aria-hidden="true" width={46} height={46} /><div><strong>Pura Via</strong><p>A technical product case study by Steven Finston, independent developer.</p></div></div><div className="footer-links"><a href="https://github.com/stevefinston" rel="noreferrer">More work on GitHub</a><a href="#top">Back to top ↑</a></div><p className="footer-disclaimer">Validation-stage concept. No transportation service, partnership, hotel affiliation, or live pilot is represented.</p></footer>
    </main>
  );
}
