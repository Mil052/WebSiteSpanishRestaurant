import { eventData } from "../../../../../api/events/_utilities/eventsOperations";
import styles from "./EventShortcut.module.css";
import Image from "next/image";

export default function EventShortcut ({id, title, subtitle, date, excerpt, imageSrc, imageAlt, content }: eventData) {

    const formatedDate = new Date(date).toLocaleDateString('en-GB', {year: "numeric", month: "long", day: "numeric"});
    const imageSourcePath = `${process.env.NEXT_PUBLIC_EVENT_IMAGE_PATH}/${imageSrc ?? 'defaultEventPhoto.jpg'}`;
    
    return (
        <>
            <div className={styles.eventDescription}>
                <h5 className={styles.date}>{formatedDate}</h5>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{`(${subtitle})`}</p>
                <p className={styles.excerpt}>{excerpt}</p>
            </div>
            <Image src={imageSourcePath} alt={imageAlt} width={600} height={400} className={styles.eventImage}/>
        </>
    )
}