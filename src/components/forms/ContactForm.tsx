"use client";

import { useEffect, useState } from "react";
import { budgets, interests, isPlanId, timelines, type PlanId } from "@/lib/content";
import { reportAdsConversion } from "@/lib/ads";
import { track } from "@/lib/track";
import { enquirySchema, fieldErrors } from "@/lib/validation";

const fieldClass =
  "w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink outline-none focus:border-plum";

type FormState = {
  name: string;
  email: string;
  organisation: string;
  website: string;
  interest: string;
  plan: "" | PlanId;
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
  companyWebsiteConfirm: string;
};

const empty: FormState = {
  name: "",
  email: "",
  organisation: "",
  website: "",
  interest: "",
  plan: "",
  budget: "",
  timeline: "",
  message: "",
  consent: false,
  companyWebsiteConfirm: "",
};

export function ContactForm({ initialPlan }: { initialPlan?: string }) {
  const [form, setForm] = useState<FormState>(() => ({
    ...empty,
    plan: isPlanId(initialPlan) ? initialPlan : "",
    interest: isPlanId(initialPlan) ? "managed-website" : "",
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "logged" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [started, setStarted] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [siteKey]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!started) {
      setStarted(true);
      track("contact_form_start", { plan: form.plan || undefined });
    }
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const tokenField = event.currentTarget.querySelector<HTMLTextAreaElement | HTMLInputElement>(
      "[name='cf-turnstile-response']",
    );
    const payload = {
      ...form,
      turnstileToken: tokenField?.value || "",
      utmSource: param("utm_source"),
      utmMedium: param("utm_medium"),
      utmCampaign: param("utm_campaign"),
      utmTerm: param("utm_term"),
      utmContent: param("utm_content"),
      landingPath: `${window.location.pathname}${window.location.search}`,
    };
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("submitting");
    track("contact_form_submit", { interest: form.interest, plan: form.plan || undefined });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        delivery?: string;
        message?: string;
        errors?: Record<string, string>;
      };
      if (response.status === 429) {
        setStatus("error");
        setFormError(data.message || "Please wait a moment and try again.");
        return;
      }
      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrors(data.errors || {});
        setFormError(data.message || "We could not send that. Please check the form and try again.");
        return;
      }
      setStatus(data.delivery === "logged" ? "logged" : "success");
      track("contact_form_success", { interest: form.interest, plan: form.plan || undefined });
      reportAdsConversion();
    } catch {
      setStatus("error");
      setFormError("We could not send that. Please try again.");
    }
  }

  if (status === "success" || status === "logged") {
    return (
      <div role="status" className="rounded-3xl bg-blush p-8">
        <h2 className="font-serif text-3xl text-ink">Thank you. We have your enquiry.</h2>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          {status === "logged"
            ? "Email delivery is not configured in this environment, so the team has not been notified. Your message was checked and recorded in the server log only."
            : "We will reply by email. This is not a booking confirmation."}
        </p>
      </div>
    );
  }

  const showPlan = form.interest === "managed-website" || form.plan !== "";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required>
          <input id="name" className={fieldClass} autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} />
        </Field>
        <Field label="Work email" name="email" error={errors.email} required>
          <input id="email" type="email" autoComplete="email" className={fieldClass} value={form.email} onChange={(event) => update("email", event.target.value)} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organisation" name="organisation" error={errors.organisation}>
          <input id="organisation" autoComplete="organization" className={fieldClass} value={form.organisation} onChange={(event) => update("organisation", event.target.value)} />
        </Field>
        <Field label="Website" name="website" error={errors.website}>
          <input id="website" autoComplete="url" placeholder="https://" className={fieldClass} value={form.website} onChange={(event) => update("website", event.target.value)} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="What do you need?" name="interest" error={errors.interest} required>
          <select
            id="interest"
            className={fieldClass}
            value={form.interest}
            onChange={(event) => update("interest", event.target.value)}
          >
            <option value="">Choose one</option>
            {interests.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        {showPlan ? (
          <Field label="Subscription plan" name="plan" error={errors.plan}>
            <select
              id="plan"
              className={fieldClass}
              value={form.plan}
              onChange={(event) => update("plan", event.target.value as FormState["plan"])}
            >
              <option value="">No plan yet</option>
              <option value="essential">Essential — £99/month excluding VAT</option>
              <option value="grow">Grow — £199/month excluding VAT</option>
              <option value="pro">Pro — £399/month excluding VAT</option>
            </select>
          </Field>
        ) : (
          <Field label="Indicative budget" name="budget" error={errors.budget}>
            <select id="budget" className={fieldClass} value={form.budget} onChange={(event) => update("budget", event.target.value)}>
              <option value="">Optional</option>
              {budgets.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
        )}
      </div>
      {showPlan ? (
        <Field label="Indicative budget" name="budget" error={errors.budget}>
          <select id="budget" className={fieldClass} value={form.budget} onChange={(event) => update("budget", event.target.value)}>
            <option value="">Optional</option>
            {budgets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      ) : null}
      <Field label="Timing" name="timeline" error={errors.timeline}>
        <select id="timeline" className={fieldClass} value={form.timeline} onChange={(event) => update("timeline", event.target.value)}>
          <option value="">Optional</option>
          {timelines.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Project" name="message" error={errors.message} required>
        <textarea
          id="message"
          rows={6}
          className={fieldClass}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.companyWebsiteConfirm}
            onChange={(event) => update("companyWebsiteConfirm", event.target.value)}
          />
        </label>
      </div>
      {siteKey ? <div className="cf-turnstile" data-sitekey={siteKey} /> : null}
      <label className="flex items-start gap-3 text-sm leading-6 text-ink-soft">
        <input
          type="checkbox"
          className="mt-1"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
        />
        <span>
          I understand my details will be used to reply to this enquiry, as described on the{" "}
          <a href="/privacy" className="text-plum underline">
            privacy page
          </a>
          .
        </span>
      </label>
      {errors.consent ? (
        <p className="text-sm text-plum" role="alert">
          {errors.consent}
        </p>
      ) : null}
      {formError ? (
        <p className="text-sm text-plum" role="alert">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-plum px-6 py-3 text-sm font-medium text-white hover:bg-plum-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="text-xs leading-5 text-muted">
        Plans from £99, £199 and £399 a month, excluding VAT, with a 12-month initial commitment and no upfront website development fee. Full terms are shared before any agreement. Sending this form does not book a call.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-plum"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-sm text-plum" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function param(name: string) {
  return new URLSearchParams(window.location.search).get(name) || "";
}
