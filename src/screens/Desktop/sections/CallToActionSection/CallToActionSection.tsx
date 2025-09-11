import React from "react";
import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const CallToActionSection = (): JSX.Element => {
  const { t, language } = useLanguage();
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 py-12 md:py-16 lg:py-20 relative border-t-[2.67px] [border-top-style:solid] border-[#2f2f2f3d]">
      <div className="flex items-start gap-4 md:gap-6 lg:gap-[10.67px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[10.67px] relative flex-1 grow">
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[26.67px] px-4 md:px-8 lg:px-[10%] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-2 md:gap-4 relative flex-[0_0_auto]">
              <h2 className={`relative w-fit mt-[-1.33px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-transparent text-2xl md:text-3xl lg:text-5xl text-center tracking-[-0.5px] md:tracking-[-0.96px] leading-[1.2] md:leading-[58.7px] whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                <span className="text-white tracking-[-0.2px] md:tracking-[-0.46px]">{t('cta.title').split('BlueBoost')[0]}</span>
                <span className="text-[#407bff] tracking-[-0.2px] md:tracking-[-0.46px]">BlueBoost</span>
                <span className="text-white tracking-[-0.2px] md:tracking-[-0.46px]">{t('cta.title').split('BlueBoost')[1] ?? ''}</span>
              </h2>
            </div>

            <p className={`relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[14px] md:text-[18px] lg:text-[26.7px] text-center tracking-[0] leading-[1.4] md:leading-[40.0px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('cta.description')}
            </p>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-[85.36px] relative">
        <Button className="flex w-full sm:w-[120px] md:w-[160px] lg:w-[196.05px] items-center justify-center gap-2 md:gap-3 lg:gap-[13.34px] p-3 md:p-4 lg:p-[13.34px] relative self-stretch rounded-[8px] md:rounded-[10px] lg:rounded-[10.67px] overflow-hidden bg-[linear-gradient(90deg,rgba(64,123,255,1)_0%,rgba(38,74,153,1)_100%)] h-auto border-0 hover:opacity-90">
          <span className={`font-bold relative w-fit [font-family:'Inter',Helvetica] text-white text-[14px] md:text-[18px] lg:text-[21.3px] text-center tracking-[0] leading-[normal] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('cta.signIn')}
          </span>
        </Button>

        <Button
          variant="outline"
          className="flex w-full sm:w-[120px] md:w-[160px] lg:w-[197.39px] items-center justify-center gap-2 md:gap-3 lg:gap-[13.34px] p-3 md:p-4 lg:p-[13.34px] relative self-stretch bg-[#0d0d0d] rounded-[8px] md:rounded-[10px] lg:rounded-[10.67px] overflow-hidden border-[1px] md:border-[1.33px] border-solid border-[#ffffff0d] h-auto hover:bg-[#1a1a1a]"
        >
          <span className={`font-medium relative w-fit [font-family:'Inter',Helvetica] text-white text-[14px] md:text-[18px] lg:text-[21.3px] text-center tracking-[0] leading-[normal] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('cta.signUp')}
          </span>
        </Button>
      </div>
    </section>
  );
};