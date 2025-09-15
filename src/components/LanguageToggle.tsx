/**
 * مكون تبديل اللغة لمنصة BlueBoost للألعاب
 * 
 * مبدل لغة مدمج واحترافي يسمح للمستخدمين بالتبديل
 * بين اللغتين الإنجليزية والعربية مع مؤشرات أعلام بصرية.
 * 
 * المميزات:
 * - تصميم بالأعلام فقط (🇺🇸 للإنجليزية، 🇸🇦 للعربية)
 * - رسوم متحركة سلسة عند التحويم مع تأثير التكبير
 * - تلميحات ثنائية اللغة لإمكانية الوصول
 * - تصميم متسق مع نظام التصميم العام
 * - تصميم متجاوب وصديق للهاتف المحمول
 * 
 * مواصفات التصميم:
 * - زر نظيف ومدمج (w-10 h-10) يطابق إصدار الهاتف المحمول
 * - أيقونات أعلام متوسطة (text-xl) بدون تسميات نصية
 * - تأثير تكبير عند التحويم وانتقالات سلسة
 * - العلم الأمريكي يتبدل إلى العلم العربي/السعودي
 * - العلم السعودي يعود إلى العلم الإنجليزي/الأمريكي
 * 
 * @author فريق تطوير BlueBoost
 */

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

/**
 * مكون LanguageToggle
 * 
 * يعرض زر يتبدل بين اللغتين الإنجليزية والعربية.
 * يعرض أعلام البلدان المناسبة ويوفر تلميحات ثنائية اللغة.
 * 
 * @returns {JSX.Element} زر تبديل اللغة مع مؤشر العلم
 */
export const LanguageToggle: React.FC = () => {
  // الحصول على اللغة الحالية ودالة التبديل من سياق اللغة
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"              // تصميم بسيط بدون خلفية
      size="sm"                   // حجم صغير لتخطيط رأس مدمج
      onClick={toggleLanguage}     // التبديل بين الإنجليزية والعربية
      className="flex items-center justify-center w-10 h-10 p-2 text-white hover:bg-white/10 transition-all duration-200 rounded-lg hover:scale-105"
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'} // تلميح ثنائي اللغة
    >
      {/* أيقونة العلم التي تشير إلى اللغة الحالية والمستهدفة */}
      <span className="text-xl">
        {language === 'en' ? '🇺🇸' : '🇸🇦'} {/* العلم الأمريكي للإنجليزية، العلم السعودي للعربية */}
      </span>
    </Button>
  );
};

// تصدير كافتراضي للاستيراد المرن
export default LanguageToggle;