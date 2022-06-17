import React from 'react';
import './App.css'
import image1 from './images/image-1.jpg';
import image2 from './images/image-2.jpg';
import image3 from './images/image-3.jpg';
import image4 from './images/image-4.jpg';
import image5 from './images/image-5.jpg';
import image6 from './images/image-6.jpg';
import image7 from './images/image-7.jpg';

function Hero() {
    return(
        <div className="hero-container">
            <img className='p-2' src={image1} alt=''></img>
            <img className='p-2' src={image2} alt=''></img>
            <img className='p-2' src={image3} alt=''></img>
            <img className='p-2' src={image4} alt=''></img>
            <img className='p-2' src={image5} alt=''></img>
            <img className='p-2' src={image6} alt=''></img>
            <img className='p-2' src={image7} alt=''></img>
            <h1 className='fw-bold'>Online Experiences</h1>
            <p className='lead'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <hr/>
            
        </div>
    )
}

export default Hero;
