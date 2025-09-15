// المكون الرئيسي للتطبيق لمنصة BlueBoost للألعاب
// هذا هو المكون الجذر الذي يعرض تخطيط سطح المكتب بالكامل
import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CallToActionSection } from "./screens/Desktop/sections/CallToActionSection/CallToActionSection";
import { FaqSection } from "./screens/Desktop/sections/FaqSection/FaqSection";
import { FeaturesListSection } from "./screens/Desktop/sections/FeaturesListSection/FeaturesListSection";
import { FeaturesSection } from "./screens/Desktop/sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./screens/Desktop/sections/FooterSection/FooterSection";
import { GamesSection } from "./screens/Desktop/sections/GamesSection/GamesSection";
import { HeroSection } from "./screens/Desktop/sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./screens/Desktop/sections/TestimonialsSection/TestimonialsSection";

/**
 * مكون التطبيق الرئيسي
 * 
 * يعمل هذا المكون كحاوية التخطيط الأساسية لمنصة BlueBoost للألعاب.
 * يلف التطبيق بالكامل مع LanguageProvider للدعم ثنائي اللغة (الإنجليزية/العربية)
 * ويعرض جميع الأقسام الرئيسية بالترتيب الصحيح.
 * 
 * المميزات:
 * - دعم ثنائي اللغة (الإنجليزية/العربية) مع اتجاه النص RTL/LTR
 * - تصميم متجاوب عبر جميع أحجام الأجهزة
 * - سمة داكنة بملء الشاشة مع ألوان العلامة التجارية
 * - تخطيط منصة ألعاب احترافي
 * 
 * @returns {JSX.Element} تخطيط التطبيق الكامل
 */
export const App = (): JSX.Element => {
  return (
    // موفر اللغة يلف التطبيق بالكامل للدعم ثنائي اللغة
    <LanguageProvider>
      {/* حاوية التطبيق الرئيسية مع خلفية داكنة وعرض كامل */}
      <div className="bg-[#010b19] flex flex-col items-center w-full overflow-x-hidden">
        {/* غلاف المحتوى مع خلفية داكنة متسقة */}
        <div className="bg-[#010b19] w-full flex flex-col">
          {/* قسم البطل - منطقة الهبوط الرئيسية مع التنقل */}
          <HeroSection />

          {/* قسم الألعاب - شبكة الألعاب المتاحة */}
          <GamesSection />

          {/* قسم قائمة المميزات - فوائد المنصة */}
          <FeaturesListSection />

          {/* قسم الشهادات - دوارة مراجعات العملاء */}
          <TestimonialsSection />

          {/* قسم المميزات - الإحصائيات ومعلومات الشركة */}
          <FeaturesSection />

          {/* قسم الأسئلة الشائعة - أكورديون الأسئلة المتكررة */}
          <FaqSection />

          {/* قسم الدعوة للعمل - أزرار التسجيل/تسجيل الدخول */}
          <CallToActionSection />

          {/* قسم التذييل - الروابط ومعلومات الاتصال وتفاصيل الشركة */}
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
};