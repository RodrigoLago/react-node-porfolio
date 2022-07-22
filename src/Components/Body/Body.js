import React from 'react';
//import './Body.css'
import './Body2.css'
import './ScrollButton.css'

/*export const Body = () => {
  return <div>
    <div className="wrapper">
      <header role="header">
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle collapsed"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                role="button"
              >
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="#" className="navbar-brand">
                Devero
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right js-nav">
                <li>
                  <a href="#page-top">Home</a>
                </li>
                <li>
                  <a href="#about">Sobre mi</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#folio">Folio</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
                <li>
                  <a href="http://alexsblog.org" target="_blank">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section id="home" className="sec-main">
        <h1 className="main-heading">Where creativity happens.</h1>
      </section>
      <section id="about" className="sec-about">
        <div className="container">
          <h1>About me</h1>
          <hr />
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <p>
                Hi, my name is Alex Devero and I am a Web Designer &amp; Developer
                based in Prague. I love crafting beautiful web pages in HTML5, CSS3
                and JavaScript or jQuery. My other skills include WordPress,
                Photoshop, Illustrator. You can grab my CV in
                <a href="#">English</a> or <a href="#">Czech</a> version. If you
                want to hire me or just to talk,{" "}
                <a className="js-connect" href="#footer">
                  connect
                </a>{" "}
                with me.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="sec-services">
        <div className="container">
          <h1>Services</h1>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <i className="fa fa-4x fa-paint-brush" />
              <h2 className="h3">Beautiful Design</h2>
              <p>
                Every website is beautiful, unique and tailored to suit your needs
                and requirements.
              </p>
            </div>
            <div className="col-sm-4">
              <i className="fa fa-4x fa-code" />
              <h2 className="h3">Clean Code</h2>
              <p>
                All websites are written in valid and clean HTML5 / CSS3 &amp;
                JavaScript (jQuery).
              </p>
            </div>
            <div className="col-sm-4">
              <i className="fa fa-4x fa-tablet" />
              <h2 className="h3">Always Responsive</h2>
              <p>
                All websites are responsive. They will look great on desktop,
                tablets and mobile phones too.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="folio" className="sec-folio">
        <div className="container">
          <h1>Previous Work</h1>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/Oog0wehKxYs/450x450"
                alt="By Håkon Sataøen"
              />
            </div>
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/EfpOiZvPbT4/450x450"
                alt="By Samuel Zeller"
              />
            </div>
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/2aoVQXwLf3g/450x450"
                alt="By Scott Webb"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/o2KD7JtqTlk/450x450"
                alt="By Has Bonk"
              />
            </div>
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/TV2ET43jK0w/450x450"
                alt="By Scott Webb"
              />
            </div>
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/lZ2LB1s_z7s/450x450"
                alt="By Daniel Lozano Valdés"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/o4qL4FuwN6I/450x450"
                alt="By Anthony DELANOIX"
              />
            </div>
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/ej7RYC0ED_c/450x450"
                alt="By Patrick Pilz"
              />
            </div>
            <div className="col-md-4">
              <img
                className="center-block"
                src="https://source.unsplash.com/0G1r-Cg0zS8/450x450"
                alt="By Vita Vilcina"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="sec-testimonials">
        <div className="container">
          <h1>Clients said</h1>
          <hr />
          <div className="row">
            <div className="col-sm-4">
              <p className="text-center">
                "Alex did great job when designing our website. It was pleasure to
                work with him and I'm sure we will hire him again."
              </p>
              <p className="text-right">— Marc Andressen</p>
            </div>
            <div className="col-sm-4">
              <p className="text-center">
                "Alex proved to be truly creative designer who is able to create
                just stunning design I immediately fell in love with!"
              </p>
              <p className="text-right">— Emily Cooper</p>
            </div>
            <div className="col-sm-4">
              <p className="text-center">
                "I have worked with several different people and it always seemed
                like a pain—luckily I found Alex Devero. Thank you Alex!"
              </p>
              <p className="text-right">— Scott Grubber</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="sec-contact">
        <div className="container">
          <h1>Hire me</h1>
          <hr />
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4">
              <form className="center-block" action="#" method="post">
                <div className="form-group">
                  <label className="sr-only" htmlFor="inputName">
                    Full name
                  </label>
                  <input
                    id="inputName"
                    className="form-control"
                    type="text"
                    placeholder="Adam Smith"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputMail" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="inputMail"
                    className="form-control"
                    type="email"
                    placeholder="adam.smith@mail.com"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputMessage" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="inputMessage"
                    className="form-control"
                    name="message"
                    cols={30}
                    rows={8}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-default center-block"
                    type="submit"
                    value="Hire me"
                  >
                    Hire me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="container">
          <ul className="soc-media-ul">
            <li>
              <a
                href="https://twitter.com/AlexDevero"
                className="fa fa-twitter"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://plus.google.com/u/0/+AlexDevero"
                className="fa fa-google-plus"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://cz.linkedin.com/pub/alex-devero/38/262/70/"
                className="fa fa-linkedin"
                target="_blank"
              />
            </li>
            <li>
              <a
                href="https://www.behance.net/d3v3r0"
                className="fa fa-behance"
                target="_blank"
              />
            </li>
            <li>
              <a href="mailto:example@mail.com" className="fa fa-envelope" />
            </li>
          </ul>
        </div>
      </footer>
    </div>

  </div>
};*/

