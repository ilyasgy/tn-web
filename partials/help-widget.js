async function waitForSupportOptions() {
  for (let i = 0; i < 40; i++) { // ~4s
    if (Array.isArray(window.SUPPORT_OPTIONS)) return window.SUPPORT_OPTIONS;
    await new Promise(r => setTimeout(r, 100));
  }
  return [];
}

document.addEventListener("DOMContentLoaded", async () => {
  const SUPPORT_OPTIONS = await waitForSupportOptions();

  const btn = document.getElementById("help-btn");
  const panel = document.getElementById("help-panel");
  const close = document.getElementById("help-close");

  const optionsDiv = document.getElementById("help-options");
  const answerBox = document.getElementById("help-answer");
  const answerTitle = document.getElementById("answer-title");
  const answerText = document.getElementById("answer-text");

  const yesBtn = document.getElementById("help-yes");
  const noBtn = document.getElementById("help-no");

  const ticketBox = document.getElementById("help-ticket");
  const talkHuman = document.getElementById("talk-human");

  // Safety: if widget isn't on this page, don't crash
  if (!btn || !panel || !close || !optionsDiv) return;

  btn.onclick = () => (panel.hidden = false);
  close.onclick = () => (panel.hidden = true);

  // render options
  optionsDiv.innerHTML = "";
  SUPPORT_OPTIONS.forEach(o => {
    const b = document.createElement("button");
    b.textContent = o.title;
    b.onclick = () => showAnswer(o);
    optionsDiv.appendChild(b);
  });

  function showAnswer(o) {
    answerTitle.textContent = o.title;
    answerText.textContent = o.answer;
    answerBox.hidden = false;
    ticketBox.hidden = true;
    talkHuman.hidden = true; // reset
  }

  yesBtn.onclick = () => (panel.hidden = true);

  noBtn.onclick = () => {
    talkHuman.hidden = false;
  };

  talkHuman.onclick = () => {
    ticketBox.hidden = false;
  };

  document.getElementById("ticket-send").onclick = async () => {
    const email = document.getElementById("ticket-email").value.trim();
    const message = document.getElementById("ticket-msg").value.trim();
    const status = document.getElementById("ticket-status");

    if (!email || !message) {
      status.textContent = "Email + message are required.";
      return;
    }

    status.textContent = "Sending...";

    try {
      const res = await fetch(
        `${window.__CONFIG.API_BASE_URL}/api/support/ticket`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            message,
            pageUrl: location.href
          })
        }
      );

      const data = await res.json().catch(() => ({}));
      status.textContent = res.ok && data.ok
        ? "Sent. We'll reply by email."
        : (data.error || "Error sending.");
    } catch (e) {
      status.textContent = "Network error. Try again.";
    }
  };
});
