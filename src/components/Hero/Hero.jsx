import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          H<span className={`${styles.span} ${styles.blinking2}`}>i</span>
          <span className={`${styles.span} ${styles.blinking}`}>!</span> I'm Stefan
        </h1>
        <p className={styles.description}>I'm a front end developer based in Timișoara, RO. </p>
        <a
          className={styles.contactBtn}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hainer.stefan@gmail.com"
          target="_blank"
        >
          Contact me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/hero-image.png")} alt="Hero Avatar image" />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
