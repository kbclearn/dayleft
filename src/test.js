import React from 'react';
import Check from './check';
   
 const test = (props) => {

 /* const GetDays = () =>{
  var dropdt = new Date();
  var pickdt =  props.i;                        //new Date(document.getElementById("pick_date").value);
  var diff = ((dropdt - pickdt) / (24 * 3600 * 1000));
  //console.log(parseInt(diff));
  //console.log('test');
  var days = (props.j-((dropdt - pickdt) / (24 * 3600 * 1000)));
 // return parseInt(7117-((dropdt - pickdt) / (24 * 3600 * 1000)));
  // return parseInt((dropdt - pickdt) / (24 * 3600 * 1000));
  var k=0;
  for(var i =0; i<=days; i=i+182.5)
  {
          k++;
          console.log(k);
  }
  return k;
 // document.getElementById("numdays2").value=k;
}
*/
var i =  props.i;
var j =props.j;


    return (
      <div>
        
         <Check i={props.i} j={props.j}  m={props.m} a={props.a} />
         <input type="text" defaultValue={() => props.Check(i,j)} className="textbox"  name="numdays"/>
        </div>
        )
}

export default test
