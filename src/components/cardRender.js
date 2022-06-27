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
   <div className='card justify-content-around  rounded-3 card-items' style={{width:'21rem'}}><Card 
   key={data.id}
    items={data}

    // name={data.name}
    // price={data.price}
    // img={data.img}
    // ratings={data.stats.rating}
    // reviews={data.stats.reviewCount}
    // country={data.country}
    // noOfPersons={data.noOfPersons}
    // overlayText={data.overlayText}
    

   />
   </div>
  </div>
  </div>
   )
})

    return(
        
<div className='container'>
        
        <div className='d-flex flex-sm-row flex-md-row flex-lg-row flex-row justify-content-between ' style={{width:'96%',overflow:'hidden'}}>
        
        {details}
        
        </div>
        <hr/>
        </div>
        
        
        
       

           
            
        
    )
}
export default CardRender;