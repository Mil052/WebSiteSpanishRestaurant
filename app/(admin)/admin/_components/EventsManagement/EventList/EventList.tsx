'use client'
import { eventData } from "../../../../../_utilities/eventsOperations";
import styles from './EventList.module.css'

export default function EventList ({ events, deleteEvent, editEvent }: {events: eventData[], deleteEvent: (id: number, imageFileName: string|null) => Promise<void>, editEvent: (event: eventData) => void}) {
    console.log(events);
    return (
        <div className={styles.eventListContainer}>
            <h2>Events List</h2>
            <ul className={styles.eventList}>
                {events.map((event, index) => {
                    return (
                        <li key={index} className={styles.listItem}>
                            <div>
                                <p>{event.date}</p>
                                <h3>{event.title}</h3>
                                <p>{event.excerpt}</p>
                            </div>
                            <div>
                            <button type="button" onClick={() => deleteEvent(event.id!, event.imageSrc)}>Delete</button>
                            <button type="button" onClick={() => editEvent(event)}>Edit</button>
                            </div>
                            
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}