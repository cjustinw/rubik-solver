import React, {useState, useEffect} from 'react'
import "../css/RubikPiece.css"

const RubikPiece = ({pos, colorPicked, defaultColor, updateFace, number}) => {
  const [color, setColor] = useState(defaultColor);

  const updateColor = () => {
    if(!pos)
    {
      if(colorPicked !== "")
      {
        setColor(colorPicked);
      }
      else if(color !== ""){
        setColor("");
      }
    }
  }

  useEffect(() => {
    updateFace(color, number);
  }, [color, number, updateFace]);

  return (
    <div className="RubikPiece" style={color || pos ? {backgroundColor: color} : {}} onClick={updateColor}>
      {pos ? <p>{pos}</p> : ''}
    </div>
  )
}

export default RubikPiece
