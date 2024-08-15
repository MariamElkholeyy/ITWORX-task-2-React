import React from 'react';
import styles from './navbar.module.css';

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
              <li><a href="homepage">Home</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;