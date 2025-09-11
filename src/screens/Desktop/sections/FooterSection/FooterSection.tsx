import React from "react";
import { Button } from "../../../../components/ui/button";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const FooterSection = (): JSX.Element => {
  const { t, language } = useLanguage();
  const gameData = [
    {
      key: "games.marvelRivals",
      icon: "/marvel-rivals.png",
      width: "w-[149.45px]",
    },
    {
      key: "games.overwatch2",
      icon: "/overwatch-2.png",
      width: "w-[146.06px]",
    },
    {
      key: "games.leagueOfLegends",
      icon: "/league-of-legends.png",
      width: "w-[186.05px]",
    },
    {
      key: "games.valorant",
      icon: "/valorant.png",
      width: "w-[119.19px]",
    },
    {
      key: "games.teamfightTactics",
      icon: "/teamfight-tactics.png",
      width: "w-[177.61px]",
    },
    {
      key: "games.rainbowSixSiege",
      icon: "/rainbow-six-siege.png",
      width: "w-[180.99px]",
    },
    {
      key: "games.callOfDuty",
      icon: "/call-of-duty.png",
      width: "w-[139.02px]",
    },
    {
      key: "games.dota2",
      icon: "/dota-2.png",
      width: "w-[107.08px]",
    },
  ];

  const companyLinks = [t("footer.loyalty"), t("footer.coaches"), t("footer.newsletter")];

  const legalLinks = [t("footer.termsOfUse"), t("footer.privacyPolicy"), t("footer.dmcaNotice")];

  return (
    <footer className="flex flex-col w-full items-center gap-6 md:gap-8 lg:gap-10 relative bg-transparent rounded-[10px] border-t-2 [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-[#2f2f2f3d] px-4 md:px-8">
      <div className="flex w-full items-center justify-center gap-3 md:gap-6 lg:gap-8 py-6 md:py-8 lg:py-10 px-4">
        {gameData.map((game, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-[8px] transition-colors cursor-pointer border border-[#333333]"
          >
            <div
              className="w-5 h-5 md:w-6 md:h-6 bg-cover bg-center rounded"
              style={{ backgroundImage: `url(${game.icon})` }}
            />
            <span className={`[font-family:'Open_Sans',Helvetica] font-medium text-white text-xs md:text-sm whitespace-nowrap hidden md:block ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t(game.key)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center md:items-start justify-between gap-8 md:gap-12 lg:gap-16 relative py-8 md:py-10 lg:py-12">
        <div className="flex flex-col w-full md:w-[250px] lg:w-[340.09px] items-start gap-4 md:gap-6 relative">
          <img
            src="/BlueBoostz Logo.svg"
            alt="BlueBoostz logo"
            className="relative w-[120px] h-[40px] md:w-[150px] lg:w-[181.38px] md:h-[50px] lg:h-[58.04px] rounded-[1px]"
          />

          <div className={`relative self-stretch [font-family:'Open_Sans',Helvetica] font-normal text-[#ffffff66] text-[10px] md:text-[11px] lg:text-xs tracking-[0] leading-[1.3] lg:leading-[18.0px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('footer.description')}
          </div>
        </div>

        <div className="flex w-full md:w-auto items-center justify-between gap-8 md:gap-12 lg:gap-20 relative">
          <div className="flex flex-col w-[70px] md:w-[80.95px] items-start gap-3 md:gap-6 relative">
            <div className={`relative self-stretch h-5 md:h-6 mt-[-1.00px] opacity-80 [font-family:'Open_Sans',Helvetica] font-bold text-white text-[12px] md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('footer.company')}
            </div>

            <div className="relative self-stretch w-full h-[80px] md:h-[104px]">
              {companyLinks.map((link, index) => (
                <div
                  key={index}
                  className={`absolute w-[70px] md:w-[81px] h-5 md:h-6 ${index === 0 ? "top-0" : index === 1 ? "top-6 md:top-10" : "top-12 md:top-20"} left-0`}
                >
                  <div className={`[font-family:'Open_Sans',Helvetica] font-normal text-[#ffffff99] text-[12px] md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                    {link}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[80px] md:w-[100.2px] items-start gap-3 md:gap-6 relative">
            <div className={`self-stretch h-5 md:h-6 opacity-80 [font-family:'Open_Sans',Helvetica] font-bold leading-5 md:leading-6 relative mt-[-1.00px] text-white text-[12px] md:text-base tracking-[0] whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('footer.legal')}
            </div>

            <div className="relative self-stretch w-full h-[80px] md:h-[104px]">
              {legalLinks.map((link, index) => (
                <div
                  key={index}
                  className={`w-[80px] md:w-[100px] ${index === 0 ? "top-0" : index === 1 ? "top-6 md:top-10" : "top-12 md:top-20"} absolute h-5 md:h-6 left-0`}
                >
                  <div className={`[font-family:'Open_Sans',Helvetica] font-normal text-[#ffffff99] text-[12px] md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                    {link}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[300px] lg:w-[384.1px] items-end gap-4 md:gap-6 relative">
          <div className={`relative self-stretch h-5 md:h-6 mt-[-1.00px] opacity-80 [font-family:'Open_Sans',Helvetica] font-bold text-white text-[12px] md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('footer.needHelp')}
          </div>

          <div className={`relative w-[280px] md:w-[320px] lg:w-[366.77px] h-[30px] md:h-[35px] lg:h-[40.01px] opacity-50 [font-family:'Open_Sans',Helvetica] font-normal text-white text-[10px] md:text-[11px] lg:text-sm tracking-[0] leading-[1.3] lg:leading-[21px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('footer.supportDescription')}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <Button className="w-full sm:w-[140px] md:w-[160px] lg:w-[186.05px] h-[40px] md:h-[44px] lg:h-[48.01px] rounded-[8px] md:rounded-[10px] lg:rounded-[10.67px] bg-[linear-gradient(90deg,rgba(59,114,238,1)_0%,rgba(34,65,136,1)_100%)] [font-family:'Open_Sans',Helvetica] font-semibold text-white text-[12px] md:text-[13px] lg:text-base text-center tracking-[0] leading-4 md:leading-5">
              {t('footer.letsChat')}
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-[140px] md:w-[160px] lg:w-[186.05px] h-[40px] md:h-[44px] lg:h-[48.01px] bg-[#ffffff0d] rounded-[8px] md:rounded-[10px] lg:rounded-[10.67px] border border-solid backdrop-blur-[4px] md:backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] md:[-webkit-backdrop-filter:blur(6px)_brightness(100%)] [font-family:'Open_Sans',Helvetica] font-normal text-[#ffffffcc] text-[12px] md:text-[13px] lg:text-base text-center tracking-[0] leading-4 md:leading-5 mt-2 sm:mt-0"
            >
              {t('footer.helpCenter')}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[13.34px] px-4 md:px-6 lg:px-[200.05px] py-3 md:py-4 lg:py-[18.67px] relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#ffffff0d]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 lg:gap-0 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative flex-[0_0_auto] w-24 md:w-28 lg:w-auto"
            alt="Frame"
            src="/frame-1644.svg"
          />

          <div className="inline-flex items-center justify-center gap-2 md:gap-3 lg:gap-[13.34px] px-0 py-2 md:py-3 lg:py-[13.34px] relative flex-[0_0_auto]">
            <div className={`relative w-fit mt-[-1.33px] [font-family:'Open_Sans',Helvetica] font-normal text-[#ffffff4c] text-[10px] md:text-[11px] lg:text-sm tracking-[0] leading-[1.3] md:leading-[21.0px] whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};