import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("kinegeez_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("kinegeez_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang] || translations.en;

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "am" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
