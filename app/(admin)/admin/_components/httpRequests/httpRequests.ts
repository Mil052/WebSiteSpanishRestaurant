import { eventData } from "@/app/api/events/_utilities/eventsOperations";

export async function getEvents () {
    const response = await fetch('/api/events');
    if (!response.ok) {
        throw new Error("An error occurred. Can't get actual events data.");
    }
    const actualEvents = await response.json();
    return actualEvents as eventData[];
} 

export async function deleteEvent (eventIdentifier: {eventId: number, imageFileName: string|null} ) {
    const response = await fetch('/api/events', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(eventIdentifier)
    });
    if (!response.ok) {
        throw new Error("An error occurred. Can't delete event.");
    }
    return true;
}

export async function addEvent (formData: FormData) {
    const response = await fetch('/api/events', {
        method: "POST",
        // headers: {"Content-Type": "multipart/form-data"}; boundary=MyBoundaryString,
        body: formData,
    });
    if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error);
    }
    return true;
}

export async function updateEvent (formData: FormData) {
    const response = await fetch('/api/events', {
        method: "PATCH",
        // headers: {"Content-Type": "multipart/form-data"}; boundary=MyBoundaryString,
        body: formData,
    });
    if (!response.ok) {
        throw new Error("An error occurred. Can't update event.");
    }
    return true;
}