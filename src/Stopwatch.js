import React, { Component } from 'react';
import StartPauseButton from './StartPauseButton.js';
import ClearButton from './ClearButton.js';
import TimeDisplay from './TimeDisplay.js';
import styled from 'styled-components';
import LapButton from './LapButton';
import LapDisplay from './LapDisplay';

const StopwatchApp = styled.div`
    background-color: #3166bc;
    padding-top: 10%;
`;
//function to format elapsed time
    let hh ="";
    let mm ="";
    let ss ="";
    
const formattedTime = (msElapsed)=>{
    
    
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

return <div>{hh+" :"+mm+" :"+ss}</div>;
};




//component

class Stopwatch extends Component {
    
    constructor (){
        super ();
        this.state = {
            isRunning:false,
            elapsedTime: 0,
            startTime: 0,
            previousElapsedTime: 0,
            laps: [],
            lastLap: 0
        };
        
    this.tick = this.tick.bind(this);
    this.onStartOrPause=this.onStartOrPause.bind(this);
    this.onClear=this.onClear.bind(this);
    this.onLap=this.onLap.bind(this);
    
   } 
    
    
    
    tick(){
        let now = new Date();
       this.setState({
        elapsedTime: now - this.state.startTime + this.state.previousElapsedTime
        });
        
    
    console.log("ticking");
    }
    
    onStartOrPause(){
        if(this.state.elapsedTime){
            this.setState({
                previousElapsedTime: this.state.elapsedTime
            });
        }
        
        let isRunning = !this.state.isRunning;//setting it outside to be used generally in the function
        
        this.setState({
        isRunning: isRunning,
        startTime: new Date()
        });
        console.log("Start");
        
        if (isRunning){
        this.interval = setInterval(()=>
        this.tick(),10);

        }else{
            console.log("pause");
            clearInterval(this.interval);
}
}

onClear(){
this.setState({
    elapsedTime:0,
    previousElapsedTime: 0,//without this even after reseting will start from previous laps
    isRunning: false,
    laps: [],
    lastLap: 0
});
}

onLap(){
let lastLapTime= formattedTime(this.state.elapsedTime - this.state.lastLap+1);//I think it ommits the last second

console.log(lastLapTime);

this.setState({
    lastLap: this.state.elapsedTime,
    laps: this.state.laps.concat(lastLapTime)});
}





    render(){
        const laps = this.state.laps;
        let timeToDisplay = formattedTime(this.state.elapsedTime);
          return (
         <StopwatchApp>
         <TimeDisplay time={timeToDisplay} isRunning={this.state.isRunning}/> 
      
        <StartPauseButton isRunning={this.state.isRunning} onStartOrPause={this.onStartOrPause} previousElapsedTime={this.state.previousElapsedTime} />
       <LapButton onLap={this.onLap} clickable={this.state.isRunning}/>
        <ClearButton onClear={this.onClear} clickable={this.state.isRunning || !this.state.elapsedTime}/>
        <LapDisplay laps={laps}/>
        </StopwatchApp>
        );
    }
}
export default Stopwatch; 
