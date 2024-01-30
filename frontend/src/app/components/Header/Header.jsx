import React from 'react';
import styles from './header.module.sass';
import Menu from '@/app/components/Menu/Menu';

const Header = () => {


  return (
    <header className={`${styles.header} mt-20`}>
      <div className={styles.header__container}>
        <Menu  />
      </div>
    </header>
  );
};

export default Header;
