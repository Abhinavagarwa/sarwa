'use client'; // For App Router (optional if using Pages Router)

import { useEffect, useState } from 'react';
import styles from './hero.module.css';

const images = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.hero}>
      {images.map((img, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className={styles.overlay}>
        <h1>Empowering Communities</h1>
        <p>Education • Healthcare • Livelihood • Change</p>
      </div>
    </div>
  );
}
