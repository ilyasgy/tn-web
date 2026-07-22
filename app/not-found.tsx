import Link from "next/link";

export default function NotFound() {
  return (
    <main className="tn-page tn-blueprint-grid tn-main">
      <section className="tn-page-hero">
        <div className="tn-container">
          <div
            className="tn-page-copy items-start text-left"
            data-tn-reveal="left"
            data-tn-reveal-state="hidden"
          >
            <h1>404. Page not found.</h1>
            <p className="tn-body tn-page-summary">
              The page you were trying to open is not here. The link may be wrong, or the page may
              have moved.
            </p>

            <div className="tn-actions">
              <Link href="/" className="tn-button-primary">
                Go Home
              </Link>
              <Link href="/services" className="tn-button-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
