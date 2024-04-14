import React from 'react';
import Product from '../../../../../Components/Product/Product';
import CheckerImage from '../../../../../Images/checker.png';
import Styles from "./AllProducts.module.css";
import CustomFilterSection from '../../../../../Components/CustomFilterSection/CustomFilterSection';

export default function AllProducts() {
    const products = new Array(12).fill(null);

    return (
        <div className={Styles.MainContainer}>
            <CustomFilterSection />
            <div className={Styles.Main}>
                {products.map((_, index) => (
                    <Product
                        key={index}
                        ArtPrice={"$ 2,000"}
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
