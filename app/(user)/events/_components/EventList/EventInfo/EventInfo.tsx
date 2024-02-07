import { eventData } from "../../../../../api/events/_utilities/eventsOperations";
import ReactMarkdown from 'react-markdown';
import styles from './EventInfo.module.css';
import Image from "next/image";

export default function EventInfo ({ id, title, subtitle, date, excerpt, imageSrc, imageAlt, content }: eventData) {

    const formatedDate = new Date(date).toLocaleDateString('en-GB', {year: "numeric", month: "long", day: "numeric"});
    const imageSourcePath = `/events-assets/${imageSrc ?? 'defaultEventPhoto.jpg'}`;

    return (
        <div className={styles.eventInfo}>
            <div className={styles.eventInfoDescription}>
                <h5 className={styles.date}>{formatedDate}</h5>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <Image src={imageSourcePath} alt={imageAlt} width={600} height={400} className={styles.eventInfoImage}/>
        </div>
    )
}