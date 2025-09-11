// استيراد الأيقونات والمكونات المعاد استخدامها من مكتبة الواجهة
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// المكوّن الرئيسي لقسم الألعاب في نسخة سطح المكتب
export const GamesSection = (): JSX.Element => {
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
      imageSrc: "/link.svg",
      hasServices: true,
      services: marvelRivalsServices,
    },
    {
      // title: "Rocket League",
      backgroundImage: "url(../Link.svg)",
      imageSrc: "/Link.svg",
      hasServices: false,
    },
    {
      // title: "World Of Warcraft",
      backgroundImage: "url(../link-1.svg)",
      imageSrc: "/link-1.svg",
      hasServices: false,
    },
    {
      // title: "Overwatch 2",
      backgroundImage: "url(../link-2.svg)",
      imageSrc: "/link-2.svg",
      hasServices: false,
    },
    {
      // title: "Teamfight Tactics",
      backgroundImage: "url(../link-4.svg)",
      imageSrc: "/link-4.svg",
      hasServices: false,
    },
    {
      // title: "Rainbow Six Siege",
      backgroundImage: "url(../link-5.svg)",
      imageSrc: "/link-5.svg",
      hasServices: false,
    },
    {
      // title: "Conter Strike 2",
      backgroundImage: "url(../link-6.svg)",
      imageSrc: "/link-6.svg",
      hasServices: false,
    },
    {
      // title: "League Of Legends",
      backgroundImage: "url(../link-7.svg)",
      imageSrc: "/link-7.svg",
      hasServices: false,
    },
    {
      // title: "Call Of Duty",
      backgroundImage: "url(../link-8.svg)",
      imageSrc: "/link-8.svg",
      hasServices: false,
    },
    {
      // title: "Dota 2",
      backgroundImage: "url(/link-9.png)",
      imageSrc: "/link-9.png",
      hasServices: false,
    },
    {
      // title: "Valorant",
      backgroundImage: "url(../link-10.svg)",
      imageSrc: "/link-10.svg",
      hasServices: false,
    },
    {
      // title: "Fortnite",
      backgroundImage: "url(/link-11.svg)",
      imageSrc: "/link-11.svg",
      hasServices: false,
    },
  ];

  // واجهة العرض: شبكة بطاقات ألعاب مع تنسيقات Responsive عبر Tailwind CSS
  return (
    <section className="w-full px-4 md:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
        {/* تكرار على قائمة الألعاب لرسم بطاقة لكل لعبة */}
        {gameCards.map((game, index) => (
          <div key={index} className="flex justify-center">
            <Card
              className="relative w-full max-w-[350px] aspect-[376/224] rounded-lg overflow-hidden border-0 bg-[#0b1220]"
            >
              <CardContent className="relative w-full h-full p-0">
              {/* صورة الكارد كعنصر <img> لضمان الظهور الكامل */}
              <img
                src={game.imageSrc}
                alt={game.title ?? "game"}
                className="absolute inset-0 w-full h-full object-contain"
                draggable={false}
              />
              {/* إذا كانت اللعبة تحتوي خدمات، نعرض طبقة شفافة مع أزرار ووسوم الخدمات */}
              {game.hasServices ? (
                <div className="relative w-full h-full rounded-lg">
                  <div className="absolute inset-0 bg-[#003ecb40] rounded-lg overflow-hidden backdrop-blur-[4.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.9px)_brightness(100%)]">
                    {/* زر "see all" لعرض جميع الخدمات/العروض الخاصة باللعبة */}
                    <Button className="absolute bottom-3 md:bottom-4 lg:bottom-6 left-3 md:left-4 lg:left-6 h-auto bg-[#2b6cfd99] rounded-lg px-2 py-1 md:px-2.5 md:py-1.5 text-[#dadada] text-[12px] md:text-[14px] lg:text-[15.2px] font-medium [font-family:'Inter',Helvetica] hover:bg-[#2b6cfd] transition-colors">
                      see all
                    </Button>
                  </div>

                  <div className="absolute top-3 md:top-4 lg:top-6 left-3 md:left-4 lg:left-6 flex flex-col gap-3 md:gap-4 lg:gap-6 w-[200px] md:w-[250px] lg:w-[335px]">
                    <h3 className="text-[16px] md:text-[18px] lg:text-[22.7px] leading-[1.2] [font-family:'Open_Sans',Helvetica] font-bold text-white">
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
                              className="bg-[#282828] text-white text-[8px] md:text-[8.5px] lg:text-[9.4px] font-medium [font-family:'Inter',Helvetica] px-2 py-1 rounded-[8px] md:rounded-[10px] lg:rounded-[11.33px] hover:bg-[#383838] transition-colors"
                            >
                              {service}
                            </Badge>
                          ))}
                      </div>

                      {/* إذا وُجدت خدمة خامسة نعرضها في صف منفصل */}
                      {game.services && game.services.length > 4 && (
                        <div className="flex items-center gap-2 md:gap-3">
                          <Badge className="bg-[#282828] text-white text-[8px] md:text-[8.5px] lg:text-[9.4px] font-medium [font-family:'Inter',Helvetica] px-2 py-1 rounded-[8px] md:rounded-[10px] lg:rounded-[11.33px] hover:bg-[#383838] transition-colors">
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
                  <h3 className="absolute top-3 md:top-4 lg:top-6 left-3 md:left-4 lg:left-6 text-[16px] md:text-[18px] lg:text-[22.8px] leading-[1.2] [font-family:'Open_Sans',Helvetica] font-bold text-white">
                    {game.title ?? ""}
                  </h3>
                </>
              )}              
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};