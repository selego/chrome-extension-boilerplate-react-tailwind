import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getKeyFromLocalStorage, detectedLang } from './utils';

const initializeI18n = async () => {
  const translations = {};
  // load the translations from local storage
  // const translations = await getKeyFromLocalStorage('translations');

  const resources = {
    en: { translations: translations.en },
    fr: { translations: translations.fr },
    es: { translations: translations.es },
  };

  // first two letters of lang
  const browserLang = detectedLang().substring(0, 2);

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: browserLang,
      interpolation: { escapeValue: false }, // react already safes from xss
      ns: ['translations'],
      defaultNS: 'translations',
      parseMissingKeyHandler: (key) => {
        console.log(`translation missing for "${key}"`);
        //   captureMessage(`translation missing for "${key}"`);
        return key;
      },
    });
};

initializeI18n();

export default i18n;
