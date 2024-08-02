import React, { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Indigo");

  const divStyle = {backgroundColor: color};
 
  return (
    <>
      <h1>Welcome Back Space Monkey</h1>
      <br/>
      <div className = "prototype" style={divStyle}>
      <p>The Color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
    </>
  )
}

export default App
