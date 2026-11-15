import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CheckIcon, HaragDivider } from "./Icons";

export default function Waitlist() {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("reader");
  const [selectedPlatforms, setSelectedPlatforms] = useState(["Web Portal"]);
  const [status, setStatus] = useState("idle");

  function togglePlatform(p) {
    if (selectedPlatforms.includes(p)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter((item) => item !== p));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, p]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("invalid");
      return;
    }

    // Save lead into localStorage for demo / local persistence
    try {
      const waitlist = JSON.parse(localStorage.getItem("kinegeez_leads") || "[]");
      waitlist.push({
        fullName,
        email,
        role,
        platforms: selectedPlatforms,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("kinegeez_leads", JSON.stringify(waitlist));
    } catch {
      // Ignore local storage error
    }

    setStatus("done");
  }

  return (
    <section id="waitlist" className="bg-parchment py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
          {t.waitlist.tag}
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-ink">
          {t.waitlist.title}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-umber">
          {t.waitlist.subtitle}
        </p>

        <HaragDivider className="my-6" />

        {status === "done" ? (
          <div className="mt-8 rounded-2xl border-2 border-gold/40 bg-paper p-8 shadow-md">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mb-4">
              <CheckIcon className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-ink">
              {t.waitlist.successMsg}
            </h3>
            <p className="mt-2 text-xs text-umber">
              We look forward to welcoming you to the Kine Geez digital reading community.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setEmail("");
                setFullName("");
              }}
              className="mt-6 rounded-full border border-umber/30 px-5 py-2 text-xs font-semibold text-ink hover:bg-parchment cursor-pointer"
            >
              Register Another Contact
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 text-left rounded-2xl border border-umber/15 bg-paper p-6 sm:p-8 shadow-md space-y-5"
          >
            {/* Full Name & Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-umber mb-1.5">
                  {t.waitlist.namePlaceholder}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Abebe Bikila"
                  className="w-full rounded-xl border border-umber/20 bg-parchment px-4 py-2.5 text-xs text-ink outline-none transition focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-umber mb-1.5">
                  {t.waitlist.emailPlaceholder}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-umber/20 bg-parchment px-4 py-2.5 text-xs text-ink outline-none transition focus:border-gold"
                />
              </div>
            </div>

            {/* Role Segmentation */}
            <div>
              <label className="block text-xs font-semibold text-umber mb-2">
                {t.waitlist.roleLabel}
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {t.waitlist.roleOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-xs cursor-pointer transition ${
                      role === opt.value
                        ? "border-gold bg-gold/10 font-bold text-ink"
                        : "border-umber/15 bg-parchment text-umber hover:border-gold/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="userRole"
                      value={opt.value}
                      checked={role === opt.value}
                      onChange={() => setRole(opt.value)}
                      className="accent-gold"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-xs font-semibold text-umber mb-2">
                {t.waitlist.platformLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {t.waitlist.platformOptions.map((plat) => {
                  const isChecked = selectedPlatforms.includes(plat);
                  return (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => togglePlatform(plat)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                        isChecked
                          ? "bg-ink text-parchment"
                          : "border border-umber/20 bg-parchment text-umber hover:border-gold"
                      }`}
                    >
                      {isChecked && "✓ "}
                      {plat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error Message */}
            {status === "invalid" && (
              <p className="text-xs text-red-600 font-medium">
                {t.waitlist.invalidEmail}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-ink py-3 text-xs sm:text-sm font-semibold text-parchment shadow-md transition hover:bg-umber cursor-pointer"
            >
              {t.waitlist.submitBtn}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
