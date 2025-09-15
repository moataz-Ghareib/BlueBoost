/**
 * قسم الألعاب لمنصة BlueBoost للألعاب
 * 
 * يعرض هذا القسم شبكة متجاوبة من بطاقات الألعاب مع رسوم متحركة احترافية للتمرير.
 * يتميز بمراقب التقاطع للرسوم المتحركة المحفزة بالتمرير وخدمات Marvel Rivals
 * وتصميم متجاوب كامل عبر جميع أحجام الأجهزة.
 * 
 * المميزات:
 * - رسوم متحركة احترافية محفزة بالتمرير (البطاقات تظهر من الجوانب)
 * - مراقب التقاطع لتوقيت الرسوم المتحركة
 * - تخطيط شبكة متجاوب (1-4 أعمدة بناءً على حجم الشاشة)
 * - Marvel Rivals مع شارات الخدمة وزر "عرض الكل"
 * - تأثيرات تحويم ورسوم متحركة احترافية
 * - تأخيرات رسوم متحركة متدرجة للظهور السلس
 * 
 * @author فريق تطوير BlueBoost
 */

// استيراد الأيقونات والمكونات المعاد استخدامها من مكتبة الواجهة
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useEffect, useRef, useState } from "react";

// المكوّن الرئيسي لقسم الألعاب في نسخة سطح المكتب
export const GamesSection = (): JSX.Element => {
  // حالة الرسوم المتحركة للبطاقات
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // مراقب التقاطع لإظهار البطاقات عند الوصول إليها
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // ربط المراقب بالبطاقات
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // تحديد اتجاه الحركة بناءً على رقم البطاقة
  const getAnimationClass = (index: number, isVisible: boolean) => {
    if (!isVisible) {
      // البطاقات الزوجية تأتي من اليسار، الفردية من اليمين
      return index % 2 === 0 
        ? 'opacity-0 -translate-x-20 translate-y-10 scale-95' 
        : 'opacity-0 translate-x-20 translate-y-10 scale-95';
    }
    return 'opacity-100 translate-x-0 translate-y-0 scale-100';
  };

  // تأخير تطبيقي للحركة
  const getAnimationDelay = (index: number) => {
    return `${index * 100}ms`;
  };
  // قائمة الخدمات الخاصة بلعبة "Marvel Rivals" (تظهر كوسوم/Badges)
  const marvelRivalsServices = [
    "Divions",
    "Rank Boost",
    "Win Boost",
    "Achievements Boost",
    "One Above All Boost",
  ];

  // البيانات المصدرية لبطاقات الألعاب المعروضة في الشبكة
  // كل عنصر يمثل بطاقة بلعبة معينة ويحتوي إعدادات الخلفية والعنوان وأيقونة وخدمات إن وُجدت
  const gameCards = [
    {
      title: "Marvel Rivals",
      backgroundImage: "url(../link.svg)",
      imageSrc: "/assets/images/link.svg",
      hasServices: true,
      services: marvelRivalsServices,
    },
    {
      // title: "Rocket League",
      backgroundImage: "url(../Link.svg)",
      imageSrc: "/assets/images/Link.svg",
      hasServices: false,
    },
    {
      // title: "World Of Warcraft",
      backgroundImage: "url(../link-1.svg)",
      imageSrc: "/assets/images/link-1.svg",
      hasServices: false,
    },
    {
      // title: "Overwatch 2",
      backgroundImage: "url(../link-2.svg)",
      imageSrc: "/assets/images/link-2.svg",
      hasServices: false,
    },
    {
      // title: "Teamfight Tactics",
      backgroundImage: "url(../link-4.svg)",
      imageSrc: "/assets/images/link-4.svg",
      hasServices: false,
    },
    {
      // title: "Rainbow Six Siege",
      backgroundImage: "url(../link-5.svg)",
      imageSrc: "/assets/images/link-5.svg",
      hasServices: false,
    },
    {
      // title: "Conter Strike 2",
      backgroundImage: "url(../link-6.svg)",
      imageSrc: "/assets/images/link-6.svg",
      hasServices: false,
    },
    {
      // title: "League Of Legends",
      backgroundImage: "url(../link-7.svg)",
      imageSrc: "/assets/images/link-7.svg",
      hasServices: false,
    },
    {
      // title: "Call Of Duty",
      backgroundImage: "url(../link-8.svg)",
      imageSrc: "/assets/images/link-8.svg",
      hasServices: false,
    },
    {
      // title: "Dota 2",
      backgroundImage: "url(/link-9.png)",
      imageSrc: "/assets/images/link-9.png",
      hasServices: false,
    },
    {
      // title: "Valorant",
      backgroundImage: "url(../link-10.svg)",
      imageSrc: "/assets/images/link-10.svg",
      hasServices: false,
    },
    {
      // title: "Fortnite",
      backgroundImage: "url(/link-11.svg)",
      imageSrc: "/assets/images/link-11.svg",
      hasServices: false,
    },
  ];

  return (
    <section ref={sectionRef} className="w-full px-0 md:px-8 py-8 md:py-12 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-none sm:max-w-6xl mx-auto">
        {gameCards.map((game, index) => {
          const isVisible = visibleCards.has(index);
          
          return (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              data-card-index={index}
              className={`flex justify-center group transition-all duration-700 ease-out ${
                getAnimationClass(index, isVisible)
              }`}
              style={{
                animationDelay: getAnimationDelay(index),
                transitionDelay: isVisible ? getAnimationDelay(index) : '0ms'
              }}
            >
            <Card className="relative w-full max-w-none sm:max-w-[350px] aspect-[376/224] sm:rounded-lg rounded-none overflow-hidden border-0 bg-[#0b1220] cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2">
              <CardContent className="relative w-full h-full p-0 overflow-hidden">
              <img
                src={game.imageSrc}
                alt={game.title ?? "game"}
                className="absolute inset-0 w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                draggable={false}
              />
              {/* إذا كانت اللعبة تحتوي خدمات، نعرض طبقة شفافة مع أزرار ووسوم الخدمات */}
              {game.hasServices ? (
                <div className="relative w-full h-full rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-900/20 group-hover:to-purple-900/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-[#003ecb40] rounded-lg overflow-hidden backdrop-blur-[4.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.9px)_brightness(100%)] group-hover:backdrop-blur-[6px] group-hover:bg-[#003ecb60] transition-all duration-300">
                    {/* زر "see all" لعرض جميع الخدمات/العروض الخاصة باللعبة */}
                    <Button className="absolute bottom-3 md:bottom-4 lg:bottom-6 left-3 md:left-4 lg:left-6 h-auto bg-[#2b6cfd99] rounded-lg px-2 py-1 md:px-2.5 md:py-1.5 text-[#dadada] text-[12px] md:text-[14px] lg:text-[15.2px] font-medium [font-family:'Inter',Helvetica] hover:bg-[#2b6cfd] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5">
                      see all
                    </Button>
                  </div>

                  <div className="absolute top-3 md:top-4 lg:top-6 left-3 md:left-4 lg:left-6 flex flex-col gap-3 md:gap-4 lg:gap-6 w-[200px] md:w-[250px] lg:w-[335px] transition-all duration-300 group-hover:translate-y-[-2px]">
                    <h3 className="text-[16px] md:text-[18px] lg:text-[22.7px] leading-[1.2] [font-family:'Open_Sans',Helvetica] font-bold text-white transition-all duration-300 group-hover:text-blue-200 group-hover:drop-shadow-lg">
                      {game.title ?? ""}
                    </h3>

                    <div className="flex flex-col gap-2 md:gap-3">
                      <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                        {/* عرض أول أربع خدمات كوسوم */}
                        {game.services
                          ?.slice(0, 4)
                          .map((service, serviceIndex) => (
                            <Badge
                              key={serviceIndex}
                              className="bg-[#282828] text-white text-[8px] md:text-[8.5px] lg:text-[9.4px] font-medium [font-family:'Inter',Helvetica] px-2 py-1 rounded-[8px] md:rounded-[10px] lg:rounded-[11.33px] hover:bg-[#383838] hover:scale-105 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
                            >
                              {service}
                            </Badge>
                          ))}
                      </div>

                      {/* إذا وُجدت خدمة خامسة نعرضها في صف منفصل */}
                      {game.services && game.services.length > 4 && (
                        <div className="flex items-center gap-2 md:gap-3">
                          <Badge className="bg-[#282828] text-white text-[8px] md:text-[8.5px] lg:text-[9.4px] font-medium [font-family:'Inter',Helvetica] px-2 py-1 rounded-[8px] md:rounded-[10px] lg:rounded-[11.33px] hover:bg-[#383838] hover:scale-105 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5">
                            {game.services[4]}
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* في حال عدم وجود خدمات، نعرض فقط العنوان */}
                  <h3 className="absolute top-3 md:top-4 lg:top-6 left-3 md:left-4 lg:left-6 text-[16px] md:text-[18px] lg:text-[22.8px] leading-[1.2] [font-family:'Open_Sans',Helvetica] font-bold text-white transition-all duration-300 group-hover:text-blue-200 group-hover:drop-shadow-lg group-hover:translate-y-[-2px]">
                    {game.title ?? ""}
                  </h3>
                </>
              )}              
              </CardContent>
            </Card>
          </div>
          );
        })}
      </div>
    </section>
  );
};