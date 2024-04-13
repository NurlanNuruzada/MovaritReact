import React from 'react'
import Styles from './Products.module.css'
import Section1 from './ProcutsComponents/Section1/Section1'

export default function Products() {
    return (
        <div className={Styles.Main}>
            <Section1 />
        </div>
    )
}
