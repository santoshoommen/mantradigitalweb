import Link from "next/link";
import { Button, TextLink } from "@/components/ui/Button";
import { FeatureIcon, IconCheck } from "@/components/ui/Icons";
import { CommercialDisclosure, PricingCards, TrustRow } from "@/components/pricing/PricingCards";
import { HeroDevices, PartnerScene, StillLife, projectArt } from "@/components/visuals/Scenes";
import { homeFeatures, homeProcess, onlyPublished, caseStudies, partnerPoints } from "@/lib/content";

export function HomePage() {
  const work = onlyPublished(caseStudies);

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">
              Websites · Digital solutions · Lasting impact
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-[2.6rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              Beautiful websites.
              <br />
              Smarter digital solutions.
              <br />
              Real business growth.
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-ink-soft">
              We design, build and manage websites and web applications that help your business attract customers, streamline operations and grow online.
            </p>
            <p className="mt-3 max-w-md text-sm text-muted">Based in Buckinghamshire, working with companies across the UK.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services" arrow analytics="hero-services">
                Explore our services
              </Button>
              <Button href="/work" variant="secondary" analytics="hero-work">
                View our work
              </Button>
            </div>
          </div>
          <HeroDevices />
        </div>
      </section>

      <section aria-label="How we work" className="pb-6">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {homeFeatures.map((feature) => (
            <div key={feature.title} className="text-center sm:text-left">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-rose/30 text-plum sm:mx-0">
                <FeatureIcon name={feature.icon} />
              </span>
              <h2 className="mt-4 font-sans text-base font-semibold text-ink">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <PartnerScene />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">More than just websites</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              A complete digital partner for your business
            </h2>
            <p className="mt-5 text-base leading-7 text-ink-soft">
              From elegant brochure websites to advanced web applications, we combine creative design, modern technology and practical digital strategy to deliver solutions that make a difference.
            </p>
            <ul className="mt-6 space-y-3">
              {partnerPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-plum">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <TextLink href="/services" className="mt-6" analytics="partner-services">
              Explore our services
            </TextLink>
          </div>
        </div>
      </section>

      <section className="bg-blush py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Managed websites</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Professional websites, without the upfront cost
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Beautifully designed, fully managed websites with transparent monthly pricing. No large upfront fees. Just a website that works for your business.
            </p>
          </div>
          <div className="mt-12">
            <PricingCards />
          </div>
          <TrustRow />
          <CommercialDisclosure className="mx-auto mt-8 max-w-3xl text-center" />
          <p className="mt-4 text-center text-sm">
            <Link href="/managed-websites" className="font-medium text-plum hover:text-plum-dark">
              Compare the plans in detail
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Our work</p>
              <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">Real projects. Real results.</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                We work with businesses across healthcare, food and online marketplaces.
              </p>
            </div>
            <TextLink href="/work" analytics="work-all">
              View all projects
            </TextLink>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {work.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="group block" data-cta="true" data-cta-location="home-work">
                  <div className="h-52 overflow-hidden rounded-2xl">{projectArt(project.slug)}</div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-sans text-base font-semibold text-ink group-hover:text-plum">{project.title}</h3>
                      <p className="mt-1 text-sm text-muted">{project.cardLabel}</p>
                    </div>
                    <span aria-hidden className="mt-1 text-plum">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-blush py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Our process</p>
              <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">A simple, collaborative journey</h2>
            </div>
            <p className="text-sm leading-6 text-ink-soft lg:pb-2">
              From first conversation to ongoing support, we make the process clear, efficient and enjoyable.
            </p>
          </div>
          <ol className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div className="absolute top-5 right-[12%] left-[12%] hidden h-px bg-plum/25 md:block" aria-hidden />
            {homeProcess.map((step) => (
              <li key={step.n} className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-plum/40 bg-blush font-serif text-plum">
                  {step.n}
                </div>
                <h3 className="mt-4 font-sans text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <TextLink href="/process" className="mt-8" analytics="process">
            See the full process
          </TextLink>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <StillLife />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Let&apos;s work together</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              Ready to bring your ideas to life?
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">
              Whether you need a simple website, a booking system or a fully custom web application, we&apos;d love to hear about your project.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" arrow analytics="closing-contact">
                Let&apos;s talk
              </Button>
              <Button href="/services" variant="secondary" analytics="closing-services">
                See our services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
