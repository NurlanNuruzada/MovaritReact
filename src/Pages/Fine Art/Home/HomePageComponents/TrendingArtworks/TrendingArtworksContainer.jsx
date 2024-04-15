import React from 'react'
import Light from './TrendingArtworksContainerLight.module.css'
import Dark from './TrendingArtworksContainerDark.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import ArtWork from '../../../../../Components/ArtWork/ArtWork';
import CheckerImage from '../../../../../Images/checker.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function TrendingArtworksContainer({theme}) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    return (
        <div className={currentTheme.Main}>
            <div className={currentTheme.TitleContainer}>
                <h1>Trending Artworks</h1>
                <div className={currentTheme.SeeAllContainer}>
                    <p>See all</p>
                    <FontAwesomeIcon className={`${currentTheme.SeeAllIcon} ms-2`} icon={faArrowRightLong} />
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
                            slidesPerView: 1,
                            spaceBetween: 25
                        },
                        1051: {
                            slidesPerView: 4,
                            spaceBetween: 32
                        }
                    }}
                >
                    <SwiperSlide>
                        <ArtWork theme={theme} ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArtWork theme={theme} ArtPrice={"$ 2,0002"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArtWork theme={theme} ArtPrice={"$ 2,0003"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArtWork theme={theme} ArtPrice={"$ 2,0004"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArtWork theme={theme} ArtPrice={"$ 2,0005"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
