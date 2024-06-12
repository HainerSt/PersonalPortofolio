import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon" />
            <div className={styles.aboutItemDescription}>
              <h3>Frontend Developer</h3>
              <p>I'm a Front End Developer with knowledge in building Responsive Web Apps.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/web-design.png")} alt="web-design-icon" />
            <div className={styles.aboutItemDescription}>
              <h3>Frontend Developer</h3>
              <p>I'm a Front End Developer with knowledge in building Web Apps.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
