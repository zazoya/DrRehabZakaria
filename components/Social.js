import styles from "../styles/social.module.css";
import { Facebook, Phone, Instagram } from "lucide-react";
export default function Social() {
  return (
    <div className={styles.contact}>
      <a
        href="https://www.instagram.com/dr.rehabzakaria/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
        target="_blank"
      >
        <Instagram className={styles.lucide} />
      </a>
      <a href="https://www.facebook.com/doctor.rehabzakaria/" target="_blank">
        <Facebook className={styles.lucide} />
      </a>
      <a href="tel:01064022402" target="_blank">
        <Phone className={styles.lucide} />
      </a>
    </div>
  );
}
