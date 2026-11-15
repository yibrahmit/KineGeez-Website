import { useLanguage } from "../context/LanguageContext";
import { ShieldCheckIcon, CheckIcon, HaragDivider } from "./Icons";

export default function AuthorCTA() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-umber/15 bg-parchment py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border-2 border-gold/40 bg-paper p-8 sm:p-12 shadow-md">
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                {t.authorCTA.tag}
              </span>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-ink">
                {t.authorCTA.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-umber">
                {t.authorCTA.subtitle}
              </p>

              <ul className="mt-6 space-y-2 text-xs sm:text-sm text-umber">
                {t.authorCTA.perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-2.5 font-medium">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                      <CheckIcon className="w-3 h-3" />
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-center justify-center">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center rounded-full bg-ink px-6 py-3.5 text-xs sm:text-sm font-semibold text-parchment shadow-md transition hover:bg-umber cursor-pointer"
              >
                {t.authorCTA.btn}
              </a>
              <span className="mt-3 text-[11px] text-umber/80 text-center">
                Confidential rights review & editorial support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
