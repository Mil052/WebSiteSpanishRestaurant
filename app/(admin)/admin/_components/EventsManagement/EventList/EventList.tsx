'use client'
import { eventData } from "../../../../../_utilities/eventsOperations";
import styles from './EventList.module.css'

export default function EventList ({ events, deleteEvent, editEvent }: {events: eventData[], deleteEvent: (id: number, imageFileName: string|null) => Promise<void>, editEvent: (event: eventData) => void}) {
    console.log(events);
    return (
        <div className={styles.listContainer}>
            <h3 className={styles.listTitle}>Events List</h3>
            <ul className={styles.eventList}>
                {events.map((event, index) => {
                    return (
                        <li key={index} className={styles.listItem}>
                            <p className={styles.itemDate}>{event.date}</p>
                            <h3 className={styles.itemTitle}>{event.title}</h3>
                            <p className={styles.itemExcerpt}>{event.excerpt}</p>
                            <div className={styles.buttons} >
                                <button type="button" onClick={() => deleteEvent(event.id!, event.imageSrc)}className={styles.buttonPrimary}>Delete</button>
                                <button type="button" onClick={() => editEvent(event)} className={styles.buttonSecondary}>Edit</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}