import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta, PageHero } from "@/components/ui/Page";
import { ClientQuote } from "@/components/work/ChilternStory";
import { chilternStory } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "A UK studio based in Buckinghamshire",
  description:
    "Mantra Digital Magic Ltd is a website studio based in Buckinghamshire, working with companies across the UK.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      </div>
      <PageHero
        eyebrow="About"
        title="A small studio for businesses that want the work done properly"
        lede="Mantra Digital Magic Ltd designs, builds and looks after websites and digital products. The people you speak to are the people doing the design and the engineering."
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-7 text-ink-soft">
          <p>
            We are a UK studio based in Buckinghamshire. The work is for companies that need to be found, trusted and chosen — not for a race to the cheapest template. AI-assisted production is an internal way of working. It is not the thing we sell.
          </p>
          <p>
            Clients deal with one team from the first conversation through launch and care. There is no separate sales layer handing you to someone else after the proposal.
          </p>
        </div>
        <aside className="h-fit rounded-3xl bg-blush p-6">
          <h2 className="font-sans text-base font-semibold text-ink">How a project feels</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-soft">
            <li>A direct conversation about the job the site needs to do.</li>
            <li>Design you can respond to, with the review cycle agreed up front.</li>
            <li>Engineering that stays fast, accessible and possible to look after.</li>
            <li>A written scope, so monthly minutes are not confused with new features.</li>
          </ul>
          <p className="mt-5 text-sm text-muted">Based in Buckinghamshire. Working with clients across the UK.</p>
          <div className="mt-6">
            <ClientQuote quote={chilternStory.quotes.people} />
          </div>
        </aside>
      </div>
      <ClosingCta />
    </>
  );
}
