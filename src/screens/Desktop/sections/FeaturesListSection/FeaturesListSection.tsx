/**
 * قسم قائمة المميزات لمنصة BlueBoost للألعاب
 * 
 * يعرض هذا القسم الفوائد الرئيسية للمنصة بتخطيط من عمودين يتميز
 * بصورة شخصية محسنة مع تأثيرات توهج احترافية ومحتوى نصي وصفي.
 * يتضمن دعم RTL/LTR وتصميم متجاوب عبر جميع أحجام الأجهزة.
 * 
 * المميزات:
 * - تخطيط متجاوب من عمودين (صورة + نص)
 * - تأثيرات توهج ورسوم متحركة احترافية على صورة الشخصية
 * - طبقات ضبابية متعددة لإضاءة محسنة
 * - دعم ثنائي اللغة مع معالجة تخطيط RTL/LTR مناسبة
 * - تصميم متجاوب عبر جميع أحجام الأجهزة
 * - مسافات احترافية وتدرج طباعة
 * 
 * مواصفات التصميم:
 * - يستخدم موضع دقيق وهوامش سالبة لدقة التصميم
 * - طبقات توهج متعددة بقيم ضبابية وألوان مختلفة
 * - توزيع عرض متجاوب (صورة: 55%، نص: 45%)
 * - تأثيرات مرشح محسنة لصورة الشخصية
 * - مسافات احترافية تتبع نظام التصميم
 * 
 * @author فريق تطوير BlueBoost
 */

import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Separator } from "../../../../components/ui/separator";

/**
 * مكون FeaturesListSection
 * 
 * يعرض قسم المميزات مع محتوى الصورة والنص.
 * يتكيف مع اتجاه التخطيط والخط بناءً على اللغة المحددة.
 * 
 * @returns {JSX.Element} قسم المميزات بتخطيط من عمودين
 */
export const FeaturesListSection = (): JSX.Element => {
  // الحصول على دالة الترجمة وحالة اللغة واتجاه النص من السياق
  const { t, language, direction } = useLanguage();
  
  return (
    <section className={`flex flex-col items-center gap-[50px] md:gap-[80px] lg:gap-[116px] w-full relative px-4 md:px-8 ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`} dir={direction}>
      {/* خط فاصل القسم */}
      <Separator className="w-full h-0.5 bg-[#2f2f2f40]" />

      {/* حاوية المحتوى الرئيسية مع تأثيرات الخلفية */}
      <div className="relative w-full h-auto md:h-[400px] lg:h-[556.08px]">
        {/* تأثيرات التوهج الخلفية - طبقات متعددة للعمق */}
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] top-[20%] left-[5%] bg-[#003ecb] rounded-full blur-[120px] md:blur-[150px] lg:blur-[180px] opacity-40 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] top-[30%] left-[10%] bg-[#4a9eff] rounded-full blur-[100px] md:blur-[130px] lg:blur-[160px] opacity-25" />
        <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] top-[40%] left-[15%] bg-[#6bb6ff] rounded-full blur-[80px] md:blur-[110px] lg:blur-[140px] opacity-20" />

        {/* تخطيط من عمودين - متجاوب مع دعم RTL */}
        <div className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4 lg:gap-6 w-full ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
          {/* عمود الصورة - محسن مع تأثيرات توهج متعددة */}
          <div className={`w-full md:w-[55%] flex justify-center ${direction === 'rtl' ? 'md:justify-end' : 'md:justify-start'}`}>
            <div className="relative">
              {/* طبقات توهج متعددة للإضاءة المحسنة */}
              <div className="absolute inset-0 bg-gradient-radial from-[#4a9eff]/30 via-[#003ecb]/15 to-transparent rounded-full blur-[50px] scale-110 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-radial from-[#6bb6ff]/25 via-transparent to-transparent rounded-full blur-[80px] scale-125" />
              <div className="absolute inset-0 bg-[#4a9eff]/10 rounded-full blur-[100px] scale-150" />
              
              {/* صورة الشخصية الرئيسية مع تأثيرات محسنة */}
              <img
                className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[659px] lg:h-[556px] object-contain filter brightness-125 contrast-110 saturate-120"
                alt="Element"
                src="/assets/images/676279 1.svg"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(74, 158, 255, 0.6)) drop-shadow(0 0 60px rgba(74, 158, 255, 0.4)) drop-shadow(0 0 100px rgba(74, 158, 255, 0.2)) brightness(1.25) contrast(1.1) saturate(1.2)',
                }}
              />
              
              {/* تأثيرات إضاءة الحافة الإضافية */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4a9eff]/20 to-transparent rounded-full blur-[30px]" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6bb6ff]/15 via-transparent to-[#4a9eff]/10 rounded-full blur-[40px]" />
            </div>
          </div>

          {/* عمود النص - موضع متجاوب مع هوامش سالبة لدقة التصميم */}
          <div className={`flex flex-col w-full md:w-[45%] items-center md:items-start gap-4 md:gap-[30px] lg:gap-[40px] ${direction === 'rtl' ? 'md:mr-[-50px] lg:mr-[-80px] md:text-right' : 'md:ml-[-50px] lg:ml-[-80px] md:text-left'}`}>
            {/* العنوان الرئيسي مع محتوى خاص باللغة */}
            <h2 className={`text-center w-full font-semibold text-[22px] md:text-[34px] lg:text-[50px] tracking-[0] leading-[1.2] ${direction === 'rtl' ? 'md:text-right font-arabic' : 'md:text-left font-english'}`}>
              {language === 'ar' ? (
                <>
                  <span className="text-white">نوفر تعزيز </span>
                  <span className="text-[#407bff]">سريع وسهل وآمن</span>
                </>
              ) : (
                <>
                  <span className="text-white">We provide </span>
                  <span className="text-[#407bff]">fast, easy <br></br> and secure</span>
                  <span className="text-white"> boost</span>
                </>
              )}
            </h2>

            {/* فقرة الوصف مع طباعة متجاوبة */}
            <p className={`text-center w-full font-normal text-[#cbcbcb] text-[11px] md:text-[15px] lg:text-[18px] tracking-[0] leading-[1.4] lg:leading-[30px] ${direction === 'rtl' ? 'md:text-right font-arabic' : 'md:text-left font-english'}`}>
              {t('features.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};