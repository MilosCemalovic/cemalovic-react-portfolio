import { Link } from "react-scroll"
import profileImage from "../../assets/img/cemalovic-milos-portfolio-img-1.jpg"
import cv from "../../assets/img/CV_MilosCemalovic.pdf"
import styles from "./Navigation.module.scss"
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi"
import { useEffect, useState } from "react"

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
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id)
        }
      }
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={styles.navigation}>
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
        <a href={cv} className={styles.cvButton} download>
          <FiDownload className={styles.icon} />
          Download CV
        </a>

        <div className={styles.socialLinks}>
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
