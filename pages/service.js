import React from "react";
import styles from "../styles/service.module.css";

// Sample data for the boxes
const servicesData = [
  {
    title: "Botox",
    description: (
      <div>
        Botox is a non-surgical, minimally invasive procedure that targets
        dynamic wrinkles caused by facial expressions.
        <br />
        <br />
        Our highly skilled practitioners will carefully administer the
        treatment, utilizing precise injections to temporarily relax the
        underlying muscles.
        <br />
        <br />
        As a result, the appearance of crow's feet, forehead lines, and frown
        lines can be significantly reduced, giving you a more refreshed and
        rejuvenated look.
      </div>
    ),
  },
  {
    title: "Skin Boosters",
    description: (
      <div>
        Skin Boosters are composed of hyaluronic acid, a naturally occurring
        substance in the body that helps maintain hydration and elasticity.
        <br />
        <br />
        When injected into the skin, these boosters provide deep hydration,
        improve skin texture, and promote collagen production.
        <br />
        <br />
        The result is smoother, firmer, and more radiant skin.
      </div>
    ),
  },
  {
    title: "Dermapen",
    description: (
      <div>
        Dermapen utilizes advanced micro-needling technology to stimulate
        collagen production and cellular renewal.
        <br />
        <br />
        The treatment involves a pen-like device with tiny needles that create
        controlled micro-injuries in the skin.
        <br />
        <br />
        These micro-injuries trigger the body's natural healing response,
        leading to the production of new collagen and elastin fibers.
        <br />
        <br />
        The Dermapen treatment is effective in addressing various skin concerns,
        including fine lines, wrinkles, acne scars, and uneven skin texture. It
        is suitable for all skin types and requires minimal downtime.
      </div>
    ),
  },
  {
    title: "Cold Peel",
    description: (
      <div>
        The Cold Peel is a non-invasive procedure that combines the power of
        exfoliation and cold therapy.
        <br />
        <br />
        It involves the application of a specially formulated solution that
        gently removes dead skin cells, unclogs pores, and evens out skin tone.
        <br />
        <br />
        The cold therapy component soothes and calms the skin, reducing redness
        and inflammation.
        <br />
        <br />
        This treatment is suitable for all skin types and can address various
        concerns, such as dullness, uneven skin tone, and texture irregularities
      </div>
    ),
  },
  {
    title: "Plasmage",
    description: (
      <div>
        Plasmage utilizes advanced plasma technology to target and treat various
        skin concerns.
        <br />
        <br />
        The treatment involves the use of a handheld device that delivers
        controlled plasma energy to the skin's surface.
        <br />
        <br />
        This energy causes the targeted tissuesto sublimate, resulting in
        tightening, lifting, and rejuvenation.
        <br />
        <br />
        Plasmage is highly versatile and can be used for a range of
        applications, such as eyelid tightening, wrinkle reduction, scar
        improvement, and skin resurfacing.
      </div>
    ),
  },
  {
    title: "Fractional Laser",
    description: (
      <div>
        Fractional Laser is a cutting-edge technology that delivers precise
        laser energy to targeted areas of the skin.
        <br />
        <br />
        This energy creates micro-columns of thermal injury, stimulating the
        body's natural healing response and promoting collagen production. The
        result is improved skin texture, reduced wrinkles, and a more youthful
        appearance.
        <br />
        <br />
        This treatment is effective in addressing various skin concerns,
        including acne scars, sun damage, pigmentation issues, and uneven skin
        tone.
      </div>
    ),
  },
  {
    title: "Fillers",
    description: (
      <div>
        fillers are composed of hyaluronic acid, a substance naturally found in
        the body, which helps to hydrate and plump the skin.
        <br />
        <br />
        With precise injections, we can target areas such as the lips, cheeks,
        nasolabial folds, and more, leaving you with natural-looking and
        youthful results.
      </div>
    ),
  },
];

export default function Service() {
  return (
    <div>
      <section className={styles.section1}>
        <img src="../Img/cover.jpg" alt="image" />
        <div></div>
        <h2 className={styles["special-heading"]}>Services</h2>
        <p>We Provide The Following Services</p>

        <ul>
          {servicesData.map((service, index) => (
            <li key={index}>{service.title}</li>
          ))}
        </ul>

        <div></div>
      </section>
      <div className={styles["service-content"]}>
        {servicesData.map((service, index) => (
          <div className={styles.box} key={index}>
            <h3 className={styles.box__title}>{service.title}</h3>
            <p className={styles.box__desc}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
