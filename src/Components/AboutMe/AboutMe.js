import React from "react";
export const AboutMe = () => {
      return <section id="myLikes">
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
              <span>
                <h4>
                  Soy desarrollador full stack. Puedo realizar desde
                  el diseño hasta la implementación de una aplicación,
                  incluyendo tanto back-end como front-end. Conozco
                  diversas tecnologías para poder implementarlas en
                  un futuro o actual proyecto.</h4>
              </span>
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
              <span>
                <h4>
                  Me apasiona la música y también toco varios instrumentos,
                  como la guitarra, saxo y bajo. Mis géneros musicales favoritos
                  son el Jazz, Heavy Metal e Instrumental.</h4>
              </span>
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
              <span>
                <h4>
                  En mis ratos libres me gusta jugar
                  videojuegos competitivos como Quake,
                  Counter-Strike, Rocket-League y Ajedrez,
                  entre otros. </h4>
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>
}