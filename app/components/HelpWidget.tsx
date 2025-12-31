"use client";

import Script from "next/script";

export default function HelpWidget() {
  return (
    <>
      <div id="help-widget">
        <button id="help-btn" aria-label="Open support">
          <div id="help-tip" hidden>
            <div className="help-tip-text">Hi 👋 Need help?</div>
          </div>
          <span className="help-btn-icon">💬</span>
          <span className="help-btn-text">Help</span>
        </button>

        <div id="help-panel" hidden>
          <div className="help-header">
            <span id="help-header-title">Support</span>
            <button id="help-close" aria-label="Close">
              ✕
            </button>
          </div>

          <div className="help-body">
            <input id="help-search" placeholder="Search..." autoComplete="off" />

            <div id="view-categories" className="help-view">
              <div className="help-subtitle">What do you need help with?</div>
              <div id="category-list" className="help-list"></div>
            </div>

            <div id="view-category" className="help-view" hidden>
              <button id="back-categories" className="back-btn" type="button">
                ← Back
              </button>
              <div className="help-subtitle" id="category-title"></div>
              <div id="question-list" className="help-list"></div>
            </div>

            <div id="view-article" className="help-view" hidden>
              <button id="back-category" className="back-btn" type="button">
                ← Back
              </button>
              <div className="article">
                <h4 id="answer-title"></h4>
                <div id="answer-text" className="article-text"></div>
              </div>
            </div>

            <div id="view-contact" className="help-view" hidden>
              <button id="back-from-contact" className="back-btn" type="button">
                ← Back
              </button>

              <div className="contact">
                <h4 className="contact-title">Contact us</h4>
                <input id="ticket-email" placeholder="Your email" />
                <textarea id="ticket-msg" placeholder="Tell us what you need..."></textarea>
                <button id="ticket-send">Send</button>
                <div id="ticket-status"></div>
              </div>
            </div>
          </div>

          <div id="help-footer" className="help-footer" hidden>
            <span>Did this help?</span>
            <div className="footer-actions">
              <button id="help-yes" className="ghost">
                Yes
              </button>
              <button id="help-no" className="ghost">
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ This is the important part */}
      <Script src="/scripts/help-widget.js" strategy="afterInteractive" />
    </>
  );
}
