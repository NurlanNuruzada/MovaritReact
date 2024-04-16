import React, { useEffect, useState } from 'react';
import Light from './CollectionSectionLight.module.css';
import Dark from './CollectionSectionDark.module.css';
import Image from '../../../../../Images/arrow-right.svg';
import CollectionCategory from '../../../../../Components/CollectionCategory/CollectionCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Category1 from '../../../../../Images/5fb66ad45970b36eef67075cb1ef010b.jpg';
import Category2 from '../../../../../Images/676a35ca25bf7dd18737e60ed20eb63e.jpg';
import Category3 from '../../../../../Images/74889e0eaf6d84912679dc3c186cb187.jpg';
import Category4 from '../../../../../Images/8df28e21336c4c1c0910c05f064694d7.jpg';
import Category5 from '../../../../../Images/aeb6f285ecca52019ccf4b5d8c62f09b.jpg';
import Category6 from '../../../../../Images/cdb69e7f8200a2fb29966287a305d24e.jpg';

export default function CollectionSection({theme}) {
    const [width, setWidth] = useState(window.innerWidth);
    const currentTheme = theme === 'dark' ? Dark : Light;
    function useWindowWidth() {

        useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);  // Update the width state
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return width;  // This is the getter for the current window width
    }
    useWindowWidth()
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
        <div className={currentTheme.MainContainer}>
            <div className={currentTheme.TitleContainer}>
                <h1>Which vibe do you want to bring home?</h1>
                <div className={currentTheme.SeeAllContainer}>
                    <p>All our collections</p>
                    <FontAwesomeIcon className={`${currentTheme.SeeAllIcon} ms-2`} icon={faArrowRightLong} />
                </div>
            </div>
            <div className={`${currentTheme.FlexContainer} col-12`}>
                {[Category1, Category2, Category3, Category4, Category5, Category6].map((category, index) => (
                    <CollectionCategory key={index} img={category} CategoryName={"Modern Minimalist"} />
                ))}
            </div>
            <div className={currentTheme.Main}>
                <Slider {...settings}>
                    {[Category1, Category2, Category3, Category4, Category5, Category6].map((category, index) => (
                        <div className={currentTheme.PaddingSettings}>
                            <CollectionCategory key={index} img={category} CategoryName={"Modern Minimalist"} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
}
