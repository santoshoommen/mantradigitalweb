import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Page";
import { breadcrumbJsonLd } from "@/lib/seo";

const studioEmail = "support@mantradigital.org";

function paragraphWithLinks(text: string): ReactNode {
  const cookie = "cookie page";
  const google = "policies.google.com/technologies/partner-sites";
  if (text.includes(studioEmail)) {
    const [before, after] = text.split(studioEmail);
    return (
      <>
        {before}
        <span
          dangerouslySetInnerHTML={{
            __html: `<!--email_off-->${studioEmail}<!--/email_off-->`,
          }}
        />
        {paragraphWithLinks(after)}
      </>
    );
  }
  if (text.includes(cookie)) {
    const [before, after] = text.split(cookie);
    return (
      <>
        {before}
        <Link href="/cookies" className="text-plum underline">
          {cookie}
        </Link>
        {after}
      </>
    );
  }
  if (text.includes(google)) {
    const [before, after] = text.split(google);
    return (
      <>
        {before}
        <a href={`https://${google}`} className="text-plum underline" rel="noreferrer">
          {google}
        </a>
        {after}
      </>
    );
  }
  return text;
}

export function LegalPage({
  copy,
  path,
}: {
  copy: {
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  };
  path: string;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: copy.title, path },
        ])}
      />
      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: copy.title }]} />
        <h1 className="mt-8 font-serif text-4xl text-ink sm:text-5xl">{copy.title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated {copy.updated}</p>
        <p className="mt-4 text-base leading-7 text-ink-soft">{copy.intro}</p>
        {copy.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-ink-soft">
                {paragraphWithLinks(paragraph)}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-ink-soft">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </>
  );
}
