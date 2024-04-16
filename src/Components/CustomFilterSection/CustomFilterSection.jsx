import React from 'react'
import FilterImage from '../../Images/Icons/Filter.svg'
import Styles from './CustomFilterSection.module.css'
import FilterType from './FilterType'
export default function CustomFilterSection({ theme }) {
    const isDark = theme === "dark"
    return (
        <div className={`${Styles.Main}`}>
            <div className={`${Styles.Container}`}>
                <div className={`${Styles.IconContainer} ${isDark ? Styles.IconContainerDark : ''}`}>
                    <img src={FilterImage} alt="" />
                </div>
                <div className={`${Styles.Container2}`}>
                    <FilterType theme={theme} name={"Painting"} />
                    <FilterType theme={theme} name={"Abstract"} />
                </div>
            </div>
            <div>
                <span className={`${Styles.ClearAll} ${isDark ? Styles.ClearAllDark : ''}`}>Clear all</span>
            </div>
        </div>
    )
}
