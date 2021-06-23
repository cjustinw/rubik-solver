import './App.css';
import React, {useState} from 'react';
import Result from './components/Result';
import RubikBox from './components/RubikBox';
import {solve} from './components/Solver';

function App() {
  const [result, setResult] = useState(null);

  const solveCube = (cube) => {
    setResult(null);
    setTimeout(() => {
      let result = solve(cube);
      if(result){
        setResult(result);
      }
    }, 1000);
  }
  
  return (
    <div className="App">
      <h1 id="title">Rubik's Cube Solver </h1>
      <p id="nama">by: Christopher Justine William | 13519006</p>
      <RubikBox solveCube={solveCube}/>
      <Result result={result}/>
    </div>
  );
}

export default App;
