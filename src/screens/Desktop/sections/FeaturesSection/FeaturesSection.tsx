/**
 * Features Section for BlueBoost Gaming Platform
 * 
 * This section displays key statistics and achievements of the platform in a
 * professional grid layout. Features hover effects, responsive design, and
 * bilingual support with language-specific content rendering.
 * 
 * Features:
 * - Statistics grid with 4 key metrics
 * - Professional hover effects with scale and translate animations
 * - Language-specific subtitle rendering
 * - Responsive grid layout (2 columns on mobile, 4 on desktop)
 * - Professional spacing following design system
 * - Brand color highlighting for statistics
 * 
 * Design Specifications:
 * - Uses standard premium spacing (gap-12 md:gap-20 lg:gap-28)
 * - Max width of 7xl for large screens
 * - Hover effects with scale, translate, and color transitions
 * - Language-specific font selection (Arabic/English)
 * - Professional typography scaling
 * 
 * @author BlueBoost Development Team
 */

import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

/**
 * FeaturesSection Component
 * 
 * Renders the statistics and features section with hover effects.
 * Adapts content and font based on selected language.
 * 
 * @returns {JSX.Element} Features section with statistics grid
 */
export const FeaturesSection = (): JSX.Element => {
  // Get translation function and language state from context
  const { t, language } = useLanguage();
  
  /**
   * Convert English numerals to Arabic numerals
   * @param {string} num - Number string with English numerals
   * @returns {string} Number string with Arabic numerals
   */
  const toArabicNumerals = (num: string): string => {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.replace(/\d/g, (digit) => arabicNumerals[parseInt(digit)]);
  };
  
  /**
   * Statistics data array
   * Contains key platform metrics with numbers, suffixes, and descriptions
   */
  const statistics = [
    {
      number: language === 'ar' ? toArabicNumerals("500") : "500",
      suffix: "+",
      description: t('featuresSection.stats.completedBoosts'),
    },
    {
      number: language === 'ar' ? toArabicNumerals("24") : "24",
      suffix: "+",
      description: t('featuresSection.stats.service247'),
    },
    {
      number: language === 'ar' ? toArabicNumerals("500") : "500",
      suffix: "+",
      description: t('featuresSection.stats.positiveReviews'),
    },
    {
      number: language === 'ar' ? toArabicNumerals("5") : "5",
      suffix: "+",
      description: t('featuresSection.stats.yearsExperience'),
    },
  ];

  return (
    <section className="w-full border-t-2 border-[#2f2f2f3d] bg-transparent py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      {/* Main container with max width and centered layout */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
        {/* Header section with title, heading, and subtitle */}
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-5xl">
          {/* Section title */}
          <div className="inline-flex flex-col items-center gap-4">
            <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#407bff] text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight">
              {t('featuresSection.title')}
            </div>
          </div>

          {/* Main heading */}
          <div className="inline-flex flex-col items-center gap-4">
            <h2 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-2xl md:text-4xl lg:text-5xl text-center tracking-[-0.5px] md:tracking-[-0.96px] leading-tight text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('featuresSection.heading')}
            </h2>
          </div>

          {/* Subtitle with language-specific rendering */}
          <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-tight">
            {language === 'ar' ? (
              // Arabic subtitle with proper font and brand color highlighting
              <>
                <span className="font-arabic text-white">نقدم خدمات تعزيز ألعاب مميزة مصممة خصيصاً </span>
                <span className="text-[#407bff] font-arabic">لاحتياجاتك</span>
              </>
            ) : (
              // English subtitle with proper font and brand color highlighting
              <>
                <span className="font-english text-white">We deliver premium game Boosting tailored to </span>
                <span className="text-[#407bff] font-english">Your Needs</span>
              </>
            )}
          </div>
        </div>

        {/* Statistics grid with professional spacing */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 lg:gap-28 w-full max-w-6xl">
          {/* Map through statistics array to create individual stat cards */}
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 md:gap-4 text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Statistics number and suffix with hover effects */}
              <div className="[font-family:'Inter',Helvetica] font-black text-3xl md:text-5xl lg:text-6xl text-center tracking-[0] leading-normal transition-all duration-300 group-hover:drop-shadow-lg">
                {/* Number with hover color transition */}
                <span className="text-white transition-all duration-300 group-hover:text-blue-100">{stat.number} </span>
                {/* Suffix with brand color and enhanced hover effects */}
                <span className="text-[#407bff] transition-all duration-300 group-hover:text-blue-300 group-hover:drop-shadow-lg">{stat.suffix}</span>
              </div>
              
              {/* Statistics description with hover effects */}
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#818181] text-sm md:text-lg lg:text-xl text-center tracking-[0] leading-normal whitespace-pre-line transition-all duration-300 group-hover:text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};