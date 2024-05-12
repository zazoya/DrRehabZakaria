import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={`${styles.main} ${styles.container}`}>
        <div className={styles.consultant}>
          <h3 className={styles.consultant_title}>
            <span className={styles.title}>Dr. Rehab Zakaria</span>
          </h3>
          <h1 className={styles["consultant__title"]}>
            Clinic & beauty consultant
          </h1>
          <div className={styles["consultant__desc"]}>
            <ul className={styles["doctor-info"]}>
              <li>Consultant in Dermatology, Cosmetic, and Laser</li>
              <li>Master's and Doctorate in Dermatology and Laser Diseases</li>
            </ul>
          </div>
          <Link
            href="/about"
            className={`${styles["consultant__btn"]} ${styles.btn}`}
          >
            More Details
          </Link>
        </div>
        <div className={styles.clinic}>
          <img
            src="../Img/profile.png"
            className={styles["clinic__img"]}
            alt="clinic"
          />
        </div>
      </div>
      <div className={`${styles.service} ${styles.container}`}>
        <h2 className={styles["special-heading"]}>Services</h2>
        <p>Learn services to focus on your beauty</p>
        <div className={styles["service-content"]}>
          <Link href="./service" className={styles.box}>
            <img
              className={styles.box__img}
              src="../Img/laser.png"
              alt="Beauty consultation"
            />
            <h3 className={styles.box__title}>LASER</h3>
            <p className={styles.box__desc}>
              Treating sun damage , wrinkles, scars , warts, birthmarks and
              other skin conditions in the best way.
            </p>
            <p className={styles.btn_box}>More Details</p>
          </Link>
          <Link href="./service" className={styles.box}>
            <img
              className={styles.box__img}
              src="../Img/skin.png"
              alt="Beauty product"
            />
            <h3 className={styles.box__title}>SKIN</h3>
            <p className={styles.box__desc}>
              We offer a wide range of cosmetic services for cosmetic problems
              of the skin, scalp and nails.
            </p>
            <p className={styles.btn_box}>More Details</p>
          </Link>
          <Link href="/service" className={styles.btn}>
            {" "}
            And More
          </Link>
        </div>
      </div>
    </div>
  );
}
