import styles from './page.module.css';
import MessageForm from './_components/MessageForm/MessageForm';
import GoogleMap from './_components/GoogleMap/GoogleMap';

export default function ContactPage() {
    return (
      <main className={styles.main}>
        <section className={styles.contactContainer} style={{ backgroundImage: `url(./contact-assets/coffee_bg.jpg)`}}>
          <div className={styles.contactTitle}>
            <h2 >Get in touch!</h2>
            <hr/>
          </div>
          <div className={styles.contactData}>
            <div className={styles.contactDataCard}>
              <img src="icons/phone_icon.svg" width='48' height='48' style={{marginRight: '20px', marginLeft: '4px'}}/>
              <div>
                <h4>CALL US</h4>
                <p>000-000-000</p>
              </div>
            </div>
            <div className={styles.contactDataCard}>
              <img src="icons/envelope.svg" width='56' height='56' style={{marginRight: '16px'}}/>
              <div>
                <h4>E-MAIL</h4>
                <p>la.fabrica.del.gusto@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactDataCard}>
              <img src="icons/position_icon.svg" width='48' height='48' style={{marginRight: '20px', marginLeft: '4px'}}/>
              <div>
                <h4>LOCATION</h4>
                <p>Wrocław, ul. Kuźnicza 00/00</p>
              </div>
            </div>
            <div className={styles.contactDataCard}>
              <img src="icons/clock_icon.svg" width='48' height='48' style={{marginRight: '20px', marginLeft: '4px'}}/>
              <div>
                <h4>HOURS</h4>
                <p><span className={styles.dayName}>Mon - Thu :</span><span>15:00 - 23:00</span></p>
                <p><span className={styles.dayName}>Fri - Sat :</span><span>14:00 - 00:00</span> </p>
                <p><span className={styles.dayName}>Sun :</span><span>14:00 - 22:00</span></p>
              </div>
            </div>
          </div>
          <div className={styles.messageFormContainer}>
            <h3 className={styles.messageTitle}>CONTACT US</h3>
            <MessageForm/>
          </div>
        </section>
        <div className={styles.mapContainer}>
          <GoogleMap/>
        </div>
      </main>
    )
}

