"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type Status = "idle" | "loading" | "success" | "error";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const API_BASE = useMemo(() => process.env.NEXT_PUBLIC_API_BASE || "", []);

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    github: "",
    service: "web-dev", // Default: Website Development
    bundle: "",
    budget: "",
    message: "",
    company: "",
  });

  // Auto-fill form based on URL parameters (e.g., ?service=web-dev&bundle=small-frontend)
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const bundleParam = searchParams.get("bundle");
    
    if (serviceParam) {
      setForm(prev => ({ 
        ...prev, 
        service: serviceParam,
        bundle: bundleParam || "" 
      }));
    }
  }, [searchParams]);

  const inputClasses = "w-full rounded-xl bg-neutral-100 border border-neutral-300 px-4 py-4 text-sm text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#2cff68]/50 focus:border-[#2cff68] dark:bg-[#0A0A0A] dark:border-white/10 dark:text-white dark:placeholder:text-white/30 transition-all appearance-none cursor-pointer";
  const labelClasses = "block text-[10px] font-bold mb-2 opacity-40 ml-1 uppercase tracking-[0.2em]";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/support/ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          message: `Service: ${form.service}\nPlan: ${form.bundle || "N/A"}\nBudget: ${form.budget || "N/A"}\nGitHub: ${form.github || "Not provided"}\nName: ${form.name}\n\n${form.message}`,
          website: form.website || "—",
          topic: `Inquiry: ${form.service}`,
          company: form.company, // honeypot
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", website: "", github: "", service: "web-dev", bundle: "", budget: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Full Name</label>
          <input type="text" placeholder="John Doe" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Email Address</label>
          <input type="email" placeholder="john@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClasses}>Website (optional)</label>
          <input type="text" placeholder="https://yoursite.com" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>GitHub Username (optional)</label>
          <input type="text" placeholder="@username" value={form.github} onChange={(e) => setForm({ ...form, github: e.target.value })} className={inputClasses} />
        </div>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <label className={labelClasses}>1. Select Service</label>
          <select 
            value={form.service} 
            onChange={(e) => setForm({ ...form, service: e.target.value, bundle: "", budget: "" })} 
            className={inputClasses}
          >
            <option value="web-dev" className="dark:bg-[#0A0A0A]">Website Development</option>
            <option value="security" className="dark:bg-[#0A0A0A]">Website Security Audit</option>
            <option disabled className="text-[10px] opacity-30">———— Ongoing & Fixes ————</option>
            <option value="emergency" className="dark:bg-[#0A0A0A]">Emergency Fix — $150</option>
            <option value="site-care" className="dark:bg-[#0A0A0A]">Site Care & Support — $299/mo</option>
            <option value="pro-plan" className="dark:bg-[#0A0A0A]">Design & Maintenance Pro — $599/mo</option>
            <option value="other" className="dark:bg-[#0A0A0A]">General Inquiry / Something Else</option>
          </select>
          <div className="absolute right-5 bottom-[18px] pointer-events-none opacity-40">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {form.service === "web-dev" && (
          <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
            <label className={labelClasses}>2. Choose Plan</label>
            <select value={form.bundle} required onChange={(e) => setForm({ ...form, bundle: e.target.value, budget: "" })} className={inputClasses}>
              <option value="" disabled>Select a plan...</option>
              <option value="small-frontend" className="dark:bg-[#0A0A0A]">Small Frontend ($700)</option>
              <option value="full-stack" className="dark:bg-[#0A0A0A]">Full Stack Small ($1,400)</option>
              <option value="custom" className="dark:bg-[#0A0A0A]">Custom Build (Request Quote)</option>
            </select>
          </div>
        )}

        {form.bundle === "custom" && (
          <div className="relative animate-in fade-in slide-in-from-top-2 duration-300">
            <label className={labelClasses}>3. Estimated Budget</label>
            <select value={form.budget} required onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClasses}>
              <option value="" disabled>Select range...</option>
              <option value="1k-2k" className="dark:bg-[#0A0A0A]">$1,000 — $2,000</option>
              <option value="2k-5k" className="dark:bg-[#0A0A0A]">$2,000 — $5,000</option>
              <option value="5k+" className="dark:bg-[#0A0A0A]">$5,000+</option>
            </select>
          </div>
        )}
      </div>

      <div>
        <label className={labelClasses}>Message</label>
        <textarea rows={4} placeholder="How can we help?" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClasses} />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
        <button type="submit" disabled={status === "loading"} className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl shadow-green-500/5">
          {status === "loading" ? "Processing..." : "Send Request →"}
        </button>
        <p className="text-[10px] text-neutral-400 dark:text-white/30 uppercase tracking-widest text-center sm:text-left">
          Payment link sent <br /> after scope confirmation.
        </p>
      </div>

      {status === "success" && <p className="text-sm font-medium text-[#2cff68]">Request sent. We'll reply within 24 hours.</p>}
      {status === "error" && <p className="text-sm font-medium text-red-500">{error}</p>}
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96 w-full bg-neutral-100 dark:bg-white/5 animate-pulse rounded-2xl" />}>
      <ContactFormInner />
    </Suspense>
  );
}