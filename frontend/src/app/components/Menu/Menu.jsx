import React from 'react';
import styles from '@/app/components/Menu/menu.module.sass';
import Button from '@/app/components/Button/Button'

export default function Menu() {

  const menuList = [
    { url: '/posts', text: 'Главная' },
    { url: '/', text: 'Каталог' },
    { url: '/', text: 'О нас' },
    { url: '/', text: 'Контакты' },
    { url: '/', text: 'Корзина' },

  ];
  return (
    <menu className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          {menuList.map((item, pos) => (
            <Button key = {pos} url={item.url}>{item.text}</Button>
          ))}
        </li>
      </ul>
    </menu>
  );
}
