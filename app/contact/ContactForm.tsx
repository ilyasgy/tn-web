"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { trackEvent } from "../lib/analytics";
import { postApi } from "../lib/api";

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

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requestedSubject = searchParams.get("subject");
  const requestedSubjectValue =
    SUBJECT_OPTIONS.find((option) => option.value === requestedSubject)?.value || "";
  const [form, setForm] = useState<ContactFormState>(() => ({
    ...EMPTY_FORM,
    subject: requestedSubjectValue || EMPTY_FORM.subject,
  }));
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [subjectMenuOpen, setSubjectMenuOpen] = useState(false);
  const subjectMenuRef = useRef<HTMLDivElement | null>(null);
  const hasTrackedView = useRef(false);
  const selectedSubject =
    SUBJECT_OPTIONS.find((option) => option.value === form.subject) ?? SUBJECT_OPTIONS[0];

  useEffect(() => {
    if (hasTrackedView.current) {
      return;
    }

    hasTrackedView.current = true;
    trackEvent("contact_form_view", {
      subject: requestedSubjectValue || form.subject,
      prefilled_subject: Boolean(requestedSubjectValue),
    });
  }, [form.subject, requestedSubjectValue]);

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
      trackEvent("contact_form_error", {
        error_type: "missing_name",
        subject: form.subject,
      });
      setStatus("error");
      setFeedback("Please add your name.");
      return;
    }

    if (!form.message.trim()) {
      trackEvent("contact_form_error", {
        error_type: "missing_message",
        subject: form.subject,
      });
      setStatus("error");
      setFeedback("Please add a short message.");
      return;
    }

    setStatus("sending");
    setFeedback("");
    trackEvent("contact_form_submit", {
      subject: form.subject,
      has_email: Boolean(form.email.trim()),
    });

    try {
      await postApi("/api/support/ticket", {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company,
        pageUrl: window.location.href,
        topic: `Contact: ${selectedSubject.label}`,
        category: selectedSubject.label,
        message: form.message.trim(),
      });

      trackEvent("contact_form_success", {
        subject: form.subject,
        has_email: Boolean(form.email.trim()),
      });
      setStatus("done");
      setFeedback("Thanks. We usually reply within 1 business day.");
      setForm(EMPTY_FORM);
    } catch (error) {
      trackEvent("contact_form_error", {
        error_type: "request_failed",
        subject: form.subject,
      });
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
              maxLength={120}
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
              maxLength={200}
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
                        trackEvent("contact_subject_select", { subject: option.value });
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
          <p className="tn-help">
            Do not include patient information, medical records, passwords, API keys, private keys,
            access tokens, production credentials, confidential source code, or vulnerability
            evidence belonging to another organization.
          </p>
          <textarea
            value={form.message}
            onChange={(event) => setValue("message", event.target.value)}
            className="tn-textarea"
            placeholder="Write your message here"
            maxLength={2000}
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
          <a href="mailto:threatnest@threatnest.com" className="tn-inline-link">
            threatnest@threatnest.com
          </a>
          <div className="pt-2">We usually reply within 1 business day.</div>
        </div>

        <p className="tn-help mt-5">
          Submitting this form does not authorize testing. See the{" "}
          <Link href="/privacy" className="tn-inline-link">Privacy Notice</Link> and{" "}
          <Link href="/authorized-testing" className="tn-inline-link">Authorized Testing Policy</Link>.
        </p>
      </div>
    </form>
  );
}
