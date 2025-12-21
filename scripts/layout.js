async function loadPartial(targetId, file) {
  const res = await fetch(file);
  if (!res.ok) return;
  const html = await res.text();
  document.getElementById(targetId).innerHTML = html;
}

loadPartial("header", "/partials/header.html");
loadPartial("footer", "/partials/footer.html");
loadPartial("help-widget", "/partials/help-widget.html");

const current = location.pathname;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

function waitForConfig() {
  return new Promise((resolve) => {
    const start = Date.now();

    const timer = setInterval(() => {
      if (window.__CONFIG__ && window.__CONFIG__.API_BASE_URL) {
        clearInterval(timer);
        resolve(window.__CONFIG__);
      }

      // stop waiting after 3 seconds
      if (Date.now() - start > 3000) {
        clearInterval(timer);
        resolve(null);
      }
    }, 50);
  });
}

async function loadSupportOptions() {
  try {
    const cfg = await waitForConfig();
    if (!cfg) throw new Error("Config not loaded before layout.js");

    const res = await fetch(`${cfg.API_BASE_URL}/api/support/options`);
    if (!res.ok) throw new Error("Failed to load support options");

    const data = await res.json();
    window.SUPPORT_OPTIONS = data.ok ? (data.options || []) : [];
  } catch (err) {
    console.error("Support options load failed:", err);
    window.SUPPORT_OPTIONS = [];
  }
}

loadSupportOptions();
