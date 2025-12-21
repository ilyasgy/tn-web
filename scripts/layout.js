async function loadPartial(targetId, file) {
  const res = await fetch(file);
  if (!res.ok) return;
  const html = await res.text();
  document.getElementById(targetId).innerHTML = html;
}

loadPartial("header", "/partials/header.html");
loadPartial("footer", "/partials/footer.html");
