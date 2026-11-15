import { useLanguage } from "../context/LanguageContext";
import { CheckIcon, ShieldCheckIcon, BookOpenIcon, TelebirrBadge, StripeBadge } from "./Icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-20 md:py-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
        {/* Left Column: Text & CTAs */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold-dark mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-umber max-w-xl">
            {t.hero.subtitle}
          </p>

          {/* Quick Trust Checks */}
          <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-umber/90 font-medium">
            {t.hero.trustPillars.map((pillar, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                  <CheckIcon className="w-3.5 h-3.5" />
                </span>
                <span>{pillar}</span>
              </li>
            ))}
          </ul>

          {/* CTAs & Payment support */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-parchment shadow-md transition hover:bg-umber cursor-pointer"
            >
              {t.hero.browseBtn}
            </a>
            <a
              href="#reader-demo"
              className="inline-flex items-center justify-center rounded-full border border-umber/30 bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold-dark cursor-pointer"
            >
              <BookOpenIcon className="w-4 h-4 mr-2 text-gold-dark" />
              {t.hero.demoBtn}
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-umber/15 flex items-center gap-4 flex-wrap text-xs text-umber">
            <span className="font-medium">Supported Payments:</span>
            <div className="flex items-center gap-2">
              <TelebirrBadge />
              <StripeBadge />
            </div>
          </div>
        </div>

        {/* Right Column: Book Visual Showcase */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm">
            {/* Decorative layered glow */}
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gold/20 blur-md transform -rotate-1" />
            
            <div className="relative rounded-2xl border-2 border-gold/40 bg-paper p-3 shadow-2xl transition hover:shadow-gold/20">
              <div className="overflow-hidden rounded-xl border border-umber/10">
                <img
                  src="/kinegeez-mahder-weledo.png"
                  alt="Mahder Weledo, historical manuscript"
                  className="w-full object-cover shadow-sm transition duration-300 hover:scale-102"
                />
              </div>

              {/* Overlay Badge */}
              <div className="mt-3 flex items-center justify-between px-2 py-1.5 text-xs text-umber">
                <span className="font-serif font-semibold text-ink flex items-center gap-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-gold-dark" />
                  {t.hero.bookCaption}
                </span>
                <span className="rounded bg-paper border border-gold/30 px-2 py-0.5 text-[11px] font-medium text-gold-dark">
                  Verified DRM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
