import styles from './page.module.css';
import { getCashedEvents } from '../../api/events/_utilities/eventsOperations';
import EventList from './_components/EventList/EventList';

export const dynamic = 'force-dynamic';
// export const revalidate = 120;

export default function EventsPage() {

  const events = getCashedEvents();

  return (
    <main className={styles.main}>
      <EventList events={events}/>
    </main>
  )
}