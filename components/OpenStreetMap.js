import React from "react";
import styles from "../styles/map.module.css";

const GoogleMapPage = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.3636450214468!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145823cf1654a07f%3A0xdaf1d9a7200c6e74!2zVHJpdml1bSBCdXNpbmVzcyBDb21wbGV4IC0g2KrYsdmK2YHZitmI2YUg2YPZiNmF2KjZhNmD2LM!5e0!3m2!1sen!2seg!4v1710601791972!5m2!1sen!2seg"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="fast"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div></div>
    </div>
  );
};

export default GoogleMapPage;
