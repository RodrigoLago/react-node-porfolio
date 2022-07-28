import React from 'react';
import './Cards.css'
export const Cards = () => {
      return <div id="proyectos-section">
        <div className="portfolio-container">
          <div className="portfolio-card">
            <a href="https://github.com/ProyectoEcommerce" target="_blank">
              <div className="portfolioImage">
                <img
                  src="/img/ecommerce.webp"
                  alt="Ecommerce"
                  srcSet=""
                />
    
              </div>
            </a>
            <div className="portfolioContent">
              <h5 className="cardCategory">Ecommerce website</h5>
              <h3 className="portfolioTitle"><a href="https://github.com/ProyectoEcommerce" target="_blank">Top Choise Hardware</a></h3>
              <span>
                <h4>
                  Ecommerce hecho en .Net con arquitectura de microservicios
                  y base de datos SQL Server. Front-end hecho con Html, Css y
                  Javascript. Se trabajó con un equipo de desarrollo utilizando
                  Scrum.</h4>
                
              </span>
              <div className="row fila-tags">
                <h5 className="col-lg-4 tags">.Net</h5>
                <h5 className="col-lg-4 tags">Api Rest</h5>
                <h5 className="col-lg-4 tags">SQL Server</h5>
              </div>
            </div>
          </div>
        </div>
    
        <div className="portfolio-container">
          <div className="portfolio-card">
            <a href='https://github.com/Hitchway' target="_blank">
              <div className="portfolioImage">
                <img
                  src="/img/cine.webp"
                  alt="Hitchway"
                  srcSet=""
                />
              </div>
            </a>
            <div className="portfolioContent">
              <h5 className="cardCategory">Website</h5>
              <h3 className="portfolioTitle"><a href='https://github.com/Hitchway' target="_blank">Hitchway Cinema</a></h3>
              <span><h4>
                Website para gestionar ventas de entradas de un cine.
                El back-end está realizado con arquitectura monolitica en .Net,
                DB SQLServer y front-end con Html, Css y Javascript.</h4>
                
    
              </span>
              <div className="row fila-tags">
                <h5 className="col-lg-4 tags">.Net</h5>
                <h5 className="col-lg-4 tags">Api Rest</h5>
                <h5 className="col-lg-4 tags">SQL Server</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-container">
          <div className="portfolio-card">
            <a href='#'>
              <div className="portfolioImage">
                <img
                  src="/img/portfolio.webp"
                  alt="Portfolio"
                  srcSet=""
                />
              </div>
            </a>
            <div className="portfolioContent">
              <h5 className="cardCategory">Website</h5>
              <h3 className="portfolioTitle page-scroll"><a href='#page-top'>Portfolio</a></h3>
              <span>
                <h4>El sitio web que usted está viendo en este momento
                  se realizó con React, Node.js, Express.js, Webpack y Howler.js</h4>
                
    
              </span>
              <div className="row fila-tags">
                <h5 className="col-lg-6 tags">React</h5>
                <h5 className="col-lg-6 tags">Node.js</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    }