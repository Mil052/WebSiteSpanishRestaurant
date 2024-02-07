import styles from './page.module.css';
import Link from 'next/link';
import { menuData } from './_menuData/menuData';
import MenuCardSection from './_components/MenuCardSection/MenuCardSection';

export default function MenuPage() {
  const menuSections = Object.keys(menuData);

  const menuSectionTitles = menuSections.map((section) => {
    const sectionName = section.charAt(0).toLocaleUpperCase() + section.slice(1);
    return (<li key={section}><Link href={`#${section}`}>{sectionName}</Link></li>)
  });

  return (
    <main className={styles.main} style={{ backgroundImage: `url(./menu-assets/restaurant-background.jpg)`}}>
      <div className={styles.menu}>
        <div className={styles.menuTitle}>
          <h2>Menu</h2>
          <hr/>
        </div>
        <div className={styles.menuSections}>
          <h3>Dishes</h3>
          <menu>
            { menuSectionTitles }
          </menu>
        </div>
      </div>
      <section className={styles.menuCard}>
        {menuSections.map((menuSection) => <MenuCardSection key={menuSection} title={menuSection} items={menuData[menuSection]}/>)}
      </section>
    </main>
  )
}

// How events works in REACT https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46

//  To go back to Native Events in React:

    // const menuCardRef = useRef<HTMLElement>(null);

    // useEffect(() => {
    //   const scrollHandler = (event: WheelEvent) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     const target = event.currentTarget as HTMLElement;
    //     target.scrollBy({
    //       top: (event.deltaY * 2 ),
    //       behavior: "smooth",
    //     });
    //   };
    //   menuCardRef.current!.addEventListener("wheel", scrollHandler);

    //   return () => menuCardRef.current?.removeEventListener("wheel", scrollHandler);
    // }, []);