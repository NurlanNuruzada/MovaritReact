import React from 'react'
import { useState } from 'react'
import styles from './Header.module.css'
import Image from '../../Images/logo.png'
import ProfileImage from '../../Images/Profile.svg'
import buyImage from '../../Images/Buy.svg'
import SignIn from '../SignIn/SignIn'
import SearchIcon from '../../Images/magnifyingglass.svg'
import { Input, ChakraProvider, InputLeftElement, InputGroup } from '@chakra-ui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image1 from '../../Images/1.svg'
import Image3 from '../../Images/4.svg'
import Buy from '../../Images/Buy.svg'
import Profile from '../../Images/Profile.svg'

export default function Header() {
  const [showSignIn, setShowSignIn] = useState(false)
  return (
    <div className={styles.Container}>
      <div className={styles.Main}>
        <div className={styles.MainContainer}>
          <h1>PROFESSIONAL SHOPPING WORLDWIDE. </h1>
          <p>FREE RETURNS WITHIN 1 YEAR.</p>
        </div>
        <div className={styles.Container2}>
          <div className={styles.PaddingContainer}>
            <div className={styles.MenuContainer}>
              <div className={styles.left}>
                <img src={Image} alt="" />
                <div className={styles.sellection}>Artworks<KeyboardArrowDownIcon fontSize='medium' /></div>
                <div className={styles.sellection}>Gift Card</div>
                <div className={styles.sellection}>Comission Work</div>
                <div className={styles.sellection}>Inspire me</div>
              </div>
              <div className={styles.right}>
                <ChakraProvider>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <img src={SearchIcon} alt="" />
                    </InputLeftElement>
                    <Input className={styles.Input} type='text' placeholder='Search' />
                  </InputGroup>
                </ChakraProvider>
                <div className={styles.Buttons} onClick={() => { setShowSignIn(true) }}><img src={ProfileImage} alt="" srcset="" /></div>
                <div className={styles.Buttons}><img src={buyImage} alt="" srcset="" /></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.MobileMain}>
        <div className={styles.MobileContainer}>
          <div className={styles.ButtonContainer}>
            <img src={Image1} alt="" srcSet="" />
            <img src={Image3} alt="" srcSet="" />
          </div>
          <img src={Image} alt="" srcSet="" />
          <div className={styles.ButtonContainer}>
            <img onClick={() => { setShowSignIn(true) }} src={Profile} alt="" srcset="" />
            <img src={Buy} alt="" srcset="" />
          </div>
        </div>
        {showSignIn && <SignIn setShowSignIn={setShowSignIn} showing={showSignIn} />}
      </div>
    </div>
  )
}
