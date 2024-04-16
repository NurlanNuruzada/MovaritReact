import React, { useEffect, useState } from 'react'
import Light from '../Section2/Section2Light.module.css'
import Dark from '../Section2/Section2Dark.module.css'
import Image from '../../../../../Images/Section1.png';
import Background from '../../../../../Images/Section2.jpg';

export default function Section2({theme}) {
    const currentTheme = theme === 'dark' ? Dark : Light;
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
        <div className={`${currentTheme.MainWrapper}`}>
            <div className={currentTheme.MainContent}>
            <span className='position-relative'>
                    <img className={currentTheme.LeftImage} src={width > 440 ? Image : Background} alt="" />
                </span>
                <div className={currentTheme.Container}>
                    <div className={currentTheme.InformationContainer}>
                        <h1>100K</h1>
                        <div className={currentTheme.InfoContainer}>
                            <p>HAPPY</p>
                            <p>CUSTOMERS</p>
                        </div>
                    </div>
                    <div className={currentTheme.InformationContainer}>
                        <h1>100K</h1>
                        <div className={currentTheme.InfoContainer}>
                            <p>GLOBAL</p>
                            <p>PARTNERS</p>
                        </div>
                    </div>
                    <div className={currentTheme.InformationContainer}>
                        <h1>100%</h1>
                        <div className={currentTheme.InfoContainer}>
                            <p>HIGH</p>
                            <p>QUALITY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
