import { Location } from '../Location/Loacation';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Location />
    </footer>
  );
}
