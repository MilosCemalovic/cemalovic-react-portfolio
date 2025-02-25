import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi"
import profileImage from "../../assets/img/cemalovic-milos-portfolio-img-1.jpg"
import cv from "../../assets/img/CV_MilosCemalovic.pdf"
import styles from "./Navigation.module.scss"

interface NavigationItem {
  id: string
  label: string
}

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("top")

  const NAV_ITEMS: NavigationItem[] = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id)

        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line
  }, [])

  console.log("Active Section:", activeSection) // Track state changes in the console

  return (
    <nav className={styles.navigation} data-testid="navigation">
      <div className={styles.profile}>
        <img
          src={profileImage}
          alt="Miloš Ćemalović"
          className={styles.profileImage}
        />
      </div>

      <ul className={styles.navList}>
        {NAV_ITEMS.map((item) => (
          <li
            key={item.id}
            className={`${styles.navItem} ${
              activeSection === item.id ? styles.active : ""
            }`}
          >
            <Link
              className={styles.navLink}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.socialWrapper}>
        <a href={cv} className={styles.cvButton} data-testid="cv-link" download>
          <FiDownload className={styles.icon} />
          Download CV
        </a>

        <div className={styles.socialLinks} data-testid="social-links">
          <a href="https://github.com/MilosCemalovic" target="_blank">
            <FiGithub className={styles.socialIcon} />
          </a>

          <a href="https://linkedin.com/in/milos-cemalovic" target="_blank">
            <FiLinkedin className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
