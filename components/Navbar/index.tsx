import React from 'react'
import styles from "./index.module.sass";
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <div className={styles.navbar}          data-aos="fade-down"
        data-aos-duration="1300">
            <div className={styles.navbar__container}>
                <div className={styles.navbar__row}>
                    <div className={styles.navbar__left}>
                        <Link href="/">
                            <Image src="/assets/images/logo.png" alt=""
                                width={600}
                                height={400}
                            />
                        </Link>
                    </div>
                    <div className={styles.navbar__center}>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </div>
                    <div className={styles.navbar__right}>
                        <li><Link href="/uz">uz</Link></li>
                        <li><Link href="/ru">ru</Link></li>
                        <li><Link href="/en">en</Link></li>
                    </div>
                </div>
            </div>
        </div>
    )
} 