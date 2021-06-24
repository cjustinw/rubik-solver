import './App.css';
import React, {useState, useEffect} from 'react';
import Result from './components/Result';
import RubikBox from './components/RubikBox';
import Loading from './image/loading.svg';

import worker from 'workerize-loader!./components/worker' /* eslint-disable-line import/no-webpack-loader-syntax */

const workerInstance = worker();

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const solveCube = (cube) => {
    setResult(null);
    setLoading(true);
    setError(false);
    workerInstance.solveCube(cube).then( res => {
      if(res){
        setResult(res);
      }
      else{
        setError(true);
      }
    })
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
      {error ? <h1 id="error">Error: Invalid input</h1> : ''}
      <Result result={result}/>
    </div>
  );
}

export default App;
