import styles from './page.module.css';
import { getCashedEvents } from '../../_utilities/eventsOperations';
import EventList from './_components/EventList/EventList';

export const revalidate = 60;

export default function EventsPage() {

  const events = getCashedEvents();

  return (
    <main className={styles.main}>
      <EventList events={events}/>
    </main>
  )
}