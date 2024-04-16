import React from 'react'
import letsPlayImg from '../../../../../Images/letsplay-photo.jpeg'
import Light from './LetsPlayLight.module.css'
import Dark from './LetsPlayDark.module.css'
import Card from 'react-bootstrap/Card';
import HeartIcon from '../../../../../Images/Heart.svg'

export default function LetsPlay({theme}) {
  const currentTheme = theme === 'dark' ? Dark : Light;
  return (
    <div className={` container-fluid d-flex flex-column ${currentTheme.Main}`}>
      <h3 className='mb-1'>Let's Play</h3>
      <div className='d-flex mt-4 flex-column flex-md-row'>
        <div className={`${currentTheme.PhotoFrameWrapper} col-12 col-md-6 d-flex flex-column justify-content-center align-items-center position-relative`}>
          <button className={`${currentTheme.LikeBtn} ${theme === "dark" && "btn-like-dark"} position-absolute top-0 end-0 btn btn-like rounded-circle`}><img src={HeartIcon} alt='' /></button>
          <span className={`${currentTheme.PhotoFrame} col-6 mb-3`}>
            <img className={currentTheme.Photo} src={letsPlayImg} alt="" />
          </span>
          <button className='btn btn-main mt-3'>Surprise Me</button>
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0 ps-md-5'>
          <Card.Body>
            <Card.Title className={`${currentTheme.CardTitle}`}>Nous n'avons pas de crédit sur le temps</Card.Title>
            <Card.Text className={`${currentTheme.CardText} my-3 my-md-4`}>
              In this acrylic work, I have merged cubism, expressionism and impressionism to capture a mosaic of emotions. Intertwined geometric shapes and vibrant colors tell a story of human complexity.
            </Card.Text>
            <Card.Subtitle className={`${currentTheme.CardSubtitle} mb-2`}>
              <span>Rose Mary Vallas, France, 2024</span>
              <span className='mx-2'>•</span>
              <span>Acrylic on Canvas, 79x79in</span>
            </Card.Subtitle>
            <Card.Text className={`${currentTheme.CardPrice} mt-2 mt-md-4`}>
              $15,670
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  )
}