import Image from "next/image";
import { useState } from "react";
import styles from "./ImageBrowserModal.module.css";
import { galleryItem } from "../galleryData";


export default function ImageBrowserModal ({galleryData, id, closeImageBrowser}: {galleryData: galleryItem[], id: number, closeImageBrowser:() => void}) {
    const [ imageId, setImageId ] = useState(id);

    const numberOfImagesInGallery = galleryData.length;

    const nextHandler = () => setImageId (id => (id + 1) % numberOfImagesInGallery);
    const previousHandler = () => setImageId (id => (numberOfImagesInGallery + id -1) % numberOfImagesInGallery);

    return (
        <section className={styles.imageBrowser}>
            <div className={styles.modal}>
            <button type="button" onClick={closeImageBrowser} className={styles.closeButton}/>
            <div className={styles.imageContainer}>
                <Image src={galleryData[imageId].src} alt={galleryData[imageId].alt} fill={true} className={styles.image}/>
            </div>
            <div className={styles.buttons}>
                <button type="button" onClick={previousHandler} className={styles.previousButton}/>
                <button type="button" onClick={nextHandler} className={styles.nextButton}/>
            </div>
            </div>
        </section>
    )
}