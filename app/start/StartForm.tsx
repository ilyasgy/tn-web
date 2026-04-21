"use client";

import { FormEvent, useState } from "react";

type StartFormState = {
  fullName: string;
  email: string;
  website: string;
  platform: string;
  siteType: string;
  budgetRange: string;
  timeline: string;
  webSelected: boolean;
  securitySelected: boolean;
  githubAccess: string;
  concerns: string;
  authorization: boolean;
  company: string;
};

const SITE_TYPES = ["Business site", "Ecommerce", "Portal or dashboard", "Not sure yet"] as const;
const BUDGET_RANGES = [
  "Not sure",
  "Starter ($1,000 - $3,000)",
  "Growth ($3,000 - $10,000)",
  "$10,000+",
] as const;
const TIMELINES = ["ASAP", "1-2 weeks", "This month", "Flexible"] as const;

const EMPTY_FORM: StartFormState = {
  fullName: "",
  email: "",
  website: "",
  platform: "",
  siteType: "Business site",
  budgetRange: "Not sure",
  timeline: "Flexible",
  webSelected: false,
  securitySelected: false,
  githubAccess: "",
  concerns: "",
  authorization: false,
  company: "",
};

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/$/, "");

function ChoicePill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`tn-choice-pill ${active ? "tn-choice-pill-active" : ""}`}
    >
      <span className="tn-choice-title">{label}</span>
    </button>
  );
}

