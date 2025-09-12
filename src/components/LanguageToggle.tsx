/**
 * Language Toggle Component for BlueBoost Gaming Platform
 * 
 * A compact, professional language switcher that allows users to toggle
 * between English and Arabic languages with visual flag indicators.
 * 
 * Features:
 * - Flag-only design (🇺🇸 for English, 🇸🇦 for Arabic)
 * - Smooth hover animations with scale effect
 * - Bilingual tooltips for accessibility
 * - Consistent styling with the overall design system
 * - Responsive and mobile-friendly design
 * 
 * Design Specifications:
 * - Clean, compact button (w-10 h-10) matching mobile version
 * - Centered flag icons (text-xl) without text labels
 * - Hover scale effect and smooth transitions
 * - American flag switches to Arabic/Saudi flag
 * - Saudi flag switches back to English/American flag
 * 
 * @author BlueBoost Development Team
 */

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

/**
 * LanguageToggle Component
 * 
 * Renders a button that toggles between English and Arabic languages.
 * Displays appropriate country flags and provides bilingual tooltips.
 * 
 * @returns {JSX.Element} Language toggle button with flag indicator
 */
export const LanguageToggle: React.FC = () => {
  // Get current language and toggle function from language context
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"              // Minimal styling without background
      size="sm"                   // Small size for compact header layout
      onClick={toggleLanguage}     // Toggle between English and Arabic
      className="flex items-center justify-center w-10 h-10 p-2 text-white hover:bg-white/10 transition-all duration-200 rounded-lg hover:scale-105"
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'} // Bilingual tooltip
    >
      {/* Flag icon indicating current and target language */}
      <span className="text-xl">
        {language === 'en' ? '🇺🇸' : '🇸🇦'} {/* American flag for English, Saudi flag for Arabic */}
      </span>
    </Button>
  );
};

// Export as default for flexible importing
export default LanguageToggle;