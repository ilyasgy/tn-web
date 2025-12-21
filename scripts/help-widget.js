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

  if (!btn || !panel || !close) return;

  // Flatten for search
  const ALL_Q = CATEGORIES.flatMap(c =>
    (c.items || []).map(q => ({ ...q, categoryId: c.id, categoryTitle: c.title }))
  );

  const state = {
    view: "categories",            // categories | category | article | contact
    selectedCategory: null,        // category object
    selectedQuestion: null,        // question object
    lastNonContactView: "categories" // for back button logic
  };

  function setView(v) {
    state.view = v;

    viewCategories.hidden = v !== "categories";
    viewCategory.hidden = v !== "category";
    viewArticle.hidden = v !== "article";
    viewContact.hidden = v !== "contact";

    // Search only on categories + category
    search.hidden = !(v === "categories" || v === "category");

    // Footer only on article
    footer.hidden = v !== "article";

    // Header title
    headerTitle.textContent =
      v === "categories" ? "Support" :
      v === "category" ? (state.selectedCategory?.title || "Support") :
      v === "article" ? "Support" :
      "Contact";

    // reset scroll
    const body = panel.querySelector(".help-body");
    if (body) body.scrollTop = 0;
  }

  function openWidget() {
    panel.hidden = false;
    search.value = "";
    renderCategories();
    setView("categories");
    search.focus();
  }

  function closeWidget() {
    panel.hidden = true;
  }

function toggleWidget(){
  const isOpen = !panel.hidden;
  
  if (isOpen) {
    panel.hidden = true;
    btn.classList.remove("open");
  } else {
    panel.hidden = false;
    btn.classList.add("open");
    setView("categories");
    search.value = "";
    search.focus();
  }
  btn.querySelector(".help-btn-text").textContent = isOpen ? "Help" : "Close";
}

btn.onclick = toggleWidget;
close.onclick = toggleWidget;

  const tip = document.getElementById("help-tip");

function showTipOnce(){
  if (!tip) return;
  if (localStorage.getItem("help_tip_seen") === "1") return;
  if (!panel.hidden) return;

  tip.hidden = false;

  // auto hide after 4s
  setTimeout(() => {
    tip.hidden = true;
    localStorage.setItem("help_tip_seen", "1");
  }, 4000);
}

// show after 2 seconds (only once)
setTimeout(showTipOnce, 2000);

function hideTip(){
  if (!tip) return;
  tip.hidden = true;
  localStorage.setItem("help_tip_seen", "1");
}



  function renderCategories(list = CATEGORIES) {
    categoryList.innerHTML = "";
    list.forEach(c => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = c.title;
      b.onclick = () => openCategory(c);
      categoryList.appendChild(b);
    });

    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "help-subtitle";
      empty.textContent = "No results.";
      categoryList.appendChild(empty);
    }
  }

  function openCategory(category) {
    state.selectedCategory = category;
    state.selectedQuestion = null;

    categoryTitle.textContent = category.title;

    renderQuestions(category.items || []);
    state.lastNonContactView = "category";
    setView("category");
  }

  function renderQuestions(items) {
    questionList.innerHTML = "";
    items.forEach(q => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = q.title;
      b.onclick = () => openArticle(q);
      questionList.appendChild(b);
    });

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "help-subtitle";
      empty.textContent = "No results in this category.";
      questionList.appendChild(empty);
    }
  }

  function openArticle(q) {
    state.selectedQuestion = q;

    answerTitle.textContent = q.title;
    answerText.textContent = q.answer;

    state.lastNonContactView = "article";
    setView("article");
  }

  function openContact(from = "categories") {
    // remember where we came from for the back button
    state.lastNonContactView = from;
    setView("contact");
  }

  // Back buttons
  backCategories.onclick = () => {
    search.value = "";
    renderCategories();
    setView("categories");
  };

  backCategory.onclick = () => {
    // back to questions list
    setView("category");
  };

  backFromContact.onclick = () => {
    // go back to where you were (article or categories/category)
    setView(state.lastNonContactView || "categories");
  };

  // Footer actions
  yesBtn.onclick = closeWidget;
  noBtn.onclick = () => openContact("article");

  // Search behavior:
  // - if on categories: search matches categories + questions, shows matching categories
  // - if on category: search filters only questions inside that category
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();

    if (state.view === "category" && state.selectedCategory) {
      const items = (state.selectedCategory.items || []).filter(it =>
        (it.title || "").toLowerCase().includes(q) ||
        (it.answer || "").toLowerCase().includes(q)
      );
      renderQuestions(q ? items : (state.selectedCategory.items || []));
      return;
    }

    // categories view: match categories by title OR by having matching questions
    if (!q) {
      renderCategories(CATEGORIES);
      setView("categories");
      return;
    }

    const matchedCategoryIds = new Set(
      ALL_Q.filter(it =>
        (it.title || "").toLowerCase().includes(q) ||
        (it.answer || "").toLowerCase().includes(q) ||
        (it.categoryTitle || "").toLowerCase().includes(q)
      ).map(it => it.categoryId)
    );

    const filteredCats = CATEGORIES.filter(c =>
      (c.title || "").toLowerCase().includes(q) || matchedCategoryIds.has(c.id)
    );

    renderCategories(filteredCats);
    setView("categories");
  });

  // Ticket send
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
          relatedTopic: state.selectedQuestion ? state.selectedQuestion.title : null,
          relatedCategory: state.selectedCategory ? state.selectedCategory.title : null
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

  // initial render (in case)
  renderCategories();
});
