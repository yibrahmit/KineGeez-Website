import { useLanguage } from "../context/LanguageContext";
import { ShieldCheckIcon, LockClosedIcon, TelebirrBadge, StripeBadge } from "./Icons";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            {t.features.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
            {t.features.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-umber">
            {t.features.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.features.items.map((f) => (
            <article
              key={f.id}
              className="relative rounded-2xl border border-umber/15 bg-parchment p-8 shadow-sm transition hover:shadow-md hover:border-gold/50 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-gold-dark px-2.5 py-1 rounded bg-gold/15">
                  {f.id}
                </span>
                <div className="w-2 h-2 rounded-full bg-gold-dark/40 group-hover:bg-gold-dark transition" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-umber">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
