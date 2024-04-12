import React from 'react'
import Styles from './TrendingArtworksContainer.module.css'
import Image from '../../../../Images/arrow-right.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ArtWork from '../../../../Components/ArtWork/ArtWork';
import CheckerImage from '../../../../Images/checker.png'

export default function TrendingArtworksContainer() {
    return (
        <div>
            <div className={Styles.TitleContainer}>
                <h1>Trending Artworks</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" srcset="" />
                </div>
            </div>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true} // Enable looping
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className={Styles.SliderItem}><ArtWork ArtPrice={"$ 2,000"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><ArtWork ArtPrice={"$ 2,000"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><ArtWork ArtPrice={"$ 2,000"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><ArtWork ArtPrice={"$ 2,000"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><ArtWork ArtPrice={"$ 2,000"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><ArtWork ArtPrice={"$ 2,000"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
