import React from 'react';
import constructionpic from "/Users/sevgiunal/Desktop/NewSpringLondonLTD/NewSpringLondonFrontEnd/newspringlondon/src/assets/constructionpic.jpg";
import './MainPage.css';
import '../App.css';
import { Button } from './Button';


function MainPage() {
  return (
    <div className = 'main-container'>
        <h1> Where Construction Meets Comfort. </h1>
        <p>From new builds to renovations and home essentials, we deliver quality and comfort every step of the way.</p>
        <img src={constructionpic} alt="NewSpringLondon" className="construction-img" />
    </div>
  )
}

export default MainPage 
