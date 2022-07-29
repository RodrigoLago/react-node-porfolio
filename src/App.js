import React from 'react';
import { Body } from './Components/Body/Body.js';
import useScript from './Components/Hooks/Hooks.js';
function App(){
  useScript('../src/js/Animation.js')
  return(
    <div id="App">
      <Body/>
    </div>
  )
}
export default App;
