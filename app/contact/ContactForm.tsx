"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const SUBJECT_OPTIONS = [
  { value: "question", label: "Question" },
  { value: "press", label: "Press / Media" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
] as const;

const EMPTY_FORM: ContactFormState = {
  name: "",
  email: "",
  subject: "question",
  message: "",
  company: "",
};

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/$/, "");

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [subjectMenuOpen, setSubjectMenuOpen] = useState(false);
  const subjectMenuRef = useRef<HTMLDivElement | null>(null);

  const requestedSubject = searchParams.get("subject");
  const selectedSubject =
    SUBJECT_OPTIONS.find((option) => option.value === form.subject) ?? SUBJECT_OPTIONS[0];

  useEffect(() => {
    if (requestedSubject) {
      setForm((current) => ({ ...current, subject: requestedSubject }));
    }
  }, [requestedSubject]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!subjectMenuRef.current?.contains(event.target as Node)) {
        setSubjectMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function setValue<K extends keyof ContactFormState>(key: K, value: ContactFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      setStatus("error");
      setFeedback("Please add your name.");
      return;
    }

    if (!form.message.trim()) {
      setStatus("error");
      setFeedback("Please add a short message.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(
        API_BASE ? `${API_BASE}/api/support/ticket` : "/api/support/ticket",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company,
            pageUrl: typeof window !== "undefined" ? window.location.href : "/contact",
            topic: `Contact: ${selectedSubject.label}`,
            category: selectedSubject.label,
            message: form.message.trim(),
          }),
        }
      );

      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send your message.");
      }

      setStatus("done");
      setFeedback("Thanks. We usually reply within 1 business day.");
      setForm(EMPTY_FORM);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to send your message.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="tn-form">
      <div className="tn-form-section">
        <div className="tn-field-grid">
          <div className="tn-field">
            <label className="tn-label">Your name</label>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setValue("name", event.target.value)}
              className="tn-input"
              placeholder="Name"
              autoComplete="name"
              required
            />
          </div>

          <div className="tn-field">
            <label className="tn-label">
              Email <span className="tn-help tn-help-inline">Optional.</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setValue("email", event.target.value)}
              className="tn-input"
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>
        </div>
      </div>

      <div className="tn-form-section">
        <div className="tn-field">
          <label className="tn-label">Subject</label>
          <div className="tn-select-shell" ref={subjectMenuRef}>
            <button
              type="button"
              className="tn-select-trigger"
              aria-haspopup="listbox"
              aria-expanded={subjectMenuOpen}
              onClick={() => setSubjectMenuOpen((current) => !current)}
            >
              <span>{selectedSubject.label}</span>
              <span className={`tn-select-caret ${subjectMenuOpen ? "tn-select-caret-open" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <div className={`tn-select-panel ${subjectMenuOpen ? "tn-select-panel-open" : ""}`}>
              <div className="tn-select-menu" role="listbox">
                {SUBJECT_OPTIONS.map((option) => {
                  const isActive = form.subject === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      className={`tn-select-option ${isActive ? "tn-select-option-active" : ""}`}
                      onClick={() => {
                        setValue("subject", option.value);
                        setSubjectMenuOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tn-form-section">
        <div className="tn-field">
          <label className="tn-label">Message</label>
          <textarea
            value={form.message}
            onChange={(event) => setValue("message", event.target.value)}
            className="tn-textarea"
            placeholder="Write your message here"
            required
          />
        </div>
      </div>

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
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {feedback ? (
          <p className={`mt-4 ${status === "done" ? "tn-status-success" : "tn-status-error"}`}>
            {feedback}
          </p>
        ) : null}

        <div className="mt-6 text-sm" style={{ color: "var(--text-secondary)" }}>
          Or email us at{" "}
          <a href="mailto:hello@threatnest.com" className="tn-inline-link">
            hello@threatnest.com
          </a>
          <div className="pt-2">We usually reply within 1 business day.</div>
        </div>
      </div>
    </form>
  );
}
