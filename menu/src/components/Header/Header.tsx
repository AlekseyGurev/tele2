import { Logo } from '../Logo/Logo';
import { Location } from '../Location/Loacation';
import { Notification } from '../Notification/Notification';
import { Menu } from '../Menu/Menu';
import { useViewportSize } from '../../hooks/useViewportSize';
import { Hamburger } from '../Hamburger/Hamburger';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export function Header() {
  const { width } = useViewportSize();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setIsOpenMenu(false);
  }, [width]);

  const handleHamburger = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.buttons}>
            {width > 768 ? <Location /> : null}
            {isOpenMenu ? null : <Notification />}
            {width < 768 ? (
              <Hamburger
                handleHamburger={handleHamburger}
                isOpenMenu={isOpenMenu}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <div className={`${styles.wrapper} ${styles.wrapperMenu}`}>
          {isOpenMenu || width > 768 ? <Menu closeMenu={closeMenu} /> : null}
        </div>
      </div>
    </header>
  );
}
