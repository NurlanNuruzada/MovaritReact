import React from 'react'
import letsPlayImg from '../../../../Images/letsplay-photo.jpeg'
import Styles from './LetsPlay.module.css'
import Card from 'react-bootstrap/Card';
import HeartIcon from '../../../../Images/Heart.svg'

export default function LetsPlay() {
  return (
    <div className='container-fluid d-flex flex-column'>
      <h3 className='mb-1'>Let's Play</h3>
      <div className='d-flex mt-4'>
        <div className={`${Styles.PhotoFrameWrapper} col-6 d-flex flex-column justify-content-center align-items-center position-relative`}>
          <button className={`${Styles.LikeBtn} position-absolute top-0 end-0 btn btn-like rounded-circle`}><img src={HeartIcon} /></button>
          <span className={`${Styles.PhotoFrame} col-6 mb-3`}>
            <img className={Styles.Photo} src={letsPlayImg} alt="" />
          </span>
          <button className='btn btn-main mt-3'>Surprise Me</button>
        </div>
        <div className='col-6 ms-5 d-flex justify-content-center align-items-center'>
          <Card.Body>
            <Card.Title className={`${Styles.CardTitle}`}>Nous n'avons pas de crédit sur le temps</Card.Title>
            <Card.Text className={`${Styles.CardText} my-4`}>
              In this acrylic work, I have merged cubism, expressionism and impressionism to capture a mosaic of emotions. Intertwined geometric shapes and vibrant colors tell a story of human complexity.
            </Card.Text>
            <Card.Subtitle className={`${Styles.CardSubtitle} mb-2`}>
              <span>Rose Mary Vallas, France, 2024</span>
              <span className='mx-2'>•</span>
              <span>Acrylic on Canvas, 79x79in</span>
            </Card.Subtitle>
            <Card.Text className={`${Styles.CardPrice} mt-4`}>
              $15,670
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </div>
  )
}