import React from 'react'
import Section1 from './ProcutsComponents/Section1/Section1'
import FilterSetion from './ProcutsComponents/FilterSection/FilterSetion'
import AllProducts from './ProcutsComponents/AllProductsSection/AllProducts'
import CustomSectionWihtSlider from '../../../Components/CustomSectionWithSlider/CustomSectionWihtSlider'
import UserCollection from '../../../Components/UserCollections/UserCollection'
import NotFoundArtSectoin from '../../../Components/NotFoundArtSection/NotFoundArtSectoin'
import Light from './ProductsLight.module.css'
import Dark from './ProductsDark.module.css'

export default function Products({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    const Sellections = ["All", "Recomended", "Mostly Viewed", "RecentlyAdded"]
    return (
        <div className={currentTheme.Main}>
            <Section1 theme={theme} />
            <div className={currentTheme.Center}>
                <FilterSetion theme={theme} Default={"All"} Sellections={Sellections} />
                <div className={currentTheme.Padding}>
                    <NotFoundArtSectoin theme={theme} />
                    <AllProducts theme={theme} />
                </div>
                <div className={currentTheme.Paddingleft}>
                    <div style={{ padding: "96px 0" }}>
                        <CustomSectionWihtSlider theme={theme} Title={"Collected for you"} />
                    </div>
                    <div style={{ padding: "48px 0" }}>
                        <CustomSectionWihtSlider theme={theme} Title={"Recently viewed"} />
                    </div>
                    <div style={{ padding: "48px 0 180px 0" }}>
                        <UserCollection theme={theme} UserName={"Robert Tillberg"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
