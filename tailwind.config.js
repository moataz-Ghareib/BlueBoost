/**
 * تكوين Tailwind CSS لمنصة BlueBoost للألعاب
 * 
 * يحتوي هذا الملف على تكوين شامل لـ Tailwind CSS يتضمن:
 * - نظام ألوان مخصص للمنصة
 * - دعم الخطوط العربية والإنجليزية
 * - رسوم متحركة مخصصة للأكورديون
 * - أدوات مساعدة لدعم RTL/LTR
 * - نظام تصميم متسق
 * 
 * @author فريق تطوير BlueBoost
 */

module.exports = {
  // المحتوى: جميع ملفات المشروع التي تحتوي على فئات Tailwind
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  // السمة: تخصيصات وإضافات للتصميم الافتراضي
  theme: {
    extend: {
      // الألوان: نظام ألوان مخصص باستخدام CSS Variables
      colors: {
        "gray-300": "var(--gray-300)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // الألوان الأساسية
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // الألوان الثانوية
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ألوان التدمير/الخطر
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // الألوان المكتومة
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // ألوان التأكيد
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // ألوان النوافذ المنبثقة
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // ألوان البطاقات
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // نصف أقطار الحدود: نظام متدرج
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // عائلات الخطوط: دعم العربية والإنجليزية
      fontFamily: {
        // الخط الافتراضي
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        // الخطوط العربية
        arabic: [
          '"Noto Sans Arabic"',
          '"Cairo"',
          '"Amiri"',
          '"Tajawal"',
          '"Inter"',
          '"Plus Jakarta Sans"',
          "system-ui",
          "sans-serif",
        ],
        // الخطوط الإنجليزية
        english: [
          '"Inter"',
          '"Plus Jakarta Sans"',
          '"Open Sans"',
          '"Noto Sans Arabic"',
          '"Cairo"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      // الإطارات الرئيسية: رسوم متحركة مخصصة
      keyframes: {
        // رسوم متحركة للأكورديون - النزول
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        // رسوم متحركة للأكورديون - الصعود
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      // الرسوم المتحركة: تطبيق الإطارات الرئيسية
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // المسافات: مسافات آمنة لـ RTL
      spacing: {
        'rtl-safe': '0.5rem',
      },
    },
    // الحاوية: إعدادات الحاوية المتجاوبة
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  // الإضافات: أدوات مساعدة مخصصة
  plugins: [
    // إضافة أدوات مساعدة لدعم RTL/LTR
    function({ addUtilities }) {
      const newUtilities = {
        // اتجاه النص: من اليمين لليسار
        '.rtl': {
          direction: 'rtl',
        },
        // اتجاه النص: من اليسار لليمين
        '.ltr': {
          direction: 'ltr',
        },
        // محاذاة النص: البداية (آمنة للاتجاه)
        '.text-start-safe': {
          'text-align': 'start',
        },
        // محاذاة النص: النهاية (آمنة للاتجاه)
        '.text-end-safe': {
          'text-align': 'end',
        },
        // الهامش: بداية تلقائية
        '.ms-auto': {
          'margin-inline-start': 'auto',
        },
        // الهامش: نهاية تلقائية
        '.me-auto': {
          'margin-inline-end': 'auto',
        },
        // الحشو: بداية
        '.ps-4': {
          'padding-inline-start': '1rem',
        },
        // الحشو: نهاية
        '.pe-4': {
          'padding-inline-end': '1rem',
        },
        // الحدود: بداية
        '.border-s': {
          'border-inline-start-width': '1px',
        },
        // الحدود: نهاية
        '.border-e': {
          'border-inline-end-width': '1px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
  // الوضع المظلم: باستخدام الفئة
  darkMode: ["class"],
};
