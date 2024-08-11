import styles from './sidebar.module.css';

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.a} href="#">Home</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Nominations</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Results</a></li>
                <li className={styles.li}><a className={styles.a} href="#">Contact</a></li>
            </ul>
            <button type="button">New Employee of the Month</button>
        </div>
    );
};

export default SideBar;