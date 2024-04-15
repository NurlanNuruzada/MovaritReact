import React from 'react';
import Light from './ArtWorkLight.module.css';
import Dark from './ArtWorkDark.module.css';
import HeartIcon from '../../Images/Heart.svg';

export default function ArtWork({ Image, ArtPrice, ArtDes, ArtName, theme }) {
    // Determine which style module to use based on theme prop
    const currentTheme = theme === 'dark' ? Dark : Light;
    console.log(currentTheme);
    return (
        <div className={currentTheme.Main}>
            <button className={`${currentTheme.LikeBtn} ${theme == "dark" && "btn-like-dark"} position-absolute top-0 end-0 btn btn-like rounded-circle`}>
                <img src={HeartIcon} alt="Like" />
            </button>
            <div>
                <img className={currentTheme.CardImg} src={Image} alt="" />
            </div>
            <div>
                <h1 className={currentTheme.ArtName}>{ArtName}</h1>
                <p className={currentTheme.ArtDes}>{ArtDes}</p>
            </div>
            <p className={currentTheme.ArtPrice}>{ArtPrice}</p>
        </div>
    );
}
