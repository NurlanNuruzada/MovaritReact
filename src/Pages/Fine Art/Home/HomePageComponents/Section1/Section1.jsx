import React, { useEffect, useState } from 'react';
import Light from './Section1Light.module.css';
import Dark from './Section1Dark.module.css';
import Image from '../../../../../Images/Section1.png';
import Background from '../../../../../Images/mobileBackground.png';
import NavigateOptions from '../../../../../Components/NavigateOptions/NavigateOptions';

export default function Section1({ theme }) {
  const [width, setWidth] = useState(window.innerWidth);
  const currentTheme = theme === 'dark' ? Dark : Light;
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
    <div className={currentTheme.MainContainer}>
      <img className={currentTheme.Section1Image} src={width > 440 ? Image : Background} alt="" />
      <div className={currentTheme.TextContainer}>
        <h1>Discover Artworks</h1>
        <h1>Beyond Boundaries</h1>
        <NavigateOptions theme={theme} />
      </div>
      <span className={currentTheme.ClippedBgWrapper}>
        <div className={currentTheme.WelcomeContainer}>
          <span className={currentTheme.TextSpan}>Welcome to Morvarid, where art meets passion. Explore our curated collection of breathtaking artworks</span>
        </div>
        <div className={currentTheme.WelcomeContainerCorner}>
        </div>
      </span>
    </div>
  );
}
