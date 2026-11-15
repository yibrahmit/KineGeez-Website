import { useLanguage } from "../context/LanguageContext";
import { ShieldCheckIcon, LockClosedIcon, EyeWatermarkIcon, DevicePhoneMobileIcon, HaragDivider } from "./Icons";

export default function SecurityPillars() {
  const { t } = useLanguage();

  const iconMap = [
    EyeWatermarkIcon,
    LockClosedIcon,
    ShieldCheckIcon,
    DevicePhoneMobileIcon,
  ];

  return (
    <section id="security" className="relative border-t border-umber/15 bg-parchment py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            {t.security.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
            {t.security.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-umber">
            {t.security.subtitle}
          </p>
        </div>

        <HaragDivider className="my-8" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {t.security.pillars.map((pillar, idx) => {
            const Icon = iconMap[idx] || ShieldCheckIcon;
            return (
              <div
                key={idx}
                className="flex gap-5 rounded-2xl border border-umber/15 bg-paper p-8 shadow-sm transition hover:shadow-md hover:border-gold/40"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-umber">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Callout Banner */}
        <div className="mt-12 rounded-2xl border border-gold/40 bg-gold/10 p-6 text-xs sm:text-sm text-umber flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <LockClosedIcon className="w-5 h-5 text-gold-dark flex-shrink-0" />
            <span>
              <strong>SRS Technical Principle:</strong> Client-side code suppression (disabling copy/right-click) is merely a deterrent. True security is enforced through air-gapped private object storage, dynamic page streams, and short-lived scoped tokens.
            </span>
          </div>
          <a
            href="#faq"
            className="flex-shrink-0 font-semibold text-gold-dark hover:underline"
          >
            Read Anti-Theft FAQ →
          </a>
        </div>
      </div>
    </section>
  );
}
