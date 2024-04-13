import React from 'react'
import Styles from './NewCollection.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from '../../../../../Components/CollectionCard/Collection';
import CheckerImage from '../../../../../Images/checker.png'

export default function TrendingCollection() {
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
                <h1>Newest Collections</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" srcset="" />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                    <div className={Styles.PaddingSecttings}>
                        <Collection ArtDes={"Includes 20 art pieces1"} ArtName={"Saphire Collection"} Image={CheckerImage} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
