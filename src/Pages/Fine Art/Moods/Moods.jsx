import React from 'react'
import Styles from './Moods.module.css'
import Image from '../../../Images/BackgroundImage/image 6.png'
import Musiclight from '../../../Images/Icons/musiclight.png'
import Product from '../../../Components/Product/Product'
import CheckerImage from '../../../Images/checker.png';
import ArtWork from '../../../Components/ArtWork/ArtWork'

export default function Moods() {
    // const currentTheme = theme === 'dark' ? Dark : Light;
    const products = new Array(12).fill(null);
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.Section1}>

                <div className={Styles.InfoWrapper}>
                    <div className={Styles.Section1Info}>
                        <h1>The Equinox of Growth and Decay</h1>
                        <p>As the first breath of Spring sweeps across the landscape, art finds itself permeated with the themes of life and death, growth and decay in a harmonious consonance. In this season of renewal, artists draw inspiration from the vibrant rebirth of nature, creating stories that celebrate the cycles of existence.
                            Life, with its powerful colors and dynamic energy, often takes center stage in artistic endeavors. Yet, the shadows of death and decay manifest in emotional artistic creations. </p>
                    </div>
                </div>
            </div>
            <div className={Styles.SectionContainer}>
                <div className={Styles.SectionPadding}>
                    <div className={Styles.Section2}>
                        <h1>
                            88 Artworks
                        </h1>
                        <div className={Styles.SlideShowButton}>
                            <img src={Musiclight} alt="" />
                            <h1>Slideshow</h1>
                        </div>
                    </div>
                    <div className={Styles.Section3}>
                        <div className={Styles.Main}>
                            {products.map((_, index) => (
                                <ArtWork key={index} theme={"light"} ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                            ))}
                        </div>
                        <div className={Styles.LoadMoreButtonContainer}>
                            <button>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
