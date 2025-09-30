import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import build_house from "./assets/build_house.jpg";
import renovation_pic from "./assets/renovation_pic.jpg";
import toilet_pic from "./assets/toilet_pic.jpg";


function Cards() {
  return (
    <div className = 'cards'>
        <h1 className="cards__h1">Our Services</h1>
        <div className = "cards__container">
            <div className= "cards__wrapper">
                <ul className="cards__items">
                    <CardItem src = {build_house}
                    text = "We purchase land across the UK to design and build high-quality homes from the ground up. Every project is carefully planned to meet modern living standards, combining comfort, durability, and energy efficiency." label = "Land & New Builds" path = '/buildhouses'/>
                    <CardItem src = {renovation_pic}
                    text = "We invest in existing properties, restoring and upgrading them to create beautiful, functional homes. Whether it’s a full renovation or a thoughtful refurbishment, we turn tired houses into homes people love." label = "Renovations & Refurbs" path = '/getaquote'/>
                    <CardItem src = {toilet_pic}
                    text = "Beyond construction, we provide essential fittings that bring comfort into everyday life — including our range of toilets with integrated bidets and other modern home solutions for everyday stylish living spaces.              " label = "Home Products" path = '/products'/>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
