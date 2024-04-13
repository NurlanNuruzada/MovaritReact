import React from 'react'
import Styles from './SignUp.module.css'
import LogoText from '../../Images/Logo Text.svg'
import Form from 'react-bootstrap/Form';
import SignUpImg from '../../Images/SignUp.jpeg'
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faApple, faGoogle, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'

export default function SignUp() {
    const navigate = useNavigate()
    return (
        <div className={`${Styles.MainWrapper} d-flex`}>
            <div className={`d-none d-lg-block position-relative col-5 overflow-hidden`}>
                <img className={`${Styles.SignUpImg} w-100 h-100`} src={SignUpImg} alt="" />
                <div className={`${Styles.SignUpImgOverlay} card-img-overlay p-5 d-flex align-items-end`}>
                    <span className='d-flex col-lg-6 col-xl-4 justify-content-between'>
                        <button className='social-media-link social-media-link-outline rounded-circle'><FontAwesomeIcon icon={faInstagram} /></button>
                        <button className='social-media-link social-media-link-outline rounded-circle'><FontAwesomeIcon icon={faPinterestP} /></button>
                        <button className='social-media-link social-media-link-outline rounded-circle'><FontAwesomeIcon icon={faFacebookF} /></button>
                    </span>
                </div>
            </div>
            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='col-11 col-xl-6 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className={`${Styles.ModalHeader} mt-3`}>Sign up to <img style={{ height: "24px" }} className='d-inline' src={LogoText} alt="" /></h3>
                    <div className='mt-3 col-11 col-md-8 col-xl-10'>
                        <Form.Control className='mb-2' placeholder='Full Name' type='text' />
                        <Form.Control className='my-1' placeholder='Email' type='email' />
                        <Form.Control className='mt-2' placeholder='Password' type='password' />
                    </div>
                    <span className={`${Styles.SignUpCheck} mt-3 col-11 col-md-8 col-xl-10`}>
                        <Form.Check
                            type={'checkbox'}
                            label={`By registering, I accept the terms and conditions.`}
                        />
                        <Form.Check
                            type={'checkbox'}
                            label={`Subscribe to the Morvarid newsletter`}
                        />
                    </span>
                    <button className='btn btn-main mt-4 col-11 col-md-8 col-xl-10 mb-3'>Sign Up</button>
                    <span className='d-flex col-11 col-md-8 col-xl-10 justify-content-between align-items-center my-3'><hr className='col-5' /> or <hr className='col-5' /></span>
                    <div className='col-10 col-xl-8 d-flex flex-column align-items-center justify-content-center'>
                        <span className='d-flex justify-content-between col-10 col-md-6 col-xl-8'>
                            <button className='social-media-link rounded-circle'><FontAwesomeIcon icon={faFacebookF} /></button>
                            <button className='social-media-link rounded-circle'><FontAwesomeIcon icon={faApple} /></button>
                            <button className='social-media-link rounded-circle'><FontAwesomeIcon icon={faGoogle} /></button>
                        </span>
                    </div>
                    <span className={`${Styles.regBtn} d-block mt-4 mb-3 btn-anchor`} onClick={() => { navigate('/register') }}>Don’t have an account? <a href>Sign up</a></span>
                </div>
            </div>
        </div>
    )
}
