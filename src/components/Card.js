import React from   'react';

import './App.css';

// import image15 from './images/image-15.jpg';

// import { FaStar } from 'react-icons/fa';

function Card(props) {
    return(
  
  <div >
  <img className="card-img rounded" style={{height: '23rem'}} src={props.img}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>{props.overlayText}</h5>
  </div>
  <div className="card-body ">
    <p className="card-text text-dark fs-2"><span className='text-danger m-0 p-0'>{props.icon}</span> {props.ratings} <span className='lead fs-2'>{props.number}.{props.country}</span></p>
    <p className="card-text text-dark fs-5">{props.author}</p>
    <p className="card-text text-dark fs-5"><span className='fw-bold'>{props.price}</span> / <span>{props.noOfPersons}</span> </p>
  </div>



</div>

    )
}

export default Card;

{/* <div className='shadow-lg p-2 mb-1 bg-body rounded'>
<div className="card m-1  text-white" style={{width: '21rem',}}>

  <img className="card-img rounded" style={{height: '23rem'}} src={image15}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Booked</h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p> */}
//   </div>
//   <div className="card-body m-1">
//     <p className="card-text text-dark fs-2"><span className='text-danger'><FaStar/></span> 5.0 <span className='lead fs-2'>(6).KENYA</span></p>
//     <p className="card-text text-dark fs-5">Life lessons with Peter Hannahs</p>
//     <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh 10,000</span> / <span>person</span> </p>
//   </div>
//   </div>
// </div>

{/* <div className='shadow-lg p-2 mb-1 bg-body rounded'>
<div className="card m-1  text-white" style={{width: '21rem',}}>

  <img className="card-img rounded" style={{height: '23rem'}} src={image15}  alt="..."></img>
  <div className="card-img-overlay">
    <h5 className="card-title bg-white text-dark p-2 rounded-pill text-center" style={{width: '8rem', }}>Booked</h5>
    {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p> */}
  // </div>
  // <div className="card-body m-1">
  //   <p className="card-text text-dark fs-2"><span className='text-danger'><FaStar/></span> 5.0 <span className='lead fs-2'>(6).KENYA</span></p>
  //   <p className="card-text text-dark fs-5">Life lessons with Peter Hannahs</p>
  //   <p className="card-text text-dark fs-5"><span className='fw-bold'>From Ksh 10,000</span> / <span>person</span> </p>
  // </div>
  // </div>
// </div>  */}