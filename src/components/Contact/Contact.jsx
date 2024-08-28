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
          <a target="_blank" href="mailto:hainer.stefan@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="mail icon" />
            <p>hainer.stefan@gmail.com</p>
          </a>
        </li>
        <li className={styles.link}>
          <a target="_blank" href="https://www.linkedin.com/in/hainerstefan/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
            <p>linkedin.com/in/hainerstefan</p>
          </a>
        </li>
        <li className={styles.link}>
          <a target="_blank" href="https://github.com/hainerSt/">
            <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
            <p>github.com/hainerSt</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
