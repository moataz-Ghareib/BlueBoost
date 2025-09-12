/**
 * Testimonials Section for BlueBoost Gaming Platform
 * 
 * This section displays customer testimonials in an animated dual-carousel layout.
 * Features direction-aware animations, staggered timing, and RTL/LTR support.
 * 
 * Features:
 * - Dual-row animated carousels with different speeds
 * - Direction-aware animations (RTL/LTR support)
 * - Staggered animation timing (1-second delay on first row)
 * - Professional hover effects on testimonial cards
 * - Responsive design across all device sizes
 * - Seamless infinite scrolling with duplicated content
 * 
 * @author BlueBoost Development Team
 */

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Card, CardContent } from "../../../../components/ui/card";

/**
 * Testimonials data structure
 * Contains customer testimonials with names, locations, and feedback
 */

const testimonialsData = [
  {
    id: 1,
    nameKey: "testimonial1.name",
    locationKey: "testimonial1.location",
    textKey: "testimonial1.text",
    avatar: "/user-avatar-4.png",
    bgColor: "bg-[#022446]",
  },
  {
    id: 2,
    nameKey: "testimonial2.name",
    locationKey: "testimonial2.location",
    textKey: "testimonial2.text",
    avatar: "/user-avatar-4.png",
    bgColor: "bg-[#022446]",
  },
  {
    id: 3,
    nameKey: "testimonial3.name",
    locationKey: "testimonial3.location",
    textKey: "testimonial3.text",
    avatar: "/user-avatar-2.png",
    bgColor: "bg-[#022446]",
  },
  {
    id: 4,
    nameKey: "testimonial4.name",
    locationKey: "testimonial4.location",
    textKey: "testimonial4.text",
    avatar: "/user-avatar-3.png",
    bgColor: "bg-[#022446]",
  },
  {
    id: 5,
    nameKey: "testimonial5.name",
    locationKey: "testimonial5.location",
    textKey: "testimonial5.text",
    avatar: "/user-avatar-4.png",
    bgColor: "bg-[#032547]",
  },
  {
    id: 6,
    nameKey: "testimonial6.name",
    locationKey: "testimonial6.location",
    textKey: "testimonial6.text",
    avatar: "/user-avatar-5.png",
    bgColor: "bg-[#032547]",
  },
  {
    id: 7,
    nameKey: "testimonial7.name",
    locationKey: "testimonial7.location",
    textKey: "testimonial7.text",
    avatar: "/user-avatar-6.png",
    bgColor: "bg-[#032547]",
  },
  {
    id: 8,
    nameKey: "testimonial8.name",
    locationKey: "testimonial8.location",
    textKey: "testimonial8.text",
    avatar: "/user-avatar-7.png",
    bgColor: "bg-[#032547]",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  const { t, language, direction } = useLanguage();
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const carousel1 = carouselRef1.current;
    const carousel2 = carouselRef2.current;
    
    if (!carousel1 || !carousel2) return;

    // Initialize scroll positions
    carousel1.scrollLeft = 0;
    carousel2.scrollLeft = 0;

    let animationFrameId: number;
    let frameCount = 0; // Add frame counter for delay
    const speed1 = 1.2; // Speed for top row (moderate speed)
    const speed2 = 1.8; // Speed for bottom row (slightly faster but moderate)
    const delayFrames = 60; // Delay first row by 1 second (60 frames at 60fps)

    const animate = () => {
      if (!isHovering) {
        frameCount++; // Increment frame counter
        
        // Handle RTL and LTR differently
        if (direction === 'rtl') {
          // Second row starts immediately
          carousel2.scrollLeft -= speed2;
          
          // First row starts after delay
          if (frameCount > delayFrames) {
            carousel1.scrollLeft -= speed1;
          }
          
          // Reset scroll position for RTL
          if (carousel1.scrollLeft <= 0) {
            carousel1.scrollLeft = carousel1.scrollWidth / 2;
          }
          
          if (carousel2.scrollLeft <= 0) {
            carousel2.scrollLeft = carousel2.scrollWidth / 2;
          }
        } else {
          // Second row starts immediately
          carousel2.scrollLeft += speed2;
          
          // First row starts after delay
          if (frameCount > delayFrames) {
            carousel1.scrollLeft += speed1;
          }
          
          // Reset scroll position when we've scrolled past all items
          if (carousel1.scrollLeft >= carousel1.scrollWidth / 2) {
            carousel1.scrollLeft = 0;
          }
          
          if (carousel2.scrollLeft >= carousel2.scrollWidth / 2) {
            carousel2.scrollLeft = 0;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, direction]); // Add direction as dependency

  // Split testimonials into two rows
  const firstRow = testimonialsData.slice(0, 4);
  const secondRow = testimonialsData.slice(4, 8);

  return (
    <section className={`flex flex-col w-full items-center gap-8 md:gap-12 relative px-4 md:px-8 py-8 md:py-12 ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`} dir={direction}>
      <div className="w-full h-0.5 bg-[#2f2f2f40]" />

      <div className="w-full relative">
        <header className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <h3 className={`font-bold text-[#407bff] text-base md:text-lg lg:text-xl text-center tracking-[1px] md:tracking-[2.00px] leading-4 whitespace-nowrap ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            {t('testimonials.title')}
          </h3>

          <h2 className={`font-semibold text-2xl md:text-3xl lg:text-5xl text-center tracking-[0] leading-[1.2] ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
            <span className="text-white">{t('testimonials.headingPrefix')} </span>
            <span className="text-[#407bff]">{t('testimonials.count')}<br /></span>
            <span className="text-white">{t('testimonials.headingSuffix')}</span>
          </h2>
        </header>

        {/* First row carousel (slower) */}
        <div 
          ref={carouselRef1}
          className="overflow-hidden w-full mb-6 md:mb-8"
          style={{ direction: 'ltr', scrollBehavior: 'auto' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Carousel track with duplicated items for seamless looping */}
          <div className="flex w-max">
            {/* First set of testimonials */}
            {firstRow.map((testimonial) => (
              <div key={`first-${testimonial.id}`} className="mx-4 md:mx-6 lg:mx-8 min-w-[250px] md:min-w-[400px] lg:min-w-[592px]">
                <Card
                  className={`${testimonial.bgColor} rounded-[10px] md:rounded-[12px] lg:rounded-[14.87px] border-0 w-[250px] md:w-[400px] lg:w-[592px] h-[150px] md:h-[200px] lg:h-[251px] relative transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 cursor-pointer group`}
                >
                  <CardContent className="p-0 h-full">
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-[12.4px] absolute top-3 md:top-4 lg:top-[38px] left-3 md:left-4 lg:left-[30px] transition-all duration-300 group-hover:translate-x-1">
                      <div
                        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[52.06px] lg:h-[52.06px] rounded-[15px] md:rounded-[20px] lg:rounded-[26.03px] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      />
                      <div className="flex flex-col w-[60px] md:w-[70px] lg:w-[84.53px] items-center gap-0.5 md:gap-1 lg:gap-[4.96px] transition-all duration-300 group-hover:translate-x-1">
                        <div className={`w-full font-medium text-white text-[12px] md:text-[14px] lg:text-[16.9px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.nameKey)}
                        </div>
                        <div className={`w-full font-normal text-[#9a9a9a] text-[10px] md:text-[11px] lg:text-[13.7px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-300 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.locationKey)}
                        </div>
                      </div>
                    </div>

                    <div className={`absolute w-[220px] md:w-[350px] lg:w-[475px] top-16 md:top-24 lg:top-28 left-3 md:left-4 lg:left-[30px] font-medium text-[#cbcbcb] text-[12px] md:text-[14px] lg:text-[16.1px] tracking-[0] leading-[1.3] lg:leading-[1.4] transition-all duration-300 group-hover:text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                      {t(testimonial.textKey)}
                    </div>

                    <img
                      className="hidden md:block absolute w-[100px] md:w-[120px] lg:w-[151px] h-[15px] md:h-[18px] lg:h-[22px] top-[120px] md:top-[160px] lg:top-[187px] left-[150px] md:left-[250px] lg:left-[366px]"
                      alt="Frame"
                      src="/frame-1676.svg"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Second set of testimonials (duplicate for seamless looping) */}
            {firstRow.map((testimonial) => (
              <div key={`first-duplicate-${testimonial.id}`} className="mx-4 md:mx-6 lg:mx-8 min-w-[250px] md:min-w-[400px] lg:min-w-[592px]">
                <Card
                  className={`${testimonial.bgColor} rounded-[10px] md:rounded-[12px] lg:rounded-[14.87px] border-0 w-[250px] md:w-[400px] lg:w-[592px] h-[150px] md:h-[200px] lg:h-[251px] relative`}
                >
                  <CardContent className="p-0 h-full">
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-[12.4px] absolute top-3 md:top-4 lg:top-[38px] left-3 md:left-4 lg:left-[30px] transition-all duration-300 group-hover:translate-x-1">
                      <div
                        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[52.06px] lg:h-[52.06px] rounded-[15px] md:rounded-[20px] lg:rounded-[26.03px] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      />
                      <div className="flex flex-col w-[60px] md:w-[70px] lg:w-[84.53px] items-center gap-0.5 md:gap-1 lg:gap-[4.96px] transition-all duration-300 group-hover:translate-x-1">
                        <div className={`w-full font-medium text-white text-[12px] md:text-[14px] lg:text-[16.9px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.nameKey)}
                        </div>
                        <div className={`w-full font-normal text-[#9a9a9a] text-[10px] md:text-[11px] lg:text-[13.7px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-300 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.locationKey)}
                        </div>
                      </div>
                    </div>

                    <div className={`absolute w-[220px] md:w-[350px] lg:w-[475px] top-16 md:top-24 lg:top-28 left-3 md:left-4 lg:left-[30px] font-medium text-[#cbcbcb] text-[12px] md:text-[14px] lg:text-[16.1px] tracking-[0] leading-[1.3] lg:leading-[1.4] transition-all duration-300 group-hover:text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                      {t(testimonial.textKey)}
                    </div>

                    <img
                      className="hidden md:block absolute w-[100px] md:w-[120px] lg:w-[151px] h-[15px] md:h-[18px] lg:h-[22px] top-[120px] md:top-[160px] lg:top-[187px] left-[150px] md:left-[250px] lg:left-[366px]"
                      alt="Frame"
                      src="/frame-1676.svg"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Second row carousel (faster) */}
        <div 
          ref={carouselRef2}
          className="overflow-hidden w-full"
          style={{ direction: 'ltr', scrollBehavior: 'auto' }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Carousel track with duplicated items for seamless looping */}
          <div className="flex w-max">
            {/* First set of testimonials */}
            {secondRow.map((testimonial) => (
              <div key={`second-${testimonial.id}`} className="mx-4 md:mx-6 lg:mx-8 min-w-[250px] md:min-w-[400px] lg:min-w-[592px]">
                <Card
                  className={`${testimonial.bgColor} rounded-[10px] md:rounded-[12px] lg:rounded-[14.87px] border-0 w-[250px] md:w-[400px] lg:w-[592px] h-[150px] md:h-[200px] lg:h-[251px] relative`}
                >
                  <CardContent className="p-0 h-full">
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-[12.4px] absolute top-3 md:top-4 lg:top-[38px] left-3 md:left-4 lg:left-[30px] transition-all duration-300 group-hover:translate-x-1">
                      <div
                        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[52.06px] lg:h-[52.06px] rounded-[15px] md:rounded-[20px] lg:rounded-[26.03px] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      />
                      <div className="flex flex-col w-[60px] md:w-[70px] lg:w-[84.53px] items-center gap-0.5 md:gap-1 lg:gap-[4.96px] transition-all duration-300 group-hover:translate-x-1">
                        <div className={`w-full font-medium text-white text-[12px] md:text-[14px] lg:text-[16.9px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.nameKey)}
                        </div>
                        <div className={`w-full font-normal text-[#9a9a9a] text-[10px] md:text-[11px] lg:text-[13.7px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-300 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.locationKey)}
                        </div>
                      </div>
                    </div>

                    <div className={`absolute w-[220px] md:w-[350px] lg:w-[475px] top-16 md:top-24 lg:top-28 left-3 md:left-4 lg:left-[30px] font-medium text-[#cbcbcb] text-[12px] md:text-[14px] lg:text-[16.1px] tracking-[0] leading-[1.3] lg:leading-[1.4] transition-all duration-300 group-hover:text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                      {t(testimonial.textKey)}
                    </div>

                    <img
                      className="hidden md:block absolute w-[100px] md:w-[120px] lg:w-[151px] h-[15px] md:h-[18px] lg:h-[22px] top-[120px] md:top-[160px] lg:top-[187px] left-[150px] md:left-[250px] lg:left-[366px]"
                      alt="Frame"
                      src="/frame-1676.svg"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Second set of testimonials (duplicate for seamless looping) */}
            {secondRow.map((testimonial) => (
              <div key={`second-duplicate-${testimonial.id}`} className="mx-4 md:mx-6 lg:mx-8 min-w-[250px] md:min-w-[400px] lg:min-w-[592px]">
                <Card
                  className={`${testimonial.bgColor} rounded-[10px] md:rounded-[12px] lg:rounded-[14.87px] border-0 w-[250px] md:w-[400px] lg:w-[592px] h-[150px] md:h-[200px] lg:h-[251px] relative`}
                >
                  <CardContent className="p-0 h-full">
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-[12.4px] absolute top-3 md:top-4 lg:top-[38px] left-3 md:left-4 lg:left-[30px] transition-all duration-300 group-hover:translate-x-1">
                      <div
                        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[52.06px] lg:h-[52.06px] rounded-[15px] md:rounded-[20px] lg:rounded-[26.03px] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      />
                      <div className="flex flex-col w-[60px] md:w-[70px] lg:w-[84.53px] items-center gap-0.5 md:gap-1 lg:gap-[4.96px] transition-all duration-300 group-hover:translate-x-1">
                        <div className={`w-full font-medium text-white text-[12px] md:text-[14px] lg:text-[16.9px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-200 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.nameKey)}
                        </div>
                        <div className={`w-full font-normal text-[#9a9a9a] text-[10px] md:text-[11px] lg:text-[13.7px] tracking-[0] leading-[1.2] whitespace-nowrap transition-all duration-300 group-hover:text-blue-300 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                          {t(testimonial.locationKey)}
                        </div>
                      </div>
                    </div>

                    <div className={`absolute w-[220px] md:w-[350px] lg:w-[475px] top-16 md:top-24 lg:top-28 left-3 md:left-4 lg:left-[30px] font-medium text-[#cbcbcb] text-[12px] md:text-[14px] lg:text-[16.1px] tracking-[0] leading-[1.3] lg:leading-[1.4] transition-all duration-300 group-hover:text-white ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
                      {t(testimonial.textKey)}
                    </div>

                    <img
                      className="hidden md:block absolute w-[100px] md:w-[120px] lg:w-[151px] h-[15px] md:h-[18px] lg:h-[22px] top-[120px] md:top-[160px] lg:top-[187px] left-[150px] md:left-[250px] lg:left-[366px]"
                      alt="Frame"
                      src="/frame-1676.svg"
                    />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-[50px] md:w-[200px] lg:w-[576px] h-[150px] md:h-[200px] lg:h-[548px] top-[75px] md:top-[100px] lg:top-[290px] right-0 bg-[linear-gradient(270deg,rgba(2,12,25,1)_0%,rgba(2,12,25,0)_100%)] pointer-events-none" />
        <div className="absolute w-[50px] md:w-[200px] lg:w-[576px] h-[150px] md:h-[200px] lg:h-[548px] top-[75px] md:top-[100px] lg:top-[290px] left-0 bg-[linear-gradient(90deg,rgba(2,12,25,1)_1%,rgba(2,12,25,0)_100%)] pointer-events-none" />
      </div>
    </section>
  );
};