import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const text = copy[language];

  const nextLanguage = language === 'es' ? 'en' : 'es';

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label={text.ui.languageToggle[nextLanguage]}
      title={text.ui.languageToggle[nextLanguage]}
    >
      <Languages className="h-4 w-4" />
      <span>{language === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
};
