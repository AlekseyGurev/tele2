import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const MENU_ITEMS = [
  { id: 1, title: 'Преимущества Tele2', path: '/1' },
  { id: 2, title: 'Тарифы', path: '/2' },
  { id: 3, title: 'Акции и спецпредложения', path: '/3' },
  { id: 4, title: 'Промотариф Tele2', path: '/4' },
  { id: 5, title: 'Технология eSIM', path: '/5' },
  { id: 6, title: 'Подключение нового абонента', path: '/6' },
];

export function Menu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <nav>
      <ul className={styles.navList}>
        {MENU_ITEMS.map(({ id, title, path }) => (
          <li key={id} className={styles.navItem}>
            <NavLink
              onClick={closeMenu}
              state={title}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : ''}`
              }
              to={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
