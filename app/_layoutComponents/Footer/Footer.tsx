import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer () {
    return (
        <footer className={styles.footerContainer}>
            <h5>LA FABRICA DEL GUSTO</h5>
            <div className={styles.underline}>
                <hr/> <span>&#10045; &#10045; &#10045;</span> <hr/>
            </div>
            <div className={styles.footerInfo}>
                <div className={styles.contact}>
                    <div className={styles.contactData}>
                        <img src="/footer/phone_icon.svg" width='38' height='38' style={{marginRight: '20px', marginLeft: '4px'}}/>
                        <p>000-000-000</p>
                    </div>
                    <div className={styles.contactData}>
                        <img src="/footer/envelope.svg" width='46' height='46' style={{marginRight: '16px'}}/>
                        <p>la.fabrica.del.gusto@gmail.com</p>
                    </div>
                    <div className={styles.contactData}>
                        <img src="/footer/position_icon.svg" width='38' height='38' style={{marginRight: '20px', marginLeft: '4px'}}/>
                        <p>Wrocław, ul. Kuźnicza 00/00</p>
                    </div>
                </div>
                <div className={styles.media}>
                    <Link href="https://www.facebook.com/" className={styles.mediaLink}>
                        <img src='/footer/fb_icon.svg'/>
                    </Link>
                    <Link href="https://www.instagram.com/" className={styles.mediaLink}>
                        <img src='/footer/insta_icon.svg'/>
                    </Link>
                    <Link href="https://twitter.com/" className={styles.mediaLink}>
                        <img src='/footer/twitter_icon.svg'/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}