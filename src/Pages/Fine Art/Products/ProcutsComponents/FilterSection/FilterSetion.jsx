import React from 'react'
import Styles from './FilterSection.module.css'
import Filter from '../../../../../Components/Filters/Filter'
import CustomFilterSection from '../../../../../Components/CustomFilterSection/CustomFilterSection'
export default function FilterSetion({ Sellections, Default, theme }) {
    return (
        <div className={Styles.Main}>
            <Filter theme={theme} Default={Default} SellectOptions={Sellections} />
        </div>
    )
}
