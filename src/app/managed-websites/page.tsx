import Link from "next/link";
import { FaqList } from "@/components/faq/FaqList";
import { CommercialDisclosure, PricingCards, TrustRow } from "@/components/pricing/PricingCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta, PageHero } from "@/components/ui/Page";
import { loadFaqs } from "@/lib/cms";
import { ClientQuote } from "@/components/work/ChilternStory";
import { chilternStory, commercialNotes, comparisonRows, onboardingSteps, plans } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Managed websites for UK businesses",
  description:
    "Managed websites for companies across the UK, from £99, £199 and £399 a month, excluding VAT. No upfront development fee, with a 12-month initial commitment. The studio is based in Buckinghamshire.",
  path: "/managed-websites",
});

export default async function ManagedWebsitesPage() {
  const faqs = (await loadFaqs()).filter((item) => item.group === "managed" || item.group === "general");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Managed websites", path: "/managed-websites" },
          ]),
          serviceJsonLd({
            title: "Managed websites",
            description:
              "Professionally designed and hosted websites for companies across the UK. Plans at £99, £199 and £399 a month, excluding VAT, with a 12-month initial commitment and no upfront development fee.",
            path: "/managed-websites",
            offers: plans.map((plan) => ({
              name: plan.name,
              price: plan.price,
              description: `${plan.summary} Monthly price excludes VAT. 12-month initial commitment.`,
            })),
          }),
          faqJsonLdSafe(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Managed websites" }]} />
      </div>
      <PageHero
        eyebrow="Managed websites"
        title="Professional websites, without the upfront cost"
        lede="Beautifully designed, fully managed websites with transparent monthly pricing. Essential is £99, Grow is £199 and Pro is £399 a month, excluding VAT. There is no upfront website development fee, and plans begin with a 12-month initial commitment."
      />
      <nav aria-label="On this page" className="sticky top-[4.5rem] z-30 border-y border-line bg-cream">
        <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-sm sm:px-8">
          <li><a href="#plans" className="whitespace-nowrap hover:text-plum">Plans</a></li>
          <li><a href="#included" className="whitespace-nowrap hover:text-plum">What is included</a></li>
          <li><a href="#comparison" className="whitespace-nowrap hover:text-plum">Comparison</a></li>
          <li><a href="#questions" className="whitespace-nowrap hover:text-plum">Questions</a></li>
        </ul>
      </nav>
      <section className="bg-blush py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <PricingCards cta="enquire" />
          <TrustRow />
          <CommercialDisclosure className="mt-8 max-w-3xl" />
          <div className="mt-10 max-w-3xl">
            <ClientQuote quote={chilternStory.quotes.website} />
            <p className="mt-4 text-sm leading-6 text-muted">
              Funmi Obi on the Chiltern Wellbeing website. One client’s experience, not a result we promise for every plan.
            </p>
          </div>
        </div>
      </section>
      <section id="included" className="mx-auto max-w-6xl scroll-mt-32 px-5 py-16 sm:px-8">
        <h2 className="font-serif text-4xl text-ink">What the monthly fee covers</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-7 text-ink-soft">
            <p>{commercialNotes.upfront}</p>
            <p>{commercialNotes.commitment}</p>
            <p>{commercialNotes.cms}</p>
            <p>{commercialNotes.allowances}</p>
            <p>{commercialNotes.cancellation}</p>
            <p>{commercialNotes.aiSearch}</p>
          </div>
          <div>
            <h3 className="font-sans text-base font-semibold text-ink">Onboarding</h3>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-ink-soft">
              {onboardingSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="font-serif text-plum">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 font-sans text-base font-semibold text-ink">Quoted separately</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-soft">
              {commercialNotes.quotedSeparately.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="comparison" className="bg-cream-deep py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-serif text-4xl text-ink">Compare the plans</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            Grow is marked as the usual recommendation. It is not a discount and it does not hide a condition.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-card">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Essential, Grow and Pro feature comparison</caption>
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="sticky left-0 bg-card px-4 py-4 font-medium">Feature</th>
                  <th scope="col" className="px-4 py-4 font-medium">Essential</th>
                  <th scope="col" className="bg-blush px-4 py-4 font-medium">Grow</th>
                  <th scope="col" className="px-4 py-4 font-medium">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-0">
                    <th scope="row" className="sticky left-0 bg-card px-4 py-4 font-medium text-ink">{row.label}</th>
                    <td className="px-4 py-4 text-ink-soft">{row.essential}</td>
                    <td className="bg-blush/60 px-4 py-4 text-ink-soft">{row.grow}</td>
                    <td className="px-4 py-4 text-ink-soft">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="questions" className="mx-auto max-w-3xl scroll-mt-32 px-5 py-16 sm:px-8">
        <h2 className="font-serif text-4xl text-ink">Questions</h2>
        <div className="mt-6">
          <FaqList items={faqs} />
        </div>
        <p className="mt-6 text-sm text-muted">
          More answers sit on the <Link href="/faq" className="text-plum">FAQ page</Link>, including how bespoke work differs.
        </p>
      </section>
      <ClosingCta
        title="Enquire about a plan."
        body="Tell us which plan you are considering. We will confirm scope before anything is agreed. Prices are £99, £199 or £399 a month, excluding VAT, with a 12-month initial commitment."
      />
    </>
  );
}

function faqJsonLdSafe(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
