"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const SHOW_TEST_ACCOUNT_FIELDS = false;

export default function StartForm() {
  const API_BASE = useMemo(() => process.env.NEXT_PUBLIC_API_BASE || "", []);

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    website: "",
    platform: "",
    concerns: "",
    authorization: false,
    company: "",

    // hidden for now
    testEmail: "",
    testPassword: "",
    limitedAccess: false,
  });

  const inputClasses =
    "w-full rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-4 text-sm text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#2cff68]/50 focus:border-[#2cff68] dark:bg-[#0A0A0A] dark:border-white/10 dark:text-white dark:placeholder:text-white/30 transition-all";
  const labelClasses =
    "block text-[10px] font-bold mb-2 opacity-40 ml-1 uppercase tracking-[0.2em]";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.authorization) {
      setStatus("error");
      setError("Authorization is required before submitting.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/start/request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          website: form.website,
          platform: form.platform,
          concerns: form.concerns,
          authorization: form.authorization,
          company: form.company,

          testEmail: form.testEmail,
          testPassword: form.testPassword,
          limitedAccess: form.limitedAccess,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send request.");
      }

      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        website: "",
        platform: "",
        concerns: "",
        authorization: false,
        company: "",
        testEmail: "",
        testPassword: "",
        limitedAccess: false,
      });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>Email Address</label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Website Link</label>
          <input
            type="url"
            required
            placeholder="https://yoursite.com"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses}>Platform (optional)</label>
          <input
            type="text"
            placeholder="Shopify, WordPress, Next.js, etc."
            value={form.platform}
            onChange={(e) => setForm({ ...form, platform: e.target.value })}
            className={inputClasses}
          />
        </div>
      </div>

      {SHOW_TEST_ACCOUNT_FIELDS && (
        <div className="rounded-2xl border border-neutral-200 dark:border-white/10 p-5 bg-neutral-50/70 dark:bg-white/[0.02]">
          <p className="text-sm font-semibold text-black dark:text-white">
            Optional test account
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div>
              <label className={labelClasses}>Test Email / Username</label>
              <input
                type="text"
                placeholder="test@company.com"
                value={form.testEmail}
                onChange={(e) => setForm({ ...form, testEmail: e.target.value })}
                className={inputClasses}
              />
            </div>

            <div>
              <label className={labelClasses}>Test Password</label>
              <input
                type="text"
                placeholder="Temporary password"
                value={form.testPassword}
                onChange={(e) => setForm({ ...form, testPassword: e.target.value })}
                className={inputClasses}
              />
            </div>
          </div>

          <label className="mt-4 flex items-start gap-3 text-sm text-neutral-600 dark:text-white/65">
            <input
              type="checkbox"
              checked={form.limitedAccess}
              onChange={(e) => setForm({ ...form, limitedAccess: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-neutral-300"
            />
            <span>This account has limited access and can be removed after the assessment.</span>
          </label>
        </div>
      )}

      <div>
        <label className={labelClasses}>Specific Concerns (optional)</label>
        <textarea
          rows={5}
          placeholder="Login, admin panel, headers, file upload, checkout, or anything you want checked first."
          value={form.concerns}
          onChange={(e) => setForm({ ...form, concerns: e.target.value })}
          className={inputClasses}
        />
      </div>

      <div className="rounded-2xl border border-[#2cff68]/25 bg-[#2cff68]/[0.05] px-5 py-4">
        <p className="text-sm font-semibold text-black dark:text-white">Authorization</p>
        <label className="mt-3 flex items-start gap-3 text-sm text-neutral-700 dark:text-white/75">
          <input
            type="checkbox"
            checked={form.authorization}
            onChange={(e) => setForm({ ...form, authorization: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-neutral-300"
            required
          />
          <span>
            I confirm that I am the owner or authorized operator of this website and I authorize
            ThreatNest to perform a safe, non-destructive security assessment.
          </span>
        </label>
      </div>

      <input
        type="text"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl shadow-green-500/5"
        >
          {status === "loading" ? "Submitting..." : "Start Review →"}
        </button>

        <p className="text-[10px] text-neutral-400 dark:text-white/30 uppercase tracking-widest text-center sm:text-left">
          We review submissions
          <br />
          before any work begins.
        </p>
      </div>

      {status === "success" && (
        <p className="text-sm font-medium text-[#2cff68]">
          Request sent. We’ll review it and reply with next steps.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm font-medium text-red-500">{error}</p>
      )}
    </form>
  );
}
