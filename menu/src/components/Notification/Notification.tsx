import imgNotification from '../../assets/notification.svg';
import styles from './Notification.module.css';

export function Notification() {
  return (
    <img
      src={imgNotification}
      alt="колокольчик"
      className={styles.notification}
    />
  );
}
