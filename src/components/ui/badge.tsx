/**
 * مكون الشارة لمنصة BlueBoost للألعاب
 * 
 * مكون شارة متعدد الاستخدامات لعرض الحالة أو الفئات أو التسميات.
 * يتميز برسوم متحركة احترافية عند التحويم ومتغيرات تصميم متعددة.
 * 
 * المميزات:
 * - متغيرات متعددة: افتراضي، ثانوي، مدمر، محدد
 * - رسوم متحركة احترافية عند التحويم (تكبير، رفع، تأثيرات توهج)
 * - دعم إمكانية الوصول مع مؤشرات التركيز
 * - طباعة ومسافات متسقة
 * - أنظمة ألوان بطابع الألعاب مع تأثيرات الظل
 * 
 * @author فريق تطوير BlueBoost
 */

import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * أنماط متغيرات الشارة باستخدام class-variance-authority
 * 
 * يحدد الأنماط الأساسية وجميع متغيرات الشارة الممكنة.
 * يتضمن رسوم متحركة احترافية وتأثيرات التحويم.
 */
const badgeVariants = cva(
  // الأنماط الأساسية المطبقة على جميع الشارات
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105 hover:-translate-y-0.5 hover:shadow-md cursor-pointer",
  {
    variants: {
      variant: {
        // الشارة الأساسية مع ألوان العلامة التجارية وتأثير التوهج
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25",
        // الشارة الثانوية مع تصميم مكتوم
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md hover:shadow-secondary/20",
        // الشارة المدمرة للتحذيرات أو الأخطاء
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80 hover:shadow-lg hover:shadow-destructive/25",
        // الشارة المحددة للتأكيد الخفيف
        outline: "text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * واجهة خصائص مكون الشارة
 * توسع خصائص HTML div القياسية مع خيارات المتغيرات
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * مكون الشارة
 * 
 * يعرض شارة مصممة مع رسوم متحركة احترافية ومتغيرات قابلة للتخصيص.
 * مثالي لمؤشرات الحالة أو الفئات أو التسميات.
 * 
 * @param {BadgeProps} props - خصائص الشارة بما في ذلك المتغير وخصائص HTML
 * @returns {JSX.Element} مكون الشارة المصمم
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
