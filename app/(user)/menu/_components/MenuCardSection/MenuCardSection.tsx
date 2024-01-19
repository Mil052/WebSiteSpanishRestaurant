import styles from './MenuCardSection.module.css';

export default function MenuCardSection ({title, items}: {title: string, items: {title: string, subtitle: string, price: string}[]}) {
    const sectionTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);

    return (
        <div id={title} className={styles.menuCardSection}>
            <h3 className={styles.cardSectionTitle}>{sectionTitle}</h3>
            <table className={styles.cardSectionTable}>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index} className={styles.cardSectionItem}>
                                <td>
                                    <h4>{item.title}</h4>
                                    {item.subtitle && <p>{item.subtitle}</p>}
                                </td>
                                <td>{item.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}