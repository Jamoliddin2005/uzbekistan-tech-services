import React from "react";
import styles from "./index.module.sass";

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__container}>
        <h2
          className={styles.portfolio__title}
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          Our Porfolio
        </h2>
        <div className={styles.portfolio__row}>
          <div
            className={styles.portfolio__cart}
            data-aos="fade-right"
            data-aos-duration="1300"
          ></div>
          <div
            className={styles.portfolio__cart}
            data-aos="fade-right"
            data-aos-duration="1300"
          ></div>
          <div
            className={styles.portfolio__cart}
            data-aos="fade-left"
            data-aos-duration="1300"
          ></div>
          <div
            className={styles.portfolio__cart}
            data-aos="fade-left"
            data-aos-duration="1300"
          ></div>
        </div>
      </div>
    </div>
  );
};
