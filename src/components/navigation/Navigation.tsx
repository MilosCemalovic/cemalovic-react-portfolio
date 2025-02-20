import { Link } from "react-scroll"
import profileImage from "../../assets/img/cemalovic-milos-portfolio-img-1.jpg"
import styles from "./Navigation.module.scss"

interface NavigationItem {
  id: string
  label: string
}

const Navigation = () => {
  const NAV_ITEMS: NavigationItem[] = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav>
      <img
        src={profileImage}
        alt="Milos Cemalovic"
        className={styles.profileImage}
      />

      <ul className="list-unstyled">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
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
    </nav>
  )
}

export default Navigation
