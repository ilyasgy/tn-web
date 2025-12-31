async function waitForSupportOptions() {
  for (let i = 0; i < 40; i++) {
    if (Array.isArray(window.SUPPORT_OPTIONS)) return window.SUPPORT_OPTIONS;
    await new Promise(r => setTimeout(r, 100));
  }
  return [];
}

document.addEventListener("DOMContentLoaded", async () => {
  const CATEGORIES = await waitForSupportOptions(); // [{id,title,items:[{id,title,answer}]}]

  const btn = document.getElementById("help-btn");
  const panel = document.getElementById("help-panel");
  const close = document.getElementById("help-close");

  const headerTitle = document.getElementById("help-header-title");
  const search = document.getElementById("help-search");

  const viewCategories = document.getElementById("view-categories");
  const viewCategory = document.getElementById("view-category");
  const viewArticle = document.getElementById("view-article");
  const viewContact = document.getElementById("view-contact");

  const categoryList = document.getElementById("category-list");
  const questionList = document.getElementById("question-list");

  const categoryTitle = document.getElementById("category-title");

  const backCategories = document.getElementById("back-categories");
  const backCategory = document.getElementById("back-category");
  const backFromContact = document.getElementById("back-from-contact");

  const answerTitle = document.getElementById("answer-title");
  const answerText = document.getElementById("answer-text");

  const footer = document.getElementById("help-footer");
  const yesBtn = document.getElementById("help-yes");
  const noBtn = document.getElementById("help-no");

  const ticketEmail = document.getElementById("ticket-email");
  const ticketMsg = document.getElementById("ticket-msg");
  const ticketSend = document.getElementById("ticket-send");
  const ticketStatus = document.getElementById("ticket-status");

  const tip = document.getElementById("help-tip");
  const btnTextEl = btn?.querySelector(".help-btn-text");

  if (!btn || !panel || !close) return;

  // Flatten for search
  const ALL_Q = (CATEGORIES || []).flatMap(c =>
    (c.items || []).map(q => ({ ...q, categoryId: c.id, categoryTitle: c.title }))
  );

  const state = {
    view: "categories",
    selectedCategory: null,
    selectedQuestion: null,
    lastNonContactView: "categories"
  };

  /* ---------------------------
     Tooltip (shows once)
  ---------------------------- */
  function hideTip() {
    if (!tip) return;
    tip.hidden = true;
    localStorage.setItem("help_tip_seen", "1");
  }

  function showTipOnce() {
    if (!tip) return;
    if (localStorage.getItem("help_tip_seen") === "1") return;
    if (!panel.hidden) return;

    tip.hidden = false;

    setTimeout(() => {
      tip.hidden = true;
      localStorage.setItem("help_tip_seen", "1");
    }, 4000);
  }

  setTimeout(showTipOnce, 2000);

  /* ---------------------------
     Rendering
  ---------------------------- */
  function renderCategories(list = CATEGORIES) {
    if (!categoryList) return;
    categoryList.innerHTML = "";

    (list || []).forEach(c => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = c.title;
      b.onclick = () => openCategory(c);
      categoryList.appendChild(b);
    });

    if (!(list || []).length) {
      const empty = document.createElement("div");
      empty.className = "help-subtitle";
      empty.textContent = "No results.";
      categoryList.appendChild(empty);
    }
  }

  function renderQuestions(items) {
    if (!questionList) return;
    questionList.innerHTML = "";

    (items || []).forEach(q => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = q.title;
      b.onclick = () => openArticle(q);
      questionList.appendChild(b);
    });

    if (!(items || []).length) {
      const empty = document.createElement("div");
      empty.className = "help-subtitle";
      empty.textContent = "No results in this category.";
      questionList.appendChild(empty);
    }
  }

  /* ---------------------------
     Safe view switching (NO BLANK SCREENS)
  ---------------------------- */
  function safeSetView(v) {
    // Guard: don't allow invalid states
    if (v === "category" && !state.selectedCategory) v = "categories";
    if (v === "article" && !state.selectedQuestion) v = "categories";

    state.view = v;

    if (viewCategories) viewCategories.hidden = v !== "categories";
    if (viewCategory) viewCategory.hidden = v !== "category";
    if (viewArticle) viewArticle.hidden = v !== "article";
    if (viewContact) viewContact.hidden = v !== "contact";

    // Search only on categories + category
    if (search) search.hidden = !(v === "categories" || v === "category");

    // Footer only on article
    if (footer) footer.hidden = v !== "article";

    // Header title
    if (headerTitle) {
      headerTitle.textContent =
        v === "categories" ? "Support" :
        v === "category" ? (state.selectedCategory?.title || "Support") :
        v === "article" ? "Support" :
        "Contact";
    }

    // reset scroll
    const body = panel.querySelector(".help-body");
    if (body) body.scrollTop = 0;
  }

  /* ---------------------------
     Navigation actions
  ---------------------------- */
  function openHome() {
    state.selectedCategory = null;
    state.selectedQuestion = null;
    if (search) search.value = "";
    renderCategories(CATEGORIES);
    safeSetView("categories");
  }

  function openCategory(category) {
    state.selectedCategory = category;
    state.selectedQuestion = null;

    if (categoryTitle) categoryTitle.textContent = category.title;
    renderQuestions(category.items || []);

    state.lastNonContactView = "category";
    safeSetView("category");
  }

  function openArticle(q) {
    state.selectedQuestion = q;

    if (answerTitle) answerTitle.textContent = q.title;
    if (answerText) answerText.textContent = q.answer;

    state.lastNonContactView = "article";
    safeSetView("article");
  }

  function openContact(from = "categories") {
    // IMPORTANT: for "No" we want back to go HOME
    state.lastNonContactView = from;
    safeSetView("contact");
  }

  /* ---------------------------
     Toggle open/close
  ---------------------------- */
  function toggleWidget() {
    const wasOpen = !panel.hidden;

    if (wasOpen) {
      panel.hidden = true;
      btn.classList.remove("open");
      if (btnTextEl) btnTextEl.textContent = "Help";
    } else {
      panel.hidden = false;
      btn.classList.add("open");
      hideTip();
      openHome();
      if (search) search.focus();
      if (btnTextEl) btnTextEl.textContent = "Close";
    }
  }

  btn.onclick = toggleWidget;
  close.onclick = toggleWidget;

  /* ---------------------------
     Back buttons
  ---------------------------- */
  if (backCategories) backCategories.onclick = openHome;

  if (backCategory) {
    backCategory.onclick = () => {
      // back to category questions list
      safeSetView("category");
    };
  }

  if (backFromContact) {
    backFromContact.onclick = () => {
      // If contact was opened from "No", go straight HOME
      if (state.lastNonContactView === "categories") return openHome();
      safeSetView(state.lastNonContactView || "categories");
    };
  }

  /* ---------------------------
     Footer actions
  ---------------------------- */
  if (yesBtn) yesBtn.onclick = toggleWidget;

  if (noBtn) {
    // "No" should go to contact and BACK should go HOME (one click)
    noBtn.onclick = () => openContact("categories");
  }

  /* ---------------------------
     Search
  ---------------------------- */
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();

      // If inside category, filter only that category items
      if (state.view === "category" && state.selectedCategory) {
        const items = (state.selectedCategory.items || []).filter(it =>
          (it.title || "").toLowerCase().includes(q) ||
          (it.answer || "").toLowerCase().includes(q)
        );
        renderQuestions(q ? items : (state.selectedCategory.items || []));
        return;
      }

      // categories view filter
      if (!q) {
        renderCategories(CATEGORIES);
        safeSetView("categories");
        return;
      }

      const matchedCategoryIds = new Set(
        ALL_Q.filter(it =>
          (it.title || "").toLowerCase().includes(q) ||
          (it.answer || "").toLowerCase().includes(q) ||
          (it.categoryTitle || "").toLowerCase().includes(q)
        ).map(it => it.categoryId)
      );

      const filteredCats = (CATEGORIES || []).filter(c =>
        (c.title || "").toLowerCase().includes(q) || matchedCategoryIds.has(c.id)
      );

      renderCategories(filteredCats);
      safeSetView("categories");
    });
  }

  /* ---------------------------
     Ticket send
  ---------------------------- */
  if (ticketSend) {
    ticketSend.onclick = async () => {
      const email = (ticketEmail?.value || "").trim();
      const message = (ticketMsg?.value || "").trim();

      if (!email || !message) {
        if (ticketStatus) ticketStatus.textContent = "Email + message are required.";
        return;
      }

      if (ticketStatus) ticketStatus.textContent = "Sending...";

      try {
        const base = window.__CONFIG__?.API_BASE_URL || "";
        const res = await fetch(`${base}/api/support/ticket`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            message,
            pageUrl: location.href,
            relatedTopic: state.selectedQuestion ? state.selectedQuestion.title : null,
            relatedCategory: state.selectedCategory ? state.selectedCategory.title : null
          })
        });

        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          if (ticketStatus) ticketStatus.textContent = "Sent. We'll reply by email.";
          if (ticketMsg) ticketMsg.value = "";
        } else {
          if (ticketStatus) ticketStatus.textContent = data.error || "Error sending.";
        }
      } catch (e) {
        if (ticketStatus) ticketStatus.textContent = "Network error. Try again.";
      }
    };
  }

  // initial state
  renderCategories(CATEGORIES);
  safeSetView("categories");
});
