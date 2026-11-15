import { useLanguage } from "../context/LanguageContext";
import { ShieldCheckIcon, TelebirrBadge, StripeBadge, HaragDivider } from "./Icons";

export default function Payments() {
  const { t } = useLanguage();

  return (
    <section id="payments" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            {t.payments.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
            {t.payments.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-umber">
            {t.payments.subtitle}
          </p>
        </div>

        <HaragDivider className="my-8" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Telebirr Card */}
          <div className="rounded-2xl border-2 border-[#0081C9]/30 bg-parchment p-8 shadow-sm transition hover:shadow-md hover:border-[#0081C9]">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xs font-bold text-[#0081C9] uppercase tracking-wider">
                Domestic (Ethiopia)
              </span>
              <TelebirrBadge />
            </div>

            <h3 className="mt-4 font-serif text-xl font-bold text-ink">
              {t.payments.telebirrTitle}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-umber">
              {t.payments.telebirrDesc}
            </p>

            <ul className="mt-6 space-y-2 text-xs text-umber">
              <li className="flex items-center gap-2">
                <span className="text-gold-dark">✓</span> Settled in Ethiopian Birr (ETB)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-dark">✓</span> Instant server callback & entitlement activation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-dark">✓</span> Supported on all mobile networks in Ethiopia
              </li>
            </ul>
          </div>

          {/* Stripe Card */}
          <div className="rounded-2xl border-2 border-[#635BFF]/30 bg-parchment p-8 shadow-sm transition hover:shadow-md hover:border-[#635BFF]">
            <div className="flex items-center justify-between">
              <span className="font-serif text-xs font-bold text-[#635BFF] uppercase tracking-wider">
                International (Diaspora)
              </span>
              <StripeBadge />
            </div>

            <h3 className="mt-4 font-serif text-xl font-bold text-ink">
              {t.payments.stripeTitle}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-umber">
              {t.payments.stripeDesc}
            </p>

            <ul className="mt-6 space-y-2 text-xs text-umber">
              <li className="flex items-center gap-2">
                <span className="text-gold-dark">✓</span> Pay in USD, EUR, GBP, or CAD
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-dark">✓</span> Visa, Mastercard, American Express, Apple Pay
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-dark">✓</span> Cryptographic webhook signature verification
              </li>
            </ul>
          </div>
        </div>

        {/* Security Guarantee Box */}
        <div className="mt-8 rounded-xl border border-umber/20 bg-parchment p-5 text-center text-xs text-umber">
          <div className="inline-flex items-center gap-2 font-medium">
            <ShieldCheckIcon className="w-4 h-4 text-gold-dark" />
            <span>{t.payments.securityGuarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
