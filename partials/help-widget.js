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

btn.onclick = () => panel.hidden = false;
close.onclick = () => panel.hidden = true;

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
}

yesBtn.onclick = () => panel.hidden = true;

noBtn.onclick = () => {
  talkHuman.hidden = false;
};

talkHuman.onclick = () => {
  ticketBox.hidden = false;
};

document.getElementById("ticket-send").onclick = async () => {
  const email = document.getElementById("ticket-email").value;
  const message = document.getElementById("ticket-msg").value;

  const res = await fetch("/api/support/ticket", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, message, page: location.href })
  });

  document.getElementById("ticket-status").textContent =
    res.ok ? "Sent. We'll reply by email." : "Error.";
};
