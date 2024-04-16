import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Light from './BlogCardLight.module.css';
import Dark from './BlogCardDark.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

export default function BlogCard({ Type, Image, Title, Text, Date, Link, theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    return (
        <Card className={`${currentTheme.CardWrapper}`}>
            <Badge className={`${currentTheme.CardPill} position-absolute top-0 start-0`} pill>
                {Type}
            </Badge>
            <Card.Img className={currentTheme.CardImg} src={Image} alt="Card image" />
            <Card.ImgOverlay className={`${currentTheme.CardOverlayWrapper} d-flex align-items-center justify-content-between`}>
                <span className='col-9'>
                    <Card.Title className={currentTheme.CardTitle}>{Title}</Card.Title>
                    <Card.Text className={currentTheme.CardText}>
                        {Text}
                    </Card.Text>
                    <Card.Text className={currentTheme.CardFooterText}>{Date}</Card.Text>
                </span>
                <span className={currentTheme.CardLinkArrowBtnWrapper}>
                    <button onClick={() => console.log(Link)} className={currentTheme.CardLinkArrowBtn}><FontAwesomeIcon icon={faArrowUpLong} /></button>
                </span>
            </Card.ImgOverlay>
        </Card>
    )
}
