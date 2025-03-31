export interface ExperienceItem {
  year: string
  title: string
  company: string
  description: string
  details: string[]
  skills?: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "2022 - Present",
    title: "Applications Consultant",
    company: "EY",
    description:
      "Working as a React developer, I've been a member of multiple teams involved in building complex IFA (Independent Financial Adviser) web application for buying insurance for a UK based banking client.",
    details: [
      "React/TypeScript development",
      "Redux state management",
      "Jest/Testing Library",
      "Snapshots & unit testing",
      "CSS modules",
      "Jira & Confluence for project management",
      "Storybook for component development",
      "Git & GitHub for version control",
      "Jenkins for CI/CD",
      "ESLint & Prettier for code quality",
      "DRY & SOLID principles",
      "pnpm for package management",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Jest",
      "Testing Library",
      "Storybook",
      "CSS Modules",
      "Git",
      "GitHub",
      "Soft Skills",
    ],
  },
  {
    year: "2020 - 2021",
    title: "Junior Front-End Developer",
    company: "Intelligent Betting Software",
    description:
      "As a Junior Angular developer, I’ve successfully deployed an in-house platform creating dynamic, responsive, pixel perfect and localized web application.",
    details: [
      "Angular/TypeScript development",
      "REST API integration",
      "RxJS Observables",
      "Angular Material & PrimeNG",
      "HTML5, CSS3, SASS",
      "DRY principle",
      "Translocoi18n for localization",
      "Git & Bitbucket for version control",
      "Redmine for project management",
      "ESLint & Prettier for code quality",
      "npm for package management",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Angular Material",
      "PrimeNG",
      "SASS",
      "HTML5",
      "CSS3",
      "REST API",
      "Transloco i18n",
      "Git",
      "Bitbucket",
      "Soft Skills",
    ],
  },
  {
    year: "2019 - 2020",
    title: "Freelance Web Developer",
    company: "Cemalovic Web Design",
    description:
      "As a versatile developer, I’ve delved into the exciting realms of responsive web design, SEO and PHP.",
    details: [
      "Full responsive design",
      "Software Development Life Cycle",
      "SEO optimization",
      "PHP development",
      "Object-oriented programming",
      "phpMyAdmin/MySQL database management",
      "Bootstrap framework",
      "BEM methodology",
      "Git & GitHub for version control",
      "HTML5, CSS3, SASS",
      "CSS Grid",
      "CSS Flexbox",
      "SVG sprites",
      "CSS animations",
      "MVC Architecture",
      "Interesction observer",
    ],
    skills: [
      "Bootstrap",
      "PHP",
      "MySQL",
      "OOP",
      "Git",
      "GitHub",
      "SEO",
      "SASS",
      "HTML5",
      "CSS3",
      "Soft Skills",
    ],
  },
  {
    year: "2019",
    title: "Web Design intern",
    company: "Web Design Agency Studio 77",
    description:
      "During my internship at a specialized web design company, I gained valuable insights into the world of web development and search engine optimization. I learned the intricacies of SEO - how to optimize content and improve rankings on Google.",
    details: ["HTML5", "CSS3", "SASS", "SEO"],
    skills: ["SEO", "SASS", "HTML5", "CSS3"],
  },
]
