import { useLanguage } from "../context/LanguageContext";
import { phone, socials } from "../contact.js";
import { ShieldCheckIcon, PhoneIcon, SocialIcon } from "./Icons";

export default function Footer() {
  const { lang, t } = useLanguage();
  const activeSocials = socials.filter((s) => s.href);

  return (
    <footer className="border-t border-umber/15 bg-parchment pt-12 pb-8 text-xs text-umber">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-12 pb-10 border-b border-umber/15">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-ink">
                {t.nav.brand}
              </span>
              <span className="font-serif text-xs font-semibold text-gold-dark">
                {t.nav.geezSubtitle}
              </span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-umber/90 max-w-sm">
              {t.footer.about}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-gold-dark font-medium">
              <ShieldCheckIcon className="w-4 h-4 flex-shrink-0" />
              <span>{t.footer.compliance}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif font-bold text-ink text-sm mb-3">
              {t.footer.linksTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-ink transition">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-ink transition">
                  {t.nav.catalog}
                </a>
              </li>
              <li>
                <a href="#reader-demo" className="hover:text-ink transition">
                  {t.nav.readerDemo}
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-ink transition">
                  {t.nav.security}
                </a>
              </li>
              <li>
                <a href="#payments" className="hover:text-ink transition">
                  {t.nav.payments}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ink transition">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-serif font-bold text-ink text-sm mb-3">
              {t.footer.contactTitle}
            </h4>
            <p className="mb-2">
              <a
                href={`tel:${phone.href}`}
                className="inline-flex items-center gap-2 font-semibold text-ink hover:text-gold-dark transition"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-gold-dark" />
                <span>{phone.display}</span>
              </a>
            </p>

            {/* Social Links with Logos */}
            <div className="flex flex-wrap gap-2 mt-3">
              {activeSocials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-umber/20 px-3 py-1.5 text-xs text-umber transition hover:border-gold hover:text-ink hover:bg-paper group"
                >
                  <span className="text-umber/75 group-hover:text-gold-dark transition">
                    <SocialIcon name={s.name} className="w-3.5 h-3.5" />
                  </span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-umber/75">
              {t.footer.rightsNotice}
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-umber/80">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>
            Security-First Historical Books & Ge’ez Digital Library Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
