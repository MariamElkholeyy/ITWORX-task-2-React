
import Link from 'next/link';
import styles from './menu.module.css';


const Menu = () => {
    return (
        <>
            <div className={`${styles.menu}`}>

                <ul className={`${styles.ul} `}>
                    <li className={styles.li}>
                        <Link href="./voting-page/page.tsx" className={styles.button}>
                            <button type="button">
                                Voting
                            </button>
                        </Link>
                    </li>
                    <li className={styles.li} >
                        <Link href="/nominee" className={styles.button}>
                            <button type="button">
                                Nominees
                            </button>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/" className={styles.button}>
                            <button type="button">Winner</button>
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/" className={styles.button}>
                            <button>Settings</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Menu;