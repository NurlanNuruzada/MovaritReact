import React from 'react'
import Light from './TrendingArtworksContainerLight.module.css'
import Dark from './TrendingArtworksContainerDark.module.css'
import ArtWork from '../../../../../Components/ArtWork/ArtWork';
import CheckerImage from '../../../../../Images/checker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Slider from 'react-slick';

export default function TrendingArtworksContainer({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        arrows: false,
        freeScroll: true,
    };
    return (
        <div className={currentTheme.Main}>
            <div className={currentTheme.TitleContainer}>
                <h1>Trending Artworks</h1>
                <div className={currentTheme.SeeAllContainer}>
                    <p>See all</p>
                    <FontAwesomeIcon className={`${currentTheme.SeeAllIcon} ms-2`} icon={faArrowRightLong} />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    {[...Array(8)].map((_, index) => (
                        <div className={currentTheme.PaddingSecttings}>
                            <ArtWork theme={theme} ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                        </div >
                    ))}
                </Slider>
            </div>
        </div>
    )
}
