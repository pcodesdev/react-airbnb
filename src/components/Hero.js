import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import image1 from './imgs/image-1.jpg';
import image2 from './imgs/image-2.jpg';
import image3 from './imgs/image-3.jpg';
import image4 from './imgs/image-4.jpg';
import image5 from './imgs/image-5.jpg';
import image6 from './imgs/image-6.jpg';
import image7 from './imgs/image-7.jpg';
import image8 from './imgs/image-8.jpg';
import image9 from './imgs/image-9.jpg';
import image10 from './imgs/image-10.jpg';
import image11 from './imgs/image-11.jpg';
import image12 from './imgs/image-12.jpg';
import image13 from './imgs/image-13.jpg';
import image14 from './imgs/image-14.jpg';
import image18 from './imgs/image-18.jpg';

function Hero() {
    return(
        <div className=''>
        <div className="hero-container" >
            <img className='p-2 ' src={image1} alt=''></img>
            <img className='p-2' src={image2} alt=''></img>
            <img className='p-2' src={image3} alt=''></img>
            <img className='p-2' src={image4} alt=''></img>
            <img className='p-2' src={image5} alt=''></img>
            <img className='p-2' src={image6} alt=''></img>
            <img className='p-2' src={image7} alt=''></img>
            <img className='p-2' src={image8} alt=''></img>
            <h1 className='fw-bold m-1'>Online Experiences</h1>
            <p className='lead m-1'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <hr/>
            <h1 className='fw-bold m-1'>React Responsive Carousel</h1>
            </div>
            <div className='container'>
            <Carousel className=''>
                <div>
                    <img className='img-fluid' src={image8} />
                    <p className="legend bg-light text-dark">Legend 1</p>
                </div>
                <div>
                    <img className='img-fluid' src={image9} />
                    <p className="legend bg-light text-dark">Legend 2</p>
                </div>
                <div>
                    <img className='img-fluid' src={image10} />
                    <p className="legend bg-light text-dark">Legend 3</p>
                </div>
                <div>
                    <img className='img-fluid' src={image11} />
                    <p className="legend bg-light text-dark">Legend 4</p>
                </div>
                <div>
                    <img className='img-fluid' src={image12} />
                    <p className="legend bg-light text-dark">Legend 5</p>
                </div>
                <div>
                    <img className='img-fluid' src={image13} />
                    <p className="legend bg-light text-dark">Legend 6</p>
                </div>
                <div>
                    <img className='img-fluid' src={image14} />
                    <p className="legend bg-light text-dark">Legend 7</p>
                </div>
                

            </Carousel>
            </div>

            <hr/>

           
            
        </div>
    )
}

export default Hero;
