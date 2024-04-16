import React from 'react'
import Card from 'react-bootstrap/Card';
import IconButton from '@mui/material/IconButton';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Light from './TestimonialCardLight.module.css'
import Dark from './TestimonialCardDark.module.css'

export default function TestimonialCard({iconColor, title, text, timestamp, theme}) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    return (
        <div>
            <Card.Body className={`${currentTheme.CardBody} d-flex flex-column align-items-center justify-content-center`}>
                <FormatQuoteIcon style={{color: iconColor}} className={`${currentTheme.CardIcon} testimonials-card-icon`} />
                <Card.Title className={`${currentTheme.CardTitle}`}>{title}</Card.Title>
                <Card.Text className={`${currentTheme.CardText}`}>
                    {text}
                </Card.Text>
                <Card.Subtitle className={`${currentTheme.CardSubtitle}`}>{timestamp}</Card.Subtitle>
            </Card.Body>
        </div>
    )
}