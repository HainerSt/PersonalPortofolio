import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import logo from "../../../assets/hero/hero-image-openeyes.png";
import hoverlogo from "../../../assets/hero/hero-image.png";
import { Icon, ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Show, Hide } from "@chakra-ui/react";

const Hero = () => {
  const HoverImg = () => {
    const [src, setSrc] = useState(logo);

    const mouseIn = () => {
      setSrc(hoverlogo);
    };
    const mouseOut = () => {
      setSrc(logo);
    };
    return <img src={src} onMouseOver={mouseIn} onMouseOut={mouseOut} alt="hoverable" className={styles.heroImg} />;
  };

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 900);
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.topBlur} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          H<span className={`${styles.span} ${styles.blinking2}`}>i</span>
          <span className={`${styles.span} ${styles.blinking}`}>!</span> I&apos;m Stefan.
        </h1>
        <p className={styles.description}>
          Front End Developer committed to continuous improvement and learning modern frameworks and tools.{" "}
        </p>
        <a
          className={styles.contactBtn}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hainer.stefan@gmail.com"
          target="_blank"
        >
          Contact me
        </a>
      </div>
      <HoverImg />
      <div>
        {showArrow && (
          <div>
            {isWideScreen && (
              <Center>
                <Icon
                  as={ChevronDownIcon}
                  w={50}
                  h={50}
                  position="fixed"
                  bottom="30px"
                  className={styles.scrollArrow}
                  display={{ base: "none", md: "flex" }}
                />
              </Center>
            )}
          </div>
        )}
      </div>
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
