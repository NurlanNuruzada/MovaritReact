import React from 'react'
import Styles from './TrendingArtworksContainer.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtWork from '../../../../../Components/ArtWork/ArtWork';
import CheckerImage from '../../../../../Images/checker.png'

export default function TrendingArtworksContainer() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,  // Allows users to swipe directly to any slide
        variableWidth: true, // Each slide can have variable width
        arrows: false,
    };
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1>Trending Artworks</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" srcset="" />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
