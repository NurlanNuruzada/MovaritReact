import React from 'react';
import Styles from './NewCollection.module.css';
import Image from '../../../../../Images/arrow-right.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from '../../../../../Components/CollectionCard/Collection';
import CheckerImage from '../../../../../Images/checker.png';

export default function TrendingCollection() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        arrows: false,
        freeScroll: true
    };
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1>Newest Collections</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" />
                </div>
            </div>
            <Slider {...settings}>
                {[...Array(8)].map((_, index) => (
                    <div key={index} className={`${Styles.PaddingSecttings} ${index === 7 ? Styles.lastSlidePadding : ''}`}>
                        <Collection ArtDes="Includes 20 art pieces" ArtName="Sapphire Collection" Image={CheckerImage} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
