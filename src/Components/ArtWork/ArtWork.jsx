import React from 'react'
import Styles from './ArtWork.module.css'
import { StatUpArrow } from '@chakra-ui/react'

export default function ArtWork({Image,ArtPrice,ArtDes,ArtName}) {
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
