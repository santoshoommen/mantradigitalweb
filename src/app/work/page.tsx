import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta, PageHero } from "@/components/ui/Page";
import { WorkGrid } from "@/components/work/WorkGrid";
import { loadCaseStudies } from "@/lib/cms";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our work",
  description: "Selected websites and digital products built by Mantra Digital Magic for organisations in the UK.",
  path: "/work",
});

export default async function WorkPage() {
  const projects = await loadCaseStudies();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our work", path: "/work" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Our work" }]} />
      </div>
      <PageHero
        eyebrow="Our work"
        title="Real projects. Real results."
        lede="Websites and products we have designed and built, across healthcare, food and online marketplaces. Chiltern Wellbeing reported 72 new patients in August and 75 in September after launch, up from around 52 a month."
      />
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <WorkGrid projects={projects} />
      </div>
      <ClosingCta />
    </>
  );
}
