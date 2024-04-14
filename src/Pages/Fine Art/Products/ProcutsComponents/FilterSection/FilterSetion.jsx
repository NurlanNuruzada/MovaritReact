import React from 'react'
import Styles from './FilterSection.module.css'
import Filter from '../../../../../Components/Filters/Filter'
import CustomFilterSection from '../../../../../Components/CustomFilterSection/CustomFilterSection'
export default function FilterSetion() {
    const Sellections = ["All", "Recomended", "Mostly Viewed", "RecentlyAdded"]
    return (
        <div className={Styles.Main}>
            <Filter  SellectOptions={Sellections} />
        </div>
    )
}
