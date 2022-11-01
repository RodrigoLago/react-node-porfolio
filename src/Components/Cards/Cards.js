import React from 'react';
import './Cards.css'
export const Cards = () => {
  return <div id="proyectos-section">
    {/*ECOMMERCE*/}
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
          <h5 className="cardCategory">.Net 5 + Html/Css/Js</h5>
          <h3 className="portfolioTitle"><a href="https://github.com/ProyectoEcommerce" target="_blank">Top Choise Hardware</a></h3>
          <span>
            <h4>
              Ecommerce hecho en .Net con arquitectura de microservicios
              y base de datos SQL Server. Front-end hecho con Html, Css y
              Javascript. Se trabajó con un equipo de desarrollo utilizando
              Scrum.</h4>

          </span>
          <div className="row fila-tags">
            <h5 className="col-lg-4 tags">.Net 5</h5>
            <h5 className="col-lg-4 tags">Api Rest</h5>
            <h5 className="col-lg-4 tags">SQL Server</h5>
          </div>
        </div>
      </div>
    </div>
    {/*USER API*/}
    <div className="portfolio-container">
      <div className="portfolio-card">
        <a href='https://login-lagorodrigo.herokuapp.com/' target="_blank">
          <div className="portfolioImage">
            <img
              src="/img/api.webp"
              alt="UserApi"
              srcSet=""
            />
          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">.Net 6 Api + React</h5>
          <h3 className="portfolioTitle page-scroll"><a href='https://login-lagorodrigo.herokuapp.com/' target="_blank">User Api</a></h3>
          <span>
            <h4>Microservicio realizado en .Net 6 que da uso de MailKit, JWT, Entity Framework y encriptación, acompañado
              de un front realizado con React.
            </h4>

          </span>
          <div className="row fila-tags">
            <h5 className="col-lg-6 tags">.Net 6</h5>
            <h5 className="col-lg-6 tags">React</h5>
          </div>
        </div>
      </div>
    </div>
    {/*HITCHWAY*/}
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
          <h5 className="cardCategory">.Net 5 + Html/Css/Js</h5>
          <h3 className="portfolioTitle"><a href='https://github.com/Hitchway' target="_blank">Hitchway Cinema</a></h3>
          <span><h4>
            Website para gestionar ventas de entradas de un cine.
            El back-end está realizado con arquitectura monolitica en .Net,
            DB SQLServer y front-end con Html, Css y Javascript.</h4>



          </span>
          <div className="row fila-tags">
            <h5 className="col-lg-4 tags">.Net 5</h5>
            <h5 className="col-lg-4 tags">SQL Server</h5>
            <h5 className="col-lg-4 tags">Api Rest</h5>
          </div>
        </div>
      </div>
    </div>
    {/*MUSIC RECOGNITION*/}
    <div className="portfolio-container">
      <div className="portfolio-card">
        <a href='https://github.com/RodrigoLago/music-recognizer' target="_blank">
          <div className="portfolioImage">
            <img
              src="/img/musical.webp"
              alt="music-recognizer"
              srcSet=""
            />
          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">React Native + ACRCloud</h5>
          <h3 className="portfolioTitle"><a href='https://github.com/RodrigoLago/music-recognizer' target="_blank">Reconocimiento Musical</a></h3>
          <span>
            <h4>Mobile App desarrollada en React Native. El procesamiento se desarrolla
              en la nube ACRCloud, nube dedicada al procesamiento y reconocimiento de sonidos.
              <br /><h5 class="dev-state">Actualmente en desarrollo</h5>
            </h4>

          </span>
          <div className="row fila-tags">
            <h5 className="col-lg-6 tags">React Native</h5>
            <h5 className="col-lg-6 tags">ACRCloud</h5>
          </div>
        </div>
      </div>
    </div>
    {/*MAGIC PREDICTION*/}
    <div className="portfolio-container">
      <div className="portfolio-card">
        <a href='https://github.com/orgs/MagicPrediction/repositories' target="_blank">
          <div className="magic-prediction">
            <img
              src="/img/android.gif"
              alt="magic-prediction"
              srcSet=""
            />
          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">.Net 6 + REACT + Blender</h5>
          <h3 className="portfolioTitle"><a href='https://github.com/orgs/MagicPrediction/repositories' target="_blank">Magic Prediction</a></h3>
          <span>
            <h4>Aplicación web desarrollada para venta y gestión de trucos de magia. Se utilizaron dos microservicios realizados
              con .Net 6, Entity Framework y para el front end se utilizó React y Blender.<br /><h5 class="dev-state">Actualmente en desarrollo</h5>
            </h4>


          </span>
          <div className="row fila-tags">
            <h5 className="col-lg-6 tags">React Native</h5>
            <h5 className="col-lg-6 tags">ACRCloud</h5>
          </div>
        </div>
      </div>
    </div>
    {/*PORTFOLIO*/}
    <div className="portfolio-container">
      <div className="portfolio-card">
        <a href='https://github.com/RodrigoLago/react-node-porfolio' target="_blank">
          <div className="portfolioImage">
            <img
              src="/img/portfolio.webp"
              alt="Portfolio"
              srcSet=""
            />
          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">React + Node.js</h5>
          <h3 className="portfolioTitle page-scroll"><a href='https://github.com/RodrigoLago/react-node-porfolio' target="_blank">Portfolio</a></h3>
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