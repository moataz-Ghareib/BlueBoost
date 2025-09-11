import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/10 transition-colors rounded-lg"
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <div className="flex items-center gap-1">
        <span className="text-lg">
          {language === 'en' ? '🇬🇧' : '🇸🇦'}
        </span>
        <span className="text-sm font-medium hidden sm:block">
          {language === 'en' ? 'EN' : 'عر'}
        </span>
      </div>
    </Button>
  );
};

export default LanguageToggle;