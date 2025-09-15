/**
 * مكون الفاصل لمنصة BlueBoost للألعاب
 * 
 * مكون فاصل متعدد الاستخدامات لإنشاء تقسيمات بصرية في التخطيطات.
 * مبني على Radix UI primitives مع دعم إمكانية الوصول.
 * 
 * المميزات:
 * - اتجاهات أفقية وعمودية
 * - متوافق مع إمكانية الوصول مع خصائص ARIA المناسبة
 * - تصميم متسق مع ألوان السمة
 * - حجم ومواضع مرنة
 * - مثالي لتقسيم الأقسام ومناطق المحتوى والتنقل
 * 
 * @author فريق تطوير BlueBoost
 */

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * مكون الفاصل
 * 
 * ينشئ فصل بصري بين أقسام المحتوى.
 * يدعم الاتجاهات الأفقية والعمودية.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} props - خصائص الفاصل
 * @param {React.Ref} ref - مرجع إعادة التوجيه لعنصر الفاصل
 * @returns {JSX.Element} خط فاصل مصمم
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}        // زخرفي افتراضياً (لا يعلن عنه قارئات الشاشة)
      orientation={orientation}      // تخطيط أفقي أو عمودي
      className={cn(
        "shrink-0 bg-border",        // تصميم أساسي مع لون حدود السمة
        // حجم شرطي بناءً على الاتجاه
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
