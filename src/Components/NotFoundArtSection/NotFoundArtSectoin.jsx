import React from 'react'
import Styles from './NotFoundArtSection.module.css'
import Image from '../../Images/Icons/Danger-Circle.png'
export default function NotFoundArtSectoin() {
    return (
        <div className={Styles.Main}>
            <img src={Image} alt="" />
            <p>We couldn't find any artwork related to “Sculpture”.
                But you can see...</p>
        </div>
    )
}
