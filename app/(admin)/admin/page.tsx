import EventsManagement from './_components/EventsManagement/EventsManagement';
import { getCashedEvents } from '../../_utilities/eventsOperations';
import styles from './page.module.css';

export default function AdminConsole () {
    const events = getCashedEvents();

    return (
        <main className={styles.main}>
            <h2>Events Console</h2>
            <EventsManagement/>
        </main>
    )
}

