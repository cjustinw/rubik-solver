import React, {useState, useEffect} from 'react';
import "../css/RubikFace.css";
import RubikPiece from './RubikPiece';

const RubikFace = ({text, colorPicked, updateCube, numFace}) => {
  const unsetFace = {
    piece1: "",
    piece2: "",
    piece3: "",
    piece4: "",
    piece5: "",
    piece6: "",
    piece7: "",
    piece8: "",
    piece9: ""
  };
  const [face, setFace] = useState(unsetFace);

  const defaultColor = (text) => {
    if(text === "F"){
      return "#21de34";
    }
    else if(text === "R"){
      return "#c92c20";
    }
    else if(text === "B"){
      return "#165a9e";
    }
    else if(text === "L"){
      return "#de9e54";
    }
    else if(text === "U"){
      return "#ffffff";
    }
    else if(text === "D"){
      return "#fce428";
    }
    else{
      return "";
    }
  }

  const convertColor = (color) => {
    if(color === "#21de34"){
      return "G";
    }
    else if(color === "#c92c20"){
      return "R";
    }
    else if(color === "#165a9e"){
      return "B";
    }
    else if(color === "#de9e54"){
      return "O";
    }
    else if(color === "#ffffff"){
      return "W";
    }
    else if(color === "#fce428"){
      return "Y";
    }
    else{
      return "";
    }
  }

  const updateFace = (piece, number) => {
    const newFace = face;
    if(number === 1){
      newFace.piece1 = convertColor(piece);
    }
    else if(number === 2){
      newFace.piece2 = convertColor(piece);
    }
    else if(number === 3){
      newFace.piece3 = convertColor(piece);
    }
    else if(number === 4){
      newFace.piece4 = convertColor(piece);
    }
    else if(number === 5){
      newFace.piece5 = convertColor(piece);
    }
    else if(number === 6){
      newFace.piece6 = convertColor(piece);
    }
    else if(number === 7){
      newFace.piece7 = convertColor(piece);
    }
    else if(number === 8){
      newFace.piece8 = convertColor(piece);
    }
    else if(number === 9){
      newFace.piece9 = convertColor(piece);
    }
    setFace(newFace);
  }

  useEffect(() => {
    updateCube(face, numFace);
  }, [face, numFace, updateCube]);

  return (
    <div className="RubikFace">
      <RubikPiece colorPicked={colorPicked} number={1} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={2} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={3} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={4} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={5} updateFace={updateFace} pos={text} defaultColor={() => defaultColor(text)}/>
      <RubikPiece colorPicked={colorPicked} number={6} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={7} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={8} updateFace={updateFace} />
      <RubikPiece colorPicked={colorPicked} number={9} updateFace={updateFace} />
    </div>
  )
}

export default RubikFace
