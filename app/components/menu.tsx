
import Link from 'next/link';
import styles from './menu.module.css';


const Menu = () => {
    return (
        <>
            <div>
                <aside className={`${styles.aside}`}>
                    <div className={`${styles.menu}`}>

                        <ul className={`${styles.ul} `}>
                            <li className={styles.li}>
                                <Link href="./voting-page" className={styles.button}>
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
                </aside>
                <section className={`${styles.section}`}>
                    <div id="vote-start">
                        <p>Voting started on <br /> September 1, 2023</p>
                    </div>
                    <br />
                    <div className={`${styles.vote_end}`}>
                        <p>Voting ends on <br /> [end date]</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Menu;