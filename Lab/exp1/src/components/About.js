import React from 'react';
import styles from '../About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>JD Universal is a leading event management company with years of experience.</p>
    </div>
  );
}

export default About;
