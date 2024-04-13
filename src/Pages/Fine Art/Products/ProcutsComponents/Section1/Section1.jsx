import React, { useEffect, useState } from 'react'
import Styles from './Section1.module.css'
import Image from '../../../../../Images/BackgroundImage/Group 85.png';
import Background from '../../../../../Images/BackgroundImage/image 114.png';
import NavigateOptions from '../../../../../Components/NavigateOptions/NavigateOptions';
import Filter from '../Filters/Filter';

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
    const Sellections=["All","Recomended","Mostly Viewed","RecentlyAdded"]
    return (
        <div className={Styles.MainContainer}>
            <img className={width > 440 ? Styles.Section1Image : Styles.Section2Image} src={width > 440 ? Image : Background} alt="" />
            <div className={Styles.TextContainer}>
                <h1>Discover Art world</h1>
                <NavigateOptions />
            </div>
            <Filter SellectOptions={Sellections} />
        </div>
    )
}
