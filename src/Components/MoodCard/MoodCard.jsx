import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Light from './MoodCardLight.module.css';
import Dark from './MoodCardDark.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

export default function BlogCard({ Type, Image, Title, Text, Thumbs, theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    return (
        <Card className={`${currentTheme.CardWrapper}`}>
            <Badge className={`${currentTheme.CardPill} position-absolute top-0 start-0`} pill>
                {Type}
            </Badge>
            <Card.Img className={currentTheme.CardImg} src={Image} alt="Card image" />
            <Card.ImgOverlay className={`${currentTheme.CardOverlayWrapper} d-flex flex-column justify-content-between`}>
                <Card.Title className={currentTheme.CardTitle}>{Title}</Card.Title>
                <span className='d-flex col-12 justify-content-between'>
                    <Card.Text className={`${currentTheme.CardFooterText} col-4`}>{Text}</Card.Text>
                    <div className={`${currentTheme.CardFooterUsers} col-8`}>
                        {Thumbs.map((_, index) => (
                            index < 4 && <a href={_.Link} className='ms-1'><img src={_.Image} alt="" /></a>
                        ))}
                    </div>
                </span>
            </Card.ImgOverlay>
        </Card>
    )
}
