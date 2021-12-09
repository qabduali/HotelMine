import React from 'react';
import '../MainPage.css';
import { Button } from './Button';
import './HeroSection.css';
import {Image} from "@chakra-ui/react"
import bck from './../../../img/img1.png'
function HeroSection() {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${bck})`, height: '100vh', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      
      <h1>INTERNATIONAL HOTEL CHAIN</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='Btn--Outline'
          buttonSize='Btn--Large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
