import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  const { t, language } = useLanguage();
  const faqData = [
    {
      id: "item-1",
      question: t('faq.blueBoost.question'),
      answer: t('faq.blueBoost.answer'),
    },
    {
      id: "item-2",
      question: t('faq.safety.question'),
      answer: "",
    },
    {
      id: "item-3",
      question: t('faq.cancel.question'),
      answer: "",
    },
    {
      id: "item-4",
      question: t('faq.track.question'),
      answer: "",
    },
    {
      id: "item-5",
      question: t('faq.issues.question'),
      answer: "",
    },
    {
      id: "item-6",
      question: t('faq.prices.question'),
      answer: "",
    },
    {
      id: "item-7",
      question: t('faq.timeframe.question'),
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 py-12 md:py-16 lg:py-20 border-t-[1.33px] [border-top-style:solid] border-[#2f2f2f3d]">
      <header className="flex flex-col w-full max-w-2xl items-center gap-4 md:gap-6 lg:gap-[26px]">
        <div className="[font-family:'Inter',Helvetica] font-bold text-[#407bff] text-base md:text-lg lg:text-xl text-center tracking-[1px] md:tracking-[2.00px] leading-4 whitespace-nowrap">
          {t('faq.title')}
        </div>

        <h2 className={`[font-family:'Inter',Helvetica] font-semibold text-2xl md:text-3xl lg:text-5xl text-center tracking-[0] leading-[1.2] md:leading-[59px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
          <span className="text-white">{t('faq.heading')}
            <br />
            {t('faq.subheading').split('Answers')[0]}
          </span>
          <span className="text-[#407bff]">{t('faq.subheading').split('Answers')[1] ?? 'Answers'}</span>
        </h2>
      </header>

      <div className="w-full max-w-[90rem]">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-t-[2.67px] [border-top-style:solid] border-[#2f2f2f] first:border-t-0 group"
            >
              <AccordionTrigger className="items-center pt-4 md:pt-6 lg:pt-[32.01px] pb-0 px-4 md:px-6 hover:no-underline data-[state=open]:bg-[#407BFF47] data-[state=open]:rounded-t-[12px] data-[state=open]:px-6 md:data-[state=open]:px-8 data-[state=open]:py-6 md:data-[state=open]:py-8 data-[state=open]:pt-6 md:data-[state=open]:pt-8 transition-all duration-300 [&>svg]:hidden">
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base md:text-xl lg:text-2xl tracking-[0] leading-[1.2] md:leading-[37.3px] text-left">
                  {faq.question}
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#407bff] flex items-center justify-center shrink-0 ml-4">
                  <span className="text-[#407bff] text-lg md:text-xl font-bold group-data-[state=closed]:block group-data-[state=open]:hidden">+</span>
                  <span className="text-[#407bff] text-lg md:text-xl font-bold group-data-[state=closed]:hidden group-data-[state=open]:block">−</span>
                </div>
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="px-6 md:px-8 pb-6 md:pb-8 pt-2 bg-[#407BFF47] rounded-b-[12px]">
                  <div className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#9CA3AF] text-[14px] md:text-[16px] lg:text-[18px] tracking-[0] leading-[1.5] md:leading-[1.6] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                    {faq.answer}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};