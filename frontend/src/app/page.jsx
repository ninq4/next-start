import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/app/components/button/button';
import Card from './components/Card/Card';

export default function Home() {
  return (
    <main className={styles.main}>
      <Card title="Заголовок" descr="Описание" />
      <Card title="Заголовок1" descr="Описание" />
      <Card title="Заголовок2" descr="Описание" />
      <Card title="Заголовок3" descr="Описание" />
    </main>
  );
}
