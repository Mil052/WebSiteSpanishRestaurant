import styles from './Header.module.css';

export default function Header () {
    return (
        <header className={styles.header} style={{ backgroundImage: `url(./header-assets/bg_brick_wall.jpg)` }}>
            <h1><span>LA FABRICA</span> <span>DEL GUSTO</span></h1>
            <div className={styles.underline}>
                <hr/> <span>&#10045;</span> <hr/>
            </div>
            <div className={styles.shutter}>
                <div className={styles.shutterFill}>
                    <svg viewBox="0 0 1 1" width="1" height="1">
                        <clipPath id="shutterPath" clipPathUnits="objectBoundingBox">
                            <path d="M0,0 C0.4,0.5 0.6,0.5 1,0 L1,1 0,1 Z"/>
                        </clipPath>
                    </svg>
                </div>
            </div>
        </header>
    );
}