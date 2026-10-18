import Link from "next/link";
import { chilternStory } from "@/lib/content";

export function ClientQuote({ quote }: { quote: string }) {
  return (
    <figure className="border-l-2 border-plum/40 pl-5">
      <blockquote className="font-serif text-xl leading-snug text-ink sm:text-2xl">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm leading-6 text-muted">
        {chilternStory.name}, {chilternStory.role}
      </figcaption>
    </figure>
  );
}

export function ChilternLetter() {
  return (
    <figure className="mt-12 rounded-3xl bg-blush p-6 sm:p-8">
      <figcaption className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">
        In her words
      </figcaption>
      <blockquote className="mt-4 space-y-4 text-sm leading-7 text-ink-soft">
        {chilternStory.letter.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </blockquote>
      <figcaption className="mt-6 text-sm leading-6 text-ink">
        {chilternStory.name}
        <span className="mt-1 block text-muted">{chilternStory.role}</span>
      </figcaption>
    </figure>
  );
}

export function ChilternHomeStory() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">A client account</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            From around 52 new patients a month to 75
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Chiltern Wellbeing Foot & Ankle Clinic in Hayes had levelled off at 48 to 52 new patients a month. After the new site launched in August, the clinic welcomed 72 new patients that month and 75 in September. Funmi Obi says those were the highest new-patient numbers in the five years since the clinic opened, and its highest monthly revenue to date.
          </p>
          <Link href="/work/chiltern-wellbeing" className="mt-5 inline-block text-sm font-medium text-plum">
            Read Funmi’s account
          </Link>
        </div>
        <ClientQuote quote={chilternStory.quotes.people} />
      </div>
    </section>
  );
}
