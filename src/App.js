import './App.css';
import React, {useState, useEffect} from 'react';
import Result from './components/Result';
import RubikBox from './components/RubikBox';
import {solve} from './components/Solver';
import Loading from './image/loading.svg';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const solveCube = (cube) => {
    setResult(null);
    setLoading(true);
    setError(false);
    setTimeout(() => {
      let result = solve(cube);
      if(result){
        setResult(result);
      }
      else{
        setError(true);
      }
    }, 1000);
  }

  useEffect(() => {
    if(result != null || error){
      setLoading(false);
    }
  }, [result, error]);
  
  return (
    <div className="App">
      <h1 id="title">Rubik's Cube Solver </h1>
      <p id="nama">by : Christopher Justine William | 13519006</p>
      <RubikBox solveCube={solveCube}/>
      {loading ? <img id="loading" src={Loading} alt="Succ" /> : ''}
      {error ? <h1 id="error">Error</h1> : ''}
      <Result result={result}/>
    </div>
  );
}

export default App;
