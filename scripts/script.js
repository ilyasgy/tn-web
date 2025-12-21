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
