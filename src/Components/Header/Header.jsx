import React from 'react'
import { useState } from 'react'
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
import Light from './HeaderLight.module.css'
import Dark from './HeaderDark.module.css'


export default function Header({ InlineText, theme }) {
  const currentTheme = theme === 'dark' ? Dark : Light;
  const [showSignIn, setShowSignIn] = useState(false)
  return (
    <div className={currentTheme.Container}>
      <div className={currentTheme.Main}>
        <div className={currentTheme.MainContainer}>
          <h1>PROFESSIONAL SHOPPING WORLDWIDE. </h1>
          <p>FREE RETURNS WITHIN 1 YEAR.</p>
        </div>
        <div className={currentTheme.Container2}>
          <div className={currentTheme.PaddingContainer}>
            <div className={currentTheme.MenuContainer}>
              <div className={currentTheme.left}>
                <img src={Image} alt="" />
                <div className={currentTheme.selection}>Artworks<KeyboardArrowDownIcon fontSize='medium' /></div>
                <div className={currentTheme.selection}>Gift Card</div>
                <div className={currentTheme.selection}>Comission Work</div>
                <div className={currentTheme.selection}>Inspire me</div>
              </div>
              <div className={currentTheme.right}>
                <ChakraProvider>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <img src={SearchIcon} alt="" />
                    </InputLeftElement>
                    <Input className={currentTheme.Input} type='text' placeholder='Search' />
                  </InputGroup>
                </ChakraProvider>
                <div className={currentTheme.Buttons} onClick={() => { setShowSignIn(true) }}><img src={ProfileImage} alt="" /></div>
                <div className={currentTheme.Buttons}><img src={buyImage} alt="" /></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={currentTheme.MobileMain}>
        <div className={currentTheme.MobileContainer}>
          <div className={currentTheme.ButtonContainer}>
            <img src={Image1} alt="" />
            <img src={Image3} alt="" />
          </div>
          <img src={Image} alt="" />
          <div className={currentTheme.ButtonContainer}>
            <img onClick={() => { setShowSignIn(true) }} src={Profile} alt="" />
            <img src={Buy} alt="" />
          </div>
        </div>
        {showSignIn && <SignIn setShowSignIn={setShowSignIn} showing={showSignIn} />}
      </div>
    </div>
  )
}
