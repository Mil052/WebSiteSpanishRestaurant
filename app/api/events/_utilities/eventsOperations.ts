import { writeFileSync, readFileSync, unlinkSync } from 'fs';
import path from 'path';
import { unstable_cache } from 'next/cache';

export type eventData = {
    id: number|null,
    title: string,
    subtitle: string,
    date: string,
    excerpt: string,
    imageSrc: string|null,
    imageAlt: string,
    content: string
}

const eventDataFilePath = path.join(process.cwd(), 'eventsData', 'eventsData.json');
const eventImageDirectory = path.join(process.cwd(), 'public', 'events-assets');

function getEvents () {
    const fileContent = readFileSync(eventDataFilePath, 'utf-8');
    const eventsData = JSON.parse(fileContent);
    // return allEvents.sort((a, b) => a.date > b.date ? 1 : -1 );
    return eventsData as eventData[];
}

export const getCashedEvents = unstable_cache(async () => getEvents(), ['events-data'], {revalidate: 300, tags: ['events-data']});

export function addNewEvent (newEventData: eventData) {
    const allEvents = getEvents();
    allEvents.push(newEventData);
    writeFileSync(eventDataFilePath, JSON.stringify(allEvents));
}

export async function addEventImage (image: File, imageName: string) {
    const fileBuffer = Buffer.from(await image.arrayBuffer());
    const filePath = path.join(eventImageDirectory, imageName);
    writeFileSync(filePath, fileBuffer);
}

export function deleteImage (imageFileName: string) {
    const filePath = path.join(eventImageDirectory, imageFileName);
    unlinkSync(filePath);
}

export function deleteEvent (eventId: number) {
    const allEvents = getEvents();
    const remainingEvents = allEvents.filter(event => event.id !== eventId);
    writeFileSync(eventDataFilePath, JSON.stringify(remainingEvents));
}

export function updateEvent (updatedEvent: eventData, preserveExistingImage: boolean) {
    console.log('update event function', updatedEvent);
    const allEvents = getEvents();
    const eventIndex = allEvents.findIndex(event => event.id === updatedEvent.id);
    console.log('event index', eventIndex);
    if (preserveExistingImage) {
        updatedEvent.imageSrc = allEvents[eventIndex].imageSrc;
    }
    allEvents[eventIndex] = updatedEvent;
    writeFileSync(eventDataFilePath, JSON.stringify(allEvents));
}