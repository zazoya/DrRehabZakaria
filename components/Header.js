import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <img
            className={styles.logo}
            src="../Img/logo.png"
            alt="logo of the Doctor"
          />
        </Link>
        <div className={styles.links}>
          <span className={styles.icon}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
