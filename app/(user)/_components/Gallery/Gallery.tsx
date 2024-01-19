'use client'

import styles from './Gallery.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { galleryData } from './galleryData';
import ImageBrowserModal from './ImageBrowserModal/ImageBrowserModal';

export default function Gallery () {
    const [ galleryOpen, setGalleryOpen ] = useState(false);
    const [openImageBrowserWithId, setOpenImageBrowserWithId] = useState<number|null>(null);
    
    const galleryItems = galleryData.map((item, index) => {
        let itemClasses = styles.galleryItem + " ";
        if (item.size === 'large') {
            itemClasses += styles.itemLarge;
        } else if (item.size === 'medium') {
            itemClasses += styles.itemMedium;
        } else {
            itemClasses += styles.itemSmall;
        }
        return (
            <div key={index} className={itemClasses} onClick={() => setOpenImageBrowserWithId(index)}>
                <Image src={item.src} alt={item.alt} className={styles.image} width={480} height={480}/>
            </div>
        );
    });

    const openButtonHandler = () => {
        setGalleryOpen(state => !state);
        console.log('gallery open change');
    }
    const closeImageBrowser = () => setOpenImageBrowserWithId(null);

    return (
        <>
            {(openImageBrowserWithId !== null) && <ImageBrowserModal galleryData={galleryData} id={openImageBrowserWithId} closeImageBrowser={closeImageBrowser}/>}
            <section className={styles.gallerySection} id='gallery'>
                <header className={styles.galleryHeader}>
                    <h5>Gallery</h5>
                    <h4>Feel the Spanish temperament of our restaurant. Come and see for yourself...</h4>
                </header>
                <motion.div
                animate={{ height: (galleryOpen ? 'auto' : '60rem') }}
                transition={{ duration: 1 }}
                className={styles.galleryContainer}>
                    {galleryItems}
                </motion.div>
                <div className={styles.roller}>
                    <motion.div
                    animate={{ paddingTop: (galleryOpen ? 0 : '32rem') }}
                    transition={{ duration: 1 }}
                    className={styles.shutter}>
                        <button className={styles.galleryButton + " " + (galleryOpen ? styles.buttonClose : styles.buttonOpen)}
                        onClick={openButtonHandler}>
                            <span>{galleryOpen ? 'Close' : 'Open'}</span>
                            <motion.span
                            animate={{ rotate: (galleryOpen ? '180deg' : 0) }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.buttowArrow}>
                                    <path d="M1 13L12 23L23 13" stroke="black"/>
                                    <path d="M12 23C12 22.6 12 7.5 12 0" stroke="black"/>
                                </svg>
                            </motion.span>
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}