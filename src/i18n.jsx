import i18n from 'i18next';
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:5173/i18n/{{lng}}.json' : '/i18n/{{lng}}.json'

i18n
    .use(initReactI18next)
    .use(i18nBackend)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation:{
            escapeValue: false
        },
        backend: {
            loadPath: `${getCurrentHost}`,
        }
    });

export default i18n;