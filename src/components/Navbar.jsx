import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "./Icons";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.catalog, href: "#catalog" },
    { label: t.nav.readerDemo, href: "#reader-demo" },
    { label: t.nav.security, href: "#security" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.payments, href: "#payments" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-umber/15 bg-parchment/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl font-bold tracking-tight text-ink transition group-hover:text-gold-dark">
            {t.nav.brand}
          </span>
          <span className="font-serif text-xs font-semibold px-2 py-0.5 rounded bg-gold/15 text-gold-dark">
            {t.nav.geezSubtitle}
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-umber transition hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            type="button"
            className="flex items-center gap-1.5 rounded-full border border-umber/20 bg-paper px-3 py-1.5 text-xs font-semibold text-umber transition hover:border-gold hover:text-ink cursor-pointer"
            title="Switch Language"
          >
            <GlobeAltIcon className="w-3.5 h-3.5 text-gold-dark" />
            <span>{t.nav.langSwitch}</span>
          </button>

          {/* Desktop CTA */}
          <a
            href="#waitlist"
            className="hidden sm:inline-flex rounded-full bg-ink px-4 py-2 text-xs font-semibold text-parchment shadow-sm transition hover:bg-umber"
          >
            {t.nav.waitlistBtn}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-ink hover:text-gold-dark rounded-lg cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-umber/15 bg-paper px-6 py-6 shadow-xl animate-in fade-in duration-200">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-umber hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-umber/10">
              <a
                href="#waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center rounded-full bg-ink py-2.5 text-xs font-semibold text-parchment"
              >
                {t.nav.waitlistBtn}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
