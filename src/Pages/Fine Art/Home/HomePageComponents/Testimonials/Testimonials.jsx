import React, { useRef } from 'react'
import Styles from './Testimonials.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import Slider from "react-slick";
import CheckerImage from '../../../../../Images/checker.png'
import TestimonialCard from './../../../../../Components/TestimonialCard/TestimonialCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function TrendingArtworksContainer() {
    const swiperRef = useRef();
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1 className='col-10 col-lg-7 col-xl-5'>Morvarid Customers Always Come First</h1>
            </div>
            <div className='slider-container w-100'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                        clickable: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: -30
                        }
                    }}
                    className={`${Styles.testimonialsWrapper} TestimonialsSwiper`}
                >
                    <SwiperSlide><TestimonialCard iconColor={"#EAD9BC"} title={"Hasmita, Switzerland"} text={"It is Swiss paradise so beautifully captured. When I’m not in the mountains myself, I love looking at it."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard iconColor={"#DABBD4"} title={"Charlie, United States"} text={"The painting gives us a distinct feeling of calm. It transports us to those quiet moment of taking morning beach walks."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard iconColor={"#FACFAD"} title={"Simona, Italy"} text={"I was afraid that it might be different when seen in real life, and instead, it is even more beautiful than in the photo."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard iconColor={"#EAD9BC"} title={"Hasmita, Switzerland"} text={"It is Swiss paradise so beautifully captured. When I’m not in the mountains myself, I love looking at it."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard iconColor={"#DABBD4"} title={"Charlie, United States"} text={"The painting gives us a distinct feeling of calm. It transports us to those quiet moment of taking morning beach walks."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard iconColor={"#FACFAD"} title={"Simona, Italy"} text={"I was afraid that it might be different when seen in real life, and instead, it is even more beautiful than in the photo."} timestamp={"March 13, 2024"} /></SwiperSlide>
                </Swiper>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <button onClick={() => swiperRef.current.slidePrev()} className={`${Styles.TestimonialsNavBtn} social-media-link social-media-link-outline rounded-circle me-2`}><FontAwesomeIcon icon={faAnglesLeft} /></button>
                <button onClick={() => swiperRef.current.slideNext()} className={`${Styles.TestimonialsNavBtn} social-media-link social-media-link-outline rounded-circle ms-2`}><FontAwesomeIcon icon={faAnglesRight} /></button>
            </div>
        </div >
    )
}