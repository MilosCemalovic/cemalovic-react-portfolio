import { useState, useMemo, useEffect } from "react"
import { Link } from "react-scroll"
import { FiDownload, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import profileImage from "../../assets/img/cemalovic-milos-portfolio-img-1.jpg"
import cv from "../../assets/img/CV_MilosCemalovic.pdf"
import styles from "./Navigation.module.scss"

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("top")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // NAV_ITEMS is wrapped in useMemo to prevent unnecessary re-renders
  const NAV_ITEMS = useMemo(
    () => [
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  )

  // Custom scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight

      // Check if the user has scrolled to the bottom of the page
      if (scrollPosition >= pageHeight - 50) {
        // 50px buffer for edge cases
        setActiveSection("contact")
      } else {
        // Find the section that is currently in view
        let currentSection = "top"
        for (const item of NAV_ITEMS) {
          const section = document.getElementById(item.id)
          if (section) {
            const sectionTop = section.offsetTop
            const sectionBottom = sectionTop + section.offsetHeight

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              currentSection = item.id
              break
            }
          }
        }
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [NAV_ITEMS])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false) // Close the menu when a link is clicked
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
                offset={-20}
                duration={400}
                onClick={handleLinkClick} // Close menu on link click
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
            <a href="https://linkedin.com/in/milos-cemalovic" target="_blank">
              <FiLinkedin className={styles.socialIcon} />
            </a>

            <a href="https://github.com/MilosCemalovic" target="_blank">
              <FiGithub className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
