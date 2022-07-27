import React from "react";

export const Footer =() =>{
      return <footer id="contact" className="text-center">
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
                <h3>Mis redes</h3>
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
}
