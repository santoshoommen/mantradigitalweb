"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { adsId } from "@/lib/ads";
import { track } from "@/lib/track";

const storageKey = "mantra-consent";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function consentSnapshot() {
  return window.localStorage.getItem(storageKey);
}

function chooseConsent(value: "accepted" | "rejected") {
  window.localStorage.setItem(storageKey, value);
  listeners.forEach((listener) => listener());
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-54RRC0Q4G5";
  const consent = useSyncExternalStore(subscribe, consentSnapshot, () => "pending");

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[data-cta]");
      if (!(link instanceof HTMLAnchorElement)) return;
      const location = link.dataset.ctaLocation || "unknown";
      track("cta_click", { location, destination: link.getAttribute("href") || "" });
      if (location.startsWith("pricing-")) {
        track("pricing_plan_select", { tier: location.replace("pricing-", "") });
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function choose(value: "accepted" | "rejected") {
    chooseConsent(value);
  }

  return (
    <>
      {gaId && consent === "accepted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`} strategy="afterInteractive" />
          <Script id="google-tags" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${adsId}');gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {consent === null ? (
        <div
          role="dialog"
          aria-label="Cookie choice"
          className="fixed right-4 bottom-4 left-4 z-50 rounded-2xl border border-line bg-card p-4 shadow-card sm:left-auto sm:max-w-sm"
        >
          <p className="text-sm leading-6 text-ink-soft">
            We use analytics and advertising cookies only if you agree. The rest of the site works either way.{" "}
            <a href="/cookies" className="text-plum underline">
              Cookie details
            </a>
          </p>
          <div className="mt-3 flex gap-2">
            <button type="button" className="min-h-11 rounded-full bg-plum px-4 text-sm text-white" onClick={() => choose("accepted")}>
              Accept
            </button>
            <button type="button" className="min-h-11 rounded-full border border-line px-4 text-sm" onClick={() => choose("rejected")}>
              Reject
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function TrackView({
  name,
  slug,
}: {
  name: "portfolio_case_view" | "service_page_view";
  slug: string;
}) {
  useEffect(() => {
    track(name, { slug });
  }, [name, slug]);
  return null;
}
