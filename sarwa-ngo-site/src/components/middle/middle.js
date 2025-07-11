import styles from './middel.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.block}>
          <h3>EDUCATION</h3>
          <p className={styles.description}>
            SARWA is a non-profit dedicated to improving the well-being of communities
            through education, healthcare, and sustainable livelihoods. We strive to build
            a better future for children, women, and youth across India.
          </p>
        </div>

        <div className={styles.block}>
            <h3>HEALTHCARE</h3>
          <p className={styles.description}>
            SARWA is a non-profit dedicated to improving the well-being of communities
            through education, healthcare, and sustainable livelihoods. We strive to build
            a better future for children, women, and youth across India.
          </p>
        </div>

        <div className={styles.block}>
          <h3>LIVELIHOODS</h3>
          <p className={styles.description}>
            SARWA is a non-profit dedicated to improving the well-being of communities
            through education, healthcare, and sustainable livelihoods. We strive to build
            a better future for children, women, and youth across India.
          </p>
        </div>

        <div className={styles.block}>
          <h3>CHANGE</h3>
          <p className={styles.description}>
            SARWA is a non-profit dedicated to improving the well-being of communities
            through education, healthcare, and sustainable livelihoods. We strive to build
            a better future for children, women, and youth across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
