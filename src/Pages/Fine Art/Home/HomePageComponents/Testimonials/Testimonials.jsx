import React from 'react'
import Styles from './Testimonials.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import Slider from "react-slick";
import CheckerImage from '../../../../../Images/checker.png'
import TestimonialCard from './../../../../../Components/TestimonialCard/TestimonialCard';

export default function TrendingArtworksContainer() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1 className='col-5'>Morvarid Customers Always Come First</h1>
            </div>
            <div className='slider-container w-100'>
                <Slider {...settings}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard /> 
                </Slider>
            </div>
        </div>
    )
}