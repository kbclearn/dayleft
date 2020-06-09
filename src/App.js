import React  from 'react';

import Radium from 'radium';

import './App.css';
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


const App =(prop)  => {


  
  return (
    <div>
    <h2>exam- i am from main  </h2>
    <button style={style} onClick={prop.click}>show result</button>           
    </div>
  );
}

export default Radium(App);
