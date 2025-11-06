import Navigation from './Navigation';
import styles from './AppLayout.module.scss';

export default function AppLayout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Navigation />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}