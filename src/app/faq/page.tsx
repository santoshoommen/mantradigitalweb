import { FaqList } from "@/components/faq/FaqList";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta, PageHero } from "@/components/ui/Page";
import { loadFaqs } from "@/lib/cms";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description: "Straight answers about Mantra's managed website plans and bespoke projects.",
  path: "/faq",
});

export default async function FaqPage() {
  const faqs = await loadFaqs();
  const groups = [
    { id: "managed", title: "Managed websites" },
    { id: "bespoke", title: "Bespoke work" },
    { id: "general", title: "Working together" },
  ] as const;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqJsonLd(faqs.map((item) => ({ question: item.question, answer: item.answer }))),
        ]}
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
      </div>
      <PageHero
        eyebrow="FAQ"
        title="The questions we would rather answer in public"
        lede="Prices, the 12-month commitment, what the CMS does and does not do, and where a bespoke project is a different agreement."
      />
      <div className="mx-auto max-w-3xl space-y-12 px-5 pb-16 sm:px-8">
        {groups.map((group) => {
          const items = faqs.filter((item) => item.group === group.id);
          if (items.length === 0) return null;
          return (
            <section key={group.id}>
              <h2 className="mb-2 font-serif text-3xl text-ink">{group.title}</h2>
              <FaqList items={items} />
            </section>
          );
        })}
      </div>
      <ClosingCta />
    </>
  );
}
