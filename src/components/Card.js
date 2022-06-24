import React from   'react';

import './App.css';

import { FaStar } from 'react-icons/fa';

// import image15 from './images/image-15.jpg';

// import { FaStar } from 'react-icons/fa';

// Destructuring Props
function Card({img, overlayText, ratings,name, reviews ,country, price, noOfPersons}) {
  


    return(
      
      
      <div className='' >
  <img className="card-img rounded-3 card-img-container" style={{height: '25rem', width: '22rem'}} src={img}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>{overlayText}</h5>
  </div>
  <div className="card-body ">
    <p className="card-text text-dark fs-2"><span className='text-danger m-0 p-0'><FaStar/></span> {ratings} <span className='lead fs-2'>({reviews}).{country}</span></p>
    <p className="card-text text-dark fs-5">{name}</p>
    <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh {price}</span> / <span>{noOfPersons}</span> </p>
  </div>
  </div>
  







    )
}

export default Card;
