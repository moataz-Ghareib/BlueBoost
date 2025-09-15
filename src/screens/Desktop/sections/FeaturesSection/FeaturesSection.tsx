/**
 * قسم المميزات لمنصة BlueBoost للألعاب
 * 
 * يعرض هذا القسم الإحصائيات الرئيسية وإنجازات المنصة في
 * تخطيط شبكة احترافي. يتميز بتأثيرات التحويم والتصميم المتجاوب
 * والدعم ثنائي اللغة مع عرض محتوى خاص باللغة.
 * 
 * المميزات:
 * - شبكة إحصائيات مع 4 مقاييس رئيسية
 * - تأثيرات تحويم احترافية مع رسوم متحركة للتكبير والترجمة
 * - عرض عنوان فرعي خاص باللغة
 * - تخطيط شبكة متجاوب (عمودان على الهاتف المحمول، 4 على سطح المكتب)
 * - مسافات احترافية تتبع نظام التصميم
 * - تمييز ألوان العلامة التجارية للإحصائيات
 * 
 * مواصفات التصميم:
 * - يستخدم مسافات مميزة قياسية (gap-12 md:gap-20 lg:gap-28)
 * - عرض أقصى 7xl للشاشات الكبيرة
 * - تأثيرات تحويم مع تكبير وترجمة وانتقالات لونية
 * - اختيار خط خاص باللغة (عربي/إنجليزي)
 * - تدرج طباعة احترافي
 * 
 * @author فريق تطوير BlueBoost
 */

import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

/**
 * مكون FeaturesSection
 * 
 * يعرض قسم الإحصائيات والمميزات مع تأثيرات التحويم.
 * يتكيف مع المحتوى والخط بناءً على اللغة المحددة.
 * 
 * @returns {JSX.Element} قسم المميزات مع شبكة الإحصائيات
 */
export const FeaturesSection = (): JSX.Element => {
  // الحصول على دالة الترجمة وحالة اللغة من السياق
  const { t, language } = useLanguage();
  
  /**
   * تحويل الأرقام الإنجليزية إلى أرقام عربية
   * @param {string} num - نص الرقم بالأرقام الإنجليزية
   * @returns {string} نص الرقم بالأرقام العربية
   */
  const toArabicNumerals = (num: string): string => {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.replace(/\d/g, (digit) => arabicNumerals[parseInt(digit)]);
  };
  
  /**
   * مصفوفة بيانات الإحصائيات
   * تحتوي على مقاييس المنصة الرئيسية مع الأرقام واللواحق والأوصاف
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
      {/* الحاوية الرئيسية مع عرض أقصى وتخطيط متوسط */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
        {/* قسم الرأس مع العنوان والعنوان الرئيسي والعنوان الفرعي */}
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-5xl">
          {/* عنوان القسم */}
          <div className="inline-flex flex-col items-center gap-4">
            <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#407bff] text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight">
              {t('featuresSection.title')}
            </div>
          </div>

          {/* العنوان الرئيسي */}
          <div className="inline-flex flex-col items-center gap-4">
            <h2 className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-2xl md:text-4xl lg:text-5xl text-center tracking-[-0.5px] md:tracking-[-0.96px] leading-tight text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('featuresSection.heading')}
            </h2>
          </div>

          {/* العنوان الفرعي مع عرض خاص باللغة */}
          <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-tight">
            {language === 'ar' ? (
              // العنوان الفرعي العربي مع خط مناسب وتمييز ألوان العلامة التجارية
              <>
                <span className="font-arabic text-white">نقدم خدمات تعزيز ألعاب مميزة مصممة خصيصاً </span>
                <span className="text-[#407bff] font-arabic">لاحتياجاتك</span>
              </>
            ) : (
              // العنوان الفرعي الإنجليزي مع خط مناسب وتمييز ألوان العلامة التجارية
              <>
                <span className="font-english text-white">We deliver premium game Boosting tailored to </span>
                <span className="text-[#407bff] font-english">Your Needs</span>
              </>
            )}
          </div>
        </div>

        {/* شبكة الإحصائيات مع مسافات احترافية */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 lg:gap-28 w-full max-w-6xl">
          {/* التكرار عبر مصفوفة الإحصائيات لإنشاء بطاقات إحصائية فردية */}
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 md:gap-4 text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer group"
            >
              {/* رقم الإحصائية واللاحقة مع تأثيرات التحويم */}
              <div className="[font-family:'Inter',Helvetica] font-black text-3xl md:text-5xl lg:text-6xl text-center tracking-[0] leading-normal transition-all duration-300 group-hover:drop-shadow-lg">
                {/* الرقم مع انتقال لوني عند التحويم */}
                <span className="text-white transition-all duration-300 group-hover:text-blue-100">{stat.number} </span>
                {/* اللاحقة مع لون العلامة التجارية وتأثيرات تحويم محسنة */}
                <span className="text-[#407bff] transition-all duration-300 group-hover:text-blue-300 group-hover:drop-shadow-lg">{stat.suffix}</span>
              </div>
              
              {/* وصف الإحصائية مع تأثيرات التحويم */}
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