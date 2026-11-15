import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EyeWatermarkIcon, LockClosedIcon, ShieldCheckIcon, HaragDivider } from "./Icons";

export default function ReaderDemo() {
  const { t } = useLanguage();
  const [fontStyle, setFontStyle] = useState("serif"); // serif or sans
  const [fontSize, setFontSize] = useState(18); // 16 to 24
  const [activeTab, setActiveTab] = useState("geez"); // geez, amharic, english
  const [showWatermark, setShowWatermark] = useState(true);

  const excerptGeez = `በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ። ዝንቱ መጽሐፍ ዘይትበሃል ማኅደረ ወለዶ ዘተወልዱ እምቀዳማዊ ምኒልክ እስከ ዘመነ ዳግማዊ ምኒልክ ንጉሠ ነገሥት ዘኢትዮጵያ። ወዝንቱ ውእቱ ሠናይ ዜና ዘይትነበብ በኵሉ አዝማናት ወበትውልድ ዘይመጽእ ከመ ያእምሩ ሥርዓተ አበዊሆሙ ወከመ ኢይስሐቱ ፍኖተ ጽድቅ።

ወበውእቱ መዋዕል ተጋብኡ ሊቃውንተ ቤተ መንግሥት ወካህናት ዘደብረ ጽዮን፤ ወአስተጋብኡ ዜና ኲሎሙ ነገሥታት ዘኀለፉ እለ ገብሩ ሠናየ ቅድመ እግዚአብሔር ወእለ ሐነጹ አብያተ ክርስቲያናት ወአጽንዑ ሃይማኖተ ርትዕት።`;

  const excerptAm = `በስመ አብ ወወልድ ወመንፈስ ቅዱስ አሐዱ አምላክ። ይህ መጽሐፍ ማኅደረ ወለዶ ይባላል፤ ከቀዳማዊ ምኒልክ ጀምሮ እስከ ዳግማዊ ምኒልክ ንጉሠ ነገሥት ዘኢትዮጵያ ድረስ የተወለዱትን የዘር ሐረግና ታሪክ ይመዘግባል። ይህም ለመጪው ትውልድ የአባቶችን ታሪክ፣ ሥርዓትና የጽድቅ መንገድ ለማሳወቅ የተዘጋጀ ነው።

በዚያም ዘመን የቤተ መንግሥቱ የታሪክ ሊቃውንትና የጽዮን ካህናት በአንድነት ተሰብስበው በእግዚአብሔር ፊት ቅን የሠሩትን፣ አብያተ ክርስቲያናትን ያነጹትንና የቀናች ሃይማኖትን ያጸኑትን ያለፉት ነገሥታት ዜና መዋዕል በሰነድ አሰባሰቡ።`;

  const excerptEn = `In the name of the Father, and of the Son, and of the Holy Spirit, one God. This is the volume entitled 'Mahder Weledo', recording the lineages and chronicles from Emperor Menelik I through the reign of Emperor Menelik II of Ethiopia. It is set down so that coming generations may comprehend the lawful traditions of their forebears and remain steadfast.

During those days, the senior scribes of the imperial court and the clergy assembled the accounts of all monarchs who walked uprightly, founded sanctuaries, and preserved the heritage of the realm.`;

  return (
    <section id="reader-demo" className="border-y border-umber/15 bg-paper py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            {t.readerDemo.tag}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
            {t.readerDemo.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-umber">
            {t.readerDemo.subtitle}
          </p>
        </div>

        <HaragDivider className="my-8" />

        {/* Reader Container Mockup */}
        <div className="relative mt-8 rounded-2xl border-2 border-umber/20 bg-parchment shadow-2xl overflow-hidden">
          {/* Reader Top App Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-umber/15 bg-paper/90 px-6 py-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-red-400/80" />
              <span className="flex h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="flex h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-serif font-semibold text-ink text-sm">
                {t.readerDemo.sampleTitle}
              </span>
            </div>

            {/* Reader Controls Toolbar */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Language Excerpt Tabs */}
              <div className="flex rounded-lg bg-parchment p-1 border border-umber/15">
                <button
                  type="button"
                  onClick={() => setActiveTab("geez")}
                  className={`rounded px-2.5 py-1 font-serif text-xs font-semibold transition cursor-pointer ${
                    activeTab === "geez" ? "bg-ink text-parchment shadow" : "text-umber hover:text-ink"
                  }`}
                >
                  ግዕዝ (Ge'ez)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("amharic")}
                  className={`rounded px-2.5 py-1 font-serif text-xs font-semibold transition cursor-pointer ${
                    activeTab === "amharic" ? "bg-ink text-parchment shadow" : "text-umber hover:text-ink"
                  }`}
                >
                  አማርኛ (Amharic)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("english")}
                  className={`rounded px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                    activeTab === "english" ? "bg-ink text-parchment shadow" : "text-umber hover:text-ink"
                  }`}
                >
                  English
                </button>
              </div>

              {/* Font Selector */}
              <div className="flex items-center gap-1 border border-umber/15 rounded-lg px-2 py-1 bg-parchment">
                <button
                  type="button"
                  onClick={() => setFontStyle("serif")}
                  className={`px-2 py-0.5 rounded font-serif text-xs ${
                    fontStyle === "serif" ? "font-bold text-gold-dark" : "text-umber"
                  }`}
                  title="Noto Serif Ethiopic"
                >
                  Serif
                </button>
                <span className="text-umber/30">|</span>
                <button
                  type="button"
                  onClick={() => setFontStyle("sans")}
                  className={`px-2 py-0.5 rounded font-sans text-xs ${
                    fontStyle === "sans" ? "font-bold text-gold-dark" : "text-umber"
                  }`}
                  title="Noto Sans Ethiopic"
                >
                  Sans
                </button>
              </div>

              {/* Font Size Zoom */}
              <div className="flex items-center gap-1.5 text-xs text-umber">
                <button
                  type="button"
                  onClick={() => setFontSize((prev) => Math.max(14, prev - 1))}
                  className="rounded px-2 py-1 border border-umber/20 hover:bg-paper cursor-pointer font-bold"
                  title="Decrease Font Size"
                >
                  A-
                </button>
                <span className="text-[11px] font-mono">{fontSize}px</span>
                <button
                  type="button"
                  onClick={() => setFontSize((prev) => Math.min(26, prev + 1))}
                  className="rounded px-2 py-1 border border-umber/20 hover:bg-paper cursor-pointer font-bold"
                  title="Increase Font Size"
                >
                  A+
                </button>
              </div>

              {/* Watermark Toggle */}
              <button
                type="button"
                onClick={() => setShowWatermark(!showWatermark)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 border text-xs font-medium cursor-pointer ${
                  showWatermark
                    ? "border-gold bg-gold/15 text-gold-dark"
                    : "border-umber/20 text-umber"
                }`}
                title="Toggle Watermark Visibility Simulation"
              >
                <EyeWatermarkIcon className="w-3.5 h-3.5" />
                <span>Watermark</span>
              </button>
            </div>
          </div>

          {/* Reader Canvas Area with Dynamic Personalized Watermark */}
          <div className="relative p-8 sm:p-12 min-h-[380px] bg-paper select-disabled watermark-overlay">
            {/* Dynamic Watermark Repeating Overlay */}
            {showWatermark && (
              <div
                className="pointer-events-none absolute inset-0 flex flex-col justify-around items-center opacity-30 select-none overflow-hidden"
                aria-hidden="true"
              >
                <div className="rotate-[-22deg] text-xs md:text-sm font-mono tracking-widest text-gold-dark font-bold whitespace-nowrap">
                  {t.readerDemo.watermarkText}
                </div>
                <div className="rotate-[-22deg] text-xs md:text-sm font-mono tracking-widest text-gold-dark font-bold whitespace-nowrap">
                  {t.readerDemo.watermarkText}
                </div>
                <div className="rotate-[-22deg] text-xs md:text-sm font-mono tracking-widest text-gold-dark font-bold whitespace-nowrap">
                  {t.readerDemo.watermarkText}
                </div>
              </div>
            )}

            {/* Text Excerpt Body */}
            <div
              className={`max-w-2xl mx-auto transition-all ${
                fontStyle === "serif" ? "font-serif" : "font-sans"
              }`}
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.85 }}
            >
              {/* Traditional Red Rubric Heading (ቀይ ርእስ) */}
              <h3 className="font-serif font-bold text-crimson text-xl mb-4 border-b border-crimson/20 pb-2">
                {activeTab === "geez" && "ክፍል ፩ ፨ ዘማኅደረ ወለዶ ነገሥት"}
                {activeTab === "amharic" && "ምዕራፍ ፩ ፨ የነገሥታቱ የዘር ሐረግ ታሪክ"}
                {activeTab === "english" && "Chapter 1 ፨ The Genealogies of the Kings"}
              </h3>

              <div className="text-ink space-y-4 whitespace-pre-line text-justify">
                {activeTab === "geez" && excerptGeez}
                {activeTab === "amharic" && excerptAm}
                {activeTab === "english" && excerptEn}
              </div>
            </div>
          </div>

          {/* Reader Bottom Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-umber/15 bg-paper px-6 py-3.5 text-xs text-umber">
            <div className="flex items-center gap-2">
              <LockClosedIcon className="w-4 h-4 text-gold-dark" />
              <span>{t.readerDemo.antiCopyNotice}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px]">{t.readerDemo.pageOf}</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  className="rounded px-2.5 py-1 border border-umber/20 opacity-50 cursor-not-allowed"
                  disabled
                >
                  {t.readerDemo.prevPage}
                </button>
                <button
                  type="button"
                  className="rounded px-2.5 py-1 border border-umber/20 opacity-50 cursor-not-allowed"
                  disabled
                >
                  {t.readerDemo.nextPage}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Highlight Pill */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs text-gold-dark font-medium">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>
              Real reader applies server-authorized page streams, non-reusable tokens, and per-account watermarking.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
