import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar} id="navbar">
      <a className={styles.title} href="/">
        Portofolio
        <p className={`${styles.title2} ${styles.bounce}`}>Portofolio</p>
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-450}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-80}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-90}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
