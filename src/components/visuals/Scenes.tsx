import Image from "next/image";
import Link from "next/link";

function Plant({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden>
      <path d="M78 210c8-28 6-52 2-78" stroke="#6e8b72" strokeWidth="3" fill="none" />
      <path d="M80 150c-28-8-48-28-52-52 24 2 42 16 52 40Z" fill="#7d9a7a" />
      <path d="M82 132c26-18 52-18 68-6-18 16-40 22-68 18Z" fill="#9bb59a" />
      <path d="M76 112c-22-24-24-48-12-66 20 14 30 36 28 62Z" fill="#5f7d62" />
      <path d="M86 104c18-28 42-36 60-28-10 24-30 38-56 40Z" fill="#86a484" />
      <ellipse cx="80" cy="196" rx="28" ry="8" fill="#e7d3c4" />
      <path d="M62 168h36c4 16 2 28-2 36H66c-6-10-8-22-4-36Z" fill="#f4f0ec" />
    </svg>
  );
}

export function HeroDevices() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-[580px] sm:h-[520px]">
      <div className="absolute right-[-6%] top-[10%] h-[72%] w-[72%] rounded-full bg-[#f3e4df]" aria-hidden />
      <Plant className="absolute right-[-2%] top-[-2%] hidden h-32 w-24 sm:block" />

      <div className="absolute top-4 left-0 w-[82%] rounded-[1.15rem] bg-[#2c333b] p-2 shadow-[0_28px_60px_rgba(32,40,56,0.16)] sm:p-2.5">
        <div className="overflow-hidden rounded-[0.65rem] bg-[#f4f1ec]">
          <Image
            src="/work/chiltern-wellbeing-desktop-2.jpg"
            alt="The Chiltern Wellbeing website, shown on a laptop"
            width={1024}
            height={512}
            priority
            className="h-auto w-full"
          />
        </div>
        <div className="mx-auto mt-1.5 h-2 w-20 rounded-b-md bg-[#1d232a]" />
      </div>

      <div className="absolute top-[9.5rem] right-0 w-[146px] rounded-[1.45rem] bg-[#1c2228] p-[6px] shadow-[0_20px_40px_rgba(32,40,56,0.2)] sm:top-[10.75rem] sm:w-[164px]">
        <div className="overflow-hidden rounded-[1.15rem] bg-[#f4f1ec]">
          <Image
            src="/work/chiltern-wellbeing-mobile-2.png"
            alt="The Chiltern Wellbeing website on a phone"
            width={673}
            height={1006}
            sizes="164px"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <Link
        href="/work/chiltern-wellbeing"
        data-cta="true"
        data-cta-location="hero-chiltern"
        className="absolute top-[12.25rem] left-3 z-20 w-[11.75rem] rounded-2xl bg-white/95 p-3.5 shadow-[0_16px_40px_rgba(32,40,56,0.18)] ring-1 ring-black/5 sm:top-[18.25rem] sm:left-6 sm:w-64"
      >
        <blockquote className="font-serif text-base leading-tight text-ink sm:text-lg">
          “Highest new-patient numbers since we opened”
        </blockquote>
        <p className="mt-2 text-[11px] leading-4 text-muted sm:text-xs">
          Funmi Obi — CEO
          <span className="block">Chiltern Wellbeing Clinic</span>
        </p>
      </Link>

      <div className="absolute bottom-2 left-2 flex items-end gap-1 text-plum sm:bottom-4 sm:left-6">
        <p className="font-script text-[1.65rem] leading-none">
          Real results for
          <br />
          real businesses
        </p>
        <svg viewBox="0 0 96 64" className="mb-1 h-16 w-24 shrink-0" aria-hidden>
          <path
            d="M2 52c18 8 34 0 46-16 9-12 22-26 42-28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M76 2c6 3 10 5 14 6-6 2-9 6-11 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function PartnerScene() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-[#f3e7df]">
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#e7d3bf]" />
      <div className="absolute top-[9%] left-[5%] w-[78%] rounded-2xl bg-[#2c333b] p-1.5 shadow-card sm:p-2">
        <div className="overflow-hidden rounded-lg bg-white">
          <Image
            src="/work/cooklocal-desktop.jpg"
            alt="The Cook Local website"
            width={1024}
            height={500}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 440px, 80vw"
          />
        </div>
      </div>
      <div className="absolute right-[5%] bottom-[-22%] w-[28%] rounded-[1.15rem] bg-[#1c2228] p-[5px] shadow-[0_16px_30px_rgba(32,40,56,0.22)]">
        <div className="overflow-hidden rounded-[0.9rem] bg-white">
          <Image
            src="/work/cooklocal-mobile.jpg"
            alt="The Cook Local app"
            width={471}
            height={1024}
            className="block h-auto w-full"
            sizes="180px"
          />
        </div>
      </div>
    </div>
  );
}

export function ChilternCardArt() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f3f1ea]">
      <Image
        src="/work/chiltern-wellbeing-desktop-2.jpg"
        alt="Chiltern Wellbeing website"
        fill
        sizes="(min-width: 1024px) 380px, 100vw"
        className="object-cover object-left-top"
      />
    </div>
  );
}

