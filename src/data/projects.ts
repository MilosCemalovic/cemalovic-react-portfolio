import kafeterija from "../assets/img/cemalovic-milos-protfolio-kafeterija.png"
import angular from "../assets/img/cemalovic-milos-protfolio-angular.png"
import react from "../assets/img/cemalovic-milos-protfolio-react.png"
import php from "../assets/img/cemalovic-milos-protfolio-php.png"

export interface Project {
  title: string
  description: string
  image: string
  liveLink?: string
  githubLink: string
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
    description: "Angular project with multiple APIs and PrimeNG library.",
    image: angular,
    githubLink: "https://github.com/MilosCemalovic/primeng-newspaper",
  },
  {
    title: "Web Design Project",
    description: "Coffee shop full responsive website with a modern design.",
    image: kafeterija,
    liveLink: "https://kafeterijakraljevo.netlify.app/",
    githubLink: "https://github.com/MilosCemalovic/kafeterija",
  },
  {
    title: "PHP Project",
    description: "PHP MVC responsive web design 5 pages project for CRUD.",
    image: php,
    githubLink: "https://github.com/MilosCemalovic/spaceweb-phpmvcoop-and-more",
  },
]
