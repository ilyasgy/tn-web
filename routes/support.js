import express from "express";
import { SUPPORT_OPTIONS } from "../data/supportOptions.js";

const router = express.Router();

function score(query, option) {
  const q = query.toLowerCase();
  const text = (
    option.title +
    " " +
    option.keywords.join(" ") +
    " " +
    option.answer
  ).toLowerCase();

  let s = 0;
  q.split(/\s+/).forEach(w => {
    if (text.includes(w)) s++;
  });
  return s;
}

router.post("/support/search", (req, res) => {
  const { query } = req.body || {};
  if (!query) {
    return res.json({ found: false });
  }

  const ranked = SUPPORT_OPTIONS
    .map(o => ({ o, s: score(query, o) }))
    .sort((a, b) => b.s - a.s);

  if (!ranked[0] || ranked[0].s === 0) {
    return res.json({
      found: false,
      suggestions: SUPPORT_OPTIONS.slice(0, 3)
    });
  }

  res.json({
    found: true,
    result: ranked[0].o,
    suggestions: ranked.slice(1, 4).map(x => x.o)
  });
});

router.post("/support/ticket", (req, res) => {
  const { email, message, page } = req.body || {};
  if (!email || !message) {
    return res.status(400).json({ ok: false });
  }

  // For now: just log it (you can wire email / DB later)
  console.log("NEW SUPPORT TICKET", { email, message, page });

  res.json({ ok: true });
});

export default router;

