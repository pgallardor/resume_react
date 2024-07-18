import i18next from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const HOSTNAME = "http://localhost:5173"

i18next
    .use(initReactI18next)
    .use(i18nBackend)
    .init({
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `${HOSTNAME}/i18n/{{lng}}.json`
        }
    });

export default i18next;