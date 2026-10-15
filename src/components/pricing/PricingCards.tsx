import { Button } from "@/components/ui/Button";
import { FeatureIcon, IconCheck } from "@/components/ui/Icons";
import { commercialNotes, planEnquiryHref, plans, trustPoints } from "@/lib/content";

export function PricingCards({ cta = "home" }: { cta?: "home" | "enquire" }) {
  return (
    <div id="plans" className="grid items-stretch gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.id}
          className={`relative flex flex-col rounded-3xl bg-card p-6 shadow-card sm:p-7 ${
            plan.recommended ? "border-2 border-plum lg:-mt-3" : "border border-line"
          }`}
        >
          {plan.recommended ? (
            <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-plum px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white">
              MOST POPULAR
            </p>
          ) : null}
          <h3 className="font-serif text-3xl text-ink">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted">{plan.summary}</p>
          <p className="mt-5 font-serif text-5xl tracking-tight text-ink">
            £{plan.price}
            <span className="ml-1 font-sans text-sm font-normal text-muted">/ month</span>
          </p>
          <p className="mt-1 text-xs text-muted">Excluding VAT</p>
          <ul className="mt-6 flex-1 space-y-2.5 text-sm text-ink-soft">
            {plan.homepageFeatures.map((feature) => {
              const isLead = feature.endsWith(":");
              return (
                <li key={feature} className="flex gap-2">
                  {isLead ? (
                    <span className="font-medium text-ink">{feature}</span>
                  ) : (
                    <>
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-plum" />
                      <span>{feature}</span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <Button
            href={planEnquiryHref(plan.id)}
            variant={plan.recommended ? "primary" : "outline"}
            arrow
            analytics={`pricing-${plan.id}`}
            className="mt-7 w-full"
          >
            {cta === "home" ? "Get started" : plan.enquireLabel}
          </Button>
        </article>
      ))}
    </div>
  );
}

export function TrustRow() {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustPoints.map((point) => (
        <li key={point.title} className="flex items-center gap-3 text-sm text-ink-soft">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-card text-plum">
            <FeatureIcon name={point.icon} />
          </span>
          {point.title}
        </li>
      ))}
    </ul>
  );
}

export function CommercialDisclosure({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm leading-6 text-muted ${className}`}>
      {commercialNotes.upfront} {commercialNotes.commitment} {commercialNotes.vat} {commercialNotes.aiSearch}{" "}
      <a href="/terms" className="text-plum underline-offset-2 hover:underline">
        {commercialNotes.terms}
      </a>
    </p>
  );
}
