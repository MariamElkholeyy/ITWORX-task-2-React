import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div>
        <header className= {styles.mainHeader}>
          <nav>
            <ul>
              <li><img src={'./logo.png'} width="75" alt="Logo" /></li>
              <li>
                <h3>Acme Inc</h3>
              </li>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;