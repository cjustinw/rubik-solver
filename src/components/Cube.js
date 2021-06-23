import React from 'react';
import '../css/Cube.css';

const convertColor = (color) => {
  if(color === "G"){
    return "#21de34";
  }
  else if(color === "R"){
    return "#c92c20";
  }
  else if(color === "B"){
    return "#165a9e";
  }
  else if(color === "O"){
    return "#de9e54";
  }
  else if(color === "W"){
    return "#ffffff";
  }
  else if(color === "Y"){
    return "#fce428";
  }
  else{
    return "";
  }
}

const getColor = (state, face, cubie) => {
  if(face === 1){
    if(cubie === 1){
      return convertColor(state.corner[0][0]);
    }
    else if(cubie === 2){
      return convertColor(state.edge[0][0]);
    }
    else if(cubie === 3){
      return convertColor(state.corner[1][0]);
    }
    else if(cubie === 4){
      return convertColor(state.edge[4][0]);
    }
    else if(cubie === 5){
      return convertColor("G");
    }
    else if(cubie === 6){
      return convertColor(state.edge[5][0]);
    }
    else if(cubie === 7){
      return convertColor(state.corner[4][0]);
    }
    else if(cubie === 8){
      return convertColor(state.edge[8][0]);
    }
    else if(cubie === 9){
      return convertColor(state.corner[5][0]);
    }
  }
  else if(face === 2){
    if(cubie === 1){
      return convertColor(state.corner[3][2]);
    }
    else if(cubie === 2){
      return convertColor(state.edge[2][1]);
    }
    else if(cubie === 3){
      return convertColor(state.corner[2][2]);
    }
    else if(cubie === 4){
      return convertColor(state.edge[3][1]);
    }
    else if(cubie === 5){
      return convertColor("W");
    }
    else if(cubie === 6){
      return convertColor(state.edge[1][1]);
    }
    else if(cubie === 7){
      return convertColor(state.corner[0][2]);
    }
    else if(cubie === 8){
      return convertColor(state.edge[0][1]);
    }
    else if(cubie === 9){
      return convertColor(state.corner[1][2]);
    }
  }
  else if(face === 3){
    if(cubie === 1){
      return convertColor(state.corner[1][1]);
    }
    else if(cubie === 2){
      return convertColor(state.edge[1][0]);
    }
    else if(cubie === 3){
      return convertColor(state.corner[2][0]);
    }
    else if(cubie === 4){
      return convertColor(state.edge[5][1]);
    }
    else if(cubie === 5){
      return convertColor("R");
    }
    else if(cubie === 6){
      return convertColor(state.edge[6][1]);
    }
    else if(cubie === 7){
      return convertColor(state.corner[5][1]);
    }
    else if(cubie === 8){
      return convertColor(state.edge[9][0]);
    }
    else if(cubie === 9){
      return convertColor(state.corner[6][0]);
    }
  }
}

const Cube = ({state, move, id}) => {
  let elmt = [];
  for(let i = 0; i < 9; i++){
    elmt.push(i);
  }

  return (
    <div id="wrapD3Cube">
      {id === -1 ? <p>Start</p> : <p><>{id+1}: {move[id]} </></p>}
      <div id="D3Cube">
        <div id="side1">
          {elmt.map((item, index) => <div key={index} className="side-item" style={{backgroundColor: getColor(state, 1, item+1)}}></div>)}
        </div>
        <div id="side2">
        {elmt.map((item, index) => <div key={index} className="side-item" style={{backgroundColor: getColor(state, 2, item+1)}}></div>)}
        </div>
        <div id="side3">
        {elmt.map((item, index) => <div key={index} className="side-item" style={{backgroundColor: getColor(state, 3, item+1)}}></div>)}
        </div>
      </div>
    </div>
  )
}

export default Cube
