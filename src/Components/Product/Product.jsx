import React from 'react'
import Styles from "./Product.module.css"
import HeartIcon from '../../Images/Heart.svg'

export default function Product({ Image, ArtPrice, ArtDes, ArtName }) {
    return (
        <div className={Styles.Main}>
            <div><img src={Image} alt="" srcset="" /></div>
            <div>
                <h1 className={Styles.ArtName}>{ArtName}</h1>
                <p className={Styles.ArtDes}>{ArtDes}</p>
            </div>
            <p className={Styles.ArtPrice}>{ArtPrice}</p>
        </div>
    )
}
