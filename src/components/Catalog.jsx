import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { sampleCatalog } from "../data/catalog";
import { SearchIcon, ShieldCheckIcon, BookOpenIcon, XMarkIcon, HaragDivider } from "./Icons";

export default function Catalog() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewBook, setPreviewBook] = useState(null);

  const categories = [
    { key: "all", label: t.catalog.filterAll },
    { key: "historical", label: t.catalog.filterHistorical },
    { key: "geez", label: t.catalog.filterGeez },
    { key: "religious", label: t.catalog.filterReligious },
  ];

  const filteredBooks = useMemo(() => {
    return sampleCatalog.filter((book) => {
      const matchesCategory =
        activeCategory === "all" || book.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        book.titleEn.toLowerCase().includes(q) ||
        book.titleAm.includes(q) ||
        book.authorEn.toLowerCase().includes(q) ||
        book.authorAm.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            {t.catalog.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
            {t.catalog.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-umber">
            {t.catalog.subtitle}
          </p>
        </div>

        <HaragDivider className="my-8" />

        {/* Filters & Search Toolbar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveCategory(c.key)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                  activeCategory === c.key
                    ? "bg-ink text-parchment shadow"
                    : "border border-umber/20 bg-parchment text-umber hover:border-gold hover:text-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.catalog.searchPlaceholder}
              className="w-full rounded-full border border-umber/20 bg-parchment py-2 pl-9 pr-4 text-xs text-ink outline-none transition focus:border-gold focus:bg-paper"
            />
            <SearchIcon className="absolute left-3 top-2.5 w-3.5 h-3.5 text-umber/50" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-umber/60 hover:text-ink cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Books Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => {
            const title = lang === "am" ? book.titleAm : book.titleEn;
            const subtitle = lang === "am" ? book.subtitleAm : book.subtitleEn;
            const author = lang === "am" ? book.authorAm : book.authorEn;
            const era = lang === "am" ? book.eraAm : book.eraEn;

            return (
              <article
                key={book.id}
                className="flex flex-col justify-between rounded-2xl border border-umber/15 bg-parchment p-5 shadow-sm transition hover:shadow-lg hover:border-gold/50 group"
              >
                <div>
                  {/* Book Cover Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gold/30 bg-paper shadow-inner flex items-center justify-center">
                    <img
                      src={book.cover}
                      alt={title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-103"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-paper/90 backdrop-blur-sm border border-gold/40 px-2 py-0.5 text-[10px] font-bold text-gold-dark shadow-xs">
                        <ShieldCheckIcon className="w-3 h-3" />
                        {t.catalog.verifiedBadge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Metadata */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[11px] text-umber">
                      <span className="font-medium text-gold-dark">{era}</span>
                      <span>
                        {book.pages} {t.catalog.pages}
                      </span>
                    </div>

                    <h3 className="mt-2 font-serif text-lg font-bold text-ink group-hover:text-gold-dark transition line-clamp-1">
                      {title}
                    </h3>

                    <p className="font-serif text-xs text-crimson font-medium">
                      {book.titleAm !== title && book.titleAm}
                    </p>

                    <p className="mt-1 text-xs text-umber line-clamp-2">
                      {subtitle}
                    </p>

                    <p className="mt-2 text-[11px] text-umber/80 italic">
                      {author}
                    </p>
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="mt-6 pt-4 border-t border-umber/15 flex items-center justify-between gap-2">
                  <div>
                    <span className="font-serif text-sm font-bold text-ink">
                      {book.priceEtb}
                    </span>
                    <span className="ml-1 text-[11px] text-umber font-mono">
                      / {book.priceUsd}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPreviewBook(book)}
                      className="rounded-full border border-umber/25 bg-paper px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-gold hover:text-gold-dark cursor-pointer"
                    >
                      {t.catalog.previewBtn}
                    </button>
                    <a
                      href="#waitlist"
                      className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-parchment transition hover:bg-umber"
                    >
                      {t.catalog.buyBtn}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sample Preview Modal */}
        {previewBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl border-2 border-gold/40 bg-paper p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-umber/15 pb-4">
                <div>
                  <span className="text-xs font-semibold text-gold-dark flex items-center gap-1.5">
                    <ShieldCheckIcon className="w-4 h-4" />
                    {t.catalog.verifiedBadge} · {previewBook.eraEn}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-ink">
                    {lang === "am" ? previewBook.titleAm : previewBook.titleEn}
                  </h3>
                  <p className="font-serif text-xs text-crimson">
                    {previewBook.titleAm}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewBook(null)}
                  className="rounded-full p-1.5 text-umber hover:bg-parchment hover:text-ink cursor-pointer"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Watermarked Sample Excerpt */}
              <div className="relative my-6 rounded-xl border border-umber/15 bg-parchment p-6 select-disabled watermark-overlay">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25 select-none">
                  <span className="rotate-[-25deg] text-xs font-mono font-bold tracking-widest text-gold-dark">
                    SAMPLE PREVIEW · LICENSED BY KINE GEEZ
                  </span>
                </div>

                <h4 className="font-serif text-crimson font-bold text-sm mb-3">
                  ግዕዝ (Original Manuscript Text)
                </h4>
                <p className="font-serif text-sm leading-relaxed text-ink text-justify mb-4">
                  {previewBook.excerptGeez}
                </p>

                <h4 className="font-serif text-gold-dark font-bold text-xs uppercase mb-1">
                  {lang === "am" ? "የአማርኛ ትርጉም" : "English Translation"}
                </h4>
                <p className="text-xs leading-relaxed text-umber text-justify">
                  {lang === "am" ? previewBook.excerptAm : previewBook.excerptEn}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-umber/15 pt-4 text-xs text-umber">
                <span>{t.catalog.sampleNotice}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPreviewBook(null)}
                    className="rounded-full border border-umber/30 px-4 py-2 font-medium hover:bg-parchment cursor-pointer"
                  >
                    {t.catalog.modalClose}
                  </button>
                  <a
                    href="#waitlist"
                    onClick={() => setPreviewBook(null)}
                    className="rounded-full bg-ink px-5 py-2 font-semibold text-parchment hover:bg-umber cursor-pointer"
                  >
                    {t.catalog.buyBtn} ({previewBook.priceEtb})
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
