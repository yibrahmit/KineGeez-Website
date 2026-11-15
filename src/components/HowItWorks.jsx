import { useLanguage } from "../context/LanguageContext";
import { DevicePhoneMobileIcon, BookOpenIcon, HaragDivider } from "./Icons";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-ink py-20 text-parchment">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {t.howItWorks.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-parchment/70 leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {t.howItWorks.steps.map((s) => (
            <li
              key={s.num}
              className="relative border-t border-gold/40 pt-6 transition group hover:border-gold"
            >
              <span className="font-serif text-3xl font-bold text-gold">
                {s.num}
              </span>
              <h3 className="mt-3 font-serif text-lg font-bold text-parchment group-hover:text-gold transition">
                {s.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-parchment/70">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        {/* Platform Roadmap Badges */}
        <div className="mt-16 rounded-2xl border border-gold/30 bg-paper/5 p-6 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">
              {t.howItWorks.roadmapTitle}
            </span>
            <div className="flex flex-wrap gap-3 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3.5 py-1 text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t.howItWorks.webStatus}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 border border-gold/30 px-3.5 py-1 text-gold">
                <DevicePhoneMobileIcon className="w-3.5 h-3.5" />
                {t.howItWorks.androidStatus}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-parchment/10 border border-parchment/20 px-3.5 py-1 text-parchment/70">
                <DevicePhoneMobileIcon className="w-3.5 h-3.5" />
                {t.howItWorks.iosStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
