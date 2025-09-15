/**
 * نظام مكونات الأكورديون لمنصة BlueBoost للألعاب
 * 
 * مكون أكورديون احترافي مبني على Radix UI primitives.
 * مثالي لأقسام الأسئلة الشائعة وقوائم المميزات والمحتوى القابل للطي.
 * 
 * المميزات:
 * - رسوم متحركة سلسة للتوسع/الطي
 * - تأثيرات تحويم احترافية مع سمة الألعاب الزرقاء
 * - متوافق مع إمكانية الوصول مع التنقل بلوحة المفاتيح
 * - مناطق محفز ومحتوى قابلة للتخصيص
 * - تأثيرات بصرية بطابع الألعاب (توهج، تكبير، ترجمة)
 * 
 * المكونات:
 * - Accordion: الحاوية الجذر (تدعم التوسع الفردي/المتعدد)
 * - AccordionItem: عنصر أكورديون فردي مع حدود
 * - AccordionTrigger: رأس قابل للنقر مع أيقونة شيفرون
 * - AccordionContent: منطقة المحتوى القابلة للطي
 * 
 * @author فريق تطوير BlueBoost
 */

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * حاوية الأكورديون الرئيسية
 * 
 * المكون الجذر الذي يدير حالة وسلوك الأكورديون.
 * يدعم توسع العنصر الفردي والمتعدد.
 */
const Accordion = AccordionPrimitive.Root;

/**
 * مكون عنصر الأكورديون
 * 
 * عنصر أكورديون فردي مع تأثيرات تحويم احترافية.
 * يتميز بتوهج أزرق خفيف عند التحويم للجمالية الألعاب.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>} props - خصائص عنصر الأكورديون
 * @param {React.Ref} ref - مرجع إعادة التوجيه لعنصر العنصر
 * @returns {JSX.Element} عنصر أكورديون مصمم
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      // تصميم أساسي مع حدود وتأثيرات تحويم احترافية
      "border-b transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10", 
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

/**
 * مكون محفز الأكورديون
 * 
 * رأس قابل للنقر يوسع/يطوي عنصر الأكورديون.
 * يتميز برسوم متحركة احترافية وتأثيرات تحويم بطابع الألعاب.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>} props - خصائص المحفز
 * @param {React.Ref} ref - مرجع إعادة التوجيه لعنصر المحفز
 * @returns {JSX.Element} محفز أكورديون تفاعلي
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // التخطيط الأساسي والطباعة
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all duration-300",
        // تأثيرات التحويم بطابع الألعاب
        "hover:text-blue-300 hover:translate-x-1",
        // مؤشرات التركيز لإمكانية الوصول
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md text-left",
        // دوران الأيقونة وتغييرات اللون عند التوسع
        "[&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:text-blue-200",
        className,
      )}
      {...props}
    >
      {children}
      {/* أيقونة الشيفرون مع رسوم متحركة احترافية */}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 hover:text-blue-300 hover:scale-110" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * مكون محتوى الأكورديون
 * 
 * منطقة المحتوى القابلة للطي مع رسوم متحركة سلسة للتوسع/الطي.
 * يستخدم رسوم متحركة CSS لتأثيرات انزلاق احترافية.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>} props - خصائص المحتوى
 * @param {React.Ref} ref - مرجع إعادة التوجيه لعنصر المحتوى
 * @returns {JSX.Element} محتوى أكورديون متحرك
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    {/* غلاف المحتوى مع حشو متسق */}
    <div className={cn("pb-4 pt-0 transition-all duration-300", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
