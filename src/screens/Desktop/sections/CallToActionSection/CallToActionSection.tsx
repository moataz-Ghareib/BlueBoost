/**
 * قسم الدعوة للعمل لمنصة BlueBoost للألعاب
 * 
 * يعمل هذا القسم كنقطة التحويل النهائية، مشجعاً المستخدمين على التسجيل
 * أو تسجيل الدخول إلى مجتمع BlueBoost للألعاب. يتميز بأزرار CTA بارزة
 * مع تصميم احترافي وتصميم متجاوب.
 * 
 * المميزات:
 * - عنوان مقنع مع تمييز اسم العلامة التجارية
 * - نص وصفي حول فوائد الخدمة
 * - أزرار CTA مزدوجة (تسجيل الدخول / إنشاء حساب)
 * - تأثيرات تحويم ورسوم متحركة احترافية
 * - دعم ثنائي اللغة (الإنجليزية/العربية)
 * - تصميم متجاوب عبر جميع أحجام الأجهزة
 * 
 * مواصفات التصميم:
 * - يستخدم خلفيات متدرجة للزر الأساسي
 * - تمييز ألوان العلامة التجارية لنص "BlueBoost"
 * - مسافات احترافية وتدرج طباعة
 * - تأثيرات تحويم مع تكبير وظل ورسوم متحركة للترجمة
 * 
 * @author فريق تطوير BlueBoost
 */

import React from "react";
import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../contexts/LanguageContext";

/**
 * مكون CallToActionSection
 * 
 * يعرض قسم التحويل النهائي مع أزرار التسجيل/تسجيل الدخول.
 * يتكيف مع اتجاه النص والخط بناءً على اللغة المحددة.
 * 
 * @returns {JSX.Element} قسم الدعوة للعمل مع أزرار CTA
 */
export const CallToActionSection = (): JSX.Element => {
  // الحصول على دالة الترجمة وحالة اللغة من السياق
  const { t, language } = useLanguage();
  
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 py-12 md:py-16 lg:py-20 relative border-t-[2.67px] [border-top-style:solid] border-[#2f2f2f3d]">
      {/* حاوية المحتوى الرئيسية مع تخطيط مرن */}
      <div className="flex items-start gap-4 md:gap-6 lg:gap-[10.67px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[10.67px] relative flex-1 grow">
          {/* منطقة محتوى النص مع حشو متجاوب */}
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[26.67px] px-4 md:px-8 lg:px-[10%] py-0 relative self-stretch w-full flex-[0_0_auto]">
            {/* قسم العنوان مع تمييز اسم العلامة التجارية */}
            <div className="inline-flex flex-col items-center gap-2 md:gap-4 relative flex-[0_0_auto]">
              <h2 className={`relative w-fit mt-[-1.33px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-2xl md:text-3xl lg:text-5xl text-center tracking-[-0.5px] md:tracking-[-0.96px] leading-[1.2] md:leading-[58.7px] whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                {/* عرض شرطي بناءً على اللغة - إخفاء تمييز BlueBoost في العربية */}
                {language === 'ar' ? (
                  // العربية: عرض العنوان الكامل بدون تمييز BlueBoost
                  <span className="text-white tracking-[-0.2px] md:tracking-[-0.46px]">{t('cta.title')}</span>
                ) : (
                  // الإنجليزية: عرض العنوان مع تمييز BlueBoost بالأزرق
                  <>
                    <span className="text-white tracking-[-0.2px] md:tracking-[-0.46px]">{t('cta.title').split('BlueBoost')[0]}</span>
                    <span className="text-[#407bff] tracking-[-0.2px] md:tracking-[-0.46px]">BlueBoost</span>
                    <span className="text-white tracking-[-0.2px] md:tracking-[-0.46px]">{t('cta.title').split('BlueBoost')[1] ?? ''}</span>
                  </>
                )}
              </h2>
            </div>

            {/* فقرة الوصف مع طباعة متجاوبة */}
            <p className={`relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[14px] md:text-[18px] lg:text-[26.7px] text-center tracking-[0] leading-[1.4] md:leading-[40.0px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('cta.description')}
            </p>
          </div>
        </div>
      </div>

      {/* حاوية أزرار CTA مع تخطيط متجاوب */}
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-[85.36px] relative group">
        {/* زر CTA الأساسي - تسجيل الدخول */}
        <Button className="flex w-full sm:w-[120px] md:w-[160px] lg:w-[196.05px] items-center justify-center gap-2 md:gap-3 lg:gap-[13.34px] p-3 md:p-4 lg:p-[13.34px] relative self-stretch rounded-[8px] md:rounded-[10px] lg:rounded-[10.67px] overflow-hidden bg-[linear-gradient(90deg,rgba(64,123,255,1)_0%,rgba(38,74,153,1)_100%)] h-auto border-0 hover:bg-[linear-gradient(90deg,rgba(74,133,255,1)_0%,rgba(48,84,163,1)_100%)] hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]">
          <span className={`font-bold relative w-fit [font-family:'Inter',Helvetica] text-white text-[14px] md:text-[18px] lg:text-[21.3px] text-center tracking-[0] leading-[normal] transition-all duration-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('cta.signIn')}
          </span>
        </Button>

        {/* زر CTA الثانوي - إنشاء حساب */}
        <Button
          variant="outline"
          className="flex w-full sm:w-[120px] md:w-[160px] lg:w-[197.39px] items-center justify-center gap-2 md:gap-3 lg:gap-[13.34px] p-3 md:p-4 lg:p-[13.34px] relative self-stretch bg-[#0d0d0d] rounded-[8px] md:rounded-[10px] lg:rounded-[10.67px] overflow-hidden border-[1px] md:border-[1.33px] border-solid border-[#ffffff0d] h-auto hover:bg-[#1a1a1a] hover:border-[#407bff]/50 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
        >
          <span className={`font-medium relative w-fit [font-family:'Inter',Helvetica] text-white text-[14px] md:text-[18px] lg:text-[21.3px] text-center tracking-[0] leading-[normal] transition-all duration-200 hover:text-blue-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('cta.signUp')}
          </span>
        </Button>
      </div>
    </section>
  );
};