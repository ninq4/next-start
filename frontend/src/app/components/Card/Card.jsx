import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/Card/card.module.sass'
import Button from '@/app/components/Button/Button'

export default function Card(props) {
  return (
    <div className={styles.card}>
        <div className={styles.card__wrapper}>
            <h2 className={styles.card__title}>{props.title}</h2>
            <p className={styles.card__descr}>{props.descr}</p>
            <Button url = "/post">Подробнее</Button>
        </div>
    </div>
  )
}
