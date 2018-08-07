import React from 'react';



        
 export default function LapDisplay (props){
   
   
  const lapArray = props.laps;

  const lapList = lapArray.map((lap, index) =>
  
    <li key={index+1}>
       {lap}
    </li>
    
  );
  
  return (
    <ol>{lapList}</ol>
    
  );
}

/* IN STOPWATCH
const numbers = [1, 2, 3, 4, 5];
render(
  <NumberList numbers={numbers} />,
  
);*/
