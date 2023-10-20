import React from 'react'
import styles from "./index.module.sass";
import Link from 'next/link';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__row}>
                    <div className={styles.header__left}>
                        <h3>UTS</h3>
                        <p>We collaborate with companies to create world-class digital experience
                            and help you do better business through adoption most advanced
                            practices in web development, design, and digital marketing.</p>
                        <button>Let’s collaborate</button>
                    </div>
                    <div className={styles.header__right}>
                        <div className={styles.header__right__top}>
                            <li><Link href="/">Web Design</Link></li>
                            <li><Link href="/">Logo Design</Link></li>
                            <li><Link href="/">Digital Development</Link></li>
                            <li><Link href="/">Software Development</Link></li>
                        </div>
                        <img src="/assets/images/header.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
} 