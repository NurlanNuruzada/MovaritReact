import React from 'react'
import Styles from './FilterSection.module.css'
import Filter from '../../../../../Components/Filters/Filter'
import CustomFilterSection from '../../../../../Components/CustomFilterSection/CustomFilterSection'
export default function FilterSetion({Sellections,Default}) {
    return (
        <div className={Styles.Main}>
            <Filter Default={Default}  SellectOptions={Sellections} />
        </div>
    )
}
