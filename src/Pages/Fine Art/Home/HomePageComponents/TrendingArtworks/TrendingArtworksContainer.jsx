import React from 'react'
import Styles from './TrendingArtworksContainer.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import ArtWork from '../../../../../Components/ArtWork/ArtWork';
import CheckerImage from '../../../../../Images/checker.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function TrendingArtworksContainer() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1>Trending Artworks</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" srcset="" />
                </div>
            </div>
            <div>
                <Swiper
                    freeMode={true}
                    loop={true}
                    modules={[FreeMode]}
                    grabCursor={true}
                    className="trendingArtWorks"
                    breakpoints={{
                        768: {
                            slidesPerView:4,
                        },
                        1051: {
                            slidesPerView: 4,
                        }
                    }}
                >
                        <SwiperSlide className={Styles.Slider}>
                         <div className={Styles.SliderPadding}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div >
                    </SwiperSlide>
                        <SwiperSlide className={Styles.Slider}>
                         <div className={Styles.SliderPadding}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div >
                    </SwiperSlide>
                        <SwiperSlide className={Styles.Slider}>
                         <div className={Styles.SliderPadding}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div >
                    </SwiperSlide>
                        <SwiperSlide className={Styles.Slider}>
                         <div className={Styles.SliderPadding}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div >
                    </SwiperSlide>
                        <SwiperSlide className={Styles.Slider}>
                         <div className={Styles.SliderPadding}>
                        <ArtWork ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </div >
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    )
}
