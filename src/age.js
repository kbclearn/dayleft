import React from 'react';

   const age = (porps) => {
    var today = new Date();
    var birthDate = new Date(porps.dob);
   // var age_now = 0;
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age_now--;
    }
   // console.log(age_now);
  
    return (
        <div>
            
    <h2 > current age: {age_now}</h2>
    
    </div>

    )
}

export default age;


