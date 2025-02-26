import { motion } from "framer-motion"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section id="hero" className={styles.hero} data-testid="hero-section">
      <div className={styles.content}>
        <motion.h1
          className={styles.greeting}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          Hello!
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          I am a Software Developer
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
