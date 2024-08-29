import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <div className={styles.skillsAndCertifications}>
        <Certifications />
        <Skills />
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
