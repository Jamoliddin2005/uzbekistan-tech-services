import React from "react";
import styles from "./index.module.sass"

export const FirstSection = () => {
    return <div className={styles.services}>
        <div className={styles.services__resLeft}>
            <h1 className={styles.services__title}>Who are we ?</h1>
            <p className={styles.services__center}>UTS is an emerging Digital Marketing Agency based in Tashkent, Uzbekistan. We work closely with many brands and companies since 2023. Our clients are sacred and our passion is to provide them with utmost support. Discover how we can collaborate to transform the way your business performs.</p>
            <button className={styles.services__bottom}>Let’s collaborate</button>
        </div>
        <div className={styles.services__resRight}>
            <img src="/assets/img/image 2.png" alt="photo" />
        </div>
    </div>
}