import React, { useRef } from 'react'
import TestimonialCard from './../../../../../Components/TestimonialCard/TestimonialCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Light from './TestimonialsLight.module.css'
import Dark from './TestimonialsDark.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function TrendingArtworksContainer({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    const swiperRef = useRef();
    return (
        <div className={currentTheme.Main}>
            <div className={currentTheme.TitleContainer}>
                <h1 className='col-10 col-lg-7 col-xl-5'>Morvarid Customers Always Come First</h1>
            </div>
            <div className='slider-container w-100'>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: -35
                        }
                    }}
                    className={`${currentTheme.testimonialsWrapper} TestimonialsSwiper`}
                >
                    <SwiperSlide><TestimonialCard theme={theme} iconColor={"#EAD9BC"} title={"Hasmita, Switzerland"} text={"It is Swiss paradise so beautifully captured. When I’m not in the mountains myself, I love looking at it."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard theme={theme} iconColor={"#DABBD4"} title={"Charlie, United States"} text={"The painting gives us a distinct feeling of calm. It transports us to those quiet moment of taking morning beach walks."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard theme={theme} iconColor={"#FACFAD"} title={"Simona, Italy"} text={"I was afraid that it might be different when seen in real life, and instead, it is even more beautiful than in the photo."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard theme={theme} iconColor={"#EAD9BC"} title={"Hasmita, Switzerland"} text={"It is Swiss paradise so beautifully captured. When I’m not in the mountains myself, I love looking at it."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard theme={theme} iconColor={"#DABBD4"} title={"Charlie, United States"} text={"The painting gives us a distinct feeling of calm. It transports us to those quiet moment of taking morning beach walks."} timestamp={"March 13, 2024"} /></SwiperSlide>
                    <SwiperSlide><TestimonialCard theme={theme} iconColor={"#FACFAD"} title={"Simona, Italy"} text={"I was afraid that it might be different when seen in real life, and instead, it is even more beautiful than in the photo."} timestamp={"March 13, 2024"} /></SwiperSlide>
                </Swiper>
            </div>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <button onClick={() => swiperRef.current.slidePrev()} className={`${currentTheme.TestimonialsNavBtn} social-media-link social-media-link-outline rounded-circle me-2`}><FontAwesomeIcon icon={faAnglesLeft} /></button>
                <button onClick={() => swiperRef.current.slideNext()} className={`${currentTheme.TestimonialsNavBtn} social-media-link social-media-link-outline rounded-circle ms-2`}><FontAwesomeIcon icon={faAnglesRight} /></button>
            </div>
        </div >
    )
}