import React from 'react';
import './App.css';

import Card from './Card';

function CardRender() {
    return(
        <div className="  pt-2 pb-2 align-middle card-group  shadow  bg-body rounded d-flex "> 
        <div className=' card-render card shadow-lg p-2 mb-1 bg-body rounded position-relative'>
        
            <Card/>
            
            
            <Card/>
            
            <Card/>
        
            </div>
        </div>
    )
}
export default CardRender