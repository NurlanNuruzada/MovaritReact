import React from 'react'
import Styles from './LatestBlogs.module.css'
import Image from '../../../../../Images/arrow-right.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from '../../../../../Components/BlogCard/BlogCard';
import CheckerImage from '../../../../../Images/checker.png'

export default function TrendingArtworksContainer() {
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
        <div className={Styles.Main}>
            <div className={Styles.TitleContainer}>
                <h1>Latest Blogs</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>See all</p>
                    <img src={Image} alt="" srcset="" />
                </div>
            </div>
            <div>
                <Slider {...settings}>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                    <div className={Styles.PaddingSettings}>
                        <BlogCard Type={"Art Interview"} Image={CheckerImage} Title={"The Minimalist Mastery of McCain McMurray"} Text={"Paige Simianer"} Date={"March 13, 2024"} Link={"#"} />
                    </div>
                </Slider>
            </div>
        </div>
    )
}