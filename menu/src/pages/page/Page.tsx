import { useLocation } from 'react-router-dom';
import styles from './Page.module.css';

export function Page() {
  const location = useLocation();

  return (
    <section className={styles.page}>
      <h1>{location.state}</h1>
    </section>
  );
}
