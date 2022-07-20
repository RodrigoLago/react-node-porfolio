import React from 'react';
import { Navbar } from './Components/Navbar/Navbar.js';
import { Body, Body2 } from './Components/Body/Body.js';
import useScript from './Components/Hooks/Hooks.js';


export function Scripts() {
  useScript(
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js',
  'https://res.cloudinary.com/dwnoneszt/raw/upload/v1487027547/waypoints.min_bklk0y.js',
  'https://cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.11/jquery.mixitup.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js',
  'https://res.cloudinary.com/dwnoneszt/raw/upload/v1486999498/parallax.min_ttyve7.js',
  'https://res.cloudinary.com/dwnoneszt/raw/upload/v1486999247/jquery.malihu.PageScroll2id.min_jv3vns.js',
  'https://res.cloudinary.com/dwnoneszt/raw/upload/v1487027434/animate-css_gojafo.js',
  './src/Components/Body/BodyAnimation.js')
  return <div className="Scripts"></div>
}


function App(){
  return(
    <div id="App">
      <Body2/>
    </div>
  )
}
export default App;
