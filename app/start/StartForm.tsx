"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "../lib/analytics";
import { postApi } from "../lib/api";

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
  concerns: string;
  authorization: boolean;
  company: string;
};

const EMPTY_FORM: StartFormState = {
  fullName: "",
  email: "",
  website: "",
  platform: "",
  siteType: "",
  budgetRange: "",
  timeline: "Flexible",
  webSelected: false,
  securitySelected: true,
  concerns: "",
  authorization: false,
  company: "",
};

function getSelectedServices(form: Pick<StartFormState, "webSelected" | "securitySelected">) {
  return [
    form.webSelected ? "web_development" : "",
    form.securitySelected ? "application_security_audit" : "",
  ]
    .filter(Boolean)
    .join("+") || "none";
}

export default function StartForm() {
  const [form, setForm] = useState<StartFormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    trackEvent("start_form_view");
  }, []);

  function setValue<K extends keyof StartFormState>(key: K, value: StartFormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.fullName.trim()) {
      trackEvent("start_form_error", { error_type: "missing_name" });
      setStatus("error");
      setFeedback("Please add your name.");
      return;
    }

    const needsDev = false;
    const needsSecurity = true;

    if ((needsDev || needsSecurity) && !form.website.trim()) {
      trackEvent("start_form_error", {
        error_type: "missing_website",
        service_selection: getSelectedServices(form),
      });
      setStatus("error");
      setFeedback("Please add the website or target domain.");
      return;
    }

    if (needsSecurity && !form.authorization) {
      trackEvent("start_form_error", {
        error_type: "missing_authorization",
        service_selection: getSelectedServices(form),
      });
      setStatus("error");
      setFeedback("Please confirm you own the application or have permission to request testing.");
      return;
    }

    setStatus("sending");
    setFeedback("");
    trackEvent("start_form_submit", {
      service_selection: getSelectedServices(form),
      has_platform: Boolean(form.platform.trim()),
      has_notes: Boolean(form.concerns.trim()),
    });

    try {
      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        website: form.website.trim(),
        platform: form.platform.trim(),
        siteType: "",
        budgetRange: "",
        timeline: "",
        needsDev,
        needsSecurity,
        webSelected: needsDev,
        securitySelected: needsSecurity,
        githubAccess: "",
        concerns: form.concerns.trim(),
        authorization: needsSecurity ? form.authorization : false,
        company: form.company,
        pageUrl: typeof window !== "undefined" ? window.location.href : "/start",
      };

      await postApi("/api/start/request", payload);

      trackEvent("start_form_success", {
        service_selection: getSelectedServices(form),
      });
      setStatus("done");
      setFeedback("We got it. We'll review the scope and reply shortly.");
      setForm(EMPTY_FORM);
    } catch (error) {
      trackEvent("start_form_error", {
        error_type: "request_failed",
        service_selection: getSelectedServices(form),
      });
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to send the request.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="tn-form">
      <div className="tn-form-section">
        <p className="tn-label">Audit request</p>
        <p className="tn-body tn-body-strong pt-4">
          Application Penetration Test & Remediation Blueprint
        </p>
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
              maxLength={120}
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
              maxLength={200}
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
              maxLength={500}
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
              maxLength={120}
            />
          </div>
        </div>
      </div>

      <div className="tn-form-section">
        <div className="tn-field">
          <label className="tn-label">Priority areas or notes</label>
          <p className="tn-help">
            Do not include patient information, medical records, passwords, API keys, private
            keys, access tokens, production credentials, confidential source code, or vulnerability
            evidence belonging to another organization.
          </p>
          <textarea
            value={form.concerns}
            onChange={(event) => setValue("concerns", event.target.value)}
            className="tn-textarea"
            placeholder="Patient forms, login, portal paths, tracking scripts, uploads, or anything you want checked first."
            maxLength={2000}
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
            I am acting for a business or organization and confirm it owns the target or has
            authority to request an assessment. I understand this form does not authorize testing.
          </label>
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
          {status === "sending" ? "Sending..." : "Request audit"}
        </button>

        {feedback ? (
          <p className={`mt-4 ${status === "done" ? "tn-status-success" : "tn-status-error"}`}>
            {feedback}
          </p>
        ) : null}

        <p className="tn-help mt-5">
          By submitting, you acknowledge the <Link href="/terms" className="tn-inline-link">Terms</Link>{" "}
          and understand that information is handled under the{" "}
          <Link href="/privacy" className="tn-inline-link">Privacy Notice</Link>. Sensitive
          engagement material must use the approved secure exchange process described in the{" "}
          <Link href="/data-handling" className="tn-inline-link">Data Handling Policy</Link>.
        </p>
      </div>
    </form>
  );
}
