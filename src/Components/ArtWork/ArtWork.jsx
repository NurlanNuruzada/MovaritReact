import React from 'react';
import Styles from './ArtWork.module.css';
import Styles2 from './ArtWorkStyle2.module.css';
import HeartIcon from '../../Images/Heart.svg';

export default function ArtWork({ Image, ArtPrice, ArtDes, ArtName, StylesName }) {
    // Determine which style module to use based on StylesName prop
    const currentStyles = StylesName === 'style2' ? Styles2 : Styles;

    return (
        <div className={currentStyles.Main}>
            <button className={`${currentStyles.LikeBtn} position-absolute top-0 end-0 btn btn-like rounded-circle`}>
                <img src={HeartIcon} alt="Like" />
            </button>
            <div>
                <img src={Image} alt="" />
            </div>
            <div>
                <h1 className={currentStyles.ArtName}>{ArtName}</h1>
                <p className={currentStyles.ArtDes}>{ArtDes}</p>
            </div>
            <p className={currentStyles.ArtPrice}>{ArtPrice}</p>
        </div>
    );
}
