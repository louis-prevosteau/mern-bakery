import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translateFR from './locales/fr/translation.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init(
        {
            resources: {
                fr: {
                    translation: translateFR
                }
            },
            fallbackLng: "fr",
        }
    );

export default i18next;