/**
 * نظام مكونات الصورة الشخصية لمنصة BlueBoost للألعاب
 * 
 * مكون صورة شخصية احترافي مبني على Radix UI primitives.
 * يوفر صور ملف شخصي للمستخدمين مع دعم احتياطي تلقائي.
 * 
 * المميزات:
 * - تحميل الصورة التلقائي مع نص/أحرف أولى احتياطية
 * - تصميم دائري متسق (40x40px افتراضي)
 * - تطبيق يركز على إمكانية الوصول أولاً
 * - تصميم متجاوب وقابل للتوسع
 * - مثالي لآراء العملاء والملفات الشخصية وعروض الفريق
 * 
 * المكونات:
 * - Avatar: الحاوية الرئيسية مع قناع دائري
 * - AvatarImage: صورة الملف الشخصي مع نسبة عرض إلى ارتفاع تلقائية
 * - AvatarFallback: المحتوى الاحتياطي عند فشل تحميل الصورة
 * 
 * @author فريق تطوير BlueBoost
 */

"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * مكون حاوية الصورة الشخصية الرئيسية
 * 
 * يوفر الحاوية الدائرية لصور الملف الشخصي للمستخدم.
 * يتعامل مع الفيض ويحافظ على حجم متسق.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>} props - خصائص Radix Avatar Root
 * @param {React.Ref} ref - مرجع إعادة التوجيه لحاوية الصورة الشخصية
 * @returns {JSX.Element} حاوية الصورة الشخصية الدائرية
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      // تصميم الصورة الشخصية الأساسي: دائري، حجم ثابت، فيض مخفي
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

/**
 * مكون صورة الصورة الشخصية
 * 
 * يعرض صورة الملف الشخصي للمستخدم مع نسبة عرض إلى ارتفاع مناسبة.
 * يعود تلقائياً إلى AvatarFallback إذا فشل تحميل الصورة.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>} props - خصائص Radix Avatar Image
 * @param {React.Ref} ref - مرجع إعادة التوجيه لعنصر الصورة
 * @returns {JSX.Element} صورة الملف الشخصي مع حجم مناسب
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)} // نسبة عرض إلى ارتفاع مربعة، حجم الحاوية الكامل
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

/**
 * مكون الصورة الشخصية الاحتياطية
 * 
 * يعرض المحتوى الاحتياطي عند فشل تحميل الصورة الرئيسية.
 * عادة ما يظهر الأحرف الأولى للمستخدم أو أيقونة افتراضية.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>} props - خصائص Radix Avatar Fallback
 * @param {React.Ref} ref - مرجع إعادة التوجيه لعنصر الاحتياطي
 * @returns {JSX.Element} المحتوى الاحتياطي مع تخطيط متوسط
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      // المحتوى الاحتياطي المتوسط مع خلفية مكتومة
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
