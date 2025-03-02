export interface Skill {
  name: string
  iconId: string // ID of the icon in the sprite file
}

export const SKILLS: Skill[] = [
  { name: "React", iconId: "icon-react" },
  { name: "TypeScript", iconId: "icon-typescript" },
  { name: "JavaScript", iconId: "icon-javascript" },
  { name: "Vite", iconId: "icon-vite" },
  { name: "Jest", iconId: "icon-jest" },
  { name: "Testing Library", iconId: "icon-testing-library" },
  { name: "Redux", iconId: "icon-redux" },
  { name: "Angular", iconId: "icon-angular" },
  { name: "Transloco i18n", iconId: "icon-transloco" },
  { name: "Angular Material", iconId: "icon-material" },
  { name: "Prime NG", iconId: "icon-primeng" },
  { name: "Material UI", iconId: "icon-mui" },
  { name: "SDLC", iconId: "icon-sdlc-1" },
  { name: "Agile & Scrum", iconId: "icon-scrum" },
  { name: "HTML5", iconId: "icon-html5" },
  { name: "CSS3", iconId: "icon-css3" },
  { name: "SASS", iconId: "icon-sass" },
  { name: "DRY", iconId: "icon-dry-1" },
  { name: "SEO", iconId: "icon-seo-1" },
  { name: "Git", iconId: "icon-git" },
  { name: "GitHub", iconId: "icon-github" },
  { name: "Bitbucket", iconId: "icon-bitbucket" },
  { name: "npm", iconId: "icon-npm-2" },
  { name: "pnpm", iconId: "icon-pnpm" },
]
