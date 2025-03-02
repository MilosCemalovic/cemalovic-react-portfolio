import { SKILLS } from "../../data/skills"
import spriteSVG from "../../assets/img/sprite.svg"
import styles from "./Skills.module.scss"

const Skills = () => {
  return (
    <section id="skills" className={styles.skills} data-testid="skills-section">
      <h2 className="heading">Technical Skills</h2>

      <div className="iconBoxWrapper">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="iconWrapper"
            data-testid="skill-item"
          >
            <svg className={styles.icon} data-testid={`icon-${skill.iconId}`}>
              <use xlinkHref={`${spriteSVG}#${skill.iconId}`} />
            </svg>
            <span className="iconName">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
