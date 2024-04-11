import React from 'react'
import styles from './Section1.module.css'
import Image from '../../../../Images/Section1.png'
export default function Section1() {
  return (
    <div className={styles.MainContainer}>
     <img className={styles.Section1Image} src={Image} alt="" />
    </div>
  )
}
