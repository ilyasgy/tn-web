async function waitForSupportOptions() {
  for (let i = 0; i < 40; i++) {
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

  const search = document.getElementById("help-search");
  const optionsDiv = document.getElementById("help-options");

  const viewHome = document.getElementById("view-home");
  const viewArticle = document.getElementById("view-article");
  const viewContact = document.getElementById("view-contact");

  const backHome = document.getElementById("back-home");
  const backArticle = document.getElementById("back-article");

  const answerTitle = document.getElementById("answer-title");
  const answerText = document.getElementById("answer-text");

  const footer = document.getElementById("help-footer");
  const yesBtn = document.getElementById("help-yes");
  const noBtn = document.getElementById("help-no");

  const openContact = document.getElementById("open-contact");
  const ticketEmail = document.getElementById("ticket-email");
  const ticketMsg = document.getElementById("ticket-msg");
  const ticketSend = document.getElementById("ticket-send");
  const ticketStatus = document.getElementById("ticket-status");

  if (!btn || !panel) return;

  const state = {
    current: "home", // home | article | contact
    currentOption: null,
    filtered: SUPPORT_OPTIONS
  };

  function setView(name) {
    state.current = name;

    viewHome.hidden = name !== "home";
    viewArticle.hidden = name !== "article";
    viewContact.hidden = name !== "contact";

    // footer only on article
    footer.hidden = name !== "article";

    // back button in contact only when coming from article
    backArticle.hidden = !(name === "contact" && state.currentOption);

    // reset scroll to top for cleanliness
    const body = panel.querySelector(".help-body");
    if (body) body.scrollTop = 0;
  }

  function openWidget() {
    panel.hidden = false;
    setView("home");
    renderOptions(state.filtered);
    search.value = "";
    search.focus();
  }

  function closeWidget() {
    panel.hidden = true;
  }

  btn.onclick = openWidget;
  close.onclick = closeWidget;

  function renderOptions(list) {
    optionsDiv.innerHTML = "";

    list.forEach(o => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = o.title;
      b.onclick = () => showAnswer(o);
      optionsDiv.appendChild(b);
    });

    // if no results
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "help-hint";
      empty.textContent = "No results. Try another search.";
      optionsDiv.appendChild(empty);
    }
  }

  function showAnswer(o) {
    state.currentOption = o;

    answerTitle.textContent = o.title;
    answerText.textContent = o.answer;

    setView("article");
  }

  backHome.onclick = () => setView("home");

  openContact.onclick = () => {
    state.currentOption = null;
    setView("contact");
  };

  noBtn.onclick = () => setView("contact");
  yesBtn.onclick = closeWidget;

  backArticle.onclick = () => setView("article");

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    state.filtered = !q
      ? SUPPORT_OPTIONS
      : SUPPORT_OPTIONS.filter(o =>
          (o.title || "").toLowerCase().includes(q) ||
          (o.answer || "").toLowerCase().includes(q)
        );
    renderOptions(state.filtered);

    if (state.current !== "home") setView("home");
  });

  ticketSend.onclick = async () => {
    const email = ticketEmail.value.trim();
    const message = ticketMsg.value.trim();

    if (!email || !message) {
      ticketStatus.textContent = "Email + message are required.";
      return;
    }

    ticketStatus.textContent = "Sending...";

    try {
      const res = await fetch(`${window.__CONFIG__.API_BASE_URL}/api/support/ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          pageUrl: location.href,
          relatedTopic: state.currentOption ? state.currentOption.title : null
        })
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        ticketStatus.textContent = "Sent. We'll reply by email.";
        ticketMsg.value = "";
      } else {
        ticketStatus.textContent = data.error || "Error sending.";
      }
    } catch (e) {
      ticketStatus.textContent = "Network error. Try again.";
    }
  };

  // initial render (in case you open without search)
  renderOptions(SUPPORT_OPTIONS);
});
