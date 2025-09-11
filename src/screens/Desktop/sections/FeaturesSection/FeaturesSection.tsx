import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const FeaturesSection = (): JSX.Element => {
  const { t, language } = useLanguage();
  const statistics = [
    {
      number: "500",
      suffix: "+",
      description: t('featuresSection.stats.completedBoosts'),
    },
    {
      number: "24",
      suffix: "+",
      description: t('featuresSection.stats.service247'),
    },
    {
      number: "500",
      suffix: "+",
      description: t('featuresSection.stats.positiveReviews'),
    },
    {
      number: "5",
      suffix: "+",
      description: t('featuresSection.stats.yearsExperience'),
    },
  ];

  return (
    <section className="w-full border-t-2 border-[#2f2f2f3d] bg-transparent py-12 md:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center max-w-4xl">
          <div className="inline-flex flex-col items-center gap-2 md:gap-4">
            <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#407bff] text-base md:text-lg lg:text-xl tracking-[0] leading-5 md:leading-6">
              {t('featuresSection.title')}
            </div>
          </div>

          <div className="inline-flex flex-col items-center gap-2 md:gap-4">
            <h2 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-xl md:text-3xl lg:text-5xl text-center tracking-[-0.5px] md:tracking-[-0.96px] leading-tight md:leading-[58.7px] text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('featuresSection.heading')}
            </h2>
          </div>

          <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-xl md:text-3xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-[59px] whitespace-nowrap">
            <span className={`${language === 'ar' ? 'font-arabic' : 'font-english'} text-white`}>{t('featuresSection.subtitle').split('Your Needs')[0]}</span>
            <span className="text-[#407bff]">{t('featuresSection.subtitle').split('Your Needs')[1] ?? ''}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 md:gap-35 lg:gap-40 w-full max-w-6xl">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 md:gap-3 lg:gap-[9.34px]"
            >
              <div className="[font-family:'Inter',Helvetica] font-black text-[24px] md:text-[32px] lg:text-[53.3px] text-center tracking-[0] leading-normal">
                <span className="text-white">{stat.number} </span>
                <span className="text-[#407bff]">{stat.suffix}</span>
              </div>
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#818181] text-[14px] md:text-[18px] lg:text-[26.7px] text-center tracking-[0] leading-normal whitespace-pre-line">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};