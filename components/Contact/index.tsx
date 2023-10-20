import React from "react";
import styles from "./index.module.sass";

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.contact__title}>Contact Us</h2>
        <div className={styles.contact__row}>
          <div className={styles.contact__left}>
            <div className={styles.contact__top}>
              <p>For Collaboration</p>
            </div>
            <div className={styles.contact__bottom}>
              <textarea name="" id=""></textarea>
            </div>
          </div>
          <div className={styles.contact__right}>
            <div className={styles.contact__top}>
              <input
                type="text"
                name=""
                id=""
                placeholder={"Write your email"}
              />
            </div>
            <div className={styles.contact__bottom}>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};