import React from 'react'
import CustomizeImage from '../../../../Images/Customize.svg'
import Styles from './Section1.module.css'
import WarningImage from '../../../../Images/warning.svg'
import { Grid, GridItem } from '@chakra-ui/react'
export default function Section1() {
  return (
    <div className={Styles.MainContainer}>
      <div className={Styles.BetaVersionSection}>
        <div><img src={WarningImage} alt="" />This is a beta version!</div>
      </div>
      <Grid gridTemplateColumns={"1fr 1fr"} gap={32} justifyContent="space-between" className={Styles.SecconSection}>
        <GridItem className={Styles.LeftContainer}>
          <h1 className={Styles.MainTitle}>Engage with your website visitors using messaging applications.</h1>
          <h2 className={Styles.Desc}>Customize the chat widget to match your brand's colors and style. Additionally,
            set up a welcome message or chatbot to greet visitors and guide them to the right information.</h2>
          <button className={Styles.GetButton}>Get your free button</button>
        </GridItem>
        <GridItem  className={Styles.RightContainer}>
          <img className={Styles.Image} src={CustomizeImage} alt="" />
        </GridItem>
      </Grid>

    </div>
  )
}
