import React from 'react';
import './App.css';
import image15 from './images/image-15.jpg';
import image16 from './images/image-16.jpg';
import image17 from './images/image-17.jpg';

import { FaStar } from 'react-icons/fa';

import Card from './Card';

function CardRender() {
    return(
        <div className=" container"> 
        <div className='row row-cols-1 row-cols-md-3 position-relative shadow-lg p-3 mb-5 bg-info rounded '>
      
        <div className='card--container card col-sm-6 col shadow-lg bg-body rounded  ' style={{width:'23rem'}}>
        <Card img={image15}
            overlayText="Booked"
            icon={<FaStar/>}
            ratings='5.0'
            number="(6)"
            country="KENYA"
            author="Luxury Palace"
            price="From Ksh 10,000"
            noOfPersons="Person"
        />
            </div>
            
            <div className='card--container card col-sm-6 col shadow-lg bg-body rounded' style={{width:'23rem'}}>
            <Card img={image16}
            overlayText="Open"
            icon={<FaStar/>}
            ratings='4.6'
            from="(6)"
            country="ESTONIA"
            author="Weston Hotel"
            price="From Ksh 20,000"
            noOfPersons="Person"
            />
            </div>
            <div className='card--container card col-sm-6 col shadow-lg  bg-body rounded ' style={{width:'23rem'}}>
            <Card img={image17}
            overlayText="Booked"
            icon={<FaStar/>}
            ratings='4.7'
            from="(6)"
            country="FINNLAND"
            author="Merin Resort"
            price="From Ksh 90,000"
            noOfPersons="Group of 8"
            />
            </div>
            </div>
            
        </div>
    )
}
export default CardRender;