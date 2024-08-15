'use client';
import Link from 'next/link';
import styles from './sidebar.module.css';
import { useState } from 'react';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <button
          className={styles.hamburger}
          onClick={handleToggle}
          aria-label="Toggle sidebar"
        >
          <span className={styles.hamburgerIcon} />
        </button>
        <button
          className={styles.closeButton}
          onClick={handleToggle}
          aria-label="Close sidebar"
        > 
        <span className={styles.closeIcon} />
        </button> */}
    <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
    
      <ul className={`${styles.ul} ${isOpen ? styles.open : styles.closed}`}>
        <li className={styles.li}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/nominations" className={styles.link}>
            Nominations
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/voting-page" className={styles.link}>
            Vote
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/results" className={styles.link}>
            Results
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
      <Link href="/nomination-form" className={styles.button}>
        <button type="button">New Employee of the Month</button>
      </Link>
    </div>
    </>
  );
};

export default SideBar;