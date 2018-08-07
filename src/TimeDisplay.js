import React from 'react';
import styled from 'styled-components';

const Hms = styled.div`
    padding-top: 10%;
    width: 15%;
    color: #d1d1ca;
    font-size: 4em;
    height: 6em;
    font-family: 'Nova Mono', monospace;
    display: inline;
`;
const HmsWhileRunning = styled(Hms)`
color: #fcfcf9;
font-weight: 700;
`;


 





 export default function TimeDisplay (props){
    
    let time = props.time;
    
    
     if(props.isRunning){
        

    return <div>
    <HmsWhileRunning>{time}</HmsWhileRunning>
        </div>;
     }else{
            return <div><Hms>{time}</Hms>
                
        </div>;
}
}


    
  

    