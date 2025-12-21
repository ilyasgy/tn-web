async function loadPartial(targetId, file) {
  const res = await fetch(file);
  if (!res.ok) return;
  const html = await res.text();
  document.getElementById(targetId).innerHTML = html;
}

loadPartial("header", "/partials/header.html");
loadPartial("footer", "/partials/footer.html");

const current = location.pathname;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

async function loadSupportOptions() {
  try {
    const res = await fetch(
      `${window.__CONFIG.API_BASE_URL}/api/support/options`
    );
    if (!res.ok) throw new Error("Failed to load support options");
    const data = await res.json();
    if (data.ok) {
      window.SUPPORT_OPTIONS = data.options;
    } else {
      window.SUPPORT_OPTIONS = [];
    }
  } catch (err) {
    console.error("Support options load failed:", err);
    window.SUPPORT_OPTIONS = [];
  }
}

loadSupportOptions();
