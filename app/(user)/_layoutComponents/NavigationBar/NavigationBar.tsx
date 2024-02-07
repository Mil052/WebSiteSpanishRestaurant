'use client'

import Link from "next/link";
import styles from "./NavigationBar.module.css"
import { useState } from "react";

export default function NavigationBar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <section className={styles.navigationBar}>
            <header><span>LA FABRICA</span> <span>DEL GUSTO</span></header>            
            <div className={styles.navigationContainer + ' ' + (mobileNavOpen ? styles.containerOpenforMobile : styles.containerCloseforMobile)}>
                <nav className={styles.navigation + ' ' + (mobileNavOpen ? styles.navigationOpen : styles.navigationClose)}>
                    <ul className={styles.linksList}>
                        <li><Link href="/#restaurant">restaurant</Link></li>
                        <li><Link href="/#gallery">gallery</Link></li>
                        <li><Link href="/menu">menu</Link></li>
                        <li><Link href="/events">events</Link></li>
                        <li><Link href="/contact">contact</Link></li>
                    </ul>
                    <button type="button" className={styles.closeNavButton} onClick={() => setMobileNavOpen(false)}></button>
                </nav>
            </div>
            <button type="button" className={styles.hamburgerButton} onClick={() => setMobileNavOpen(true)}>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>
        </section>
    )
}