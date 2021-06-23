import React from 'react';
import '../css/Cube.css';
import {getColor} from '../components/Solver';

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
