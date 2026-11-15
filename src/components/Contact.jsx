import { useLanguage } from "../context/LanguageContext";
import { phone, socials } from "../contact.js";
import { HaragDivider } from "./Icons";

export default function Contact() {
  const { lang } = useLanguage();
  const activeSocials = socials.filter((s) => s.href);

  return (
    <section id="contact" className="border-t border-umber/15 bg-paper py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
          {lang === "am" ? "ያግኙን" : "Get in Touch"}
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
          {lang === "am" ? "አድራሻና ማኅበራዊ ትስስር" : "Contact & Editorial Support"}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-umber max-w-xl mx-auto">
          {lang === "am"
            ? "ስለ መጻሕፍት፣ ክፍያ፣ የቅጂ መብት ወይም የመጽሐፍ ሕትመት ጥያቄ ካለዎት በደስታ እናስተናግዳለን።"
            : "Questions about a title, rights verification, payment inquiry, or publishing your manuscript? We are here to help."}
        </p>

        <HaragDivider className="my-6" />

        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <a
            href={`tel:${phone.href}`}
            className="inline-flex items-center gap-3 rounded-full border-2 border-gold/40 bg-parchment px-6 py-3 font-serif text-lg sm:text-xl font-bold text-ink shadow-sm transition hover:border-gold hover:text-gold-dark"
          >
            <span>📞</span>
            <span>{phone.display}</span>
          </a>

          {activeSocials.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {activeSocials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-umber/20 bg-parchment px-5 py-2 text-xs font-semibold text-umber transition hover:border-ink hover:text-ink hover:bg-paper"
                >
                  {s.name === "Telegram" && "✈️ "}
                  {s.name === "Facebook" && "📘 "}
                  {s.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
