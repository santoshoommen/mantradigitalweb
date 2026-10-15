import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">404</p>
      <h1 className="mt-3 font-serif text-5xl text-ink">This page is not here.</h1>
      <p className="mt-4 text-base leading-7 text-ink-soft">
        The link may be out of date. The work, the plans and the contact form are all still available.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/" variant="secondary">
          Back home
        </Button>
        <Button href="/contact" arrow>
          Let&apos;s talk
        </Button>
      </div>
    </div>
  );
}