export const Body2 = () => {
  return <div>
    {/* Custom CSS */}
    <link href="css/dasdezine.css" rel="stylesheet" />
    {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
    {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
    {/*[if lt IE 9]>
      
      
        <![endif]*/}
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
              <span className="name">Rodrigo Lago</span>
              <span className="subtitle">Programador full stack</span>
              <span className="skills"></span>
              <hr className="star-light" />
            </div>

          </div>
        </div>
        {/*
        
        <section href="#portfolio" id="section07" className="">
          <a href="#portfolio">
            <span />
            <span />
            <span />
            Ver mas
          </a>
        </section>

        <div className="seeMore-btn text-center btn-style">
          <div className="btn-styleLine double-line page-scroll">
            <a href="#portfolio" className="btn btn-lg btn-outline">
              <i className="" />
              <span className="button-text">Ver más</span>
            </a>
          </div>
        </div>
        
        */}
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
              Apasionado de la música y los videojuegos</h4>

            <hr className="star-primary" />
            <br></br>
            <h2 id="space-1">Me dedico a:</h2><br></br>
          </div>
        </div>
        
        <div className="row">
        <div className="col-sm-4 portfolio-item">
            <a
              href="#"
              className="portfolio-link text-center"
              data-toggle="modal"
            >
              <span
                className="fa fa-fw fa-keyboard-o"
                aria-hidden="true"
                title="This symbolizes I Like to design and develop websites
                      "
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
              href="#"
              className="portfolio-link text-center"
              data-toggle="modal"
            >
              <span
                className="fa fa-fw fa-headphones"
                aria-hidden="true"
                title="This symbolizes I Love to listen good music
                      "
              />
            </a>
            <article className="portfolio-item-One">
              <header>
                <h3>Musico</h3>
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
              href="#"
              className="portfolio-link text-center"
              data-toggle="modal"
            >
              <span
                className="fa fa-fw fa-gamepad" 
                aria-hidden="true"
                title="Joystick"
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
    <section id="portfolio" >
      <div className="container">
        <div className="row cv">
          <div className="col-lg-12 text-center">
            <h2>Curriculum</h2>
            <hr className="star-primary" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 portfolio-item">
          <a href="#" className="portfolio-link">
            {/*<img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052402/portfolio_book_y7ypqt.png"
              className="img-responsive"
              alt=""
      />*/}
          </a>
        </div>
        <div className="col-sm-3 portfolio-item">
          <a href="#" className="portfolio-link">
            {/* 
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052400/portfolio_label_e5kv1h.png"
              className="img-responsive"
              alt=""
            />*/}
          </a>
        </div>
        <div className="col-sm-3 portfolio-item">
          <a href="#" className="portfolio-link">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052404/portfolio_card_xenfuv.png"
              className="img-responsive"
              alt=""
            />
          </a>
        </div>
        <div className="col-sm-3 portfolio-item">
          <a href="#" className="portfolio-link">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052405/portfolio_mocup_hoxha8.png"
              className="img-responsive"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="text-center btn-style">
        <div className="btn-styleLine">
          <a href="#" className="btn btn-lg btn-outline">
            <i className="fa fa-fw fa-download" /> Currículum
          </a>
        </div>
      </div>
    </section>

    </div>

    <div>
      <hr id="about" className="loc-hr" />
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
            {/*<img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
          />*/}
            <article className="about-item-One">
              <header>
                <h3>Backend</h3>
                <h3>.Net 5 & 6</h3>
              </header>
              <p>
                <h4>C#, POO, Api Rest, ORM Entity Framework, arquitectura de microservicios, patrones de diseño, 
              patrón repositorio,  estructuras de datos, Windows Forms</h4>
              
              </p>
            </article>
          </div>
          <div className="col-sm-4 center-block about-item">
            {/*<img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />*/}
            <article className="about-item-One">
              <header>
                <h3>Frontend</h3>
                <h3>React</h3>
              </header>
              <p><h4>Html, Css, Javascript, Manejo de jsons, api fetch, 
                Carga dinámica de datos, Node.js, Express.js,
                Electron.js, React, Bootstrap
              </h4>
                 
              </p>
            </article>
          </div>
          <div className="col-sm-4 center-block about-item">
            {/*<img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />*/}
            <article className="about-item-One">
              <header>
                <h3>Databases</h3>
                <h3>Sql y NoSql</h3>
              </header>
              <p>
                <h4>Diagrama entidad-relacion, SQL (MySql, MariaDB,
                  SQLServer), NoSql (MongoDb, Cassandra). Elasticsearch
                  en proceso.
                </h4>

              </p>
            </article>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-4 center-block about-item">
            {/*<img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />*/}
            <article className="about-item-One">
              <header>
                <h3>Diseño</h3>
                <h3>Adobe</h3>
              </header>
              <p>
                <h4>Adobe XD, Adobe Illustrator y Adobe photoshop. 
                  Sony Vegas para edición de video</h4>
              </p>
            </article>
          </div>
          
          <div className="col-sm-4 center-block about-item">
            {/*<img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />*/}
            <article className="about-item-One">
              <header>
                <h3>Otros</h3>
                <h3>Lenguajes y Software</h3>
              </header>
              <p><h4>Lenguajes: Python, Smalltalk, Java. <br></br>
              Software: Postman, VS Code, VS Community
              </h4>
                 
              </p>
            </article>
          </div>
          </div>
        
      </div>
    </section>
    {/* Contact Section */}
    

            {/*
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Contactarme</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row form-padding">
          <div className="col-lg-8 col-lg-offset-2">
            <form name="sentMessage" id="contactForm" noValidate="">
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    required=""
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    id="email"
                    required=""
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Message</label>
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Message"
                    id="message"
                    required=""
                    data-validation-required-message="Please enter a message."
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div className="contact-btn text-center btn-style">
                <div className="btn-styleLine page-scroll">
                  <a href="#portfolio" className="btn btn-lg btn-outline">
                    <i className="fa fa-fw fa-paper-plane" />
                    Send
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>*/}
    {/* Footer */}
    <footer id="contact"className="text-center">
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
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>Contacto</h3>
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
              Pagina diseñada por{" "}
              <a href="https://github.com/RodrigoLago/" target="_blank">
                Rodrigo Lago
                
              </a>
              <br />
              Copyright © 2022
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
    <div className="scroll-top page-scroll visible-xs visible-sm">
      <a className="btn btn-primary" href="#">
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
