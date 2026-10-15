import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-12 pb-6 sm:px-8 sm:pt-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">{eyebrow}</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{lede}</p>
      {children}
    </header>
  );
}

export function ClosingCta({
  title = "Tell us what you're building.",
  body = "A managed website or a bespoke project — we will reply with a clear next step, not a generic pitch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-blush">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        <h2 className="font-serif text-4xl text-ink">{title}</h2>
        <p className="mt-4 text-base leading-7 text-ink-soft">{body}</p>
        <div className="mt-7">
          <Button href="/contact" arrow analytics="page-closing">
            Let&apos;s talk
          </Button>
        </div>
      </div>
    </section>
  );
}
