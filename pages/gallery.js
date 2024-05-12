import React, { useEffect } from "react";
import styles from "../styles/gallery.module.css";

export default function Gallery() {
  useEffect(() => {
    // Get the parent element with class "gallary-grid"
    var galleryGrid = document.querySelector(`.${styles.galleryGrid}`);

    // Number of gallery grids you want to create
    var numberOfGalleries = 30; // You can change this number as needed

    // Loop to create and append gallery grids
    for (var i = 1; i <= numberOfGalleries; i++) {
      // You can add more content or modify each gallery grid as needed
      // For example, adding images to each gallery grid
      var galleryImage = document.createElement("div");
      galleryImage.className = styles.gallery;
      var image = document.createElement("img");
      image.className = styles.galleryImage;
      image.src = `../gallery/BeforAfter- (${i}).jpg`; // Assuming your image names follow a pattern like BeforAfter-1.jpg, BeforAfter-2.jpg, etc.
      image.alt = "img";
      galleryImage.appendChild(image);

      // Append the image div to the current gallery grid
      galleryGrid.appendChild(galleryImage);
    }
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <section className={styles.gallerySection}>
      <div className={styles.gallerySectionHeader}>
        <h2 className={styles["special-heading"]}>Before & After</h2>
        <p className={styles.borderBottom}></p>
        {/* <div className={styles.borderBottom}></div> */}
      </div>
      <div className={styles.galleryGrid}></div>
    </section>
  );
}
