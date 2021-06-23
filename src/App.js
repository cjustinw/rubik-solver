import './App.css';
import React, {useState} from 'react';
import Result from './components/Result';
import RubikBox from './components/RubikBox';
import {solve} from './components/Solver';
import Loading from './image/loading.svg'

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const solveCube = (cube) => {
    let res = solve(cube);
    if(res){
      setResult(res);
      setLoading(false);
    }
  }
  
  return (
    <div className="App">
      <h1 id="title">Rubik's Cube Solver </h1>
      <p id="nama">by: Christopher Justine William | 13519006</p>
      {loading ? <img id="loading" src={Loading} alt="loading" /> : ''}
      <RubikBox solveCube={solveCube}/>
      <Result result={result}/>
    </div>
  );
}

export default App;
