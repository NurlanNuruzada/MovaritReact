import React from 'react'
import Styles from '../Section2/Section2.module.css'
import Image from '../../../../../Images/Section1.png';
import Background from '../../../../../Images/Section2.jpg';

export default function Section2() {
    return (
        <div className={`${Styles.MainWrapper}`}>
            <div className={Styles.MainContent}>
                <span className='position-relative'>
                    <span className={Styles.TextSpan}>Welcome to Morvarid, where art meets passion. Explore our curated collection of breathtaking artworks</span>
                    <img className={Styles.LeftImage} src={window.innerWidth > 440 ? Image : Background} alt="" />
                </span>
                <div className={Styles.Container}>
                    <div className={Styles.InformationContainer}>
                        <h1>100K</h1>
                        <div className={Styles.InfoContainer}>
                            <p>HAPPY</p>
                            <p>CUSTOMERS</p>
                        </div>
                    </div>
                    <div className={Styles.InformationContainer}>
                        <h1>100K</h1>
                        <div className={Styles.InfoContainer}>
                            <p>GLOBAL</p>
                            <p>PARTNERS</p>
                        </div>
                    </div>
                    <div className={Styles.InformationContainer}>
                        <h1>100%</h1>
                        <div className={Styles.InfoContainer}>
                            <p>HIGH</p>
                            <p>QUALITY</p>
                        </div>
                    </div>
                </div>
                <div >
                </div>
            </div>
        </div>
    )
}
