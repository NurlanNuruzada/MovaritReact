import React from 'react'
import Light from './ArtMoodsLight.module.css'
import Dark from './ArtMoodsDark.module.css'
import CheckerImage from '../../../Images/checker.png';
import MoodCard from '../../../Components/MoodCard/MoodCard'
import MoodCardImg from '../../../Images/MoodCard.jpeg'
import FilterSetion from '../Products/ProcutsComponents/FilterSection/FilterSetion'
import { ChakraProvider, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import SearchIcon from '../../../Images/magnifyingglass.svg'

export default function ArtMoods({ theme }) {
    const currentTheme = theme === 'dark' ? Dark : Light;
    const products = new Array(12).fill(null);
    const thumbs = [{
        Image: "https://placehold.co/512x512/fdebf3/111?text=A",
        Link: "#"
    },
    {
        Image: "https://placehold.co/512x512/fcdbe6/111?text=B",
        Link: "#"
    },
    {
        Image: "https://placehold.co/512x512/d5cfe6/111?text=C",
        Link: "#"
    },
    {
        Image: "https://placehold.co/512x512/daf0e6/111?text=D",
        Link: "#"
    },
    {
        Image: "https://placehold.co/512x512/fff4e0/111?text=E",
        Link: "#"
    }
    ]
    const Sellections = ["All Collections", "Art Movements", "Curator Picks", "Colors", "Moods", "Guest-Curated"]
    return (
        <div className={currentTheme.MainContainer}>
            <div className={currentTheme.Section1}>

                <div className={currentTheme.InfoWrapper}>
                    <div className={currentTheme.Section1Info}>
                        <h1>Art Moods</h1>
                        <p>Instill a sense of freedom, relaxation, summer, or joy into your home with our mood-inspired collections.</p>
                    </div>
                </div>
            </div>
            <FilterSetion theme={theme} Default={"Moods"} Sellections={Sellections} />
            <div className={currentTheme.SectionContainer}>
                <div className={currentTheme.SectionPadding}>
                    <div className={currentTheme.Section2}>
                        <h1>
                            44 Collections
                        </h1>
                        <div className={currentTheme.Input}>
                            <ChakraProvider>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <img src={SearchIcon} alt="" />
                                    </InputLeftElement>
                                    <Input className={currentTheme.Input} type='text' placeholder='Search for a collection' />
                                </InputGroup>
                            </ChakraProvider>
                        </div>
                    </div>
                    <div className={currentTheme.Section3}>
                        <div className={currentTheme.Main}>
                            {products.map((_, index) => (
                                <MoodCard theme={theme} Image={MoodCardImg} key={index} Type={"Moods"} Title={"The Equinox of Growth and Decay"} Text={"83 pieces"} Thumbs={thumbs} />
                            ))}
                        </div>
                        <div className={currentTheme.LoadMoreButtonContainer}>
                            <button>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
