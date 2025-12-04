import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "uz" | "en" | "ru";

interface Translations {
  nav: {
    home: string;
    about: string;
    interests: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    welcome: string;
    greeting: string;
    title: string;
    description: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    age: string;
    ageValue: string;
    location: string;
    locationValue: string;
    focus: string;
    focusValue: string;
    role: string;
  };
  interests: {
    badge: string;
    title: string;
    description: string;
    programming: string;
    programmingDesc: string;
    football: string;
    footballDesc: string;
  };
  skills: {
    badge: string;
    title: string;
    description: string;
    responsiveDesign: string;
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    viewProject: string;
    projectDesc: string;
    landingPage: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    sendMessage: string;
  };
  footer: {
    rights: string;
  };
  theme: {
    light: string;
    dark: string;
  };
}

const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      interests: "Qiziqishlar",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      welcome: "👋 Portfoliomga xush kelibsiz",
      greeting: "Salom, men",
      title: "Yosh Frontend Dasturchi",
      description: "14 yoshli, toza, tez va foydalanuvchilarga qulay veb-saytlar yaratishga ishtiyoqmand dasturchi. O'zbekistondan.",
      viewWork: "Ishlarimni ko'rish",
      getInTouch: "Bog'lanish",
    },
    about: {
      badge: "Men haqimda",
      title: "Meni tanishtiray",
      description: "Men 14 yoshli boshlang'ich frontend dasturchiman. Toza, tez va foydalanuvchilarga qulay veb-saytlar yaratishga qiziqaman. Kichik loyihalar qurish, yangi texnologiyalarni o'rganish va har kuni dasturlash ko'nikmalarimni oshirishni yaxshi ko'raman.",
      age: "Yosh",
      ageValue: "14 yosh",
      location: "Manzil",
      locationValue: "Xorazm, Shovot, O'zbekiston",
      focus: "Yo'nalish",
      focusValue: "Frontend Dasturlash",
      role: "Frontend Dasturchi",
    },
    interests: {
      badge: "Qiziqishlarim",
      title: "Nimalar bilan qiziqaman",
      description: "Bo'sh vaqtimda shular bilan shug'ullanaman",
      programming: "Dasturlash",
      programmingDesc: "Yangi texnologiyalarni o'rganish va loyihalar yaratish",
      football: "Futbol",
      footballDesc: "Futbol o'ynash va sevimli jamoalarni tomosha qilish",
    },
    skills: {
      badge: "Mening ko'nikmalarim",
      title: "Men ishlaydigan texnologiyalar",
      description: "Men bu texnologiyalarda doimiy ravishda o'rganib va rivojlanib boraman",
      responsiveDesign: "Responsive Dizayn",
    },
    projects: {
      badge: "Mening loyihalarim",
      title: "Tanlangan ishlar",
      description: "Bu yerda men ustida ishlagan ba'zi loyihalar",
      viewProject: "Loyihani ko'rish",
      projectDesc: "Zamonaviy UI tamoyillarini amaliyotda qo'llash uchun yaratilgan minimalistik va tez landing sahifa. Toza dizayn, silliq animatsiyalar va responsive layout.",
      landingPage: "Landing Sahifa",
    },
    contact: {
      badge: "Bog'lanish",
      title: "Keling, birga ishlaymiz",
      description: "Savollaringiz bo'lsa yoki shunchaki salom aytmoqchi bo'lsangiz, bemalol murojaat qiling!",
      email: "Elektron pochta",
      phone: "Telefon",
      address: "Manzil",
      sendMessage: "Menga xabar yuboring",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
    },
    theme: {
      light: "Yorug'",
      dark: "Qorong'u",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      interests: "Interests",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      welcome: "👋 Welcome to my portfolio",
      greeting: "Hi, I'm",
      title: "Young Frontend Developer",
      description: "A 14-year-old passionate about creating clean, fast, and user-friendly websites from Uzbekistan.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    about: {
      badge: "About Me",
      title: "Get to Know Me",
      description: "I am a 14-year-old beginner frontend developer passionate about creating clean, fast, and user-friendly websites. I enjoy building small projects, learning new technologies, and improving my coding skills every day.",
      age: "Age",
      ageValue: "14 years old",
      location: "Location",
      locationValue: "Khorezm, Shovot, Uzbekistan",
      focus: "Focus",
      focusValue: "Frontend Development",
      role: "Frontend Developer",
    },
    interests: {
      badge: "My Interests",
      title: "What I'm Passionate About",
      description: "Things I enjoy doing in my free time",
      programming: "Programming",
      programmingDesc: "Learning new technologies and building projects",
      football: "Football",
      footballDesc: "Playing football and watching my favorite teams",
    },
    skills: {
      badge: "My Skills",
      title: "Technologies I Work With",
      description: "I'm constantly learning and improving my skills in these technologies",
      responsiveDesign: "Responsive Design",
    },
    projects: {
      badge: "My Projects",
      title: "Featured Work",
      description: "Here are some of the projects I've been working on",
      viewProject: "View Project",
      projectDesc: "A minimalistic and fast landing page built to practice modern UI principles. Features clean design, smooth animations, and responsive layout.",
      landingPage: "Landing Page",
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Work Together",
      description: "Feel free to reach out if you have any questions or just want to say hi!",
      email: "Email",
      phone: "Phone",
      address: "Location",
      sendMessage: "Send Me a Message",
    },
    footer: {
      rights: "All rights reserved.",
    },
    theme: {
      light: "Light",
      dark: "Dark",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      interests: "Интересы",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      welcome: "👋 Добро пожаловать в моё портфолио",
      greeting: "Привет, я",
      title: "Молодой Frontend Разработчик",
      description: "14-летний разработчик из Узбекистана, увлечённый созданием чистых, быстрых и удобных веб-сайтов.",
      viewWork: "Мои работы",
      getInTouch: "Связаться",
    },
    about: {
      badge: "Обо мне",
      title: "Познакомьтесь со мной",
      description: "Мне 14 лет, и я начинающий frontend-разработчик. Мне нравится создавать чистые, быстрые и удобные веб-сайты. Я люблю создавать небольшие проекты, изучать новые технологии и улучшать свои навыки программирования каждый день.",
      age: "Возраст",
      ageValue: "14 лет",
      location: "Местоположение",
      locationValue: "Хорезм, Шават, Узбекистан",
      focus: "Направление",
      focusValue: "Frontend Разработка",
      role: "Frontend Разработчик",
    },
    interests: {
      badge: "Мои интересы",
      title: "Чем я увлекаюсь",
      description: "Чем я занимаюсь в свободное время",
      programming: "Программирование",
      programmingDesc: "Изучение новых технологий и создание проектов",
      football: "Футбол",
      footballDesc: "Играю в футбол и смотрю любимые команды",
    },
    skills: {
      badge: "Мои навыки",
      title: "Технологии, с которыми я работаю",
      description: "Я постоянно учусь и совершенствую свои навыки в этих технологиях",
      responsiveDesign: "Адаптивный дизайн",
    },
    projects: {
      badge: "Мои проекты",
      title: "Избранные работы",
      description: "Вот некоторые проекты, над которыми я работал",
      viewProject: "Смотреть проект",
      projectDesc: "Минималистичная и быстрая посадочная страница, созданная для практики современных принципов UI. Чистый дизайн, плавные анимации и адаптивная верстка.",
      landingPage: "Посадочная страница",
    },
    contact: {
      badge: "Связаться",
      title: "Давайте работать вместе",
      description: "Не стесняйтесь обращаться, если у вас есть вопросы или просто хотите поздороваться!",
      email: "Эл. почта",
      phone: "Телефон",
      address: "Адрес",
      sendMessage: "Написать мне",
    },
    footer: {
      rights: "Все права защищены.",
    },
    theme: {
      light: "Светлая",
      dark: "Тёмная",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "uz";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
