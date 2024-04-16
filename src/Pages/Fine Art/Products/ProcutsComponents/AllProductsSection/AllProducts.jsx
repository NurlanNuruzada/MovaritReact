import React from 'react';
import CheckerImage from '../../../../../Images/checker.png';
import Styles from "./AllProducts.module.css";
import CustomFilterSection from '../../../../../Components/CustomFilterSection/CustomFilterSection';
import ArtWork from '../../../../../Components/ArtWork/ArtWork';

export default function AllProducts({ theme }) {
    const products = new Array(12).fill(null);

    return (
        <div className={Styles.MainContainer}>
            <CustomFilterSection theme={theme} />
            <div className={Styles.Main}>
                {products.map((_, index) => (
                    <ArtWork
                        theme={theme}
                        StylesName="style2"
                        ArtPrice={`$ 2,00${index}`}
                        ArtDes={"Acrylic, Gilding on Canvas 47x47in"}
                        ArtName={"Golden Light"}
                        Image={CheckerImage}
                    />
                ))}
            </div>
            <div className={Styles.LoadMoreButtonContainer}>
                <button>View more</button>
            </div>
        </div>
    );
}
