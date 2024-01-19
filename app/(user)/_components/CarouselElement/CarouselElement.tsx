'use client'

import { useState, useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import { carouselData, CarouselItemData } from "./carouselData";
import styles from "./CarouselElement.module.css";

export default function CarouselElement () {
    const [screenSize, setScreenSize] = useState<'small'|'large'>();

    useEffect(() => {
        setScreenSize((window.innerWidth < 1024) ? 'small' : 'large');

        function checkScreenSize (event: MediaQueryListEvent) {
            if (event.matches) {
                setScreenSize('large');
            } else {
                setScreenSize('small');
            }
        }
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        mediaQuery.addEventListener('change', checkScreenSize);
        return () => mediaQuery.removeEventListener('change', checkScreenSize);
    }, []);

    let carouselItemsArray: CarouselItemData[] = [];
    if (screenSize === 'small') {
        carouselData.forEach(item => {
            if ( item.description ) {
                carouselItemsArray.push({description: item.description});
            }
            if ( item.image ) {
                carouselItemsArray.push({image: item.image});
            }
        });
    } else {
        carouselItemsArray = [...carouselData];
    }

    return (
        <div className={styles.container}>
            <Carousel items={carouselItemsArray}/>
        </div>
    )
}