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
    company: "EY",
    description:
      "Working as a React developer, I've been a member of multiple teams involved in building complex IFA (Independent Financial Adviser) web application for buying insurance for a UK based banking client.",
    details: [
      "Built and debugged responsive, reusable SPA components with React, TypeScript, CSS3 and Storybook, ensuring cross-browser compatibility and adherence to best practices",
      "Maintain a high standard of code quality and performance, following S.O.L.I.D. and DRY principles, to ensure maintainable and scalable code through refactoring, unit testing, code review, accessibility compliance, prioritizing attention to detail, clean and maintainable code",
      "Collaborated daily with cross-functional teams including designers, backend developers and QA engineers using Agile methodologies (Scrum) across different time zones, demonstrating strong verbal and written communication skills",
      "Integrated RESTful APIs to fetch and display data dynamically, enhancing user experience and application functionality",
      "Debugging pipeline and services by reading Jenkins and Kibana logs to identify and/or resolve issues in a timely manner",
      "Wrote unit tests using Jest and React Testing Library to ensure code reliability and prevent regressions, achieving high test coverage",
      "Utilized Git and GitHub for version control, ensuring code integrity and collaboration",
      "Participated in regular code reviews, providing constructive feedback to peers and incorporating suggestions to improve code quality",
      "Engaged in continuous learning and professional development to stay updated with the latest industry trends and technologies in frontend development",
      "Demonstrated strong problem-solving skills by debugging and optimizing code for performance and usability",
      "Effectively communicated technical concepts to non-technical stakeholders, facilitating better understanding and collaboration across teams",
      "Gained exposure to a micro-service architecture and custom validation libraries within a large-scale enterprise environment",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Jest",
      "Testing Library",
      "Storybook",
      "CSS Modules",
      "Git",
      "GitHub",
    ],
  },
  {
    year: "2020 - 2021",
    title: "Frontend Developer",
    company: "Intelligent Betting Software",
    description:
      "As an Angular developer, I’ve successfully deployed an in-house platform creating dynamic, responsive, pixel perfect and localized web application.",
    details: [
      "Built, debugged and refactored responsive, reusable components and dynamic SPA with Angular, TypeScript and JavaScript, ensuring cross-browser compatibility and adherence to best practices",
      "Styled web applications using advanced CSS3 techniques including PrimeNG utility classes, SASS, Flexbox and Grid, following BEM methodology for maintainable and scalable code",
      "Integrated REST APIs to fetch and display data dynamically, enhancing user experience and application functionality",
      "Used RxJS to handle asynchronous data streams effectively",
      "Implemented Angular Material and PrimeNG UI libraries, theming and localization with Transloco i18n, providing a personalized user experience",
      "Employed Git and Bitbucket for version control, ensuring code integrity and collaboration",
      "Followed Agile methodologies using Redmine for project management, facilitating efficient workflow and timely delivery",
      "Maintained code quality with ESLint and Prettier, adhering to coding standards and best practices",
      "Utilized npm for package management, ensuring smooth dependency management and project setup",
      "Applied DRY and SOLID principles to enhance code maintainability and scalability",
      "Developed strong problem-solving skills by debugging and optimizing code for performance and usability",
      "Demonstrated effective communication and teamwork skills through collaboration on projects and mentoring team members on Angular fundamentals and CSS best practices, improving team output and fostering knowledge sharing",
      "Gained hands-on experience in full software development lifecycle (SDLC) from requirements gathering to deployment and maintenance",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
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
    ],
  },
  {
    year: "2018 - 2020",
    title: "Web Developer",
    company: "Training & Personal Projects",
    description:
      "After I completed Web Design and PHP courses, I’ve delved into the exciting realms of Web Development. During this period I mentored a colleague on web development fundamentals, actively documenting and sharing knowledge of HTML5, PHP, MVC architecture, advanced CSS3, Flexbox, Grid, SEO and SASS techniques, demonstrating patience and a ability to break down complex topics.",
    details: [
      "Developed multiple personal demo Web Design projects using HTML5, CSS3, SASS, PHP and SQL, showcasing a strong understanding of web development principles and best practices",
      "Implemented responsive design techniques using CSS3, SASS, Flexbox and Grid to ensure optimal user experience across various devices and screen sizes",
      "Applied SEO best practices to enhance website visibility and search engine rankings, including keyword optimization and site structure improvements",
      "Utilized version control systems like Git and GitHub to manage codebase effectively, ensuring collaboration and code integrity",
      "Followed Software Development Life Cycle (SDLC) methodologies to plan, develop, test and deploy web applications efficiently",
      "Demonstrated strong problem-solving skills by debugging and optimizing code for performance and usability",
      "Showcased effective communication skills by documenting project processes and collaborating with peers on development tasks",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "SASS",
      "BEM",
      "DRY",
      "SEO",
      "PHP",
      "SQL",
      "OOP",
      "Git",
      "GitHub",
      "SDLC",
    ],
  },
  {
    year: "2019",
    title: "Intern",
    company: "Studio 77",
    description:
      "During my internship at a specialized Web Design company, I gained valuable insights into the world of web development and search engine optimization. I learned the intricacies of SEO - how to optimize content and improve rankings on Google.",
    details: [
      "Assisted in web development projects, focusing on HTML5, CSS3 and SASS to create visually appealing websites",
      "Implemented Technical and On-page / Off-page SEO (performing in-depth keyword research, optimizing meta descriptions and titles, implementing schema markup, using internal and external links, optimizing images, etc.) to optimize website content and improve search engine rankings",
      "Gained foundational and hands-on SEO experience in a dynamic environment, enhancing my understanding of SEO and Web Design principles"
    ],
    skills: ["SEO", "SASS", "HTML5", "CSS3"],
  },
  {
    year: "2013 - 2020",
    title: "Founder - Owner",
    company: "Naturally Dance",
    description:
      "Founded and scaled a successful dance school from the ground up, overseeing all operational aspects including curriculum development, class scheduling and instructor management. This experience cultivated exceptional project management, client communication and problem-solving skills under pressure",
    details: [
      "Orchestrated small and large-scale local & international events including “Beogradska Disko Žurka - Belgrade Disco Fever” (1000+ participants per event), dance workshops, social dance events and performances, demonstrating strong project management and organizational skills",
      "Troubleshot last-minute tech issues during live events",
      "Designed and taught comprehensive dance curricula to diverse student cohorts, honing the ability to explain complex concepts to learners of different skill levels",
      "Engineered targeted marketing campaigns and built an engaged community through active communication and guerilla tactics on social media platforms (Facebook, Instagram, Messenger) creating a welcoming environment",
      "Managing full project life-cycles including budgeting, staffing and program development business, coordinating with multiple vendors and partners to ensure efficient execution of events and classes",
      "Cultivated collaborative environments and built strong partnerships, working with diverse teams and clients to deliver successful outcomes",
    ],
    skills: [
      "Education and Mentorship",
      "Public Relations",
      "Event Management",
      "Stakeholder Collaboration",
      "Brand Strategy",
      "Community Building",
      "Organizational Skills",
      "Talent Identification",
      "Content Creation",
      "Online Markerting",
      "Public Speaking",
    ],
  },
]
