import { Emojis } from "../models/enums/emojis.enum";
import { SkillFilters } from "../models/enums/filters.enum";

import aboutTranslations from "../locales/about.locales.json";

import * as skillsIcons from "../images/skills/_index";

export const getSkillsData = (lang: "es" | "en") => {
  const translations = aboutTranslations[lang];

  return [
    {
      title: translations.skills.personal,
      type: SkillFilters.PERSONAL,
      icon: Emojis.Personal,
      skills: [
        {
          name: translations.skills.commitment,
          image: skillsIcons.commitment,
        },
        {
          name: translations.skills.proactivity,
          image: skillsIcons.proactivity,
        },
        {
          name: translations.skills.detailAttention,
          image: skillsIcons.detailAttention,
        },
        {
          name: translations.skills.creativity,
          image: skillsIcons.creativity,
        },
        {
          name: translations.skills.flexibility,
          image: skillsIcons.flexibility,
        },
        {
          name: translations.skills.leadership,
          image: skillsIcons.leadership,
        },
      ],
    },
    {
      title: translations.skills.design,
      type: SkillFilters.DESIGN,
      icon: Emojis.Designer,
      skills: [
        {
          name: "Adobe XD",
          image: skillsIcons.adobeXD,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "Illustrator",
          image: skillsIcons.illustrator,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "Photoshop",
          image: skillsIcons.photoshop,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "Figma",
          image: skillsIcons.figma,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: translations.skills.prototyping,
          image: skillsIcons.prototype,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "Wireframing",
          image: skillsIcons.wireframe,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
      ],
    },
    {
      title: translations.skills.dev,
      icon: Emojis.Developer,
      type: SkillFilters.DEV,
      skills: [
        {
          name: "JavaScript",
          image: skillsIcons.js,
        },
        {
          name: "TypeScript",
          image: skillsIcons.ts,
        },
        {
          name: "Python",
          image: skillsIcons.python,
        },
        {
          name: "HTML5",
          image: skillsIcons.html,
        },
        {
          name: "CSS3",
          image: skillsIcons.css,
        },
        {
          name: "Git",
          image: skillsIcons.git,
        },
        {
          name: "Angular",
          image: skillsIcons.angular,
        },
        {
          name: "Ionic",
          image: skillsIcons.ionic,
        },
        {
          name: "Capacitor",
          image: skillsIcons.capacitor,
        },
        {
          name: "React",
          image: skillsIcons.react,
        },
        {
          name: "React Native",
          image: skillsIcons.react,
        },
        {
          name: "Next.js",
          image: skillsIcons.nextjs,
          customClass:
            "dark:invert dark:brightness-90 transition-all duration-500",
        },
        {
          name: "Astro",
          image: skillsIcons.astro,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "Expo",
          image: skillsIcons.expo,
          customClass:
            "dark:invert dark:brightness-90 transition-all duration-500",
        },
        {
          name: "Redux",
          image: skillsIcons.redux,
        },
        {
          name: "RxJS",
          image: skillsIcons.rxjs,
        },
        {
          name: "Tailwind CSS",
          image: skillsIcons.tailwind,
        },
        {
          name: "Sass",
          image: skillsIcons.sass,
        },
        {
          name: "Less",
          image: skillsIcons.less,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "Bootstrap",
          image: skillsIcons.bootstrap,
        },
        {
          name: "Webpack",
          image: skillsIcons.webpack,
        },
        {
          name: "Node.js",
          image: skillsIcons.node,
        },
        {
          name: "Express",
          image: skillsIcons.express,
          customClass:
            "dark:invert dark:brightness-90 transition-all duration-500",
        },
        {
          name: "NPM",
          image: skillsIcons.npm,
        },
        {
          name: "Firebase",
          image: skillsIcons.firebase,
        },
        {
          name: "Google Cloud",
          image: skillsIcons.googleCloud,
        },
        {
          name: "ESLint",
          image: skillsIcons.eslint,
        },
        {
          name: "Prettier",
          image: skillsIcons.prettier,
        },
        {
          name: "MongoDB",
          image: skillsIcons.mongodb,
        },
        {
          name: "MySQL",
          image: skillsIcons.mysql,
          customClass: "dark:drop-shadow-[0px_4px_8px_#FFFFFF25]",
        },
        {
          name: "PostgreSQL",
          image: skillsIcons.postgresql,
        },
        {
          name: "Sequelize",
          image: skillsIcons.sequelize,
        },
        {
          name: "Postman",
          image: skillsIcons.postman,
        },
        {
          name: "GitHub",
          image: skillsIcons.github,
          customClass:
            "dark:invert dark:brightness-90 transition-all duration-500",
        },
      ],
    },
  ];
};

export const getAllSkills = (lang: "es" | "en") => {
  return getSkillsData(lang).flatMap((skillCategory) =>
    skillCategory.skills.map((skill) => ({
      ...skill,
      type: skillCategory.type,
    })),
  );
};