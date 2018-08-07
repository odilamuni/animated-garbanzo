 import React from 'react';
 import styled from 'styled-components';
 
 const Button = styled.button`
    padding: 5px;
    height: 2em;
    border: 1px solid #fcfcf9;
    background: none;
    border-radius: 5px;
    color: #fcfcf9;
    font-family: monospace;
    font-size: 1em;
    margin-bottom: 10%;
    `;
    const ButtonHidden = styled(Button)`
    visibility: hidden;
    `;
    
 export default function ClearButton (props){
 if(props.clickable){

return <div>
      <ButtonHidden type="button" onClick={props.onClear} disabled ={props.clickable} >Clear</ButtonHidden>
     </div>;

}else{
 
 return <div>
      <Button type="button" onClick={props.onClear} disabled={props.clickable}>Clear</Button>
   </div>;
}
}