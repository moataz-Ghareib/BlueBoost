/**
 * نظام مكونات البطاقات لمنصة BlueBoost للألعاب
 * 
 * نظام شامل لمكونات البطاقات مع رسوم متحركة احترافية وتصميم أنيق.
 * يوفر مجموعة كاملة من عناصر البطاقة لبناء تخطيطات متسقة.
 * 
 * المميزات:
 * - رسوم متحركة احترافية عند التحويم (رفع، تكبير، تأثيرات توهج)
 * - مسافات وطباعة متسقة
 * - تصميم يركز على إمكانية الوصول مع مؤشرات التركيز
 * - هيكل معياري مع أقسام الرأس والمحتوى والتذييل
 * - تأثيرات توهج زرقاء بطابع الألعاب عند التحويم
 * 
 * المكونات:
 * - Card: الحاوية الرئيسية مع تأثيرات التحويم
 * - CardHeader: القسم العلوي للعناوين والأوصاف
 * - CardTitle: العنوان الرئيسي مع طباعة مناسبة
 * - CardDescription: النص الثانوي مع تصميم مكتوم
 * - CardContent: منطقة المحتوى الرئيسية مع حشو متسق
 * - CardFooter: القسم السفلي للإجراءات والبيانات الوصفية
 * 
 * @author فريق تطوير BlueBoost
 */

import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * مكون حاوية البطاقة الرئيسية
 * 
 * يوفر هيكل البطاقة الأساسي مع رسوم متحركة احترافية عند التحويم.
 * يتميز بتأثير رفع خفيف وتكبير وتوهج أزرق عند التحويم.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - خصائص div القياسية
 * @param {React.Ref<HTMLDivElement>} ref - مرجع إعادة التوجيه لعنصر البطاقة
 * @returns {JSX.Element} حاوية بطاقة مصممة
 */
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // تصميم البطاقة الأساسي مع زوايا مدورة وظل
      "rounded-xl border bg-card text-card-foreground shadow",
      // رسوم متحركة احترافية عند التحويم
      "transition-all duration-300 ease-out",
      // تأثيرات التحويم: رفع، تكبير، وتوهج أزرق
      "hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 hover:scale-[1.02]",
      // إمكانية الوصول للتركيز مع مؤشر الحلقة
      "focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:ring-offset-2",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * مكون رأس البطاقة
 * 
 * القسم العلوي من البطاقة الذي يحتوي على العناوين والأوصاف.
 * يوفر مسافات متسقة وتخطيط عمودي لمحتوى الرأس.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - خصائص div القياسية
 * @param {React.Ref<HTMLDivElement>} ref - مرجع إعادة التوجيه لعنصر الرأس
 * @returns {JSX.Element} رأس البطاقة مع مسافات مناسبة
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // تخطيط عمودي مع حشو متسق
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * مكون عنوان البطاقة
 * 
 * العنوان الرئيسي للبطاقة مع طباعة احترافية.
 * يستخدم وزن نصف عريض وتتبع ضيق للتأكيد.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - خصائص div القياسية
 * @param {React.Ref<HTMLDivElement>} ref - مرجع إعادة التوجيه لعنصر العنوان
 * @returns {JSX.Element} عنوان البطاقة المصمم
 */
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)} // تصميم العنوان الاحترافي
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * مكون وصف البطاقة
 * 
 * النص الثانوي للسياق الإضافي أو التفاصيل.
 * يستخدم لون المقدمة المكتوم للتسلسل الهرمي البصري.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - خصائص div القياسية
 * @param {React.Ref<HTMLDivElement>} ref - مرجع إعادة التوجيه لعنصر الوصف
 * @returns {JSX.Element} وصف البطاقة المصمم
 */
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // نص أصغر ومكتوم
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * مكون محتوى البطاقة
 * 
 * منطقة المحتوى الرئيسية للبطاقة مع حشو متسق.
 * يزيل الحشو العلوي للاتصال بسلاسة مع الرأس.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - خصائص div القياسية
 * @param {React.Ref<HTMLDivElement>} ref - مرجع إعادة التوجيه لعنصر المحتوى
 * @returns {JSX.Element} منطقة محتوى البطاقة
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("p-6 pt-0", className)} // حشو بدون مسافة علوية
    {...props} 
  />
));
CardContent.displayName = "CardContent";

/**
 * مكون تذييل البطاقة
 * 
 * القسم السفلي للإجراءات أو البيانات الوصفية أو عناصر التحكم الإضافية.
 * يستخدم flexbox للمحاذاة الأفقية لعناصر التذييل.
 * 
 * @param {React.HTMLAttributes<HTMLDivElement>} props - خصائص div القياسية
 * @param {React.Ref<HTMLDivElement>} ref - مرجع إعادة التوجيه لعنصر التذييل
 * @returns {JSX.Element} تذييل البطاقة مع تخطيط flex
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // تخطيط flex أفقي
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
