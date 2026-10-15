import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta, PageHero } from "@/components/ui/Page";
import { fullProcess } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Process",
  description:
    "How a Mantra project moves from discovery to launch and care, for managed websites and bespoke work.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Process" }]} />
      </div>
      <PageHero
        eyebrow="Process"
        title="A clear path from the first conversation to a site you can rely on"
        lede="Timing depends on the scope, your content and how quickly feedback comes back. We agree a realistic plan before we start. We do not promise that every website launches in a fixed number of days."
      />
      <ol className="mx-auto max-w-3xl space-y-0 px-5 pb-8 sm:px-8">
        {fullProcess.map((step, index) => (
          <li key={step.title} className="grid grid-cols-[auto_1fr] gap-5">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-plum font-serif text-plum">
                {index + 1}
              </span>
              {index < fullProcess.length - 1 ? <span className="w-px flex-1 bg-plum/30" aria-hidden /> : null}
            </div>
            <div className="pb-10">
              <h2 className="font-serif text-2xl text-ink">{step.title}</h2>
              <p className="mt-2 text-sm leading-7 text-ink-soft">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="bg-blush py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-ink">Managed website onboarding</h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              We confirm the plan and the pages, gather content, design within that scope, launch, then continue with the monthly allowance. Extra features are quoted before they are built.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-ink">Bespoke project scoping</h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Discovery is broader. Strategy, design approval and implementation are agreed as a project. Ongoing care, if you want it, is a separate quotation. It is not the same thing as Essential, Grow or Pro.
            </p>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
