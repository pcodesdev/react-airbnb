import React from 'react';
import './App.css';

import Card from './Card';

function CardRender() {
    return(
        <div className=" container"> 
        <div className='row row-cols-1 row-cols-md-3 position-relative shadow-lg p-3 mb-5 bg-info rounded '>
      
        <div className='card--container card col-sm-6 col shadow-lg bg-body rounded  ' style={{width:'23rem'}}>
        <Card/>
            </div>
            
            <div className='card--container card col-sm-6 col shadow-lg bg-body rounded' style={{width:'23rem'}}>
            <Card/>
            </div>
            <div className='card--container card col-sm-6 col shadow-lg  bg-body rounded ' style={{width:'23rem'}}>
            <Card/>
            </div>
            </div>
            
        </div>
    )
}
export default CardRender;