import React, { useState } from 'react';
import '../css/ColorPicker.css';
import Color from './Color';

const ColorPicker = ({setColorPicked}) => {
  const click = {
    color1: false,
    color2: false,
    color3: false,
    color4: false,
    color5: false,
    color6: false
  }
  const [status, setStatus] = useState({...click});

  const updateClick = (no) => {
    let colorPicked = "";
    let newClick = {...click};
    if(no === 1){
      if(!status.color1){
        newClick.color1 = true;
        colorPicked = "#c92c20";
      }
    }
    else if(no === 2){
      if(!status.color2){
        newClick.color2 = true;
        colorPicked = "#fce428";
      }
    }
    else if(no === 3){
      if(!status.color3){
        newClick.color3 = true;
        colorPicked = "#21de34";
      }
    }
    else if(no === 4){
      if(!status.color4){
        newClick.color4 = true;
        colorPicked = "#165a9e";
      }
    }
    else if(no === 5){
      if(!status.color5){
        newClick.color5 = true;
        colorPicked = "#de9e54";
      }
    }
    else{
      if(!status.color6){
        newClick.color6 = true;
        colorPicked = "#ffffff";
      }
    }
    setStatus({...newClick});
    setColorPicked(colorPicked);
  }

  return (
    <div className="ColorPicker">
      <div className="color-container">
        <div onClick={() => updateClick(1)}>
          <Color color="#c92c20" clicked={status.color1}/>  
        </div>
        <div onClick={() => updateClick(2)}>
          <Color color="#fce428" clicked={status.color2}/>  
        </div>
        <div onClick={() => updateClick(3)}>
          <Color color="#21de34" clicked={status.color3}/>  
        </div>
        <div onClick={() => updateClick(4)}>
          <Color color="#165a9e" clicked={status.color4}/>  
        </div>
        <div onClick={() => updateClick(5)}>
          <Color color="#de9e54" clicked={status.color5}/>  
        </div>
        <div onClick={() => updateClick(6)}>
          <Color color="#ffffff" clicked={status.color6}/>  
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
