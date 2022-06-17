import React from "react";
import { FaAirbnb } from 'react-icons/fa';

function Navbar(){
    return(
        <div className="navbar fixed-top shadow-lg p-3 mb-5 bg-body rounded">
       
            <h1 className=" text-decoration-underline text-danger"><FaAirbnb/> airbnb</h1>
            <hr />
        </div>
    )
}
export default Navbar