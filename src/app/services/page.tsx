import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs, ClosingCta, PageHero } from "@/components/ui/Page";
import { projectArt } from "@/components/visuals/Scenes";
import { loadServices } from "@/lib/cms";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const artFor: Record<string, string> = {
  "web-design-development": "chiltern-wellbeing",
  "branding-design": "onlineartz",
  "digital-solutions": "cook-local",
};

export const metadata = pageMetadata({
  title: "Website design and digital solutions",
  description:
    "Web design, branding and digital solutions for companies across the UK, from a studio in Buckinghamshire.",
  path: "/services",
});

export default async function ServicesPage() {
  const services = await loadServices();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Services" }]} />
      </div>
      <PageHero
        eyebrow="Services"
        title="Design, engineering and care, kept in one place"
        lede="Your business deserves more than just a website. We design, build and look after digital experiences that make a business easier to discover, trust and choose — from fully managed websites to bespoke platforms."
      >
        <div className="mt-6">
          <Button href="/managed-websites" variant="secondary" analytics="services-plans">
            See managed websites
          </Button>
        </div>
      </PageHero>
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        {services.map((service, index) => (
          <article key={service.slug} className="grid items-center gap-8 border-t border-line py-12 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="h-64 overflow-hidden rounded-3xl">
                {projectArt(artFor[service.slug] || "chiltern-wellbeing")}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-ink">{service.navLabel}</h2>
              <p className="mt-3 text-base leading-7 text-ink-soft">{service.lede}</p>
              <Link href={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-medium text-plum">
                Read about {service.navLabel.toLowerCase()} →
              </Link>
            </div>
          </article>
        ))}
        <aside className="rounded-3xl bg-blush p-8">
          <h2 className="font-serif text-3xl text-ink">Bespoke projects</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            Brand, web applications, portals and integrations are quoted separately from the monthly website plans. A subscription does not include custom application development. Care for a bespoke build is its own agreement, not Essential, Grow or Pro.
          </p>
          <div className="mt-6">
            <Button href="/contact" arrow analytics="services-quote">
              Request a tailored quote
            </Button>
          </div>
        </aside>
      </div>
      <ClosingCta />
    </>
  );
}
