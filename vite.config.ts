/**
 * تكوين Vite لمنصة BlueBoost للألعاب
 * 
 * يحتوي هذا الملف على إعدادات أداة البناء Vite للمشروع.
 * يتضمن تكوين React و Tailwind CSS والإعدادات الأساسية للبناء.
 * 
 * الإعدادات:
 * - plugins: React plugin للدعم الكامل لـ React
 * - base: "./" للمسارات النسبية (مناسب للنشر)
 * - css.postcss: تكوين Tailwind CSS
 * 
 * @author فريق تطوير BlueBoost
 */

import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// تكوين Vite - راجع: https://vite.dev/config/
export default defineConfig({
  // الإضافات: React للدعم الكامل
  plugins: [react()],
  // المسار الأساسي: نسبي للنشر المرن
  base: "./",
  // تكوين CSS
  css: {
    // PostCSS للمعالجة
    postcss: {
      // إضافات: Tailwind CSS للتصميم
      plugins: [tailwind()],
    },
  },
});
