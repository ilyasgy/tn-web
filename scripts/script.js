// Example: smooth scroll if you later link to in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', e => {
const id = a.getAttribute('href').slice(1);
const el = document.getElementById(id);
if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
});

});

console.log("Config loaded:", window.__CONFIG__);

const API = window.__CONFIG__.API_BASE_URL;

fetch(`${API}/health`)
  .then(res => res.json())
  .then(data => {
    console.log("Backend response:", data);
  })
  .catch(err => {
    console.error("Backend error:", err);
  });
