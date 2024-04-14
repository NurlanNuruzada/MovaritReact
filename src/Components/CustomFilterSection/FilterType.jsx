import React from 'react'
import XIcon from '../../Images/Icons/x.svg'
import Styles from './FilterType.module.css'
export default function FilterType({ name }) {
    return (
        <div className={Styles.Container}><span>{name}</span><img className={Styles.Xicon}  src={XIcon} alt="" /></div>
    )
}
