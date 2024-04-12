import React from 'react'
import Styles from './CollectoinCard.module.css'
export default function Collection({ Image, ArtName, ArtDes }) {
    return (
        <div className={Styles.Main}>
            <div className={Styles.ImageContainer}>
                <img src={Image} alt="" />
            </div>
            <div>
                <h1>{ArtName}</h1>
                <p>{ArtDes}</p>
            </div>
        </div>
    )
}
