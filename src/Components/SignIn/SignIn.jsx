import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Styles from './SignIn.module.css'
import LogoText from '../../Images/Logo Text.svg'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import image1 from "../../Images/Icons/apple.svg";
import image2 from "../../Images/Icons/Facebook.svg";
import image3 from "../../Images/Icons/GoogleIcon.svg";
export default function SignIn({ showing, setShowSignIn }) {
    const navigate = useNavigate()
    return (
        <Modal contentClassName={Styles.modalContent} centered show={showing} fullscreen={'sm-down'} onHide={() => setShowSignIn(false)}>
            <Modal.Body className='d-flex flex-column align-items-center justify-content-center'>
                <div className='col-12 col-md-10 d-flex flex-column align-items-center justify-content-center'>
                    <h3 className={`${Styles.ModalHeader} mt-3`}>Sign in to <img style={{ height: "24px" }} className='d-inline' src={LogoText} alt="" /></h3>
                    <div className='mt-3 col-11'>
                        <Form.Control className='mb-2' placeholder='Email' type='email' aria-label="Text input with checkbox" />
                        <Form.Control className='mt-1' placeholder='Password' type='password' aria-label="Text input with radio button" />
                        <a className={`text-end d-block mt-3 btn-anchor ${Styles.Forget}` } href='##'>Forgot Password?</a>
                    </div>
                    <button className='btn btn-main mt-4 col-11 col-md-7 mb-3'>Sign In</button>
                    <span className={`d-flex col-11 justify-content-between align-items-center mt-3 ${Styles.Or}`}><hr className='col-5' /> or <hr className='col-5' /></span>
                    <div className='col-11 d-flex flex-column align-items-center justify-content-center'>
                        <span className={` d-flex col-11 col-md-7 ${Styles.IconContainer}` }>
                            <button className='social-media-link rounded-circle'><div className={Styles.Icon}><img   src={image2}  /></div></button>
                            <button className='social-media-link rounded-circle'><div className={Styles.Icon}><img   src={image1}  /></div></button>
                            <button className='social-media-link rounded-circle'><div className={Styles.Icon}><img   src={image3}  /></div></button>
                        </span>
                        <span className={`${Styles.regBtn} d-block mt-4 mb-3 btn-anchor`} onClick={() => { navigate('/register') }}>Don’t have an account? <a className={Styles.Up}>Sign up</a></span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
