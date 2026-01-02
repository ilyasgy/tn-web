"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const API_BASE = useMemo(
    () => process.env.NEXT_PUBLIC_API_BASE || "",
    []
  );

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    // honeypot (must exist, stay hidden)
    company: "",
  });

  function normalizeWebsite(input: string) {
    if (!input) return "—";
    const trimmed = input.trim();
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    return `https://${trimmed}`;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    if (!API_BASE) {
      setStatus("error");
      setError("API not configured");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/support/ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          message: `Name: ${form.name}\n\n${form.message}`,
          website: normalizeWebsite(form.website),
          topic: "Contact Form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "—",
          company: form.company, // honeypot
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error || "Failed to send. Try again.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", website: "", message: "", company: "" });
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5">
      {/* Honeypot (keep hidden) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="hidden"
      />

      <input
        type="text"
        placeholder="Your name *"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/30 transition-colors"
      />

      <input
        type="email"
        placeholder="Email *"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/30 transition-colors"
      />

      <input
        type="text"
        placeholder="Website URL (optional)"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        className="w-full rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/30 transition-colors"
      />

      <textarea
        rows={5}
        placeholder="What do you want to build? *"
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-3 text-sm text-black placeholder:text-neutral-500 focus:outline-none focus:border-neutral-500 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/30 transition-colors"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-xl bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90"
      >
        {status === "loading" ? "Sending..." : "Send request"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 dark:text-white/70">
          Sent. Check your inbox.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-500 dark:text-red-300">
          {error}
        </p>
      )}
    </form>
  );
}