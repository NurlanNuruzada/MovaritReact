import React from 'react'
import Image from '../../../Images/BackgroundImage/image 6.png'
import Musiclight from '../../../Images/Icons/musiclight.png'
import Product from '../../../Components/Product/Product'
import CheckerImage from '../../../Images/checker.png';
import ArtWork from '../../../Components/ArtWork/ArtWork'
import Light from './MoodsLight.module.css'
import Dark from './MoodsDark.module.css'

export default function Moods({theme}) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    const products = new Array(12).fill(null);
    return (
        <div className={currentTheme.MainContainer}>
            <div className={currentTheme.Section1}>

                <div className={currentTheme.InfoWrapper}>
                    <div className={currentTheme.Section1Info}>
                        <h1>The Equinox of Growth and Decay</h1>
                        <p>As the first breath of Spring sweeps across the landscape, art finds itself permeated with the themes of life and death, growth and decay in a harmonious consonance. In this season of renewal, artists draw inspiration from the vibrant rebirth of nature, creating stories that celebrate the cycles of existence.
                            Life, with its powerful colors and dynamic energy, often takes center stage in artistic endeavors. Yet, the shadows of death and decay manifest in emotional artistic creations. </p>
                    </div>
                </div>
            </div>
            <div className={currentTheme.SectionContainer}>
                <div className={currentTheme.SectionPadding}>
                    <div className={currentTheme.Section2}>
                        <h1>
                            88 Artworks
                        </h1>
                        <div className={currentTheme.SlideShowButton}>
                            <img src={Musiclight} alt="" />
                            <h1>Slideshow</h1>
                        </div>
                    </div>
                    <div className={currentTheme.Section3}>
                        <div className={currentTheme.Main}>
                            {products.map((_, index) => (
                                <ArtWork key={index} theme={theme} ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                            ))}
                        </div>
                        <div className={currentTheme.LoadMoreButtonContainer}>
                            <button>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
