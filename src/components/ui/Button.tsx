import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/ui/Icons";

const variants = {
  primary:
    "bg-plum text-white hover:bg-plum-dark border border-plum",
  secondary:
    "bg-card text-ink border border-line hover:border-plum/40",
  outline:
    "bg-card text-ink border border-line hover:border-plum",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
  className?: string;
  analytics?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  analytics,
}: ButtonProps) {
  return (
    <Link
      href={href}
      data-cta={analytics ? "true" : undefined}
      data-cta-location={analytics}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      {arrow ? <ArrowRight className="h-4 w-4" /> : null}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  analytics,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  analytics?: string;
}) {
  return (
    <Link
      href={href}
      data-cta={analytics ? "true" : undefined}
      data-cta-location={analytics}
      className={`inline-flex items-center gap-2 text-sm font-medium text-plum hover:text-plum-dark ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
