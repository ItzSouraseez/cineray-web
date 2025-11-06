'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';

const navigationItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/map', label: 'Map', icon: '🗺️' },
  { href: '/compass', label: 'Compass', icon: '🧭' },
  { href: '/3d-view', label: '3D View', icon: '🎭' },
  { href: '/predictions', label: 'Predictions', icon: '🔮' },
  { href: '/locations', label: 'Locations', icon: '📍' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>☀️</span>
          <span className={styles.logoText}>Sun Tracker</span>
        </Link>
        
        <ul className={styles.navList}>
          {navigationItems.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link 
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}