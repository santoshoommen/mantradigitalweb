import Image from "next/image";

export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/mantra-logo.png"
      alt="Mantra Digital Magic Ltd"
      width={707}
      height={270}
      priority
      className={className}
    />
  );
}
