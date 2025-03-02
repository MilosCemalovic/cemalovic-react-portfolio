import { FiGithub, FiLinkedin } from "react-icons/fi"
import styles from "./Contact.module.scss"
import useMediaQuery from "../../hooks/useMediaQuery"

const Contact = () => {
  const currentYear = new Date().getFullYear()
  const isSmallScreen = useMediaQuery("(max-width: 768px)")

  return (
    <footer className={styles.footer} id="contact" data-testid="footer">
      <a
        href="https://www.linkedin.com/in/milos-cemalovic"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
        data-testid="contact"
      >
        <span className={styles.span}>
          Feel free to <span className={styles.spanContact}>contact</span> me
        </span>
      </a>

      <span className={styles.footerText}>&copy; Cemalovic {currentYear}.</span>

      {/* Social Links - only on mobile */}
      {isSmallScreen && (
        <div className={styles.social} data-testid="social-links">
          <a
            href="https://www.linkedin.com/in/milos-cemalovic"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            data-testid="linkedin-link"
          >
            <FiLinkedin className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/MilosCemalovic"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            data-testid="github-link"
          >
            <FiGithub className={styles.socialIcon} />
          </a>
        </div>
      )}
    </footer>
  )
}

export default Contact
