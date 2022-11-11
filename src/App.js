import React, { useState, useEffect } from 'react';
import { Body } from './Components/Body/Body.js';
import { ScaleLoader } from 'react-spinners';
import "./App.css"
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1625)
  }, [])

  return (
    <div id="App" className="App">
      {
        loading ?
          <div className="loader" >
            <ScaleLoader
              height='90'
              width='10'
              color='#00ff9d'
            />
          </div>
          :
          <Body />
      }
    </div>
  )
}
export default App;
