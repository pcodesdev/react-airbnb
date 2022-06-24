import React from 'react';
import './App.css';
// import image15 from './images/image-15.jpg';
// import image16 from './images/image-16.jpg';
// import image17 from './images/image-17.jpg';




import Card from './Card';
import CardData from './data';



function CardRender() {
const details=CardData.map(data=>{
   return ( <Card 
    name={data.name}
    price={data.price}
    img={data.img}
    ratings={data.stats.rating}
    reviews={data.stats.reviewCount}
    country={data.country}
    noOfPersons={data.noOfPersons}
    overlayText={data.overlayText}

   />
   )
})

    return(
        

        <div className='container'>
       
        <div  style={{display: 'flex',  width: '70rem', flexDirection: 'row',flex:'0 0 auto', position: 'relative'}}>{details}
        <hr/>
        </div>
        </div>
        
       

           
            
        
    )
}
export default CardRender;