/**
 * دوال المساعدة لمنصة BlueBoost للألعاب
 * 
 * هذا الملف يحتوي على الدوال الأساسية المستخدمة في جميع أنحاء التطبيق.
 * حالياً يحتوي على دالة `cn` لدمج أسماء الفئات CSS بذكاء.
 * 
 * @author فريق تطوير BlueBoost
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * دالة دمج أسماء فئات CSS بذكاء
 * 
 * تجمع بين عدة أسماء فئات CSS بذكاء من خلال:
 * 1. استخدام clsx للتعامل مع الفئات الشرطية وأنواع المدخلات المختلفة
 * 2. استخدام tailwind-merge لحل تضارب فئات Tailwind CSS
 * 
 * هذه الدالة ضرورية لتصميم المكونات حيث:
 * - تحتاج عدة مصادر فئات للدمج
 * - تطبق فئات شرطية بناءً على الخصائص/الحالة
 * - تحتاج لحل تضارب Tailwind CSS (مثل 'p-4 p-2' يصبح 'p-2')
 * 
 * @param {...ClassValue[]} inputs - عدد متغير من مدخلات الفئات
 *   يمكن أن تكون نصوص، كائنات، مصفوفات، أو تعبيرات شرطية
 * 
 * @returns {string} نص الفئات المدموجة والمحسنة
 * 
 * @example
 * // الاستخدام الأساسي
 * cn('px-4', 'py-2', 'bg-blue-500') // "px-4 py-2 bg-blue-500"
 * 
 * @example
 * // الفئات الشرطية
 * cn('base-class', isActive && 'active-class', { 'error': hasError })
 * 
 * @example
 * // حل تضارب Tailwind
 * cn('p-4', 'p-2') // "p-2" (الفئة الأخيرة تفوز)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
