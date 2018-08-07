import React from 'react';
 import styled from 'styled-components';
 
 const Button = styled.button`
    padding: 5px;
    height: 2em;
    border: 1px solid #fcfcf9;
    background: none;
    border-radius: 15px;
    color: #fcfcf9;
    font-family: monospace;
    font-size: 1em;
    margin-bottom: 10%;
    `;
  
    
 export default function LapButton (props){
 if(props.clickable){
 return <div>
      <Button type="button" onClick={props.onLap}>Lap</Button>
   </div>;

}else{
 return null;
}
}