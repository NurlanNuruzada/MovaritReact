import React from 'react';
import Styles from './UserCollection.module.css';
import Image from '../../Images/arrow-right.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtWork from '../ArtWork/ArtWork';
import CheckerImage from '../../Images/checker.png';
import Image2 from '../../Images/5fb66ad45970b36eef67075cb1ef010b.jpg'

export default function UserCollection({ UserName, Img }) {
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
                <div className={Styles.UserInfoContainer}>
                    <div className={Styles.ImageContainer}>
                        <img src={Image2} alt="" />
                    </div>
                    <h1>{UserName}</h1>
                </div>
                <div className={Styles.SeeAllContainer}>
                    <p>See page</p>
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
