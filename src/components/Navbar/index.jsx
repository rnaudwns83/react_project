import React from 'react'
import styles from './Navbar.module.css';
import { Link } from  'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar_container}>
          <h1><Link to='/' onClick='{}'  className={styles.nav_logo}>KOO</Link></h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;