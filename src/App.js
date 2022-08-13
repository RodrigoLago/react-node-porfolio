import React, { useState, useEffect } from 'react';
import { Body } from './Components/Body/Body.js';
import { MoonLoader } from 'react-spinners';
import "./App.css"
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div id="App" className="App">
      {
        loading ?
          <div className="loader" >
            <MoonLoader
              size={60}
              color={"#00ff9d"}
              loading={loading} />
          </div>
          :
          <Body />
      }

    </div>
  )
}
export default App;
