'use client'
import { useState } from "react";
import styles from './EventaManagement.module.css'
import EventForm from "./EventForm/EventForm";
import EventList from "./EventList/EventList";
import { eventData } from "../../../../api/events/_utilities/eventsOperations";
import { useQuery, useMutation } from '@tanstack/react-query';
import { getEvents, deleteEvent, addEvent, updateEvent } from "../httpRequests/httpRequests";

export default function EventsManagement () {
    const [error, setError] = useState<string|null>(null);
    const [editEventData, setEditEventData] = useState<eventData | null>(null); 
    
    const {data: events, isError: isLoadingEventsError, failureCount, refetch} = useQuery({queryKey: ['events'], queryFn: getEvents, initialData: [], retry: 3, retryDelay: attempt => attempt * 1000});
    const {mutate: handleDeleteEvent} = useMutation({mutationFn: deleteEvent, onSuccess: () => refetch(), onError: (error) => setError(error.message)});
    const {mutate: handleAddEvent} = useMutation({mutationFn: addEvent, onSuccess: () => refetch(), onError: (error) => setError(error.message)});
    const {mutate: handleUpdateEvent} = useMutation({mutationFn: updateEvent, onSuccess: () => refetch(), onError: (error) => setError(error.message)});

    const editEvent = (event: eventData) => {
        setEditEventData(event);
    }

    const cancelEditMode = () => {
        setEditEventData(null);
    }

    const formMode: 'ADD NEW EVENT' | 'EDIT EVENT' = editEventData ? 'EDIT EVENT' : 'ADD NEW EVENT';

    console.log('isLoadingEventsError: ', isLoadingEventsError);
    console.log('failureCount: ', failureCount);

    if (isLoadingEventsError && (failureCount === 4)) {
        console.log('condition true');
        return (
            <div className={styles.loadingEventsErrorBox}>
                <p><span>Loading Events Error.</span> <span>Please try again later.</span></p>
            </div>
        );
    }

    const clearError = () => setError(null);

    return (
        <>
            <div className={styles.mutationsErrorContainer}>
                {error &&
                    <div className={styles.errorBox}>
                        <p>{error}</p>
                        <button type="button" className={styles.errorBoxClose} onClick={clearError}>&#10005;</button>
                    </div>
                }
            </div>
            <section className={styles.eventsSection}>
                <div className={styles.formContainer}>
                    <EventForm formMode={formMode} editEventData={editEventData} cancelEditMode={cancelEditMode} handleAddEvent={handleAddEvent} handleUpdateEvent={handleUpdateEvent}/>
                </div>
                <div className={styles.listContainer}>
                    <EventList events={events} handleDeleteEvent={handleDeleteEvent} editEvent={editEvent}/>
                </div>
            </section>
        </>
    )
}