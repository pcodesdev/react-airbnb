import React from 'react';
import './App.css';

import Card from './Card';

function CardRender() {
    return(
        <div className=" container"> 
        <div className='row row-cols-1 row-cols-md-3 position-relative m-1 '>
      
        <div className=' card col-sm-6 col shadow-lg bg-body rounded  ' style={{width:'23rem'}}>
        <Card/>
            </div>
            
            <div className='card col-sm-6 col shadow-lg bg-body rounded' style={{width:'23rem'}}>
            <Card/>
            </div>
            <div className='card col-sm-6 col shadow-lg  bg-body rounded ' style={{width:'23rem'}}>
            <Card/>
            </div>
            </div>
            
        </div>
    )
}
export default CardRender;