

const check = (props) =>{
   
    var k=0;
    if(props.m < props.i){

    
        if(props.i !==0){
    
        for(var i =0; i<=(props.j - props.i); i=i+182.5)
        {
                k++;
                console.log(k);
        }
        }
    
    }
    else {
        if(props.i !==0){
    
            for( i =0; i<=(props.j - props.m); i=i+182.5)
            {
                    k++;
                    console.log(k);
            }
            }
    }
    if(props.a === 2){
    return k;
    }
    else if(props.a === 1){
        return k/2;
        }
    else {
            return k;
            }

  
    
  
    
}

export default check;


