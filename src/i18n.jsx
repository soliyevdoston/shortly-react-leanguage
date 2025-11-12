import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    supportedLngs: ["en", "uz", "ru", "ko"],
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: "/locales/{{lng}}.json", // public/locales ichidagi fayllarga mos
      parse: (data) => JSON.parse(data), // JSON parse qilish
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
