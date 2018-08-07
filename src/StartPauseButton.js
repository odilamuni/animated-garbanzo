import React from 'react';
import styled from 'styled-components';


const Button = styled.div`
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: auto;
    
`;

const Play = styled.div`
    border-radius: 50px;
    background-color: #fcfcf9;
    margin: auto;
    height: 4em;
    width: 4em;
    display:flex;
    margin-bottom: 2em;

`;

const Pause = styled.div`
    border-radius: 50px;
    background-color: #fcfcf9;
    box-shadow: 0px 0px 15px 2px #fcfcf9;
    color: #0e4366;
    margin: auto;
    height: 4em;
    width: 4em;
    display: flex;
`;

const Text = styled.p`
    font-family: 'Nova Mono', monospace;
    text-align: center;
    display: flex;
    font-size: 1em;
    color: #0e4366;
    justify-content: center;
    margin-left: 10px;
    
`;

// class StartPauseButton extends Component {
     
//     render(){
//         let text = "Start";
//         if (this.props.isRunning){
//             text = "Pause";
//         }
        
//         return <button type="button" onClick={this.props.onStartOrPause}>{text}</button>;
    
// }
// }
// export default StartPauseButton; 
export default function StartPauseButton (props){
            
    let text = "Start";
            
        if((!props.isRunning)&&(props.previousElapsedTime !== 0)){
            text = "Resume";
            return <Button>
            <Play type="button" onClick={props.onStartOrPause} isRunning={props.isRunning} previousElapsedTime={props.elapsedTime}><Text>{text}</Text></Play>
                
                </Button>;
        }
        if(props.isRunning){
            text = "Pause";
            return <Button>
            <Pause type="button" onClick={props.onStartOrPause} isRunning={props.isRunning} previousElapsedTime={props.elapsedTime}>
            <Text>
            {text}
            </Text>
            </Pause>
             
            </Button>;
        }
            
        
        return <Button>
        <Play type="button" onClick={props.onStartOrPause} isRunning={props.isRunning} previousElapsedTime={props.elapsedTime}>
        <Text>{text}</Text>
        </Play>
        </Button>;
} 
