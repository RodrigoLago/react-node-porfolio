import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Navbar } from './Components/Navbar/Navbar.js';
//import { Body } from './Components/Body/Body.js';
import App from './App.js';
//import useScript from './Components/Hooks/Hooks.js';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App/>
);