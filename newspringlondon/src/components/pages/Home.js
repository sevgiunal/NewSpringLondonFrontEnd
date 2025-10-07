import React from 'react';
import '../../App.css';
import MainPage from '../MainPage';
import Cards from '../Cards';
import ProductPage from '../ProductPage';

function Home () {
    return (
        <>
        < MainPage /> 
        <ProductPage />
         <Cards />
        
        </>

    )
}

export default Home;