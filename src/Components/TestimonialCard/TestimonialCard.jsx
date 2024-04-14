import React from 'react'
import Card from 'react-bootstrap/Card';
import Styles from './TestimonialCard.module.css'

export default function TestimonialCard() {
    return (
        <div>
            <Card.Body className={`${Styles.CardBody} d-flex flex-column align-items-center justify-content-center`}>
                <Card.Title className={`${Styles.CardTitle}`}>Hasmita, Switzerland</Card.Title>
                <Card.Text className={`${Styles.CardText}`}>
                    It is Swiss paradise so beautifully captured. When I’m not in the mountains myself, I love looking at it.
                </Card.Text>
                <Card.Subtitle className={`${Styles.CardSubtitle}`}>March 13, 2024</Card.Subtitle>
            </Card.Body>
        </div>
    )
}