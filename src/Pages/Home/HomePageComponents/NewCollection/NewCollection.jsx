import React from 'react'
import Styles from './NewCollection.module.css'
import Image from '../../../../Images/arrow-right.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Collection from '../../../../Components/CollectionCard/Collection';
import CheckerImage from '../../../../Images/checker.png'

export default function TrendingCollection() {
    return (
        <div>
            <div className={Styles.TitleContainer}>
                <h1>Newest Collections</h1>
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
                    <SwiperSlide className={Styles.SliderItem}><Collection ArtDes={"Includes 20 art pieces"} ArtName={"Saphire Collection"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><Collection ArtDes={"Includes 20 art pieces"} ArtName={"Saphire Collection"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><Collection ArtDes={"Includes 20 art pieces"} ArtName={"Saphire Collection"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><Collection ArtDes={"Includes 20 art pieces"} ArtName={"Saphire Collection"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><Collection ArtDes={"Includes 20 art pieces"} ArtName={"Saphire Collection"} Image={CheckerImage} /></SwiperSlide>
                    <SwiperSlide className={Styles.SliderItem}><Collection ArtDes={"Includes 20 art pieces"} ArtName={"Saphire Collection"} Image={CheckerImage} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
