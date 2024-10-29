import hamburgerIcon from '../../assets/HamburgerIcon.svg';
import closeIcon from '../../assets/Close.svg';

import styles from './Hamburger.module.css';

export function Hamburger({
  handleHamburger,
  isOpenMenu,
}: {
  handleHamburger: () => void;
  isOpenMenu: boolean;
}) {
  return (
    <div className={styles.container}>
      <img
        onClick={handleHamburger}
        className={isOpenMenu ? styles.closeIcon : styles.hamburgerIcon}
        src={isOpenMenu ? closeIcon : hamburgerIcon}
        alt="icon"
      />
    </div>
  );
}
