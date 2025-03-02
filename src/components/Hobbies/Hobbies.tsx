import { HOBBIES } from "../../data/hobbies"
import styles from "./Hobbies.module.scss"

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className={styles.hobbies}
      data-testid="hobbies-section"
    >
      <h2 className="heading">Hobbies</h2>

      <div className="iconBoxWrapper">
        {HOBBIES.map((hobby) => (
          <div
            key={hobby.name}
            className="iconWrapper"
            data-testid="hobby-item"
          >
            <span className={styles.icon}>{hobby.icon}</span>
            <span className="iconName">{hobby.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
