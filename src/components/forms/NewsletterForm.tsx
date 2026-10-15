"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "logged" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, companyWebsiteConfirm: honeypot }),
      });
      const data = (await response.json()) as { ok?: boolean; delivery?: string; message?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setMessage(data.message || "We could not save that just now. Please try again.");
        return;
      }
      setStatus(data.delivery === "logged" ? "logged" : "success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
      setMessage("We could not save that just now. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center rounded-full border border-line bg-card p-1">
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          className="min-h-10 w-full bg-transparent px-4 text-sm text-ink outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plum text-white hover:bg-plum-dark disabled:opacity-60"
          aria-label="Subscribe"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>
      <label className="mt-3 flex items-start gap-2 text-xs leading-5 text-muted">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5"
        />
        <span>Send me occasional notes. I can ask you to stop.</span>
      </label>
      {status === "success" ? (
        <p role="status" className="mt-2 text-sm text-ink">
          Thank you. You're on the list.
        </p>
      ) : null}
      {status === "logged" ? (
        <p role="status" className="mt-2 text-sm text-ink">
          Thank you. Email is not configured in this environment, so this address was not added to a list.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-2 text-sm text-plum">
          {message}
        </p>
      ) : null}
    </form>
  );
}
