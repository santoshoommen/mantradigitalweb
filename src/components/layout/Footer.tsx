import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Logo } from "@/components/layout/Logo";
import { IconInstagram, IconLinkedIn, IconMail } from "@/components/ui/Icons";
import { footerCompany, footerServices, legalNav } from "@/lib/content";

export function Footer() {
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink-soft">
            Beautiful websites and digital solutions for ambitious businesses.
          </p>
          <p className="mt-3 text-sm text-muted">Buckinghamshire and across the UK.</p>
          <div className="mt-5 flex items-center gap-3 text-plum">
            {linkedin ? (
              <a href={linkedin} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line" aria-label="Mantra on LinkedIn">
                <IconLinkedIn className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-plum/70" aria-hidden>
                <IconLinkedIn className="h-4 w-4" />
              </span>
            )}
            {instagram ? (
              <a href={instagram} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line" aria-label="Mantra on Instagram">
                <IconInstagram className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-plum/70" aria-hidden>
                <IconInstagram className="h-4 w-4" />
              </span>
            )}
            <Link href="/contact" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line" aria-label="Email Mantra">
              <IconMail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <nav aria-label="Services">
          <h2 className="font-sans text-sm font-semibold text-ink">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {footerServices.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="font-sans text-sm font-semibold text-ink">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            {footerCompany.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold text-ink">Stay inspired</h2>
          <p className="mt-4 text-sm leading-6 text-ink-soft">
            Get occasional tips on websites, digital strategy and AI search.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} Mantra Digital Magic Ltd. All rights reserved.</p>
          <ul className="flex gap-5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
