import React, { Component } from 'react';
import App from './App';

import Test  from './test';
import Age from './age.js';
//import  './component.css';
//import Radium from 'radium';
import './App.css';
import Exam from './Component/Exam.js';

class main extends Component{

    state={
        dob:[
         { num1 : 0, num2: 0}
         ],
        exams:[
            {id: '1', name: 'airforce', num3 : 2 , maxdays : 7117 , mindays : 6022},
            {id: '2', name: 'navy' , num3 : 2 , maxdays : 8117 ,mindays : 6022},
            {id: '3', name: 'army' , num3 : 2 , maxdays : 9117 ,mindays : 6022},
            {id: '4', name: 'NDA', num3 : 2 , maxdays : 7117 ,mindays : 6022},
            {id: '5', name: '10+2 Technical Entry' , num3 : 2 , maxdays : 7117 ,mindays : 6022},
            {id: '6', name: 'IMA' , num3 : 2 , maxdays : 8760 ,mindays : 6935},
            {id: '7', name: 'OTA SSC', num3 : 2 , maxdays : 9125 ,mindays : 6935},
            {id: '8', name: 'NCC(SPL)' , num3 : 2 , maxdays : 9125 ,mindays : 6935},
            {id: '10', name: 'JAG MEN' , num3 : 1 , maxdays : 9855 ,mindays : 7665},
            {id: '11', name: 'UNIVERSITY ENTRY SCHEME', num3 : 1 , maxdays : 9125 ,mindays : 6935},
            {id: '12', name: 'TGC(ENGINEERS)' , num3 : 2 , maxdays : 9855 ,mindays : 7300},
            {id: '13', name: 'SS(Tech)' , num3 : 2 , maxdays : 9855 ,mindays : 7300},
            {id: '14', name: 'TGC EDUCATION(AEC)', num3 : 2 , maxdays : 9855 ,mindays : 8395},
            {id: '15', name: 'AFCAT' , num3 : 2 , maxdays : 8395 ,mindays : 6935},
            {id: '16', name: 'GSES' , num3 : 1 , maxdays : 8030 ,mindays : 6935},
            {id: '17', name: 'SSC Submarine Engineering', num3 : 1 , maxdays : 9125 ,mindays : 6935}
           
        ],
        showslist: true
      }

       
     
     setageHandler = (event ) => {
      var dropdt = new Date();
      var pickdt = new Date(event.target.value) ; 
      var diff = parseInt((dropdt.getTime() - pickdt.getTime()) / (24 * 3600 * 1000));
      if(diff !==0){
      console.log(diff);
      }
      const k=diff;
     this.setState( {
            dob:[
              { num1 : event.target.value , num2: k}
              
             ]
             
          });
    }

      removeexamHandler = (personIndex) => {
          //const person = this.state.persons.slice();
            const newexam =[...this.state.exams];
            newexam.splice(personIndex, 1);
            this.setState({exams: newexam});
      }
     

      togglelistHandler = () => {
       
        const doesshow =this.state.showslist;
        this.setState({showslist: !doesshow});
     }
     
  
    render(){
 
      let list=null;   
      if (this.state.showslist) {
          list = (
        <div>
          {this.state.exams.map( (anyname, index) => {
            return <Exam 
            name={anyname.name}
            key={anyname.id}
            setdob={this.setageHandler}
               dob={this.state.dob[0].num1}
              maxdays = {anyname.maxdays}
              mindays = {anyname.mindays}
              num3 = { anyname.num3}
               dayleft = {this.state.dob[0].num2}
            change={this.getageHandler} 
             click={ () => this.removeexamHandler(index)}>

                <Test i={this.state.dob[0].num2} j={anyname.maxdays} m={anyname.mindays} a={anyname.num3}/>
             </Exam>
             
           })}
           
        </div>
              
          );
         // style.backgroundColor=  'red';
         // style[':hover'] = {
           //     backgroundColor : 'lightred',
             //   color : 'black'
             // }
          
      }

         return(
            <div>
                
               <App click={this.togglelistHandler}/>
               {list}
                <Age dob={this.state.dob[0].num1}/>
              </div> 
                );
    }
}

export default main;