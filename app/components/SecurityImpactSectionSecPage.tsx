export default function SecurityImpactSectionSecPage() {
  return (
    <section className="tn-cta-band">
      <div className="tn-container tn-grid-2">
        <div className="tn-section-copy" data-tn-reveal="left" data-tn-reveal-state="hidden">
          <small className="tn-kicker">Why after launch</small>
          <h2>Production is where compliance is proven.</h2>
          <p className="tn-body">
            A live patient-facing application shows the routes, headers, login flow, tracking
            scripts, and setup outsiders can actually reach.
          </p>
        </div>

        <div className="tn-stack-64" data-tn-reveal="right" data-tn-reveal-state="hidden">
          <div className="tn-line-list">
            <div className="tn-line-item">
              <small className="tn-kicker">What gets checked</small>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body tn-body-strong">Auth, sessions, and account abuse paths</p>
                <p className="tn-body tn-body-strong">Access control, input handling, and APIs</p>
                <p className="tn-body tn-body-strong">PHI tracking exposure and third-party JavaScript</p>
                <p className="tn-body tn-body-strong">Headers, cookies, TLS, and exposed files</p>
              </div>
            </div>
          </div>

          <div className="tn-line-list">
            <div className="tn-line-item">
              <small className="tn-kicker">Report and retest</small>
              <div className="tn-stack-16 pt-4">
                <p className="tn-body tn-body-strong">Findings with proof, severity, and business impact</p>
                <p className="tn-body tn-body-strong">Developer-ready remediation guidance</p>
                <p className="tn-body tn-body-strong">One complimentary retest after fixes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
