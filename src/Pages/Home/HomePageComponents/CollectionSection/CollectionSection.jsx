import React from 'react';
import Styles from './ColllectionSection.module.css';
import Image from '../../../../Images/arrow-right.svg';
import CollectionCategory from '../../../../Components/CollectionCategory/CollectionCategory';
import Category1 from '../../../../Images/5fb66ad45970b36eef67075cb1ef010b.jpg';
import Category2 from '../../../../Images/676a35ca25bf7dd18737e60ed20eb63e.jpg';
import Category3 from '../../../../Images/74889e0eaf6d84912679dc3c186cb187.jpg';
import Category4 from '../../../../Images/8df28e21336c4c1c0910c05f064694d7.jpg';
import Category5 from '../../../../Images/aeb6f285ecca52019ccf4b5d8c62f09b.jpg';
import Category6 from '../../../../Images/cdb69e7f8200a2fb29966287a305d24e.jpg';
import { Box, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';

export default function CollectionSection() {
    return (
        <div>
            <div className={Styles.TitleContainer}>
                <h1>Which vibe do you want to bring home?</h1>
                <div className={Styles.SeeAllContainer}>
                    <p>All our collections</p>
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className={Styles.FlexContainer} spacing='40px'>
                {[Category1, Category2, Category3, Category4, Category5, Category6].map((category, index) => (
                    <CollectionCategory img={category} CategoryName={"Modern Minimalist"} />
                ))}
            </div>
        </div>
    );
}
