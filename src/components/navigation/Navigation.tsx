import styles from "./Navigation.module.scss";

interface NavigationItem {
  id: string;
  label: string;
}

const Navigation = () => {
  // const NAV_ITEMS: NavigationItem[] = [
  //   { id: 'experience', label: 'Experience' },
  //   { id: 'skills', label: 'Skills' },
  //   { id: 'projects', label: 'Projects' },
  //   { id: 'about', label: 'About' },
  //   { id: 'contact', label: 'Contact' }
  // ]

  return (
    <nav>
      <img
        src="cemalovic-milos-portfolio-img-1.jpg"
        alt="Milos Cemalovic"
        className={styles.profileImage}
      />
    </nav>
  );
};

export default Navigation;
