import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import enTranslations from '../translations/en.json';
import idTranslations from '../translations/id.json';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key) => {
    const translations = {
      en: enTranslations,
      id: idTranslations
    };
    return translations[language][key] || key;
  };

  return { t, language };
};