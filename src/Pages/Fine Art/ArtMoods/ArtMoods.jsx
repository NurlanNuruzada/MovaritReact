import React from 'react'
import Styles from './ArtMoods.module.css'
import CheckerImage from '../../../Images/checker.png';
import ArtWork from '../../../Components/ArtWork/ArtWork'
import FilterSetion from '../Products/ProcutsComponents/FilterSection/FilterSetion'
import { ChakraProvider, Input, InputLeftElement,InputGroup } from '@chakra-ui/react'
import  SearchIcon from '../../../Images/magnifyingglass.svg'

export default function ArtMoods() {
    // const currentTheme = theme === 'dark' ? Dark : Light;
    const products = new Array(12).fill(null);
    const Sellections = ["All Collections", "Art Movements", "Curator Picks", "Colors", "Moods", "Guest-Curated"]
    return (
        <div className={Styles.MainContainer}>
            <div className={Styles.Section1}>

                <div className={Styles.InfoWrapper}>
                    <div className={Styles.Section1Info}>
                        <h1>Art Moods</h1>
                        <p>Instill a sense of freedom, relaxation, summer, or joy into your home with our mood-inspired collections.</p>
                    </div>
                </div>
            </div>
            <FilterSetion Default={"Moods"} Sellections={Sellections} />
            <div className={Styles.SectionContainer}>
                <div className={Styles.SectionPadding}>
                    <div className={Styles.Section2}>
                        <h1>
                            44 Collections
                        </h1>
                        <div className={Styles.Input}>
                            <ChakraProvider>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <img src={SearchIcon} alt="" />
                                    </InputLeftElement>
                                    <Input className={Styles.Input} type='text' placeholder='Search' />
                                </InputGroup>
                            </ChakraProvider>
                        </div>
                    </div>
                    <div className={Styles.Section3}>
                        <div className={Styles.Main}>
                            {products.map((_, index) => (
                                <ArtWork key={index} theme={"light"} ArtPrice={"$ 2,0001"} ArtDes={"Acrylic, Gilding on Canvas 47x47in"} ArtName={"Golden Light"} Image={CheckerImage} />
                            ))}
                        </div>
                        <div className={Styles.LoadMoreButtonContainer}>
                            <button>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