export default function StartForm() {
  const [form, setForm] = useState<StartFormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function setValue<K extends keyof StartFormState>(key: K, value: StartFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.fullName.trim()) {
      setStatus("error");
      setFeedback("Please add your name.");
      return;
    }

    if (!form.webSelected && !form.securitySelected) {
      setStatus("error");
      setFeedback("Please choose at least one: Web Development or Security Review.");
      return;
    }

    const needsDev = form.webSelected;
    const needsSecurity = form.securitySelected;

    if ((needsDev || needsSecurity) && !form.website.trim()) {
      setStatus("error");
      setFeedback("Please add the website or target domain.");
      return;
    }

    if (needsSecurity && !form.authorization) {
      setStatus("error");
      setFeedback("Please confirm you own the site or have permission to request the security review.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        website: form.website.trim(),
        platform: form.platform.trim(),
        siteType: needsDev ? form.siteType : "",
        budgetRange: needsDev ? form.budgetRange : "",
        timeline: needsDev ? form.timeline : "",
        needsDev,
        needsSecurity,
        webSelected: needsDev,
        securitySelected: needsSecurity,
        githubAccess: needsSecurity ? form.githubAccess.trim() : "",
        concerns: form.concerns.trim(),
        authorization: needsSecurity ? form.authorization : false,
        company: form.company,
        pageUrl: typeof window !== "undefined" ? window.location.href : "/start",
      };

      const response = await fetch(
        API_BASE ? `${API_BASE}/api/start/request` : "/api/start/request",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send the request.");
      }

      setStatus("done");
      setFeedback("We got it. We'll review it and reply shortly.");
      setForm(EMPTY_FORM);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to send the request.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="tn-form">
      <div className="tn-form-section">
        <p className="tn-label">What do you need?</p>
        <div className="tn-choice-group pt-4">
          <ChoicePill
            active={form.webSelected}
            label="Web Development"
            onClick={() => setValue("webSelected", !form.webSelected)}
          />
          <ChoicePill
            active={form.securitySelected}
            label="Security Review"
            onClick={() => setValue("securitySelected", !form.securitySelected)}
          />
        </div>
      </div>

      <div className="tn-form-section">
        <div className="tn-field-grid">
          <div className="tn-field">
            <label className="tn-label">Your name</label>
            <input
              type="text"
              value={form.fullName}
              onChange={(event) => setValue("fullName", event.target.value)}
              className="tn-input"
              placeholder="Name"
              autoComplete="name"
              required
            />
          </div>

          <div className="tn-field">
            <label className="tn-label">Work email</label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setValue("email", event.target.value)}
              className="tn-input"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </div>
        </div>
      </div>

      <div className="tn-form-section">
        <div className="tn-field-grid">
          <div className="tn-field">
            <label className="tn-label">Website or target domain</label>
            <input
              type="url"
              value={form.website}
              onChange={(event) => setValue("website", event.target.value)}
              className="tn-input"
              placeholder="https://yourdomain.com"
              autoComplete="url"
              required
            />
          </div>

          <div className="tn-field">
            <label className="tn-label">Platform or stack</label>
            <input
              type="text"
              value={form.platform}
              onChange={(event) => setValue("platform", event.target.value)}
              className="tn-input"
              placeholder="Next.js, Shopify, WordPress, or unknown"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      {form.webSelected ? (
        <div className="tn-form-section">
          <p className="tn-label">Type of site</p>
          <div className="tn-choice-group pt-4">
            {SITE_TYPES.map((option) => (
              <ChoicePill
                key={option}
                active={form.siteType === option}
                label={option}
                onClick={() => setValue("siteType", option)}
              />
            ))}
          </div>

          <div className="tn-field-grid pt-6">
            <div>
              <p className="tn-label">Budget range</p>
              <div className="tn-choice-group pt-4">
                {BUDGET_RANGES.map((option) => (
                  <ChoicePill
                    key={option}
                    active={form.budgetRange === option}
                    label={option}
                    onClick={() => setValue("budgetRange", option)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="tn-label">Timeline</p>
              <div className="tn-choice-group pt-4">
                {TIMELINES.map((option) => (
                  <ChoicePill
                    key={option}
                    active={form.timeline === option}
                    label={option}
                    onClick={() => setValue("timeline", option)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {form.securitySelected ? (
        <div className="tn-form-section">
          <div className="tn-field-grid">
            <div className="tn-field">
              <label className="tn-label">Target stack</label>
              <input
                type="text"
                value={form.platform}
                onChange={(event) => setValue("platform", event.target.value)}
                className="tn-input"
                placeholder="e.g. Node.js, Next.js, PHP"
              />
            </div>

            <div className="tn-field">
              <div className="tn-field-label-row">
                <label className="tn-label">GitHub / repo access</label>
                <span className="tn-help tn-help-inline">Optional.</span>
              </div>
              <input
                type="text"
                value={form.githubAccess}
                onChange={(event) => setValue("githubAccess", event.target.value)}
                className="tn-input tn-input-wide-right"
                placeholder="github.com/yourname or repo"
              />
            </div>
          </div>

          <div className="tn-field pt-4">
            <label className="tn-label">Priority areas or notes</label>
            <p className="tn-help">Tell us what matters most.</p>
            <textarea
              value={form.concerns}
              onChange={(event) => setValue("concerns", event.target.value)}
              className="tn-textarea"
              placeholder="Login, admin paths, uploads, checkout, or anything you want checked first."
            />
          </div>

          <div className="tn-field pt-4">
            <label className="tn-label">
              <input
                type="checkbox"
                checked={form.authorization}
                onChange={(event) => setValue("authorization", event.target.checked)}
                className="mr-2 align-middle"
              />
              I own this site or have permission to test it
            </label>
          </div>
        </div>
      ) : (
        <div className="tn-form-section">
          <div className="tn-field">
            <label className="tn-label">What should we look at?</label>
            <p className="tn-help">Tell us what matters most.</p>
            <textarea
              value={form.concerns}
              onChange={(event) => setValue("concerns", event.target.value)}
              className="tn-textarea"
              placeholder="Goals, features, or anything else you want addressed."
            />
          </div>
        </div>
      )}

      <input
        value={form.company}
        onChange={(event) => setValue("company", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="tn-form-section">
        <button
          type="submit"
          disabled={status === "sending"}
          className="tn-button-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send request"}
        </button>

        {feedback ? (
          <p className={`mt-4 ${status === "done" ? "tn-status-success" : "tn-status-error"}`}>
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
