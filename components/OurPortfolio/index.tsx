import React from 'react'
import styles from "./index.module.sass"; 

export const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <div className={styles.portfolio__container}>
                <h2 className={styles.portfolio__title}>Our Porfolio</h2>
                <div className={styles.portfolio__row}>
                    <div className={styles.portfolio__cart}></div>
                    <div className={styles.portfolio__cart}></div>
                    <div className={styles.portfolio__cart}></div>
                    <div className={styles.portfolio__cart}></div>
                </div>
            </div>
        </div>
    )
} 