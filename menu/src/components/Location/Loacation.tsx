import imgLocation from '../../assets/location.svg';
import { LOCATION } from '../../mocks';
import styles from './Location.module.css';

export function Location() {
  return (
    <div className={styles.location}>
      <img
        src={imgLocation}
        width="17"
        height="13"
        alt="location"
        className={styles.image}
      />
      <span className={styles.text}>{LOCATION.name}</span>
    </div>
  );
}
