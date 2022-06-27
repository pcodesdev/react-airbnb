import React from   'react';

import './App.css';

import { FaStar } from 'react-icons/fa';



// Destructuring Props
function Card(props) {
  


    return(
      
      
      <div className=' mb-5' >
  <img className="card-img rounded-3 img-fluid card-img-container" style={{height: '25rem', width: '20rem'}} src={props.items.img}  alt="..."></img>
  <div className="card-img-overlay">
    {props.items.overlayText ===0 ? <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Available</h5>:<h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Booked</h5>}
  </div>
  <div className="card-body ">
    <p className="card-text text-dark fs-2"><span className='text-danger m-0 p-0'><FaStar/></span> {props.items.stats.rating} <span className='lead fs-2'>({props.items.stats.reviewCount}).{props.items.country}</span></p>
    <p className="card-text text-dark fs-5">{props.items.name}</p>
    <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh{props.items.price}</span> / <span>{props.items.noOfPersons}</span> </p>
  </div>
  </div>
  







    )
}

export default Card;
