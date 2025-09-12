/**
 * FAQ Section for BlueBoost Gaming Platform
 * 
 * This section displays frequently asked questions in an interactive accordion format.
 * Features professional styling with unified blue backgrounds for expanded items and
 * custom expand/collapse icons following the gaming platform design system.
 * 
 * Features:
 * - Interactive accordion with single item expansion
 * - Unified blue background (#407BFF47) for expanded items
 * - Custom + and - icons in circular blue buttons
 * - Professional hover effects and animations
 * - Bilingual support (English/Arabic)
 * - Responsive design across all device sizes
 * - First item expanded by default
 * 
 * Design Specifications:
 * - Follows UI Design specification for FAQ accordion design
 * - Uses exact color values: #407BFF47 for expanded background
 * - No border separators between items
 * - Custom icons instead of default chevrons
 * - Professional spacing and typography scaling
 * 
 * @author BlueBoost Development Team
 */

import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

/**
 * FaqSection Component
 * 
 * Renders the FAQ section with accordion functionality.
 * Adapts text direction and font based on selected language.
 * 
 * @returns {JSX.Element} FAQ section with interactive accordion
 */
export const FaqSection = (): JSX.Element => {
  // Get translation function and language state from context
  const { t, language } = useLanguage();
  
  /**
   * FAQ data structure
   * Contains all FAQ items with unique IDs, questions, and answers
   * Only the first item has an answer, others are placeholders
   */
  const faqData = [
    {
      id: "item-1",
      question: t('faq.blueBoost.question'),
      answer: t('faq.blueBoost.answer'),
    },
    {
      id: "item-2",
      question: t('faq.safety.question'),
      answer: "", // Empty answer - placeholder for future content
    },
    {
      id: "item-3",
      question: t('faq.cancel.question'),
      answer: "", // Empty answer - placeholder for future content
    },
    {
      id: "item-4",
      question: t('faq.track.question'),
      answer: "", // Empty answer - placeholder for future content
    },
    {
      id: "item-5",
      question: t('faq.issues.question'),
      answer: "", // Empty answer - placeholder for future content
    },
    {
      id: "item-6",
      question: t('faq.prices.question'),
      answer: "", // Empty answer - placeholder for future content
    },
    {
      id: "item-7",
      question: t('faq.timeframe.question'),
      answer: "", // Empty answer - placeholder for future content
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-8 py-12 md:py-16 lg:py-20 border-t-[1.33px] [border-top-style:solid] border-[#2f2f2f3d]">
      {/* Section header with title and heading */}
      <header className="flex flex-col w-full max-w-2xl items-center gap-4 md:gap-6 lg:gap-[26px]">
        {/* FAQ section title */}
        <div className="[font-family:'Inter',Helvetica] font-bold text-[#407bff] text-base md:text-lg lg:text-xl text-center tracking-[1px] md:tracking-[2.00px] leading-4 whitespace-nowrap">
          {t('faq.title')}
        </div>

        {/* Main heading with question and answer text */}
        <h2 className={`[font-family:'Inter',Helvetica] font-semibold text-2xl md:text-3xl lg:text-5xl text-center tracking-[0] leading-[1.2] md:leading-[59px] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
          <span className="text-white">{t('faq.heading')}
            <br />
          </span>
          <span className="text-[#407bff]">{t('faq.subheading')}</span>
        </h2>
      </header>

      {/* FAQ accordion container with max width for large screens */}
      <div className="w-full max-w-[90rem]">
        <Accordion
          type="single"          // Only one item can be expanded at a time
          collapsible            // Allow collapsing the expanded item
          defaultValue="item-1" // First item expanded by default
          className="w-full"
        >
          {/* Map through FAQ data to create accordion items */}
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              // Professional styling with unified blue background for expanded state
              className="border-t-[2.67px] [border-top-style:solid] border-[#2f2f2f] first:border-t-0 group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-[#ffffff02] rounded-lg hover:border-[#407bff]/20 data-[state=open]:bg-[#407BFF47] data-[state=open]:rounded-[12px]"
            >
              {/* Accordion trigger with question text and custom icon */}
              <AccordionTrigger className="items-center pt-4 md:pt-6 lg:pt-[32.01px] pb-4 md:pb-6 px-4 md:px-6 hover:no-underline data-[state=open]:bg-transparent data-[state=open]:px-6 md:data-[state=open]:px-8 data-[state=open]:py-6 md:data-[state=open]:py-8 data-[state=open]:pt-6 md:data-[state=open]:pt-8 data-[state=open]:pb-0 transition-all duration-300 [&>svg]:hidden hover:px-6 md:hover:px-8 hover:bg-[#407BFF20]">
                {/* Question text with hover effects */}
                <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-white text-base md:text-xl lg:text-2xl tracking-[0] leading-[1.2] md:leading-[37.3px] text-left transition-all duration-300 group-hover:text-blue-200">
                  {faq.question}
                </div>
                
                {/* Custom expand/collapse icon button */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#407bff] flex items-center justify-center shrink-0 ml-4 transition-all duration-300 group-hover:border-blue-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 data-[state=open]:border-white data-[state=open]:bg-white">
                  {/* Plus icon - shown when collapsed */}
                  <span className="text-[#407bff] text-lg md:text-xl font-bold group-data-[state=closed]:block group-data-[state=open]:hidden transition-all duration-300 group-hover:text-blue-300">+</span>
                  {/* Minus icon - shown when expanded */}
                  <span className="text-[#407bff] text-lg md:text-xl font-bold group-data-[state=closed]:hidden group-data-[state=open]:block transition-all duration-300 group-hover:text-blue-300 data-[state=open]:text-[#407bff]">−</span>
                </div>
              </AccordionTrigger>
              
              {/* Accordion content - only rendered if answer exists */}
              {faq.answer && (
                <AccordionContent className="px-6 md:px-8 pb-6 md:pb-8 pt-0 bg-transparent transition-all duration-300">
                  <div className={`[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-white text-[14px] md:text-[16px] lg:text-[18px] tracking-[0] leading-[1.5] md:leading-[1.6] transition-all duration-300 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
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