import React from 'react';
import ProductItem from './ProductItem';
import './ProductPage.css';
import standardwhite from "../assets/standardwhite.png";
import golddetailed from "../assets/golddetailed.png";
import goldfaucet from "../assets/GoldFaucet.png";





function ProductPage() {
  return (
    <div className = 'productpage'>
        <h1 className="productpage__h1">Our Products</h1>
        <div className = "productpage__container">
            <div className= "productpage__wrapper">
                <ul className="productpage__items">
                <ProductItem
                    path="/products"
                    src={standardwhite}
                    title="AquaFlow Pro"
                    text="Standard White Toilet with Bidet"
                    subtitle="Sleek modern design with soft-close seat and dual-flush technology"
                    price="£285"
                    label="SALE"
                    tags={['Water efficient', 'Easy installation', 'Modern design']}
                    />
                    <ProductItem
                    path="/products"
                    src={golddetailed}
                    title="AquaFlow Pro"
                    text="Gold Detailed Toilet with Bidet"
                    subtitle="Sleek modern design with soft-close seat and dual-flush technology"
                    price="£285"
                    label="SALE"
                    tags={['Water efficient', 'Easy installation', 'Modern design']}
                    />
                    <ProductItem
                    path="/products"
                    src={goldfaucet}
                    title="AquaFlow Pro"
                    text="Gold Detailed Faucet"
                    subtitle="Sleek modern design with soft-close seat and dual-flush technology"
                    price="£285"
                    label="SALE"
                    tags={['Water efficient', 'Easy installation', 'Modern design']}
                    />

                </ul>
                
            </div>

        </div>
      
    <div className="install-cta">
        <h2 className="install-cta__title">Professional Installation Available</h2>
        <p className="install-cta__text">
        All our toilets come with professional installation options. Our certified plumbers
        ensure perfect fitting and full warranty coverage for complete peace of mind.

        If you do need installation please enquire about it in your notes when you're 
        requesting your product.
        </p>

    </div>
    </div>


  )
}

export default ProductPage
