import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Styles from './BlogCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

export default function BlogCard({ Type, Image, Title, Text, Date, Link }) {
    return (
        <Card className={`${Styles.CardWrapper}`}>
            <Badge className={`${Styles.CardPill} position-absolute top-0 start-0`} pill>
                {Type}
            </Badge>
            <Card.Img className={Styles.CardImg} src={Image} alt="Card image" />
            <Card.ImgOverlay className={`${Styles.CardOverlayWrapper} d-flex align-items-center justify-content-between`}>
                <span className='col-9'>
                    <Card.Title className={Styles.CardTitle}>{Title}</Card.Title>
                    <Card.Text className={Styles.CardText}>
                        {Text}
                    </Card.Text>
                    <Card.Text className={Styles.CardFooterText}>{Date}</Card.Text>
                </span>
                <span className={Styles.CardLinkArrowBtnWrapper}>
                    <button onClick={() => console.log(Link)} className={Styles.CardLinkArrowBtn}><FontAwesomeIcon icon={faArrowUpLong} /></button>
                </span>
            </Card.ImgOverlay>
        </Card>
    )
}
