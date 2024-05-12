import styles from "../styles/home.module.css";
import styless from "../styles/about.module.css";

export default function About() {
  return (
    <div>
      <div className={`${styles.main} ${styles.container}`}>
        <div className={styles.consultant}>
          <h3 className={styles.consultant_title}>
            <span className={styles.title}>Dr. Rehab Zakaria</span>
          </h3>
          <h3 className={styles["consultant__title"]}>
            Clinic & beauty consultant
          </h3>
          <div className={styles["consultant__desc"]}>
            <ul className={styles["doctor-info"]}>
              <li>Accredited Injector Trainer</li>
              <li>Fellow in Hospitals and Educational Institutes</li>
              <li>Consultant in Dermatology, Cosmetic, and Laser</li>
              <li>Member of the European Society of Dermatology</li>
              <li>Master's and Doctorate in Dermatology and Laser Diseases</li>
            </ul>
          </div>
        </div>
        <div className={styles.clinic}>
          <img
            src="../Img/profile.png"
            className={styles["clinic__img"]}
            alt="clinic"
          />
        </div>
      </div>
      <div className={styless.statistic}>
        <div className={styless.container}>
          <div className={styless.stat}>
            <h3>+1500</h3>
            <p>satisfied patients</p>
          </div>
          <div className={styless.stat}>
            <h3>+300</h3>
            <p>injections performed</p>
          </div>
          <div className={styless.stat}>
            <h3>+100</h3>
            <p>international conferences attended</p>
          </div>
          <div className={styless.stat}>
            <h3>+15</h3>
            <p>years of experience</p>
          </div>
        </div>
      </div>
      <section className={styless.certificatesSection}>
        <div className={styless.certificatesGrid}>
          <div className={styless.section1}>
            <div className={styless.certificates}>
              <img
                className={styless.certificatesImage}
                src="../Img/img1.jpeg"
                alt="img"
              />
            </div>
            <div className={styless.certificates}>
              <img
                className={styless.certificatesImage}
                src="../Img/img2.jpeg"
                alt="img"
              />
            </div>
          </div>
          <div className={styless.section2}>
            <div className={styless.certificates}>
              <img
                className={styless.certificatesImage}
                src="../Img/img3.jpeg"
                alt="img"
              />
            </div>
            <div className={styless.certificates}>
              <img
                className={styless.certificatesImage}
                src="../Img/img4.png"
                alt="img"
              />
            </div>
            <div className={styless.certificates}>
              <img
                className={styless.certificatesImage}
                src="../Img/img5.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* End gallary SECTION */}
      </section>
    </div>
  );
}
