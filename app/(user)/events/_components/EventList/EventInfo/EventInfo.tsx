import { eventData } from "../../../../../_utilities/eventsOperations";
import ReactMarkdown from 'react-markdown';
import styles from './EventInfo.module.css';
import Image from "next/image";

export default function EventInfo ({ id, title, subtitle, date, excerpt, imageSrc, imageAlt, content }: eventData) {

    const formatedDate = new Date(date).toLocaleDateString('en-GB', {year: "numeric", month: "long", day: "numeric"});

    return (
        <div className={styles.eventInfo}>
            <div className={styles.eventInfoDescription}>
                <h5 className={styles.date}>{formatedDate}</h5>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <Image src={`/events/${imageSrc ?? 'defaultEventPhoto.jpg'}`} alt={imageAlt} width={600} height={400} className={styles.eventInfoImage}/>
        </div>
    )
}