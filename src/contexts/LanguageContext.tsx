import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.chooseGames': 'Choose Your Games',
    'header.onlineBoosters': 'Online Boosters',
    // Navigation
    'nav.home': 'HOME',
    'nav.basket': 'basket',
    'nav.becomePro': 'Become a PRO',
    'nav.about': 'About us',
    
    // Hero Section
    'hero.title': 'Boosting Market',
    'hero.subtitle': 'your dream rank is closer than you think.',
    
    // Features List Section
    'features.title': 'We provide fast, easy and secure boost',
    'features.description': 'We have been in the business since 6 years, seen it all. At Boosting Market, we refined the craft of offering a boosting experience without compromises.',
    
    // Features Section
    'featuresSection.title': 'Features',
    'featuresSection.heading': 'Why did you choose us?',
    'featuresSection.subtitle': 'We deliver premium game Boosting tailored to Your Needs',
    'featuresSection.stats.completedBoosts': 'Completed Boosts',
    'featuresSection.stats.service247': 'Service\\n24/7',
    'featuresSection.stats.positiveReviews': 'Positive\\nreviews',
    'featuresSection.stats.yearsExperience': 'Years Of Experience',
    
    // Testimonials Section
    'testimonials.title': 'TESTIMONIALS',
    'testimonials.headingPrefix': 'Trusted by more than',
    'testimonials.count': '5000',
    'testimonials.headingSuffix': 'clients around the world',
    
    // Individual Testimonials
    'testimonial1.name': 'Ahmed Ali',
    'testimonial1.location': 'Saudi Arabia',
    'testimonial1.text': 'Very trust worthy and fair pricings. Also very fast and straight forward.',
    
    'testimonial2.name': 'Ahmed Ali',
    'testimonial2.location': 'Saudi Arabia', 
    'testimonial2.text': 'Very trust worthy and fair pricings. Also very fast and straight forward.',
    
    'testimonial3.name': 'Dark 22',
    'testimonial3.location': 'Saudi Arabia',
    'testimonial3.text': 'Amazing service I was stuck in Gold for weeks, but thanks to their boost I finally reached Platinum. Super fast and secure.',
    
    'testimonial4.name': 'mazen -_-',
    'testimonial4.location': 'Saudi Arabia',
    'testimonial4.text': 'Very trust worthy and fair pricings. Also very fast and straight forward.',
    
    'testimonial5.name': 'Ahmed Ali',
    'testimonial5.location': 'Saudi Arabia',
    'testimonial5.text': 'Very trust worthy and fair pricings. Also very fast and straight forward.',
    
    'testimonial6.name': 'Manta TT',
    'testimonial6.location': 'Saudi Arabia',
    'testimonial6.text': 'The coaching sessions completely changed the way I play. I learned new strategies and climbed ranks by myself after that.',
    
    'testimonial7.name': 'Ali Tarq',
    'testimonial7.location': 'Saudi Arabia',
    'testimonial7.text': 'Honestly, I was skeptical at first, but the results speak for themselves. From Diamond IV to Master in less than a week.',
    
    'testimonial8.name': 'Seqra 25',
    'testimonial8.location': 'Saudi Arabia',
    'testimonial8.text': 'Worthy and fair pricings. Also very fast and straight forward.',
    
    // FAQ Section
    'faq.title': 'FAQ',
    'faq.heading': 'Got a question?',
    'faq.subheading': 'We have Answers',
    'faq.blueBoost.question': 'What is BlueBoost ?',
    'faq.blueBoost.answer': 'BlueBoost is a dedicated platform that helps gamers reach their dream rank faster and with 100% safety. We know how frustrating it can be to stay stuck at the same rank because of bad teammates or lack of time, so we have built a team of professional players ready to help you climb with ease.',
    'faq.safety.question': 'Is the service safe for my account ?',
    'faq.cancel.question': 'Can I cancel or request a refund ?',
    'faq.track.question': 'Is it possible to track or watch the boost in progress ?',
    'faq.issues.question': 'What happens if there is any issue with my account ?',
    'faq.prices.question': 'Are the prices fixed or do they vary ?',
    'faq.timeframe.question': 'What is the timeframe to reach the desired result ?',
    
    // Call to Action Section
    'cta.title': 'Join the BlueBoost community',
    'cta.description': 'Do not waste time stuck in the same rank. With us, you will climb faster, safer, and stronger. Sign up now and start your journey to the rank of your dreams.',
    'cta.signIn': 'Sign In',
    'cta.signUp': 'Sign Up',
    
    // Footer Section
    'footer.description': 'Get on your way to the fastest rank ever, training and calculating your score all in one place. Make your rank shine and prove you are a pro! Register now and start your journey to the highest rank.',
    'footer.company': 'Company',
    'footer.loyalty': 'Loyalty',
    'footer.coaches': 'Coaches',
    'footer.newsletter': 'Newsletter',
    'footer.legal': 'Legal',
    'footer.termsOfUse': 'Terms of use',
    'footer.privacyPolicy': 'Privacy policy',
    'footer.dmcaNotice': 'DMCA Notice',
    'footer.needHelp': 'Need Help ?',
    'footer.supportDescription': 'Our professional support team is available 24/7 to assist with any inquiries.',
    'footer.letsChat': 'Let us Chat',
    'footer.helpCenter': 'Help Center',
    'footer.copyright': 'Blueboost © 2025 - All Rights Reserved',
    
    // Games
    'games.marvelRivals': 'Marvel Rivals',
    'games.overwatch2': 'Overwatch 2',
    'games.leagueOfLegends': 'League of Legends',
    'games.valorant': 'Valorant',
    'games.teamfightTactics': 'Teamfight Tactics',
    'games.rainbowSixSiege': 'Rainbow Six Siege',
    'games.callOfDuty': 'Call of Duty',
    'games.dota2': 'Dota 2',
  },
  ar: {
    // Header
    'header.chooseGames': 'اختر ألعابك',
    'header.onlineBoosters': 'معززين متاحين',
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.basket': 'السلة',
    'nav.becomePro': 'كن محترفاً',
    'nav.about': 'من نحن',
    
    // Hero Section
    'hero.title': 'بوستنج ماركت',
    'hero.subtitle': 'رتبتك المثالية أقرب مما تعتقد.',
    
    // Features List Section
    'features.title': 'نوفر تعزيز سريع وسهل وآمن',
    'features.description': 'نحن في هذا المجال منذ 6 سنوات، شاهدنا كل شيء. في بوستنج ماركت، صقلنا فن تقديم تجربة تعزيز بدون تنازلات.',
    
    // Features Section
    'featuresSection.title': 'المميزات',
    'featuresSection.heading': 'لماذا اخترتنا؟',
    'featuresSection.subtitle': 'نقدم خدمات تعزيز ألعاب مميزة مصممة خصيصاً لاحتياجاتك',
    'featuresSection.stats.completedBoosts': 'تعزيزات مكتملة',
    'featuresSection.stats.service247': 'خدمة\\n24/7',
    'featuresSection.stats.positiveReviews': 'تقييمات\\nإيجابية',
    'featuresSection.stats.yearsExperience': 'سنوات من الخبرة',
    
    // Testimonials Section
    'testimonials.title': 'آراء العملاء',
    'testimonials.headingPrefix': 'موثوق به من أكثر من',
    'testimonials.count': '5000',
    'testimonials.headingSuffix': 'عميل حول العالم',
    
    // Individual Testimonials
    'testimonial1.name': 'أحمد علي',
    'testimonial1.location': 'المملكة العربية السعودية',
    'testimonial1.text': 'موثوق جداً وأسعار عادلة. أيضاً سريع جداً ومباشر.',
    
    'testimonial2.name': 'أحمد علي',
    'testimonial2.location': 'المملكة العربية السعودية',
    'testimonial2.text': 'موثوق جداً وأسعار عادلة. أيضاً سريع جداً ومباشر.',
    
    'testimonial3.name': 'دارك 22',
    'testimonial3.location': 'المملكة العربية السعودية',
    'testimonial3.text': 'خدمة مذهلة! كنت عالقاً في رتبة الذهب لأسابيع، لكن بفضل خدمة التعزيز وصلت أخيراً إلى البلاتيني. سريع جداً وآمن.',
    
    'testimonial4.name': 'مازن -_-',
    'testimonial4.location': 'المملكة العربية السعودية',
    'testimonial4.text': 'موثوق جداً وأسعار عادلة. أيضاً سريع جداً ومباشر.',
    
    'testimonial5.name': 'أحمد علي',
    'testimonial5.location': 'المملكة العربية السعودية',
    'testimonial5.text': 'موثوق جداً وأسعار عادلة. أيضاً سريع جداً ومباشر.',
    
    'testimonial6.name': 'مانتا تي تي',
    'testimonial6.location': 'المملكة العربية السعودية',
    'testimonial6.text': 'جلسات التدريب غيرت تماماً طريقة لعبي. تعلمت استراتيجيات جديدة وتقدمت في الرتب بنفسي بعد ذلك.',
    
    'testimonial7.name': 'علي طارق',
    'testimonial7.location': 'المملكة العربية السعودية',
    'testimonial7.text': 'بصراحة، كنت متشككاً في البداية، لكن النتائج تتحدث عن نفسها. من الماس الرابع إلى الماستر في أقل من أسبوع.',
    
    'testimonial8.name': 'سيقرا 25',
    'testimonial8.location': 'المملكة العربية السعودية',
    'testimonial8.text': 'موثوق وأسعار عادلة. أيضاً سريع جداً ومباشر.',
    
    // FAQ Section
    'faq.title': 'الأسئلة الشائعة',
    'faq.heading': 'لديك سؤال؟',
    'faq.subheading': 'لدينا الإجابات',
    'faq.blueBoost.question': 'ما هو بلو بوست؟',
    'faq.blueBoost.answer': 'بلو بوست هو منصة مخصصة تساعد اللاعبين على الوصول إلى رتبتهم المثالية بشكل أسرع وبأمان 100%. نحن نعلم كم يمكن أن يكون محبطاً البقاء عالقاً في نفس الرتبة بسبب زملاء الفريق السيئين أو نقص الوقت، لذا بنينا فريقاً من اللاعبين المحترفين جاهزين لمساعدتك على التقدم بسهولة.',
    'faq.safety.question': 'هل الخدمة آمنة لحسابي؟',
    'faq.cancel.question': 'هل يمكنني الإلغاء أو طلب استرداد الأموال؟',
    'faq.track.question': 'هل من الممكن تتبع أو مشاهدة التعزيز أثناء التقدم؟',
    'faq.issues.question': 'ماذا يحدث إذا كانت هناك أي مشكلة مع حسابي؟',
    'faq.prices.question': 'هل الأسعار ثابتة أم تتغير؟',
    'faq.timeframe.question': 'ما هو الإطار الزمني للوصول إلى النتيجة المرغوبة؟',
    
    // Call to Action Section
    'cta.title': 'انضم إلى مجتمع بلو بوست',
    'cta.description': 'لا تضيع الوقت عالقاً في نفس الرتبة. معنا، ستتقدم بشكل أسرع وأكثر أماناً وقوة. سجل الآن وابدأ رحلتك إلى رتبة أحلامك.',
    'cta.signIn': 'تسجيل الدخول',
    'cta.signUp': 'إنشاء حساب',
    
    // Footer Section
    'footer.description': 'انطلق في طريقك إلى أسرع رتبة على الإطلاق، التدريب وحساب نقاطك كل ذلك في مكان واحد. اجعل رتبتك تلمع وأثبت أنك محترف! سجل الآن وابدأ رحلتك إلى أعلى رتبة.',
    'footer.company': 'الشركة',
    'footer.loyalty': 'الولاء',
    'footer.coaches': 'المدربين',
    'footer.newsletter': 'النشرة الإخبارية',
    'footer.legal': 'قانوني',
    'footer.termsOfUse': 'شروط الاستخدام',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.dmcaNotice': 'إشعار DMCA',
    'footer.needHelp': 'تحتاج مساعدة؟',
    'footer.supportDescription': 'فريق الدعم المحترف لدينا متاح 24/7 للمساعدة في أي استفسارات.',
    'footer.letsChat': 'دعنا نتحدث',
    'footer.helpCenter': 'مركز المساعدة',
    'footer.copyright': 'بلو بوست © 2025 - جميع الحقوق محفوظة',
    
    // Games
    'games.marvelRivals': 'مارفل رايفلز',
    'games.overwatch2': 'أوفر واتش 2',
    'games.leagueOfLegends': 'ليج أوف ليجندز',
    'games.valorant': 'فالورانت',
    'games.teamfightTactics': 'تيم فايت تاكتيكس',
    'games.rainbowSixSiege': 'رينبو سيكس سيج',
    'games.callOfDuty': 'كول أوف ديوتي',
    'games.dota2': 'دوتا 2',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Save to localStorage
    localStorage.setItem('blueBoost-language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Load saved language on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('blueBoost-language') as Language;
    if (savedLanguage && ['en', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value: LanguageContextType = {
    language,
    direction,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageContext };