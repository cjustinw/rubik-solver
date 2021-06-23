import React from 'react';
import Cube from './Cube';
import '../css/Result.css';

const Result = ({result}) => {
  return (
    <div  className="Result">
      {result != null ? result.pathState.map((elmt, index) => (<Cube key={index} id={index-1} state={elmt} move={result.pathMove}/>)) : ''}
    </div>
  )
}

export default Result
