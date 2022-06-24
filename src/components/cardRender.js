import React from 'react';
import './App.css';
// import image15 from './images/image-15.jpg';
// import image16 from './images/image-16.jpg';
// import image17 from './images/image-17.jpg';




import Card from './Card';
import CardData from './data';



function CardRender() {
const details=CardData.map(data=>{
   return ( <div className='container'>
    <div className='card-group'>
   <div className='card justify-content-around  rounded-3 card-items' style={{width:'22rem'}}><Card 
    name={data.name}
    price={data.price}
    img={data.img}
    ratings={data.stats.rating}
    reviews={data.stats.reviewCount}
    country={data.country}
    noOfPersons={data.noOfPersons}
    overlayText={data.overlayText}
    key={data.name}

   />
   </div>
  </div>
  </div>
   )
})

    return(
        
<div className='container'>
        
        <div className='d-flex flex-sm-row flex-md-row flex-column justify-content-between'>
        
        {details}
        
        </div>
        </div>
        
        
        
       

           
            
        
    )
}
export default CardRender;