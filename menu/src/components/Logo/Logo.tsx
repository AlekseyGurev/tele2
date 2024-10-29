import { NavLink } from 'react-router-dom';
import imgLogo from '../../assets/logo.png';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <NavLink to="/">
      <img
        src={imgLogo}
        width="60"
        height="22"
        className={styles.logo}
        alt="logo"
      />
    </NavLink>
  );
}
