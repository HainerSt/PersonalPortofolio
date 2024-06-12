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
            <div className={styles.aboutItemDescription}>
              <p>
                Hi, I'm Stefan, a 29-years-old Front-End software developer with a passion for creating user-friendly
                web experiences. I specialize in <span className={styles.tech}>HTML</span>,{" "}
                <span className={styles.tech}>CSS</span>, <span className={styles.tech}>Javascript</span>, and have some
                experience with <span className={styles.tech}>React</span>. I also like to use frameworks like Tailwind,
                Bootstrap to make the design process more efficient and consistent. I'm constantly learning and keeping up with the latest web technologies to deliver high-quality, responsive, and interactive web applications<span className={styles.aboutTypingBlink}> </span>
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div>
            
              <h3 className={styles.certificationsTitle}><img src={getImageUrl("about/web-design.png")} alt="certificate-icon" className={styles.certificateIcon} />Certifications</h3>

              <div className={styles.certificationscontainer}>
                <div className={styles.certificationcard}>
                  <p>Responsive Web Design Development</p>
                  <h4 className={styles.freecodetext}>freecodecamp.org</h4>
                  <a
                    href="https://freecodecamp.org/certification/HainerStefan/responsive-web-design"
                    target="_blank"
                    className={styles.freecodelink}
                  >
                    Open certificate
                  </a>
                </div>
                <div className={styles.certificationcard}>
                  <p>JavaScript Algorithms and Data Structures</p>
                  <h4 className={styles.freecodetext}>freecodecamp.org</h4>
                  <a
                    href="https://freecodecamp.org/certification/HainerStefan/javascript-algorithms-and-data-structures-v8"
                    target="_blank"
                    className={styles.freecodelink}
                  >
                    Open certificate
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
