import { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const HoverImg = () => {
    const [src, setSrc] = useState("./assets/hero/hero-image-openeyes.png");

    const mouseIn = () => {
      setSrc("./assets/hero/hero-image.png");
    };

    const mouseOut = () => {
      setSrc("./assets/hero/hero-image-openeyes.png");
    };

    return <img src={src} onMouseOver={mouseIn} onMouseOut={mouseOut} alt="hoverable" className={styles.heroImg} />;
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          H<span className={`${styles.span} ${styles.blinking2}`}>i</span>
          <span className={`${styles.span} ${styles.blinking}`}>!</span> I&apos;m Stefan
        </h1>
        <p className={styles.description}>I&apos;m a front end developer based in Timișoara, RO. </p>
        <a
          className={styles.contactBtn}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hainer.stefan@gmail.com"
          target="_blank"
        >
          Contact me
        </a>
      </div>

      <HoverImg />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

// import { useState } from "react";

// const HoverImg = () => {
//   const [src, setSrc] = useState("");

//   const mouseIn = () => {
//     setSrc("hero/hero-image-openeyes.png");
//   };

//   const mouseOut = () => {
//     setSrc("hero/hero-image.png");
//   };

//   return <img src={src} onMouseOver={mouseIn} onMouseOut={mouseOut} alt="profile image" />;
// };

// export default HoverImg;
