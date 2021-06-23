import React from 'react'
import '../css/Color.css'

const Color = ({color, clicked}) => {
  return (
    <div className="Color" style={clicked ? {backgroundColor: color, opacity: 0.5} : {backgroundColor: color}}>
      
    </div>
  )
}

export default Color
