import React from 'react'
import Styles from './CollectionCategory.module.css'
export default function CollectionCategory({ img, CategoryName }) {
    return (
        <div className={`${Styles.Main}`}>
            <img src={img} alt="" />
            <div className={Styles.CategoryName}>
                {CategoryName}
            </div>
            <div className={Styles.Category}>
                {CategoryName}
            </div>
        </div>
    )
}
