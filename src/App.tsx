// Main application component for BlueBoost gaming platform
// This is the root component that renders the entire desktop layout
import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CallToActionSection } from "./screens/Desktop/sections/CallToActionSection/CallToActionSection";
import { FaqSection } from "./screens/Desktop/sections/FaqSection/FaqSection";
import { FeaturesListSection } from "./screens/Desktop/sections/FeaturesListSection/FeaturesListSection";
import { FeaturesSection } from "./screens/Desktop/sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./screens/Desktop/sections/FooterSection/FooterSection";
import { GamesSection } from "./screens/Desktop/sections/GamesSection/GamesSection";
import { HeroSection } from "./screens/Desktop/sections/HeroSection/HeroSection";
import { TestimonialsSection } from "./screens/Desktop/sections/TestimonialsSection/TestimonialsSection";

/**
 * Main App Component
 * 
 * This component serves as the primary layout container for the BlueBoost gaming platform.
 * It wraps the entire application with LanguageProvider for bilingual support (English/Arabic)
 * and renders all main sections in the correct order.
 * 
 * Features:
 * - Bilingual support (English/Arabic) with RTL/LTR text direction
 * - Responsive design across all device sizes
 * - Full-screen dark theme with brand colors
 * - Professional gaming platform layout
 * 
 * @returns {JSX.Element} The complete application layout
 */
export const App = (): JSX.Element => {
  return (
    // Language provider wraps the entire app for bilingual support
    <LanguageProvider>
      {/* Main application container with dark background and full width */}
      <div className="bg-[#010b19] flex flex-col items-center w-full overflow-x-hidden">
        {/* Content wrapper with consistent dark background */}
        <div className="bg-[#010b19] w-full flex flex-col">
          {/* Hero section - Main landing area with navigation */}
          <HeroSection />
          
          {/* Games section - Grid of available games */}
          <GamesSection />
          
          {/* Features list section - Platform benefits */}
          <FeaturesListSection />
          
          {/* Testimonials section - Customer reviews carousel */}
          <TestimonialsSection />
          
          {/* Features section - Statistics and company info */}
          <FeaturesSection />
          
          {/* FAQ section - Frequently asked questions accordion */}
          <FaqSection />
          
          {/* Call to action section - Sign up/sign in buttons */}
          <CallToActionSection />
          
          {/* Footer section - Links, contact info, and company details */}
          <FooterSection />
        </div>
      </div>
    </LanguageProvider>
  );
};