import React from 'react';
import './MuteBtn.css'
import { Howler } from 'howler';

var mute=true;
function ButtonToggle(){
      let boton=document.getElementById('a-mute');
      if(boton.classList.contains('red')){
          boton.className=""
          boton.classList+='green'
          boton.innerHTML="Mute"
      }
      else{
          boton.className=""
          boton.classList+='red'
          boton.innerHTML="Play"
      }
}
function Mute(){
  Howler.mute(mute);
  mute=!mute
  ButtonToggle()
}

export const MuteBtn = () => {
      return ( <a id="a-mute" className="red" onMouseDown={()=>Mute()}>Play</a>
      )
}
