import React from 'react';
import { Howl } from 'howler';
import './Body.css';
import './ScrollButton.css';
import './Card.css';

const Cards = () => {
  return <div id="proyectos-section">
    <div className="portfolio-container">
      <div className="portfolio-card">
        <a href="https://github.com/ProyectoEcommerce" target="_blank">
          <div className="portfolioImage">
            <img
              src="https://i.ibb.co/jg80kXF/ecommerce.webp"
              alt="Ecommerce"
              srcSet=""
            />

          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">Ecommerce website</h5>
          <h3 className="portfolioTitle">Top Choise Hardware</h3>
          <p>
            <h4>
              Ecommerce hecho en .Net con arquitectura de microservicios
              y base de datos SQL Server. Front-end hecho con Html, Css y
              Javascript. Se trabajó con un equipo de desarrollo utilizando
              Scrum.</h4>
            <br />
          </p>
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
              src="https://i.ibb.co/MGwvF6N/cine.webp"
              alt="Hitchway"
              srcSet=""
            />
          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">Website</h5>
          <h3 className="portfolioTitle">Hitchway Cinema</h3>
          <p><h4>
            Website para gestionar ventas de entradas de un cine.
            El back-end esta realizado con arquitectura monolitica en .Net,
            DB SQLServer y front-end con Html, Css y Javascript.</h4>
            <br />

          </p>
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
              src="https://i.ibb.co/Tb78WTP/portfolio.webp"
              alt="Portfolio"
              srcSet=""
            />
          </div>
        </a>
        <div className="portfolioContent">
          <h5 className="cardCategory">Website</h5>
          <h3 className="portfolioTitle">Portfolio</h3>
          <p>
            <h4>El sitio web que usted esta viendo en este momento
              se realizó con React, Node.js, Express.js y Webpack</h4>
            <br />

          </p>
          <div className="row fila-tags">
            <h5 className="col-lg-6 tags">React</h5>
            <h5 className="col-lg-6 tags">Node.js</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export const Body2 = () => {
    let vol=0.7;
    const d = new Howl({
      src:['C3.mp3'],
      html5:true,
      volume:vol
    });
    const re = new Howl({
      src:['D3.mp3'],
      volume:vol
    });
    const mi = new Howl({
      src:['/E3.mp3'],
      volume:vol
    });
    const fa = new Howl({
      src:['/F3.mp3'],
      volume:vol
    });
    const sol = new Howl({
      src:['/G3.mp3'],
      volume:vol
    })
    const la = new Howl({
      src:['/A3.mp3'],
      volume:vol
    });
    const si = new Howl({
      src:['/B3.mp3'],
      volume:vol
    });
    const d2 = new Howl({
      src:['/C4.mp3'],
      volume:vol
    });
    const re2 = new Howl({
      src:['/D4.mp3'],
      volume:vol
    });
    const mi2 = new Howl({
      src:['/E4.mp3'],
      volume:vol
    });
    const fa2 = new Howl({
      src:['/F4.mp3'],
      volume:vol
    });
    const chord = new Howl({
      src:['/C2.mp3'],
      volume:vol
    });
  
  return <div>
    {/* Navigation */}
    <nav className="navbar navbar-default navbar-color navbar-fixed-top">
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
            <li className="page-scroll">
              <a href="#page-top">Home</a>
            </li>
            <li className="page-scroll">
              <a href="#myLikes">Quien soy</a>
            </li>
            <li className="page-scroll">
              <a href="#proyectos">Proyectos</a>
            </li>
            <li className="page-scroll">
              <a href="#portfolio">CV</a>
            </li>
            <li className="page-scroll">
              <a href="#about">Sobre mi</a>
            </li>
            <li className="page-scroll">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
    {/* Header */}
    <header id="top-header">
      <div id="page-top" className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <div className='nombre'>
                <span className='name' onMouseOver={()=> chord.play()}>Rodrigo Lago</span>
              </div>
              {/*
              <div className='row'>
                <div className="col-lg-12 text-center">
                  <h1 className="char" onClick={()=> d.play()}>R</h1>
                  <h1 className='char' onClick={()=> re.play()}>O</h1>
                  <h1 className='char' onClick={()=> mi.play()}>D</h1>
                  <h1 className='char' onClick={()=> fa.play()}>R</h1>
                  <h1 className='char' onClick={()=> sol.play()}>I</h1>
                  <h1 className='char' onClick={()=> la.play()}>G</h1>
                  <h1 className='char' onClick={()=> si.play()}>O&nbsp;</h1>
                  <h1 className='space char'></h1>
                  <h1 className='char' onClick={()=> d2.play()}>L</h1>
                  <h1 className='char' onClick={()=> re2.play()}>A</h1>
                  <h1 className='char' onClick={()=> mi2.play()}>G</h1>
                  <h1 className='char' onClick={()=> fa2.play()}>O<br/></h1>
                  <h1 className='space char'>&nbsp;</h1>
                </div>
              </div>
                
              <span className="subtitle " onClick={()=> re.play()}>Programador full stack</span>*/}
              <h3 className="char" onMouseOver={()=> d.play()}>P</h3>
              <h3 className='char' onMouseOver={()=> re.play()}>r</h3>
              <h3 className='char' onMouseOver={()=> mi.play()}>o</h3>
              <h3 className='char' onMouseOver={()=> fa.play()}>g</h3>
              <h3 className='char' onMouseOver={()=> sol.play()}>r</h3>
              <h3 className='char' onMouseOver={()=> la.play()}>a</h3>
              <h3 className='char' onMouseOver={()=> si.play()}>m</h3>
              <h3 className='char' onMouseOver={()=> d2.play()}>a</h3>
              <h3 className='char' onMouseOver={()=> re2.play()}>d</h3>
              <h3 className='char' onMouseOver={()=> mi2.play()}>o</h3>
              <h3 className='char' onMouseOver={()=> fa2.play()}>r <br/></h3>
              
              
              <span className="skills" ></span>
              <hr className="star-light" onClick={()=> mi.play()}/>
            </div>

          </div>
        </div>

        <div className="page-scroll">
          <a href="#myLikes">
            <div id="mouse-scroll">
              <div className="mouse">
                <div className="mouse-in"></div>
              </div>
              <div>
                <span className="down-arrow-1"></span>
                <span className="down-arrow-2"></span>
                <span className="down-arrow-3"></span>
              </div>
            </div>
          </a>
        </div>

      </div>
    </header>
    {/* My Likes Grid Section */}
    <div id='likes-cv'>

      <section id="myLikes">
        <div className="container">
          <div className="row aboutme">
            <div className="col-lg-12 text-center">
              <h2>¿Quien soy?</h2><br></br>
              <h4>Soy un chico argentino de 24 años de edad,
                estudiante avanzado de ingeniería en informática
                en la Universidad Nacional Arturo Jauretche.
                Doy clases de programación y matemáticas.
              </h4>

              <hr className="star-primary" />
              <br></br>
              <h2 id="space-1">Me dedico a...</h2><br></br>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 portfolio-item">
              <a
                className="portfolio-link text-center"
                data-toggle="modal"
              >
                <span

                  className="fa fa-fw fa-keyboard-o"
                  aria-hidden="true"
                  title="Keyboard"
                />
              </a>
              <article className="portfolio-item-Two">
                <header>
                  <h3>Desarrollo full stack</h3>
                </header>
                <p>
                  <h4>
                    Soy desarrollador full stack. Puedo realizar desde
                    el diseño hasta la implementación de una aplicación,
                    incluyendo tanto back-end como front-end. Conozco
                    diversas tecnologías para poder implementarlas en
                    un futuro o actual proyecto.</h4>
                </p>
              </article>
            </div>
            <div className="col-sm-4 portfolio-item">
              <a
                className="portfolio-link text-center"
                data-toggle="modal"
              >
                <span
                  className="fa fa-fw fa-headphones"
                  aria-hidden="true"
                  title="Musico"
                />
              </a>
              <article className="portfolio-item-One">
                <header>
                  <h3>Musica</h3>
                </header>
                <p>
                  <h4>
                    Me apasiona la música y también toco varios instrumentos,
                    como la guitarra, saxo y bajo. Mis géneros musicales favoritos
                    son el Jazz, Heavy Metal e Instrumental.</h4>
                </p>
              </article>
            </div>

            <div className="col-sm-4 portfolio-item">
              <a
                className="portfolio-link text-center"
                data-toggle="modal"
              >
                <span
                  className="fa fa-fw fa-gamepad"
                  aria-hidden="true"
                  title="Gamepad"
                />
              </a>
              <article className="portfolio-item-Three">
                <header>
                  <h3>Videojuegos</h3>
                </header>
                <p>
                  <h4>
                    En mis ratos libres me gusta jugar
                    videojuegos competitivos como Quake,
                    Counter-Strike, Rocket-League y Ajedrez,
                    entre otros. </h4>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* <hr  className="loc-hr" />*/}
      </div>
      {/* Portfolio Grid Section */}
      <section id="proyectos">
        <div className="container">
          <div className="row cv">
            <div className="col-lg-12 text-center">
              <h2>Algunos proyectos</h2>
              <hr className="star-primary" />
            </div>
          </div>
        </div>
        <Cards />
      </section>
      {/* Portfolio Grid Section */}
      <section id="portfolio" >
        <div className="container">
          <div className="row cv">
            <div className="col-lg-12 text-center">
              <h2>Curriculum</h2>
              <hr className="star-primary" />
            </div>
          </div>
        </div>
        <div className="text-center btn-style">
          <div className="btn-styleLine">
            <a href="#" className="btn btn-lg btn-outline">
              <h5><i className="fa fa-fw fa-download" /> Descargar cv</h5>
            </a>
          </div>
        </div>
      </section>

    </div>

    <div>
      <hr className="loc-hr" />
    </div>


    {/* About Section */}
    <div id='contact-footer'>
      <section id="about">
        <div className="container">
          <div className="row habilidades">
            <div className="col-lg-12 text-center">
              <h2>HABILIDADES</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>Backend .Net</h3>
                </header>
                <p>
                  <h4>C#, POO, Api Rest, ORM Entity Framework, arquitectura de microservicios y monolítica, patrones de diseño,
                    patrón repositorio,  estructuras de datos, Windows Forms</h4>

                </p>
              </article>
            </div>
            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>Frontend React</h3>
                </header>
                <p><h4>Html, Css, Javascript, Manejo de jsons, api fetch,
                  Carga dinámica de datos, Node.js, Express.js,
                  Electron.js, React, Bootstrap
                </h4>

                </p>
              </article>
            </div>
            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>Databases Sql y NoSql</h3>
                </header>
                <p>
                  <h4>Diagrama entidad-relacion, SQL (MySql, MariaDB,
                    SQLServer), NoSql (MongoDb, Cassandra)
                  </h4>

                </p>
              </article>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>Diseño - Adobe</h3>
                </header>
                <p>
                  <h4>Adobe XD, Adobe Illustrator y Adobe photoshop.
                    Sony Vegas para edición de video</h4>
                </p>
              </article>
            </div>

            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>Metodologias agiles</h3>
                </header>
                <p><h4>
                  Scrum, Kanban, Scrumban, Xp
                </h4>
                </p>
              </article>
            </div>

            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>Otros</h3>
                </header>
                <p><h4>Lenguajes: Python, Smalltalk, Java. <br></br>
                  Git, Postman, Swagger, VS Code, VS Community, HeidiSql, SQL Server Managment Studio,
                  Heroku, MongoDb Compass, MongoDb Atlas
                </h4>
                </p>
              </article>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4 center-block about-item'></div>
            <div className="col-sm-4 center-block about-item">
              <article className="about-item-One">
                <header>
                  <h3>En proceso de aprendizaje</h3>
                </header>
                <p><h4>Elasticsearch y Redis
                </h4>
                </p>
              </article>
            </div>
          </div>
          <div className='col-sm-4 center-block about-item'></div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center">
        <div id="footer-div">
          <div className="footer-above">
            <div className="container">
              <div className="row">
                <div className="footer-col col-md-4">
                  <h3>UBICACION</h3>
                  <p>
                    <h4>
                      Quilmes, Buenos Aires
                      <br />
                      Argentina</h4>
                  </p>
                </div>
                <div className="footer-col col-md-4">
                  <h3>Mis redes:</h3>
                  <ul className="list-inline">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rilago/"
                        target="_blank"
                        className="btn-social btn-outline"
                        alt="LinkedIn"
                        title="LinkedIn"
                      >
                        <i className="fa fa-fw fa-linkedin" aria-hidden="true" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/RodrigoLago/"
                        target="_blank"
                        className="btn-social btn-outline"
                        alt="Github"
                        title="Github"
                      >
                        <i className="fa fa-fw fa-github" aria-hidden="true" />
                        <span className="sr-only">Github</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/RoTaiKo/"
                        target="_blank"
                        className="btn-social btn-outline"
                        alt="Facebook"
                        title="Facebook"
                      >
                        <i className="fa fa-fw fa-facebook" aria-hidden="true" />
                        <span className="sr-only">Facebook</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col col-md-4">
                  <h3 id='contacto'>Contacto</h3>
                  <ul className="list-inline">
                    <li>
                      <a
                        href="https://walink.co/5e289b"
                        target="_blank"
                        className="btn-social btn-outline"
                        alt="Whatsapp"
                        title="Whatsapp"
                      >
                        <i className="fa fa-fw fa-whatsapp" aria-hidden="true" />
                        <span className="sr-only">Whatsapp</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:rilago@protonmail.com"
                        className="btn-social btn-outline"
                        alt="E-mail"
                        title="E-mail"
                      >
                        <i className="fa fa-fw fa-envelope" aria-hidden="true" />
                        <span className="sr-only">E-mail</span>
                      </a>
                    </li>
                  </ul>
                  <p><h4>Puedes contactarme mediante mi teléfono personal o mediante mi e-mail.</h4></p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <p>Pagina diseñada por{" "}
                    <a href="https://github.com/RodrigoLago/" target="_blank">
                      Rodrigo Lago
                    </a>
                    , Copyright © 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
    <div className="scroll-top page-scroll visible-xs visible-sm">
      <a className="btn btn-primary" href="#page-top">
        <i className="fa fa-chevron-up" />
      </a>
    </div>
    {/* jQuery */}
    {/* Bootstrap Core JavaScript */}
    {/* Plugin JavaScript */}
    {/* Contact Form JavaScript */}
    {/* Custom Theme JavaScript */}
  </div>

}
