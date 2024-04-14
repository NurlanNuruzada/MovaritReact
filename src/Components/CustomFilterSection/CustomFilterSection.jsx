import React from 'react'
import FiterImage from '../../Images/Icons/Filter.svg'
import Styles from './CustomFilterSection.module.css'
import FilterType from './FilterType'
export default function CustomFilterSection() {
    return (
        <div className={Styles.Main}>
            <div className={Styles.Container}>
                <div className={Styles.IconContainer}>
                    <img src={FiterImage} alt="" />
                </div>
                <div className={Styles.Container2}>
                    <FilterType name={"Painting"} />
                    <FilterType name={"Abstract"} />
                </div>
            </div>
            <div>
                <span className={Styles.ClearAll}>Clear all</span>
            </div>
        </div>
    )
}
