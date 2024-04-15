import React, { useEffect, useState } from 'react'
import Styles from './Footer.module.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import TopImg from '../../Images/Clipped-footer-long.svg'
import LogoText from '../../Images/Logo Text.svg'
import AliPay from '../../Images/payment/Alipay.png'
import Visa from '../../Images/payment/Visa.png'
import Paypal from '../../Images/payment/PayPal.png'
import MasterCard from '../../Images/payment/Mastercard.png'

export default function Footer() {
  const [width, setWidth] = useState(window.innerWidth);
  function useWindowWidth() {
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);  // Update the width state
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;  // This is the getter for the current window width
  }
  useWindowWidth()
  return (
    <div className={Styles.MainWrapper}>
      <div className={Styles.Main}>
        <span className={Styles.ClippedImgWrapper}>
          <img className={Styles.ClippedImg} src={TopImg} alt="" />
          <img className={Styles.LogoText} src={LogoText} alt="" />
        </span>
        <div className='d-flex mb-3 flex-column flex-lg-row align-items-center'>
          <div className='d-flex flex-column col-10 col-lg-4'>
            <div className={Styles.Newsletter}>
              <h1 className='col-12 text-center text-lg-start align-self-center'>Join us for what's next in Art world</h1>
              <span className={`${Styles.NewsletterInputWrapper} mt-3 col-lg-10`}>
                <InputGroup>
                  <Form.Control
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="sub-news"
                    className={Styles.NewsletterInput}
                  />
                  <InputGroup.Text className={Styles.NewsletterInputBtn} id="sub-news"><button><FontAwesomeIcon icon={faChevronRight} /></button></InputGroup.Text>
                </InputGroup>
              </span>
            </div>
            <span className='d-none d-lg-flex'>
              <button className='social-media-link social-media-link-outline social-media-link-reverse rounded-circle'><FontAwesomeIcon icon={faInstagram} /></button>
              <button className='social-media-link social-media-link-outline social-media-link-reverse rounded-circle mx-3'><FontAwesomeIcon icon={faPinterestP} /></button>
              <button className='social-media-link social-media-link-outline social-media-link-reverse rounded-circle'><FontAwesomeIcon icon={faFacebookF} /></button>
            </span>
          </div>
          <div className='d-flex col-12 col-lg-8 justify-content-center position-relative'>
            <button onClick={() => document.querySelector("body")?.scrollIntoView({ behavior: 'smooth' })} className={`${Styles.FooterToTopBtn} social-media-link social-media-link-outline social-media-link-reverse rounded-circle position-absolute top-0 end-0`}><FontAwesomeIcon icon={faAnglesUp} /></button>
            <div className={`${Styles.ListsWrapper} d-flex justify-content-between`}>
              <div className={`${Styles.ListWrapper}`}>
                <h6>About Morvarid</h6>
                <ListGroup className={`${Styles.List}`} variant="flush">
                  <ListGroup.Item><span>About Us</span></ListGroup.Item>
                  <ListGroup.Item><span>Jobs</span></ListGroup.Item>
                  <ListGroup.Item><span>Art Magazine</span></ListGroup.Item>
                </ListGroup>
              </div>
              <div className={`${Styles.ListWrapper}`}>
                <h6>Customer Service</h6>
                <ListGroup className={`${Styles.List}`} variant="flush">
                  <span>
                    <ListGroup.Item><span>FAQ</span></ListGroup.Item>
                    <ListGroup.Item><span>Contact Us</span></ListGroup.Item>
                    <ListGroup.Item><span>Shipping</span></ListGroup.Item>
                  </span>
                  <span>
                    <ListGroup.Item><span>My Account</span></ListGroup.Item>
                    <ListGroup.Item><span>Return Policy</span></ListGroup.Item>
                    <ListGroup.Item><span>Testimonials</span></ListGroup.Item>
                  </span>
                </ListGroup>
              </div>
              <div className={`${Styles.ListWrapper} w-lg-auto`}>
                <h6>Art Services</h6>
                <ListGroup className={`${Styles.List}`} variant="flush">
                  <ListGroup.Item><span>Free Art Advisory</span></ListGroup.Item>
                  <ListGroup.Item><span>Commission an Artist</span></ListGroup.Item>
                  <ListGroup.Item><span>Offer a Gift Card</span></ListGroup.Item>
                  <ListGroup.Item><span>Trade</span></ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
        <div className='w-100 d-flex flex-column flex-lg-row justify-content-between align-items-center mt-4'>
          <span className='align-self-lg-end align-self-center mt-4 mb-lg-0'>Morvarid © 2023. All rights reserved</span>
          <div className={Styles.FooterOptionsWrapper}>
            <Form.Select className={Styles.FooterOptionsSelect}>
              <option value="1">ENG</option>
              <option value="2">AZE</option>
              <option value="3">RUS</option>
            </Form.Select>
            <Form.Select className={Styles.FooterOptionsSelect}>
              <option value="1">USD</option>
              <option value="2">EUR</option>
              <option value="3">GBP</option>
            </Form.Select>
          </div>
          <span className={`${Styles.FooterOptionsWrapperSocials} d-flex d-lg-none mb-4`}>
            <button className='social-media-link social-media-link-outline social-media-link-reverse rounded-circle'><FontAwesomeIcon icon={faInstagram} /></button>
            <button className='social-media-link social-media-link-outline social-media-link-reverse rounded-circle mx-3'><FontAwesomeIcon icon={faPinterestP} /></button>
            <button className='social-media-link social-media-link-outline social-media-link-reverse rounded-circle'><FontAwesomeIcon icon={faFacebookF} /></button>
          </span>
        </div>
      </div>
      <div className={Styles.FooterLogoStripWrapper}>
        <span className='d-flex col-8 col-lg-3 justify-content-between align-items-center'>
          <img className={Styles.FooterLogoStripItem} src={AliPay} alt="" />
          <img className={Styles.FooterLogoStripItem} src={Visa} alt="" />
          <img className={Styles.FooterLogoStripItem} src={Paypal} alt="" />
          <img className={Styles.FooterLogoStripItem} src={MasterCard} alt="" />
        </span>
      </div>
    </div >
  )
}
