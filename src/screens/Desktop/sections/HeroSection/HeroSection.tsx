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

  // Close menu when clicking outside
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
    <section className={`relative w-full h-[688px] bg-[#010b19] overflow-hidden ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`} dir={direction}>
      <div className="relative h-[688px]">

        <div className="absolute w-full h-[688px] top-0 left-0">
          {/* Right-side blue glow from asset */}
          <img
            src="/Ellipse 133.svg"
            alt="Glow"
            className="hidden"
            aria-hidden="true"
          />
          
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col h-full">
            {/* Mobile Header */}
            <header className="flex w-full items-center justify-between px-4 py-4">
              <div className={`flex items-center gap-3 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                <img
                  src="/BlueBoostz Logo.svg"
                  alt="BlueBoostz logo"
                  className="w-[110px] h-[36px] rounded-[1px]"
                />
              </div>
              <div className="flex items-center gap-3">
                <LanguageToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 rounded-full hover:bg-transparent"
                >
                  <UserIcon className="w-5 h-5 text-white" />
                </Button>
              </div>
            </header>

            {/* Mobile Image with bound glow */}
            <div className="relative flex justify-center items-center mb-6">
              <img
                src="/Ellipse 133.svg"
                alt="Glow"
                className={`${direction === 'rtl' ? 'left-4' : 'right-4'} absolute top-1/2 -translate-y-1/2 w-[320px] h-auto opacity-90 select-none pointer-events-none`}
                aria-hidden="true"
              />
              <img
                src="/WhatsApp Image 2025-09-10 at 18.35.31_b5764302.jpg"
                alt="Hero"
                className="h-[260px] object-contain relative"
                style={{
                  filter: 'brightness(1.3) contrast(1.15) saturate(1.3) drop-shadow(0 0 25px rgba(74, 158, 255, 0.5))'
                }}
              />
            </div>

            {/* Mobile Text - Below Image */}
            <div className="flex flex-col items-center gap-3 px-4 text-center">
              <h1 className={`bg-[linear-gradient(130deg,rgba(64,123,255,1)_0%,rgba(64,123,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-[26px] tracking-[0] leading-[1.2] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                {t('hero.title')}
              </h1>
              <p className={`font-medium text-[#eeeeee] text-[15px] tracking-[0] leading-[1.5] max-w-[90%] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
          
          {/* Desktop Layout (flow, not absolute) */}
          <div className="hidden md:block relative">
            <header className="flex w-full h-24 md:h-28 items-center justify-between gap-8 px-4 md:px-8 py-3 z-20">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="inline-flex items-center gap-2 md:gap-4 lg:gap-6 relative flex-[0_0_auto]">
                  <img
                   src="/BlueBoostz Logo.svg"
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
                        src="/frame-1690.png"
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

                    {/* Custom 2x2 grid menu button */}
                    <Button
                      ref={buttonRef}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-transparent flex flex-col gap-1 p-1"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                        <div className="w-2 h-2 bg-white rounded-sm"></div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </header>

            {/* Toggleable menu card */}
            {isMenuOpen && (
              <div ref={menuRef}>
                <Card className={`flex lg:hidden flex-col w-[200px] items-start gap-2 px-4 py-[16px] absolute top-[70px] ${direction === 'rtl' ? 'left-4' : 'right-4'} rounded-3xl overflow-hidden bg-[linear-gradient(180deg,rgba(3,67,210,1)_0%,rgba(2,51,158,1)_51%,rgba(2,35,108,1)_100%)] border-0 z-10`}>
                  <CardContent className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] p-0">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Button
                          key={index}
                          variant="ghost"
                          className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] rounded-[12px] justify-start p-0 h-auto hover:bg-white/10"
                          onClick={() => setIsMenuOpen(false)} // Close menu when item is clicked
                        >
                          <IconComponent className="relative w-3 h-3 text-white" />
                          <span
                            className={`w-fit [font-family:'Inter',Helvetica] font-normal leading-[normal] relative mt-[-1.00px] text-white text-[12px] tracking-[0] whitespace-nowrap ${item.className}`}
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

            {/* Two-column content matching Figma design */}
            <div className={`hidden md:flex w-full h-[500px] lg:h-[600px] items-center px-8 lg:px-16 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Text Column - Left side (or right for RTL) */}
              <div className={`flex-1 max-w-[50%] ${direction === 'rtl' ? 'text-right mr-8 lg:mr-16' : 'text-left ml-0 lg:ml-8'} flex flex-col gap-4 lg:gap-6 z-20`}>
                <h1 className={`bg-[linear-gradient(130deg,rgba(64,123,255,1)_0%,rgba(64,123,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-transparent text-[32px] md:text-[48px] lg:text-[64px] leading-[1.1] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('hero.title')}
                </h1>
                <p className={`font-medium text-[#eeeeee] text-[18px] md:text-[24px] lg:text-[32px] leading-[1.4] max-w-[90%] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                  {t('hero.subtitle')}
                </p>
              </div>
              
              {/* Image Column - Right side (or left for RTL) */}
              <div className="flex-1 flex items-center justify-center relative h-full">
                {/* Blue glow effect */}
                <img
                  src="/Ellipse 133.svg"
                  alt="Glow"
                  className={`absolute top-1/2 -translate-y-1/2 w-[500px] lg:w-[700px] h-auto opacity-90 select-none pointer-events-none z-0 ${direction === 'rtl' ? 'left-[-100px]' : 'right-[-100px]'}`}
                  aria-hidden="true"
                />
                {/* Character image */}
                <img
                  src="/WhatsApp Image 2025-09-10 at 18.35.31_b5764302.jpg"
                  alt="Hero Character"
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