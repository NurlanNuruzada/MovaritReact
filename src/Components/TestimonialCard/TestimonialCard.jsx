import React from 'react'
import Card from 'react-bootstrap/Card';
import Styles from './TestimonialCard.module.css'
import IconButton from '@mui/material/IconButton';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function TestimonialCard({iconColor, title, text, timestamp}) {
    return (
        <div>
            <Card.Body className={`${Styles.CardBody} d-flex flex-column align-items-center justify-content-center`}>
                <FormatQuoteIcon style={{color: iconColor}} className={`${Styles.CardIcon} testimonials-card-icon`} />
                <Card.Title className={`${Styles.CardTitle}`}>{title}</Card.Title>
                <Card.Text className={`${Styles.CardText}`}>
                    {text}
                </Card.Text>
                <Card.Subtitle className={`${Styles.CardSubtitle}`}>{timestamp}</Card.Subtitle>
            </Card.Body>
        </div>
    )
}