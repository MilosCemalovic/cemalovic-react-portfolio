import { motion } from "framer-motion"
import styles from "./Hero.module.scss"

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <motion.div className={styles.content}>
      <h1 className={styles.title}>
        <span className={styles.greeting}>Hello!</span>
        <span className={styles.subtitle}>I am a Software Developer</span>
      </h1>
    </motion.div>
  </section>
)

export default Hero
