import React from 'react'
import Styles from './NotFoundArtSection.module.css'
import Image from '../../Images/Icons/Danger-Circle.png'
export default function NotFoundArtSectoin({ theme }) {
    return (
        <div className={Styles.Main}>
            <img src={Image} alt="" />
            <p style={theme == "dark" ? { color: "#FFF" } : { color: "rgba(43, 44, 46, 1)" }}>We couldn't find any artwork related to “Sculpture”.
                But you can see...</p>
        </div>
    )
}
