import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // URLs of the images
  const normalImage = getImageUrl("hero/hero-image.png");
  const hoverImage = getImageUrl(`hero/hero-image-openeyes.png`);

  // Handlers for mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
      {/* <img className={styles.heroImg} src={getImageUrl("hero/hero-image.png")} alt="Hero Avatar image" /> */}
      <img
        className={styles.heroImg}
        src={isHovered ? normalImage : hoverImage}
        alt="Hero Avatar image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
