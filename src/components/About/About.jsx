import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutItem}>
          <div className={styles.aboutItemDescription}>
            <h4 className={styles.paragraphDesc}>
              &nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Stefan, a 29-years-old Front-End software developer with a passion for
              creating user-friendly web experiences.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Beside <span className={styles.tech}>HTML</span>,{" "}
              <span className={styles.tech}>CSS</span>, <span className={styles.tech}>Javascript</span> and{" "}
              <span className={styles.tech}>React</span>, I also like to use various frameworks and tools like Tailwind,
              Bootstrap, ChakraUI, MUI, Formik, Firebase, etc., to make the process more efficient and consistent. <br />
              <br /> &nbsp;&nbsp;&nbsp;&nbsp; I'm constantly learning and keeping up with the latest web technologies to
              deliver high-quality, responsive, and interactive web applications
              <span className={styles.dot}>...</span>
              <span className={styles.aboutTypingBlink}> </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
