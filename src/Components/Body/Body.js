import React from 'react';
import { Navbar } from '../Navbar/Navbar.js';
import { Header } from '../Header/Header.js';
import { AboutMe } from '../AboutMe/AboutMe.js';
import { Portfolio } from '../Portfolio/Portfolio.js';
import { Cv } from '../Cv/Cv.js';
import { Skills } from '../Skills/Skills.js';
import { Footer } from '../Footer/Footer.js';
import { ToTopBtn } from '../ToTopBtn/ToTopBtn.js';
import './Body.css';

export const Body = () => {
  return <div>
    <Navbar />
    <Header />
    {/* About Me*/}
    <div id='likes-cv'>
      <AboutMe/>
      <Portfolio/>
      <Cv/>
    </div>
    <div>
      <hr className="loc-hr" />
    </div>
    {/* Skills and footer */}
    <div id='contact-footer'>
      <Skills />
      <Footer />
    </div>
    <ToTopBtn/>
  </div>
}
