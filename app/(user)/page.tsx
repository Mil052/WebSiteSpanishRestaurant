import CarouselElement from "./_components/CarouselElement/CarouselElement";
import Gallery from "./_components/Gallery/Gallery";
import Image from "next/image";

import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <CarouselElement/>
      <section id="restaurant" className={styles.restaurantSection}>
        <header className={styles.sectionHeader}><h5>About restaurant</h5></header>
        <div className={styles.restaurantInfo}>
          <div className={styles.infoBlock}>
            <h4>Try out the taste of original Spanish dishes.</h4>
            <p>Traditional Spanish dishes. Paella, gazpacho (cold vegetable soup), potato tortilla, cocido madrileño (chickpeas stewed with meat), Iberian ham, churros and tapas.</p>
            <p>Excellent Spanish-style cuisine!</p>
            <p>Wide selection of wines.</p>
            <Link href="/menu"><button className={styles.buttonPrimary}>Menu</button></Link>
            <h4>Welcome!</h4>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageBackgroundShape}>
              <svg width="481" height="674" viewBox="0 0 481 674" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.roundedShapeOutline}>
                <path d="M481 1H90.9016C33.7244 99.8423 1 214.6 1 337C1 459.4 33.7244 574.158 90.9016 673H481" stroke="#687c98"/>
              </svg>
              <Image src="/about-assets/paella.png" alt="paella" className={styles.image} width={400} height={400}/>
            </div>
          </div>
          <div className={styles.infoBlock}> 
            <p>Spacious restaurant in the center of Wrocław.</p>
            <h4>A perfect place for social meetings with family and friends.</h4>
            <p>Are you looking for a friendly and elegant place for business meetings, special occasions, birthdays or name days?</p>
            <p>Welcome to our restaurant!</p>
            <p><b>Organization of cultural evenings.<br/>Small, private stage with live music.</b></p>
            <Link href="/events"><button className={styles.buttonSecondary}>Events</button></Link>
          </div>
        </div>
      </section>
      <Gallery/>
      <section className={styles.contactBox}>
        <div className={styles.contactBoxInfo}>
          <p>Do you have a question?</p>
          <p>Write an e-mail or send a message via the contact form.</p>
        </div>
        <Link href="/contact"><button className={styles.buttonSecondary}>Contact us</button></Link>
      </section>
    </main>
  )
}
