import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import profileImage from "../../assets/img/cemalovic-milos-portfolio-img-1.jpg"
import cv from "../../assets/img/CV_MilosCemalovic.pdf"
import styles from "./Navigation.module.scss"

interface NavigationItem {
  id: string
  label: string
}

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("top")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navigation} data-testid="navigation">
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileProfile}>
          <img
            src={profileImage}
            alt="Miloš Ćemalović"
            className={styles.profileImage}
          />
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          data-testid="menu-button"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Wrapper */}
      <div
        className={`${styles.navWrapper} ${isMenuOpen ? styles.open : ""}`}
        data-testid="nav-wrapper"
      >
        {/* Profile Image for Larger Screens */}
        <div className={styles.profile}>
          <img
            src={profileImage}
            alt="Miloš Ćemalović"
            className={styles.profileImage}
          />
        </div>

        {/* Navigation Links */}
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`${styles.navItem} ${
                activeSection === item.id ? styles.active : ""
              }`}
              data-testid={`navitem-${item.id}`}
              data-active={activeSection === item.id}
            >
              <Link
                className={styles.navLink}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links and CV */}
        <div className={styles.socialWrapper}>
          <a
            href={cv}
            className={styles.cvButton}
            data-testid="cv-link"
            download
          >
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
      </div>
    </nav>
  )
}

export default Navigation
