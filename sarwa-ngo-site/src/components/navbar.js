'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  {
    title: 'Home',
    submenu: [
      { title: 'Welcome', href: '/' },
      { title: 'Latest News', href: '/news' },
    ],
  },
  {
    title: 'About',
    submenu: [
      { title: 'Our Mission', href: '/about/mission' },
      { title: 'Team', href: '/about/team' },
    ],
  },
  {
    title: 'Programs',
    submenu: [
      { title: 'Education', href: '/programs/education' },
      { title: 'Healthcare', href: '/programs/healthcare' },
      { title: 'Livelihood', href: '/programs/livelihood' },
    ],
  },
  {
    title: 'Contact',
    submenu: [
      { title: 'Reach Us', href: '/contact' },
      { title: 'FAQs', href: '/faq' },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="SARWA Logo" width={140} height={40} />
        </Link>
      </div>

      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.show : ''}`}>
        {navItems.map((item, index) => (
          <div className={styles.dropdown} key={index}>
            <button
              className={styles.dropdownToggle}
              onClick={() => handleDropdown(index)}
              aria-haspopup="true"
              aria-expanded={openDropdown === index}
            >
              {item.title} <span className={`${styles.arrow} ${openDropdown === index ? styles.rotate : ''}`}>▼</span>
            </button>
            <div
              className={`${styles.dropdownMenu} ${
                openDropdown === index ? styles.showDropdown : ''
              }`}
            >
              {item.submenu.map((sub, i) => (
                <Link href={sub.href} key={i}>
                  {sub.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}
