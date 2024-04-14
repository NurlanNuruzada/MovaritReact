import React from 'react';
import Styles from './CustomSectionWihtSlider.module.css';
import Image from '../../Images/arrow-right.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtWork from '../../Components/ArtWork/ArtWork';
import CheckerImage from '../../Images/checker.png';

export default function CustomSectionWihtSlider({ Title }) {
    const products = new Array(7).fill(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1>{Title}</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    {products.map((_, index) => (
                        <div key={index} className={Styles.PaddingSettings}>
                            <div className={Styles.PaddingSecttings}>
                                <ArtWork
                                    StylesName="style2"
                                    ArtPrice={`$ 2,00${index}`}
                                    ArtDes={"Acrylic, Gilding on Canvas 47x47in"}
                                    ArtName={"Golden Light"}
                                    Image={CheckerImage}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
