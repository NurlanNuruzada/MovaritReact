import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from '../../../../../Components/BlogCard/BlogCard';
import CheckerImage from '../../../../../Images/checker.png'
import Light from './LatestBlogsLight.module.css'
import Dark from './LatestBlogsDark.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function TrendingArtworksContainer({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
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
        <div className={currentTheme.Main}>
            <div className={currentTheme.TitleContainer}>
                <h1>Latest Blogs</h1>
                <div className={currentTheme.SeeAllContainer}>
                    <p>See all</p>
                    <FontAwesomeIcon className={`${currentTheme.SeeAllIcon} ms-2`} icon={faArrowRightLong} />
                </div>
            </div>
            <div className={currentTheme.SliderWrapper}>
                <Slider {...settings}>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard theme={theme} Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard theme={theme} Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard theme={theme} Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard theme={theme} Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard theme={theme} Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard theme={theme} Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={currentTheme.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}