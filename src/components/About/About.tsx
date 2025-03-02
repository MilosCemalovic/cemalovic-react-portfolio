import { ABOUT } from "../../data/about"
import styles from "./About.module.scss"

const About = () => {
  return (
    <section id="about" className={styles.about} data-testid="about-section">
      <h2 className="heading">About Me</h2>

      <div className={styles.content}>
        {ABOUT.map((item, index) => (
          <div key={index} className={styles.item} data-testid="about-item">
            <div className={styles.icon}>{item.icon}</div>

            <h3 className={styles.title}>{item.title}</h3>

            <p className={styles.text}>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
