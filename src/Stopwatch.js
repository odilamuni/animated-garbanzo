import React, { Component } from 'react';
import StartPauseButton from './StartPauseButton.js';
import ClearButton from './ClearButton.js';
import TimeDisplay from './TimeDisplay.js';
import styled from 'styled-components';

const StopwatchApp = styled.div`
    background-color: #4f7c99;
    padding-top: 10%;
    
    
   
    

`;
class Stopwatch extends Component {
    
    constructor (){
        super ();
        this.state = {
            isRunning:false,
            elapsedTime: 0,
            startTime: 0,
            previousElapsedTime: 0
        };
        
    this.tick = this.tick.bind(this);
    this.onStartOrPause=this.onStartOrPause.bind(this);
    this.onClear=this.onClear.bind(this);
    }
    
    tick(){
        let now = new Date();
       this.setState({
        elapsedTime: now - this.state.startTime + this.state.previousElapsedTime
        });
        
    let a = 1;
    a++;
    console.log("ticking"+a);
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
    isRunning: false
});
}




    render(){
    
          return (
         <StopwatchApp>
         <TimeDisplay time={this.state.elapsedTime} isRunning={this.state.isRunning}/> 
      
        <StartPauseButton isRunning={this.state.isRunning} onStartOrPause={this.onStartOrPause} previousElapsedTime={this.state.previousElapsedTime} />
       
        <ClearButton onClear={this.onClear} clickable={this.state.isRunning || !this.state.elapsedTime}/>
        </StopwatchApp>
        );
    }
}
export default Stopwatch; 
