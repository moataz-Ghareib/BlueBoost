import React from "react";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FeaturesListSection } from "./sections/FeaturesListSection/FeaturesListSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GamesSection } from "./sections/GamesSection/GamesSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const Desktop = (): JSX.Element => {
  return (
    <LanguageProvider>
      <div className="bg-[#010b19] flex flex-col items-center w-full overflow-x-hidden">
        <div className="bg-[#010b19] w-full flex flex-col">
          <HeroSection />
          <GamesSection />
          <FeaturesListSection />
          <TestimonialsSection />
          <FeaturesSection />
          <FaqSection />
          <CallToActionSection />
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
};