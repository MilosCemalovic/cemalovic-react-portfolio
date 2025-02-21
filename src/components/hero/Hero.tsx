import { motion } from "framer-motion"
import styles from "./Hero.module.scss"

const Hero = () => {
  const textVariants = {
    // Define the variants for the text animation
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  }

  return (
    <section id="top" className={styles.hero}>
      <motion.div
        initial="hidden"
        className={styles.content}
        animate="visible"
        variants={textVariants}
      >
        <h1 className={styles.title}>
          <span className={styles.greeting}>Hello!</span>
          <span className={styles.subtitle}>I am a Software Developer</span>
        </h1>
      </motion.div>
    </section>
  )
}

export default Hero
