import React, { useState } from 'react';
import styles from './Section1.module.css';
import Image from '../../../../../Images/Section1.png';
import Background from '../../../../../Images/mobileBackground.png';
import ClippedBg from '../../../../../Images/Clipped-Long.svg';

export default function Section1() {
  // Initialize the state with null or a default selected option
  const [selectedOption, setSelectedOption] = useState("Fine Art");

  return (
    <div className={`${styles.MainContainer} position-relative`}>
      <img className={styles.Section1Image} src={window.innerWidth > 440 ? Image : Background} alt="" />
      <div className={styles.TextContainer}>
        <h1>Discover Artworks</h1>
        <h1>Beyond Boundaries</h1>
        <div className={styles.OptionContainer}>
          <button
            onClick={() => setSelectedOption('Fine Art')}
            className={selectedOption === 'Fine Art' ? styles.OptionSelected : styles.Option}
          >
            Fine Art
          </button>
          <button
            onClick={() => setSelectedOption('Digital Art')}
            className={selectedOption === 'Digital Art' ? styles.OptionSelected : styles.Option}
          >
            Digital Art
          </button>
        </div>
      </div>
      <span className={styles.ClippedBgWrapper}>
        <img src={ClippedBg} alt="" />
      </span>
    </div>
  );
}
