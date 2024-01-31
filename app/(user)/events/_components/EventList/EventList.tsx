'use client'

import { eventData } from "../../../../api/events/_utilities/eventsOperations";
import EventShortcut from "./EventShortcut/EventShortcut";
import EventInfo from "./EventInfo/EventInfo";
import styles from './EventList.module.css';
import { useState, useRef } from "react";

export default function EventList({events}: {events: eventData[]}) {
  const [ actualEvent, setActualEvent ] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const eventsLastIndex = events.length - 1;

  const scrollListHandler = (direction: 'up'|'down') => {
    const scrollDistance = direction === 'up' ? (-240) : 240;
    listRef.current!.scrollBy({
      top: scrollDistance,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.eventsSection}>
      <div className={styles.title}>
          <h2 >Events</h2>
          <hr/>
      </div>
      <div className={styles.eventInfoContainer + ' ' + (actualEvent !== null ? (` ${styles.eventInfoOpen}`) : '') }>
        <button onClick={() => setActualEvent(null)} className={styles.infoCloseBtn}>&#215;</button>
        <EventInfo {...events[actualEvent ?? 0]}/>
      </div>
      <div className={styles.eventListContainer}>
        <ul className={styles.eventList} ref={listRef}>
          {events.map((event, index) => 
              <div key={index}>
                <li className={styles.eventListCard} onClick={() => setActualEvent(index)}>
                  <EventShortcut {...event}/>
                </li>
                {index !== eventsLastIndex && <hr/>}
              </div>
          )}
        </ul>
        <button className={styles.scrollUpBtn} onClick={() => scrollListHandler('up')}></button>
        <button className={styles.scrollDownBtn } onClick={() => scrollListHandler('down')}></button>
      </div>
    </section>
  )
}