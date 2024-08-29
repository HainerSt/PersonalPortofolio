import certifications from "../../data/certifications.json";
import styles from "./Certifications.module.css";

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsContainer}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certificationsBox}>
        {certifications.map((certification, id) => {
          return (
            <div className={styles.certificationCard} key={id}>
              <h2 className={styles.certificationTitle}>{certification.title}</h2>
              <h3 className={styles.certificationOrganisation}>{certification.organisation}</h3>

              <a className={styles.link} href={certification.link} target="_blank">
                Open Certificate
              </a>
              <span className={styles.hline} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
