import React, { Component } from 'react';
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


 


const Separators = styled.p`
    color: #d1d1ca;
    font-size: 4em;
    height: 6em;
    font-family: 'Teko', sans-serif;
    padding: 5px;
    display: inline;
        `;
const SepWhileRunning = styled(Separators)`
color: #fcfcf9;
font-weight: 700;
`;


 export default function TimeDisplay (props){
    let msElapsed = props.time;
    
    let hh ="";
    let mm ="";
    let ss ="";
    
  let secondsElapsed= Math.floor(msElapsed/1000);
  let minutes= Math.floor(secondsElapsed%3600/60);
  let hours= Math.floor(secondsElapsed/3600);
  let seconds = secondsElapsed%60;
    
    
    
    if(hours<10){
      hh ="0"+hours;
    }else{
      hh=hours;
    }
    if (minutes<10){
      mm = "0"+ minutes;
    }else{
      mm = minutes;
    }
     if (seconds<10){
      ss = "0"+ seconds;
    }else{
      ss = seconds;
    }
    
     if(props.isRunning){
        

    return <div><HmsWhileRunning isRunning={props.isRunning}>{hh}</HmsWhileRunning>
                <SepWhileRunning>:</SepWhileRunning>
                <HmsWhileRunning isRunning={props.isRunning}>{mm}</HmsWhileRunning>
               <SepWhileRunning>:</SepWhileRunning>
                <HmsWhileRunning isRunning={props.isRunning}>{ss}</HmsWhileRunning>
        </div>;
     }else{
            return <div><Hms>{hh}</Hms>
                <Separators>:</Separators>
                <Hms>{mm}</Hms>
                <Separators>:</Separators>
                <Hms>{ss}</Hms>
        </div>;
}
}


    
  

    