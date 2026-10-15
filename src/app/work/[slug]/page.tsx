import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackView } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta } from "@/components/ui/Page";
import { ChilternCaseHero, CookLocalCaseHero, OnlineArtzCaseHero, projectArt } from "@/components/visuals/Scenes";
import { loadCaseStudies, loadServices } from "@/lib/cms";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const studies = await loadCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const studies = await loadCaseStudies();
  const study = studies.find((item) => item.slug === slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const studies = await loadCaseStudies();
  const study = studies.find((item) => item.slug === slug);
  if (!study) notFound();
  const services = await loadServices();
  const related = services.filter((service) => study.services.includes(service.slug));

  return (
    <>
      <TrackView name="portfolio_case_view" slug={study.slug} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our work", path: "/work" },
          { name: study.title, path: `/work/${study.slug}` },
        ])}
      />
      <article>
        {study.slug === "chiltern-wellbeing" ? (
          <ChilternCaseHero />
        ) : study.slug === "cook-local" ? (
          <CookLocalCaseHero />
        ) : study.slug === "onlineartz" ? (
          <OnlineArtzCaseHero />
        ) : (
          <div className="h-72 sm:h-96">{projectArt(study.slug)}</div>
        )}
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/work", label: "Our work" },
              { label: study.title },
            ]}
          />
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">{study.client}</p>
          <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">{study.title}</h1>
          <p className="mt-4 text-base leading-7 text-ink-soft">{study.summary}</p>
          {study.website ? (
            <p className="mt-4">
              <a href={study.website} className="text-sm font-medium text-plum" rel="noreferrer">
                {study.website.replace(/^https:\/\//, "")}
              </a>
            </p>
          ) : null}
          <p className="mt-3 text-xs tracking-wide text-rose uppercase">{study.tags.join(" · ")}</p>
          <h2 className="mt-10 font-serif text-2xl">The challenge</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{study.challenge}</p>
          <h2 className="mt-8 font-serif text-2xl">The approach</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{study.approach}</p>
          <h2 className="mt-8 font-serif text-2xl">The solution</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">{study.solution}</p>
          {related.length > 0 ? (
            <p className="mt-6 text-sm text-ink-soft">
              Related services:{" "}
              {related.map((service, index) => (
                <span key={service.slug}>
                  {index > 0 ? ", " : ""}
                  <Link href={`/services/${service.slug}`} className="text-plum">
                    {service.navLabel}
                  </Link>
                </span>
              ))}
            </p>
          ) : null}
        </div>
      </article>
      <ClosingCta />
    </>
  );
}
