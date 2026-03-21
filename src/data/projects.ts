import kafeterija from "../assets/img/cemalovic-milos-protfolio-kafeterija.png"
import wedding from "../assets/img/cemalovic-milos-protfolio-wedding-website.png"
import spaceweb from "../assets/img/cemalovic-milos-protfolio-spaceweb.png"
import ada from "../assets/img/cemalovic-milos-portfolio-ada-ciganlija.jpg"
import market from "../assets/img/cemalovic-milos-protfolio-pijaca.jpg"
import rafting from "../assets/img/cemalovic-milos-protfolio-rafting.jpg"
import angular from "../assets/img/cemalovic-milos-protfolio-angular.jpg"
import angularNews from "../assets/img/cemalovic-milos-portfolio-angular-news.jpg"
import react from "../assets/img/cemalovic-milos-protfolio-react.png"
import php from "../assets/img/cemalovic-milos-protfolio-php.png"

export interface Project {
  title: string
  description: string
  image: string
  liveLink?: string
  githubLink?: string
}

export const PROJECTS: Project[] = [
  {
    title: "React Project",
    description: "A web portfolio using React technology with unit tests.",
    image: react,
    githubLink: "https://github.com/MilosCemalovic/cemalovic-react-portfolio",
  },
  {
    title: "Angular Project",
    description: "Money Transfer App created with Angular v20.",
    image: angular,
    liveLink: "https://money-transfer-angular.netlify.app",
    githubLink: "https://github.com/MilosCemalovic/peachtree",
  },
  {
    title: "Angular Project",
    description: "An Angular v17 app with News, Reporters and Worker Flights pages and details.",
    image: angularNews,
    liveLink: "https://newspaper-angularmaterial.netlify.app",
    githubLink: "https://github.com/MilosCemalovic/angularMaterial-news",
  },
  {
    title: "Web Design Project",
    description: "Coffee shop full responsive website with a modern design.",
    image: kafeterija,
    liveLink: "https://kafeterijakraljevo.netlify.app/",
    githubLink: "https://github.com/MilosCemalovic/kafeterija",
  },
  {
    title: "Web Design Project",
    description: "Wedding invitation full responsive website with a modern design.",
    image: wedding,
    liveLink: "https://cemalovic-wedding-website.netlify.app/",
  },
  {
    title: "Web Design Project",
    description: "Full responsive website with 5 CRUD pages.",
    image: spaceweb,
    liveLink: "https://miloscemalovic.github.io/spaceweb/create-page.html",
    githubLink: "https://github.com/MilosCemalovic/spaceweb",
  },
  {
    title: "Web Design Project",
    description: "Full responsive website.",
    image: market,
    liveLink: "https://miloscemalovic.github.io/pijaca/",
    githubLink: "https://github.com/MilosCemalovic/pijaca",
  },
  {
    title: "Web Design Project",
    description: "Ada Cignalija presentation website.",
    image: ada,
    liveLink: "https://miloscemalovic.github.io/ada-ciganlija",
    githubLink: "https://github.com/MilosCemalovic/ada-ciganlija",
  },
  {
    title: "Web Design Project",
    description: "Full responsive website with a modern design.",
    image: rafting,
    liveLink: "https://miloscemalovic.github.io/rafting-1/",
    githubLink: "https://github.com/MilosCemalovic/rafting-1",
  },
  {
    title: "PHP Project",
    description: "PHP MVC project with 4 MySQL databases for different websites.",
    image: php,
    githubLink: "https://github.com/MilosCemalovic/spaceweb-phpmvcoop-and-more",
  },
]
