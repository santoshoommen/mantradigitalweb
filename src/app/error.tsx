"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose">Something went wrong</p>
      <h1 className="mt-3 font-serif text-5xl text-ink">We could not load this page.</h1>
      <p className="mt-4 text-base leading-7 text-ink-soft">
        Please try again. If it keeps happening, use the contact form and we will look into it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-plum px-5 text-sm font-medium text-white"
      >
        Try again
      </button>
    </div>
  );
}
