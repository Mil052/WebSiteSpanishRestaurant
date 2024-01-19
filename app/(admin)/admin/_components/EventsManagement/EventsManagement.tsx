'use client'
import { useState, useEffect } from "react";
import styles from './EventaManagement.module.css'
import EventForm from "./EventForm/EventForm";
import EventList from "./EventList/EventList";
import { eventData } from "../../../../_utilities/eventsOperations";


export default function EventsManagement () {
    const [events, setEvents] = useState<eventData[]>([]);
    const [editEventData, setEditEventData] = useState<eventData | null>(null); 

    const getEvents = async () => {
        const response = await fetch('/api/events');
        const actualEvents = await response.json() as eventData[];
        setEvents(actualEvents);
    } 

    const deleteEvent = async (id: number, imageFileName: string|null) => {
        const response = await fetch('/api/events', {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({eventId: id, imageFileName: imageFileName})
        });
        console.log(response);
        return getEvents(); // get actual list of events from backend
    }

    const editEvent = (event: eventData) => {
        setEditEventData(event);
    }

    const resetFormMode = () => {
        setEditEventData(null);
    }

    const submitEvent = async (formData: FormData) => {
        console.log('delete image: ', formData.get('deleteUploadedImg'));
        const image = formData.get('image');
        console.log('new image: ', image);
        const response = await fetch('/api/events', {
            method: editEventData ? "PATCH" : "POST",
            // headers: {"Content-Type": "multipart/form-data"}; boundary=MyBoundaryString,
            body: formData,
        });
        return getEvents();
    }

    useEffect(() => {
        getEvents();
    }, [])

    return (
        <section className={styles.eventsSection}>
            <EventForm editEventMode={!!editEventData} editEventData={ editEventData ?? null} submitEvent={submitEvent} resetFormMode={resetFormMode}/>
            <EventList events={events} deleteEvent={deleteEvent} editEvent={editEvent}/>
        </section>
    )
}