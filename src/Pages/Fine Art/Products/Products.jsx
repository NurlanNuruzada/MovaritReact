import React from 'react'
import Styles from './Products.module.css'
import Section1 from './ProcutsComponents/Section1/Section1'
import FilterSection from './ProcutsComponents/FilterSection/FilterSetion'
import AllProducts from './ProcutsComponents/AllProductsSection/AllProducts'
import CustomSectionWihtSlider from '../../../Components/CustomSectionWithSlider/CustomSectionWihtSlider'
export default function Products() {
    return (
        <div className={Styles.Main}>
            <Section1 />
            <div className={Styles.Center}>
                <FilterSection />
                <div className={Styles.Padding}>
                    <AllProducts />
                </div>
                <div className={Styles.Paddingleft}>
                    <div style={{ padding: "96px 0" }}>
                        <CustomSectionWihtSlider Title={"Collected for you"} />
                    </div>
                    <div style={{ padding: "48px 0" }}>
                        <CustomSectionWihtSlider Title={"Recently viewed"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
