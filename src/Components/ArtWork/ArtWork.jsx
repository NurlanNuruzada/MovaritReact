import React from 'react'
import Styles from './ArtWork.module.css'
import { StatUpArrow } from '@chakra-ui/react'
import HeartIcon from '../../Images/Heart.svg'

export default function ArtWork({Image,ArtPrice,ArtDes,ArtName}) {
    return (
        <div className={Styles.Main}>
            <button className={`${Styles.LikeBtn} position-absolute top-0 end-0 btn btn-like rounded-circle`}><img src={HeartIcon} /></button>
            <div><img src={Image} alt="" srcset="" /></div>
            <div>
                <h1 className={Styles.ArtName}>{ArtName}</h1>
                <p className={Styles.ArtDes}>{ArtDes}</p>
            </div>
            <p className={Styles.ArtPrice}>{ArtPrice}</p>
        </div>
    )
}
