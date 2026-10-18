import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Page";
import { ClientQuote } from "@/components/work/ChilternStory";
import { chilternStory } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact the studio",
  description:
    "Contact Mantra Digital Magic about a website, brand or digital project. The studio is based in Buckinghamshire and works with companies across the UK.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <div>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Contact</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">Tell us what you are building.</h1>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Share a little about the business and the job the website needs to do. We will reply by email. This form does not book a call.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Managed websites are £99, £199 or £399 a month, excluding VAT, with a 12-month initial commitment and no upfront development fee. Bespoke work is quoted. Full terms are shared before any agreement.
          </p>
          <div className="mt-8">
            <ClientQuote quote={chilternStory.quotes.recommend} />
          </div>
        </div>
        <Suspense fallback={<p className="text-sm text-muted">Loading the form…</p>}>
          <ContactForm initialPlan={params.plan} />
        </Suspense>
      </div>
    </>
  );
}
