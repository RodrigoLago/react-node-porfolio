import React from 'react';
import './Navbar.css'
import { MuteBtn } from '../Mute Button/MuteBtn';
const estilo={
      marginLeft:'30px'
}

export const Navbar = () => {
  function CloseNavbar(){
    let nav=document.getElementById('bs-example-navbar-collapse-1')
    nav.classList="navbar-collapse collapse"
  }
      return <nav className="navbar navbar-default navbar-color navbar-fixed-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-left">
              <li className="page-scroll li-scroll" >
                <a href="#top-header" onClick={()=>CloseNavbar()}>Home</a>
              </li>
              <li className="page-scroll li-scroll">
                <a href="#myLikes" onClick={()=>CloseNavbar()}>Quien soy</a>
              </li>
              <li className="page-scroll li-scroll">
                <a href="#proyectos" onClick={()=>CloseNavbar()}>Proyectos</a>
              </li>
              <li className="page-scroll li-scroll">
                <a href="#portfolio" onClick={()=>CloseNavbar()}>CV</a>
              </li>
              <li className="page-scroll li-scroll">
                <a href="#about" onClick={()=>CloseNavbar()}>Sobre mi</a>
              </li>
              <li className="page-scroll li-scroll">
                <a href="#contact" onClick={()=>CloseNavbar()}>Contacto</a>
              </li>
              <li id="li-mute">
                <MuteBtn/>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
      </nav>
    };