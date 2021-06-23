import React, {useState} from 'react';
import '../css/RubikBox.css'
import ColorPicker from './ColorPicker';
import RubikFace from './RubikFace';

const RubikBox = ({solveCube}) => {
  const [colorPicked, setColorPicked] = useState("");
  const [cube, setCube] = useState({
    face1: null,
    face2: null,
    face3: null,
    face4: null,
    face5: null,
    face6: null,
  });
  const [inputState, setInputState] = useState(false);
  const [file, setFile] = useState(false);

  const updateCube = (face, numFace) => {
    const newCube = cube;
    if(numFace === 1){
      newCube.face1 = face;
    }
    else if(numFace === 2){
      newCube.face2 = face;
    }
    else if(numFace === 3){
      newCube.face3 = face;
    }
    else if(numFace === 4){
      newCube.face4 = face;
    }
    else if(numFace === 5){
      newCube.face5 = face;
    }
    else if(numFace === 6){
      newCube.face6 = face;
    }
    setCube(newCube);
  }

  const inputFile = (e) => {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(e.target.files[0]);
    setFile(true);
  }
  
  const onReaderLoad = (e) => {
    let File = JSON.parse(e.target.result);
    // updateDataKurir({
    //   kurir: File.kurir,
    //   tanggal: File.tanggal,
    //   kecepatan: File.kecepatan,
    //   jumlah: File.lokasi.length
    // });
    // updateDataLokasiInput(File.lokasi);
  }

  return (
    <div className="RubikBox">
      {!inputState ? 
      <div className="rubik-container">
        <div id="rubik-face-1">
          <RubikFace text="U" colorPicked={colorPicked} updateCube={updateCube} numFace={5}/>  
        </div>
        <div id="rubik-face-2">
          <RubikFace text="L" colorPicked={colorPicked} updateCube={updateCube} numFace={4}/>  
        </div>
        <div id="rubik-face-3">
          <RubikFace text="F" colorPicked={colorPicked} updateCube={updateCube} numFace={1}/>  
        </div>
        <div id="rubik-face-4">
          <RubikFace text="R" colorPicked={colorPicked} updateCube={updateCube} numFace={2}/>  
        </div>
        <div id="rubik-face-5">
          <RubikFace text="B" colorPicked={colorPicked} updateCube={updateCube} numFace={3}/>  
        </div>
        <div id="rubik-face-6">
          <RubikFace text="D" colorPicked={colorPicked} updateCube={updateCube} numFace={6}/>  
        </div>
        <div id="color-picker">
          <ColorPicker setColorPicked={setColorPicked}/>
        </div>
      </div>
      : 
      <div className="input-container">
        <div className="input-file">
          <h1>Input File</h1>
          <p>JSON File</p>
          <input id="file" type="file" accept=".json" onChange={inputFile}/>
          {file ? <button className="input-btn" >Submit</button> : ''}
        </div>
      </div>
      }
      <div className="button-control">
        <button onClick={() => solveCube(cube)}>Solve</button>
        <button onClick={() => {inputState ? setInputState(false) : setInputState(true)}}>{ inputState ? 'Input Color': 'InputFile' }</button>
      </div>
    </div>
  )
}

export default RubikBox
