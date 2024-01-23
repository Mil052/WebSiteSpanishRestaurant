import EventsManagement from './_components/EventsManagement/EventsManagement';
import styles from './page.module.css';

export default function AdminConsole () {
    return (
        <main className={styles.main}>
            <div className={styles.moduleTitle}>
                <h3>Manage Events</h3>
                <hr/>
            </div>
            <EventsManagement/>
        </main>
    )
}

