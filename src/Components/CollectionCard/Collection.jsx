import React from 'react'
import Light from './CollectionCardLight.module.css'
import Dark from './CollectionCardDark.module.css'

export default function Collection({ Image, ArtName, ArtDes, theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    return (
        <div className={currentTheme.Main}>
            <div className={currentTheme.ImageContainer}>
                <img src={Image} alt="" />
            </div>
            <div>
                <h1>{ArtName}</h1>
                <p>{ArtDes}</p>
            </div>
        </div>
    )
}
