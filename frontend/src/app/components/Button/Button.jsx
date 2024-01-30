import React from 'react';
import styles from '@/app/components/Button/button.module.sass';
import Link from 'next/link';

const button = (props) => {
  if (props.url) {
    return (
      <Link href={props.url} className={styles.button}>
        {props.children}
      </Link>
    );
  }

  return <button className={styles.button}>{props.children}</button>;
};

export default button;
