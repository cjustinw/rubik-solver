import './App.css';
import React, {useState} from 'react';
import Result from './components/Result';
import RubikBox from './components/RubikBox';
import Loading from './image/loading.svg'

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const solveCube = (cube) => {
    setLoading(true);
    const body = {cube};
    fetch("/solve", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(data => {
        console.log(data.result);
        if(data.result){
          setResult(data.result);
          setLoading(false);
        }
      })
  }
  
  return (
    <div className="App">
      <h1 id="title">Rubik's Cube Solver </h1>
      <p id="nama">by: Christopher Justine William | 13519006</p>
      <RubikBox solveCube={solveCube}/>
      {loading ? <img id="loading" src={Loading} alt="loading" /> : ''}
      <Result result={result}/>
    </div>
  );
}

export default App;
