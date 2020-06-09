import React from 'react';
import './Exam.css';
import Radium from 'radium';

const exam = (props) => {

    const style = { 
        backgroundColor: 'green',
        color : 'white',
        font: 'inherit',
        border: '1px solid red',
        padding: '8px',
        ':hover' : {
          backgroundColor : 'lightgreen',
          color : 'black'
        }
       
      };

     

    return (
        <div  className="component" >
            <input  type="date" onChange={props.setdob} />
            <h2 >your exam   :{props.name} </h2>
            <h2 >your dob   :{props.dob} </h2>
           
            <h2 >you are    :{props.dayleft} day old </h2>
            <h2 > max days   :{props.maxdays} </h2>
            <h2 > min days   :{props.mindays} </h2>
            <h2 > exam per year   :{props.num3} </h2>
            <h2> { props.children}  </h2>
            <button style={style} onClick={props.click}>Remove this</button>
    
    </div>

    )
}

export default  Radium(exam);