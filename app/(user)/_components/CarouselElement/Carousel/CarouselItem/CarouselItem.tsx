import { CarouselItemData } from "../../carouselData";
import styles from "./CarouselItem.module.css"
import Image from "next/image";

export default function CarouselItem ({ item, carouselItemStateClass }: {item: CarouselItemData, carouselItemStateClass: string}) {
    const layoutClass = (item.description && item.image) ? styles.doubleItem : styles.singleItem;

    let carouselItemClasses = styles.carouselItem + " " + layoutClass;
    if (carouselItemStateClass) {
        carouselItemClasses = carouselItemClasses + " " + carouselItemStateClass;
    }

    return (
        <div className={carouselItemClasses}>
        {item.description &&
            <div className={styles.description}>
                <header className={styles.header}>
                    <h4>Restaurant</h4>
                    <h3>LA FABRICA DEL GUSTO</h3>
                    <h4>{item.description.title}</h4>
                </header>
                <p>{item.description.subtitle}</p>
            </div>
        }
        {item.image && <Image src={item.image.src} alt={item.image.alt} className={styles.image} width={800} height={480}/>}
        </div>
    )
}