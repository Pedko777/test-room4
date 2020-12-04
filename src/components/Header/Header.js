import React from 'react';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={`container`}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
