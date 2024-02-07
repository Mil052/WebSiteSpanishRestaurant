import styles from './page.module.css';
import { getCashedEvents } from '../../api/events/_utilities/eventsOperations';
import EventList from './_components/EventList/EventList';

export default async function EventsPage() {

  const events = await getCashedEvents();

  return (
    <main className={styles.main}>
      <EventList events={events}/>
    </main>
  )
}