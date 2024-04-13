import React, { useEffect, useState } from 'react';
import styles from './Section1.module.css';
import Image from '../../../../../Images/Section1.png';
import Background from '../../../../../Images/mobileBackground.png';
import NavigateOptions from '../../../../../Components/NavigateOptions/NavigateOptions';

export default function Section1() {
  const [width, setWidth] = useState(window.innerWidth);
  function useWindowWidth() {
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);  // Update the width state
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;  // This is the getter for the current window width
  }
  useWindowWidth()
  return (
    <div className={styles.MainContainer}>
      <img className={styles.Section1Image} src={width > 440 ? Image : Background} alt="" />
      <div className={styles.TextContainer}>
        <h1>Discover Artworks</h1>
        <h1>Beyond Boundaries</h1>
        <NavigateOptions />
      </div>
    </div>
  );
}
