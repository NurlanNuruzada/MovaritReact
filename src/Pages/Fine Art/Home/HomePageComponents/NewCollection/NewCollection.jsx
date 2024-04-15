import React from 'react'
import Light from './NewCollectionLight.module.css'
import Dark from './NewCollectionDark.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from '../../../../../Components/CollectionCard/Collection';
import CheckerImage from '../../../../../Images/checker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function TrendingCollection({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
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
        <div className={currentTheme.Main}>
            <div className={currentTheme.TitleContainer}>
                <h1>Newest Collections</h1>
                <div className={currentTheme.SeeAllContainer}>
                    <p>See all</p>
                    <FontAwesomeIcon className={`${currentTheme.SeeAllIcon} ms-2`} icon={faArrowRightLong} />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <Collection theme={theme} ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
