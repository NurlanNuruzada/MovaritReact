import React from 'react'
import XIcon from '../../Images/Icons/x.svg'
import Styles from './FilterType.module.css'
export default function FilterType({ name, theme }) {
    const isDark = theme === "dark"
    return (
        <div className={`${Styles.Container} ${isDark ? Styles.ContainerDark : ''}`}><span>{name}</span><img className={`${isDark ? Styles.XIcon : ''}`}  src={XIcon} alt="" /></div>
    )
}
