/**
 * قسم البطل لمنصة BlueBoost للألعاب
 * 
 * هذا هو قسم الهبوط الرئيسي الذي يتميز بالتنقل وصورة الشخصية ومحتوى البطل.
 * يتضمن تخطيطات متجاوبة للهاتف المحمول/سطح المكتب ودعم RTL/LTR ورسوم متحركة احترافية.
 * 
 * المميزات:
 * - تخطيطات متجاوبة للهاتف المحمول وسطح المكتب
 * - تنقل احترافي مع قائمة منسدلة
 * - صورة شخصية محسنة مع تأثيرات التوهج
 * - تبديل اللغة وواجهة مستخدم المصادقة
 * - دعم اتجاه النص RTL/LTR
 * - تأثيرات تحويم ورسوم متحركة احترافية
 * 
 * @author فريق تطوير BlueBoost
 */

import { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  ShareIcon,
  ShoppingCartIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
// import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import LanguageToggle from "../../../../components/LanguageToggle";
import { useLanguage } from "../../../../contexts/LanguageContext";
const navigationItems = [
  {
    icon: HomeIcon,
    labelKey: "nav.home",
    className: "font-semibold",
  },
  {
    icon: ShoppingCartIcon,
    labelKey: "nav.basket",
    className: "font-semibold",
  },
  {
    icon: ShareIcon,
    labelKey: "nav.becomePro",
    className: "font-semibold",
  },
  {
    icon: SmileIcon,
    labelKey: "nav.about",
    className: "font-semibold",
  },
];

export const HeroSection = (): JSX.Element => {
  const { t, language, direction } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section className={`relative w-full h-[900px] bg-[#010b19] overflow-hidden ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`} dir={direction}>
      <div className="relative h-[900px]">

        <div className="absolute w-full h-[900px] top-0 left-0">
          {/* التوهج الأزرق من الجانب الأيمن من الأصول */}
          <img
            src="/assets/images/Ellipse 133.svg"
            alt="Glow"
            className="hidden"
            aria-hidden="true"
          />

          {/* تخطيط الهاتف المحمول - تصميم احترافي */}
          <div className="md:hidden flex flex-col h-full bg-gradient-to-b from-[#010b19] via-[#0a1628] to-[#010b19]">
            {/* رأس الهاتف المحمول - محسن */}
            <header className="flex w-full items-center justify-between px-5 py-4 bg-[#010b19]/80 backdrop-blur-sm border-b border-[#ffffff10]">
              <div className={`flex items-center gap-3 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                <img
                  src="/assets/images/BlueBoostz Logo.svg"
                  alt="BlueBoostz logo"
                  className="w-[120px] h-[38px] rounded-[1px]"
                />
              </div>
              <div className="flex items-center gap-4">
                <LanguageToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </Button>
              </div>
            </header>

            {/* محتوى الهاتف المحمول - تخطيط احترافي */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
              {/* تأثيرات الخلفية */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[300px] h-[300px] bg-[#407bff]/20 rounded-full blur-[120px] top-[10%] left-[10%] animate-pulse" />
                <div className="absolute w-[250px] h-[250px] bg-[#6bb6ff]/15 rounded-full blur-[100px] bottom-[20%] right-[10%]" />
              </div>

              {/* حاوية صورة البطل - محسنة */}
              <div className="relative mb-8 z-10">
                <div className="relative w-[280px] h-[280px] mx-auto">
                  {/* تأثيرات التوهج */}
                  <div className="absolute inset-0 bg-gradient-radial from-[#407bff]/30 via-[#407bff]/10 to-transparent rounded-full blur-[40px] scale-110 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-radial from-[#6bb6ff]/20 via-transparent to-transparent rounded-full blur-[60px] scale-125" />

                  {/* صورة الشخصية */}
                  <img
                    src="/assets/images/LOL.png"
                    alt="League of Legends Hero Character"
                    className="relative w-full h-full object-contain rounded-2xl"
                    style={{
                      filter: 'brightness(1.2) contrast(1.1) saturate(1.2) drop-shadow(0 0 30px rgba(74, 158, 255, 0.6))'
                    }}
                  />

                  {/* العناصر الزخرفية */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#407bff]/40 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#6bb6ff]/40 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* محتوى النص - طباعة محسنة */}
              <div className="text-center space-y-4 z-10 max-w-[340px]">
                {/* العنوان الرئيسي */}
                <h1 className={`bg-gradient-to-r from-[#407bff] via-[#6bb6ff] to-[#407bff] bg-clip-text text-transparent font-bold text-[32px] leading-[1.1] tracking-[-0.5px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('hero.title')}
                </h1>

                {/* العنوان الفرعي */}
                <p className={`text-[#e0e0e0] text-[16px] leading-[1.5] font-medium tracking-[0.2px] opacity-90 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* تخطيط سطح المكتب (تدفق، وليس مطلق) */}
          <div className="hidden md:block relative">
            <header className="flex w-full h-24 md:h-28 items-center justify-between gap-8 px-4 md:px-8 py-3 z-20">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="inline-flex items-center gap-2 md:gap-4 lg:gap-6 relative flex-[0_0_auto]">
                  <img
                    src="/assets/images/BlueBoostz Logo.svg"
                    alt="BlueBoostz logo"
                    className="relative w-[100px] h-[32px] md:w-[180px] md:h-[58px] lg:w-[238.51px] lg:h-[77px] rounded-[1.33px]"
                  />

                  <Button className="hidden md:flex w-[180px] lg:w-[245px] h-10 md:h-12 items-center gap-1.5 px-[11.86px] py-0 relative rounded-[7.81px] bg-[linear-gradient(90deg,rgba(9,78,232,1)_0%,rgba(5,43,130,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(9,78,232,0.9)_0%,rgba(5,43,130,0.9)_100%)] border-0">
                    <div className="inline-flex items-center gap-[11.72px] relative flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-[9.88px] relative flex-[0_0_auto]">
                        <span className={`relative w-fit mt-[-0.99px] font-bold text-[#f1f1f1] text-[14px] md:text-[16px] lg:text-[19.5px] tracking-[0] leading-[normal] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t('header.chooseGames')}
                        </span>
                      </div>
                    </div>

                    <div className="relative w-px h-[24.7px]" />

                    <ChevronDownIcon className="relative w-[17.3px] h-[8.58px] mr-[-1.26px] text-[#f1f1f1]" />
                  </Button>

                  <div className="flex w-24 md:w-32 lg:w-40 items-center gap-1 md:gap-2 lg:gap-2.5 relative">
                    <div className="inline-flex items-start gap-[9.89px] relative flex-[0_0_auto]">
                      <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-[#00b67a] rounded-full mt-[2px]" />

                      <span className="relative w-fit mt-[-1.24px] [font-family:'Inter',Helvetica] font-bold text-white text-[12px] md:text-[14px] lg:text-[14.8px] tracking-[1.19px] leading-[19.8px] whitespace-nowrap">
                        1100
                      </span>

                      <span className={`hidden md:block relative w-fit mt-[-1.24px] opacity-[0.39] font-normal text-white text-[12px] md:text-[14px] lg:text-base tracking-[0] leading-[19.8px] whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                        {t('header.onlineBoosters')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 md:gap-4 lg:gap-6 relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[10px] md:gap-[15px] lg:gap-[22px] relative flex-[0_0_auto]">
                    <LanguageToggle />

                    <Avatar className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] rounded-[30px] border border-solid border-[#45454580]">
                      <AvatarImage
                        src="/assets/images/frame-1690.png"
                        alt="UserIcon avatar"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    <div className="inline-flex h-10 md:h-12 items-center gap-2 relative flex-[0_0_auto]">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="flex flex-col w-10 h-10 md:w-12 md:h-12 items-center justify-center gap-2 relative rounded-[207.32px] hover:bg-transparent"
                      >
                        <UserIcon className="relative w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] text-white" />
                      </Button>
                    </div>

                    {/* Custom 2x2 grid menu button - Updated */}
                    <Button
                      ref={buttonRef}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-white/10 flex flex-col gap-1 p-2 w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 hover:scale-110"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-white rounded-sm transition-all duration-200 hover:bg-blue-100"></div>
                        <div className="w-2 h-2 bg-white rounded-sm transition-all duration-200 hover:bg-blue-100"></div>
                        <div className="w-2 h-2 bg-white rounded-sm transition-all duration-200 hover:bg-blue-100"></div>
                        <div className="w-2 h-2 bg-white rounded-sm transition-all duration-200 hover:bg-blue-100"></div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </header>

            {/* بطاقة القائمة القابلة للتبديل - تصميم محدث */}
            {isMenuOpen && (
              <div ref={menuRef}>
                <Card className={`flex flex-col w-[280px] items-start gap-0 px-0 py-4 absolute top-[80px] ${direction === 'rtl' ? 'left-4' : 'right-4'} rounded-[20px] overflow-hidden border-0 z-30 shadow-2xl shadow-blue-500/30`} style={{ background: 'linear-gradient(180deg, #0343D2 0%, #02339E 51.42%, #02236C 100%)' }}>
                  <CardContent className="flex flex-col items-stretch gap-0 relative self-stretch w-full flex-[0_0_auto] p-0">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Button
                          key={index}
                          variant="ghost"
                          className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto] rounded-none justify-start px-6 py-4 h-auto hover:bg-white/10 transition-all duration-200 group border-0"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <IconComponent className="relative w-5 h-5 text-white transition-all duration-200 group-hover:scale-110 group-hover:text-blue-100" />
                          <span
                            className={`w-fit [font-family:'Inter',Helvetica] font-medium leading-[normal] relative text-white text-[16px] tracking-[0] whitespace-nowrap transition-all duration-200 group-hover:text-blue-100 ${item.className}`}
                          >
                            {t(item.labelKey)}
                          </span>
                        </Button>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            )}

            {/* محتوى من عمودين يطابق تصميم Figma */}
            <div className={`hidden md:flex w-full h-[700px] lg:h-[800px] items-center px-8 lg:px-16 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* عمود النص - الجانب الأيسر (أو الأيمن لـ RTL) */}
              <div className={`flex-1 max-w-[50%] ${direction === 'rtl' ? 'text-right mr-8 lg:mr-16' : 'text-left ml-0 lg:ml-8'} flex flex-col gap-4 lg:gap-6 z-20`}>
                <h1 className={`bg-[linear-gradient(130deg,rgba(64,123,255,1)_0%,rgba(64,123,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('hero.title')}
                </h1>
                <p className={`font-medium text-[#eeeeee] text-[18px] md:text-[24px] lg:text-[32px] leading-[1.4] max-w-[90%] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* عمود الصورة - الجانب الأيمن (أو الأيسر لـ RTL) */}
              <div className="flex-1 flex items-center justify-center relative h-full">
                {/* تأثير التوهج الأزرق */}
                <img
                  src="/assets/images/Ellipse 133.svg"
                  alt="Glow"
                  className={`absolute top-1/2 -translate-y-1/2 w-[500px] lg:w-[700px] h-auto opacity-90 select-none pointer-events-none z-0 ${direction === 'rtl' ? 'left-[-100px]' : 'right-[-100px]'}`}
                  aria-hidden="true"
                />
                {/* صورة الشخصية */}
                <img
                  src="/assets/images/LOL.png"
                  alt="League of Legends Hero Character"
                  className="h-[380px] lg:h-[500px] object-contain relative z-10"
                  style={{
                    filter: 'brightness(1.2) contrast(1.1) saturate(1.2) drop-shadow(0 0 30px rgba(74, 158, 255, 0.5))'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};