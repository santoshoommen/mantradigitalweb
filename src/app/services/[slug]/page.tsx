import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackView } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ClosingCta } from "@/components/ui/Page";
import { ClientQuote } from "@/components/work/ChilternStory";
import { loadCaseStudies, loadServices } from "@/lib/cms";
import { chilternStory } from "@/lib/content";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

export async function generateStaticParams() {
  const services = await loadServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = await loadServices();
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.navLabel,
    description: service.lede,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const services = await loadServices();
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const studies = await loadCaseStudies();
  const related = studies.find((study) => study.slug === service.relatedWork);

  return (
    <>
      <TrackView name="service_page_view" slug={service.slug} />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path: `/services/${service.slug}` },
          ]),
          serviceJsonLd({
            title: service.navLabel,
            description: service.lede,
            path: `/services/${service.slug}`,
          }),
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { label: service.navLabel },
          ]}
        />
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Services</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{service.title}</h1>
        <p className="mt-4 text-base leading-7 text-ink-soft">{service.lede}</p>
        <h2 className="mt-10 font-serif text-2xl text-ink">The problem</h2>
        <p className="mt-3 text-sm leading-7 text-ink-soft">{service.problem}</p>
        <h2 className="mt-10 font-serif text-2xl text-ink">Our approach</h2>
        <p className="mt-3 text-sm leading-7 text-ink-soft">{service.approach}</p>
        <h2 className="mt-10 font-serif text-2xl text-ink">What you can expect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-ink-soft">
          {service.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2 className="mt-10 font-serif text-2xl text-ink">What this does not include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-ink-soft">
          {service.boundaries.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {service.slug === "web-design-development" ? (
          <div className="mt-10">
            <h2 className="font-serif text-2xl text-ink">What one clinic reported</h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              At Chiltern Wellbeing Foot & Ankle Clinic, people reached the booking page and then left. The booking step sent them to a separately branded page. The new site keeps booking inside the practice: about three clicks, and only the essential details. Funmi Obi reports 72 new patients in August and 75 in September, up from around 52 a month. That is her account of one clinic. It is not a promise that another website will produce the same result.
            </p>
            <div className="mt-6">
              <ClientQuote quote={chilternStory.quotes.website} />
            </div>
            <p className="mt-6 text-sm leading-7 text-ink-soft">
              <Link href="/work/chiltern-wellbeing" className="text-plum">
                Read the full account
              </Link>
            </p>
          </div>
        ) : null}
        {service.slug === "digital-solutions" ? (
          <div className="mt-10">
            <h2 className="font-serif text-2xl text-ink">Booking that stays on the site</h2>
            <p className="mt-3 text-sm leading-7 text-ink-soft">
              Chiltern Wellbeing’s patients were leaving at the booking step because it opened a separately branded page. The replacement is an integrated booking system of about three clicks, asking only for essential information.{" "}
              <Link href="/work/chiltern-wellbeing" className="text-plum">
                The clinic’s account is on the case study
              </Link>
              .
            </p>
          </div>
        ) : null}
        {related && service.slug !== "web-design-development" ? (
          <p className="mt-10 text-sm leading-7 text-ink-soft">
            Related work:{" "}
            <Link href={`/work/${related.slug}`} className="text-plum">
              {related.title}
            </Link>
            . {related.cardLabel}.
          </p>
        ) : null}
      </article>
      <ClosingCta />
    </>
  );
}