export function ChilternCaseHero() {
  return (
    <div className="bg-[#f6f3ee]">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[1.45fr_0.55fr]">
        <Image
          src="/work/chiltern-wellbeing-desktop-2.jpg"
          alt="Chiltern Wellbeing website homepage"
          width={1024}
          height={512}
          priority
          className="w-full rounded-2xl shadow-card"
        />
        <Image
          src="/work/chiltern-wellbeing-mobile-2.png"
          alt="Chiltern Wellbeing website on a phone"
          width={673}
          height={1006}
          className="mx-auto h-auto w-full max-w-[280px] rounded-[1.6rem] shadow-card"
        />
      </div>
    </div>
  );
}

export function CookLocalCardArt() {
  return (
    <div className="relative h-full overflow-hidden bg-white">
      <Image
        src="/work/cooklocal-desktop.jpg"
        alt="Cook Local website"
        fill
        sizes="(min-width: 1024px) 380px, 100vw"
        className="object-cover object-left-top"
      />
    </div>
  );
}

export function CookLocalCaseHero() {
  return (
    <div className="bg-[#f6f3ee]">
      <div className="mx-auto grid max-w-6xl items-end gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[1.35fr_0.65fr]">
        <Image
          src="/work/cooklocal-desktop.jpg"
          alt="Cook Local website homepage"
          width={1024}
          height={500}
          priority
          className="w-full rounded-2xl shadow-card"
        />
        <div className="mx-auto w-full max-w-[250px] rounded-[1.7rem] bg-[#1c2228] p-[7px] shadow-card">
          <div className="overflow-hidden rounded-[1.3rem] bg-white">
            <Image
              src="/work/cooklocal-mobile.jpg"
              alt="Cook Local app on a phone"
              width={471}
              height={1024}
              className="block h-auto w-full"
              sizes="250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenshotCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f7f4f1]">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 380px, 100vw" className="object-contain object-center" />
    </div>
  );
}

function ScreenshotCaseHero({
  desktopSrc,
  desktopWidth,
  desktopHeight,
  desktopAlt,
  mobileSrc,
  mobileWidth,
  mobileHeight,
  mobileAlt,
}: {
  desktopSrc: string;
  desktopWidth: number;
  desktopHeight: number;
  desktopAlt: string;
  mobileSrc: string;
  mobileWidth: number;
  mobileHeight: number;
  mobileAlt: string;
}) {
  return (
    <div className="bg-[#f6f3ee]">
      <div className="mx-auto grid max-w-6xl items-end gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[1.35fr_0.65fr]">
        <Image
          src={desktopSrc}
          alt={desktopAlt}
          width={desktopWidth}
          height={desktopHeight}
          priority
          className="h-auto w-full rounded-2xl shadow-card"
        />
        <div className="mx-auto w-full max-w-[250px] rounded-[1.7rem] bg-[#1c2228] p-[7px] shadow-card">
          <div className="overflow-hidden rounded-[1.3rem] bg-white">
            <Image
              src={mobileSrc}
              alt={mobileAlt}
              width={mobileWidth}
              height={mobileHeight}
              className="block h-auto w-full"
              sizes="250px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function OnlineArtzCardArt() {
  return <ScreenshotCard src="/work/onlineartz-desktop-2.jpg" alt="OnlineArtz website" />;
}

export function OnlineArtzCaseHero() {
  return (
    <ScreenshotCaseHero
      desktopSrc="/work/onlineartz-desktop-2.jpg"
      desktopWidth={1024}
      desktopHeight={509}
      desktopAlt="OnlineArtz website homepage"
      mobileSrc="/work/onlineartz-mobile.jpg"
      mobileWidth={682}
      mobileHeight={1019}
      mobileAlt="OnlineArtz website on a phone"
    />
  );
}

export function StillLife() {
  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem] bg-[#f3e6df] sm:aspect-[4/3]">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#edd9cc]" />
      <div className="absolute left-[8%] top-[22%] h-[46%] w-[42%] rounded-md bg-[#2c333b]" />
      <div className="absolute bottom-[18%] left-[18%] h-[34%] w-[46%] rotate-[-8deg] rounded-sm bg-[#f7f1ea] shadow-card">
        <div className="mx-5 mt-4 h-px bg-line" />
        <div className="mx-5 mt-3 h-px bg-line" />
        <div className="mx-5 mt-3 h-px bg-line" />
        <div className="mx-5 mt-3 h-px bg-line" />
      </div>
      <div className="absolute bottom-[20%] left-[30%] h-2 w-24 rotate-[-20deg] rounded-full bg-[#202838]" />
      <div className="absolute bottom-[22%] right-[18%] h-28 w-24">
        <div className="absolute bottom-0 left-1/2 h-20 w-16 -translate-x-1/2 rounded-b-2xl rounded-t-md bg-white shadow-card" />
        <div className="absolute bottom-[4.2rem] left-1/2 h-3 w-[4.4rem] -translate-x-1/2 rounded-full bg-[#f7f4f1] ring-1 ring-line" />
        <svg viewBox="0 0 24 24" className="absolute bottom-8 left-1/2 h-5 w-5 -translate-x-1/2 text-plum" aria-hidden>
          <path fill="currentColor" d="M12 2.2 13.6 9.2 20.8 11 13.6 12.8 12 19.8 10.4 12.8 3.2 11 10.4 9.2Z" />
        </svg>
      </div>
      <Plant className="absolute -right-3 top-2 h-28 w-20" />
    </div>
  );
}

export function projectArt(slug: string) {
  if (slug === "chiltern-wellbeing") return <ChilternCardArt />;
  if (slug === "cook-local") return <CookLocalCardArt />;
  if (slug === "onlineartz") return <OnlineArtzCardArt />;
  return <OnlineArtzCardArt />;
}
