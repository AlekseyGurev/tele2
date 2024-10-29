import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { useViewportSize } from '../../hooks/useViewportSize';
import { Footer } from '../../components/Footer/Footer';
import styles from './MainPage.module.css';

export function MainPage() {
  const location = useLocation();
  const { width } = useViewportSize();

  return (
    <div className={styles.mainPage}>
      <Header />
      {location.state ? (
        <Outlet />
      ) : (
        <section className={styles.page}>
          <h1>{'Главная страница'}</h1>
        </section>
      )}
      {width < 768 ? <Footer /> : null}
    </div>
  );
}
