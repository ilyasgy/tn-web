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
