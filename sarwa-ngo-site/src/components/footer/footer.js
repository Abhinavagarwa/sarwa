import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.block}>
          <h3>SARWA</h3>
          <p className={styles.description}>
            SARWA is a non-profit dedicated to improving the well-being of communities
            through education, healthcare, and sustainable livelihoods. We strive to build
            a better future for children, women, and youth across India.
          </p>
          <Image src="/logo.png" alt="SARWA Logo" width={250} height={65} />
        </div>

        <div className={styles.block}>
          <h3>FOCUS AREAS</h3>
          <Link className={styles.link} href="/education">Education</Link>
          <Link className={styles.link} href="/healthcare">Healthcare</Link>
          <Link className={styles.link} href="/livelihoods">Livelihoods</Link>
          <Link className={styles.link} href="/women-empowerment">Women Empowerment</Link>
          <Link className={styles.link} href="/child-development">Child Development</Link>
          <Link className={styles.link} href="/community">Community Building</Link>
          <Link className={styles.link} href="/youth">Youth Engagement</Link>
          <Link className={styles.link} href="/urban-rural">Urban & Rural Programs</Link>
        </div>

        <div className={styles.block}>
          <h3>CONTACT</h3>
          <Link href="/contact" >Contact Form</Link>
          <a href="mailto:info@sarwa.org">info@sarwa.org</a>
        </div>

        <div className={styles.block}>
          <h3>UPDATES</h3>
          <Link className={styles.link} href="/news">Latest News</Link>
          <Link className={styles.link} href="/events">Events & Workshops</Link>
          <Link className={styles.link} href="/stories">Impact Stories</Link>
          <Link className={styles.link} href="/gallery">Photo Gallery</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
