import React from 'react';

import { FaChrome, FaLinkedinIn, FaTwitter,FaFacebook, FaWhatsapp} from 'react-icons/fa';

function Footer(){
    const year = new Date().getFullYear()
    
  return(
    <div className="container">
    <div className=" d-grid flex-col mb-3  fixed-bottom mt-3">
        <p className="align-middle fs-2 text-center"><span className=" m-2 text-danger"><FaChrome/></span>  <span className=" m-2 text-primary"></span> <span className=" m-2 text-primary"><FaLinkedinIn/></span><span className=" m-2 text-primary"> <FaTwitter /></span> <span className=" m-2 text-primary"><FaFacebook /></span> <span className=" m-2 text-success"><FaWhatsapp/></span></p>
    </div>
    <div>
    <footer className="blockquote-footer text-center lead">&copy; {year}</footer>
    </div>
    </div>
    
    
  )
}

export default Footer