import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Contact me anytime!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="mail icon" />
          <a href="mailto:hainer.stefan@gmail.com">hainer.stefan@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/hainerstefan/">linkedin.com/in/hainerstefan</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/hainerSt/">github.com/hainerSt</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
