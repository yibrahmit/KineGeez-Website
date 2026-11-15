import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ChevronDownIcon, HaragDivider } from "./Icons";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="border-t border-umber/15 bg-paper py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            {t.faq.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-umber">
            {t.faq.subtitle}
          </p>
        </div>

        <HaragDivider className="my-8" />

        <div className="mt-10 space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-umber/15 bg-parchment transition hover:border-gold/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-sm sm:text-base font-serif font-bold text-ink cursor-pointer focus:outline-none"
                >
                  <span className="pr-4">{item.q}</span>
                  <span
                    className={`transform transition-transform duration-200 text-gold-dark ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-umber/10 px-6 pt-3 pb-6 text-xs sm:text-sm leading-relaxed text-umber animate-in fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
