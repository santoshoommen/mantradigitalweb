export const adsId = "AW-18517803250";
const leadSendTo = "AW-18517803250/h-lJCIySqp8dEPKB_f1E";

type Gtag = (...args: unknown[]) => void;

export function gtagReportConversion(url?: string) {
  if (typeof window === "undefined") return false;
  if (window.localStorage.getItem("mantra-consent") !== "accepted") return false;
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  const callback = () => {
    if (typeof url !== "undefined") window.location.assign(url);
  };
  gtag?.("event", "conversion", {
    send_to: leadSendTo,
    value: 1.0,
    currency: "GBP",
    event_callback: callback,
  });
  return false;
}
