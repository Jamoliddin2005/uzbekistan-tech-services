import React from "react";
import styles from "./index.module.sass";

export const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h2
          className={styles.services__title}
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          What we do ?
        </h2>
        <div className={styles.services__row}>
          <div
            className={styles.services__left}
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            <div className={styles.services__top}>
              <h4>
                Website development + <br />
                branding
              </h4>
            </div>
            <div className={styles.services__center}>
              <p>
                When you sell your products online, you need a long - term
                strategy with a short - term focus on immediate sales. An
                alluring web design, consumer - focused content, and the right
                sales funnel all play a key role in successful e - commerce
                brands.
              </p>
            </div>
            <div className={styles.services__bottom}>
              <button>Let’s collaborate</button>
            </div>
          </div>
          <div
            className={styles.services__right}
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <div className={styles.services__top}>
              <h4>
                Website development + <br />
                branding
              </h4>
            </div>
            <div className={styles.services__center}>
              <p>
                When you sell your products online, you need a long - term
                strategy with a short - term focus on immediate sales. An
                alluring web design, consumer - focused content, and the right
                sales funnel all play a key role in successful e - commerce
                brands.
              </p>
            </div>
            <div className={styles.services__bottom}>
              <button>Let’s collaborate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
