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
    year: "2022 - 2025",
    title: "Frontend Developer",
    company: "EY Consulting",
    description:
      "Working as a React developer, I've been a member of multiple teams involved in building complex IFA (Independent Financial Adviser) web application for buying insurance for a UK based banking client.",
    details: [
      "React/TypeScript development",
      "Redux Toolkit state management",
      "Jest/RTL snapshots & unit testing",
      "CSS modules for styling",
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
    title: "Frontend Developer",
    company: "Intelligent Betting Software",
    description:
      "As a Junior Angular developer, I’ve successfully deployed an in-house platform creating dynamic, responsive, pixel perfect and localized web application.",
    details: [
      "Angular/TypeScript development",
      "HTML5, CSS3, SASS for layout",
      "Translocoi18n for localization",
      "REST API integration",
      "Redmine for project management",
      "ESLint & Prettier for code quality",
      "Git & Bitbucket for version control",
      "Angular Material & PrimeNG for component development",
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
    year: "2018 - 2020",
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
    company: "Studio 77",
    description:
      "During my internship at a specialized web design company, I gained valuable insights into the world of web development and search engine optimization. I learned the intricacies of SEO - how to optimize content and improve rankings on Google.",
    details: ["HTML5", "CSS3", "SASS", "SEO"],
    skills: ["SEO", "SASS", "HTML5", "CSS3"],
  },
]
