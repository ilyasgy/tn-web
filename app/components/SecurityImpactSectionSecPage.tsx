export default function SecurityImpactSectionSecPage() {
  return (
    <section className="tn-cta-band">
      <div className="tn-container tn-grid-2">
        <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
          <small className="tn-kicker">Why after launch</small>
          <h2>Live traffic finds weak setups fast.</h2>
          <p className="tn-body">
            A live site shows the routes, headers, login flow, and setup outsiders can actually
            reach.
          </p>
        </div>

        <div className="tn-stack-64" data-tn-reveal="right" data-tn-reveal-state="hidden">
          <div className="tn-line-list">
            <div className="tn-line-item">
              <small className="tn-kicker">What gets checked</small>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body tn-body-strong">Auth, sessions, and account abuse paths</p>
                <p className="tn-body tn-body-strong">Access control, input handling, and APIs</p>
                <p className="tn-body tn-body-strong">Headers, cookies, TLS, and exposed files</p>
              </div>
            </div>
          </div>

          <div className="tn-line-list">
            <div className="tn-line-item">
              <small className="tn-kicker">Report and retest</small>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body tn-body-strong">Findings with proof and severity</p>
                <p className="tn-body tn-body-strong">Fixes, not vague notes</p>
                <p className="tn-body tn-body-strong">One free retest within 14 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
