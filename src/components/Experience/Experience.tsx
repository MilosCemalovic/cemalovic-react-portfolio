import { EXPERIENCE } from "../../data/experience"
import styles from "./Experience.module.scss"

const Experience = () => {
  return (
    <section
      id="experience"
      className={styles.experience}
      data-testid="experience-section"
    >
      <h2 className="heading" data-testid="experience-heading">
        Professional Experience
      </h2>

      <div className={styles.timeline}>
        {EXPERIENCE.map((item, index) => (
          <article
            key={index}
            className={styles.item}
            data-testid="experience-item"
          >
            <div className={styles.year}>{item.year}</div>

            <div className={styles.content}>
              <h3 className={styles.title}>
                {item.title}{" "}
                <span className={styles.company}>@ {item.company}</span>
              </h3>

              {item.skills && (
                <div className={styles.skills}>
                  {item.skills.map((skill) => (
                    <span key={skill} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <p className={styles.description}>{item.description}</p>

              <ul className={styles.details}>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
