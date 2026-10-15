export type AnalyticsEvent =
  | "cta_click"
  | "pricing_plan_select"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_success"
  | "portfolio_case_view"
  | "service_page_view";

type Gtag = (...args: unknown[]) => void;

export function track(event: AnalyticsEvent, params: Record<string, string | undefined> = {}) {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem("mantra-consent") !== "accepted") return;
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  const clean = Object.fromEntries(
    Object.entries(params).filter((entry): entry is [string, string] => Boolean(entry[1])),
  );
  gtag?.("event", event, clean);
}
