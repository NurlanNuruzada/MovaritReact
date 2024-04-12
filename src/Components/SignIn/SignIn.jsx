import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

export default function SignIn({showing, setShowSignIn}) {
    return (
        <Modal centered show={showing} fullscreen={'sm-down'} onHide={() => setShowSignIn(false)}>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    )
}
