/**
 * نقطة دخول التطبيق الرئيسية لمنصة BlueBoost للألعاب
 * 
 * يعمل هذا الملف كنقطة الدخول الجذر التي:
 * - تنشئ عنصر React الجذر
 * - تمكن React Strict Mode لفحوصات التطوير
 * - تعرض مكون App الرئيسي في DOM
 * 
 * يستخدم التطبيق createRoot API من React 18 للميزات المتزامنة
 * ويلف التطبيق في StrictMode لتجربة تطوير محسنة.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// إنشاء جذر React وعرض التطبيق
// StrictMode يساعد في تحديد المشاكل المحتملة في التطوير
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
