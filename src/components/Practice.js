import React from 'react';

import './App.css'

function Practice(){
   
    // getting the current year
    // let date =  new Date().getFullYear();
    const date=new Date()
    const hours =date.getHours()

    let timeOfDay
    if(hours < 12){
        timeOfDay='morning'

    }else if(hours > 12 && hours < 17){
        timeOfDay='afternoon'
    }else{
        timeOfDay='night'
    }

    return(
        <h1>  {timeOfDay}</h1>
    )
}

export default Practice