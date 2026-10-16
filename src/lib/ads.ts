export const adsId = "AW-1066177745";
export const adsConversionSendTo = "AW-1066177745/RvlECOPcrZkaENGpsvwD";

type Gtag = (...args: unknown[]) => void;

export function reportAdsConversion() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem("mantra-consent") !== "accepted") return;
  const gtag = (window as Window & { gtag?: Gtag }).gtag;
  gtag?.("event", "conversion", { send_to: adsConversionSendTo });
}
