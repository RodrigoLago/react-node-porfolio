import React from 'react';
//import './Body.css'
import './Body2.css'

export const Body = () => {
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
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#folio">Folio</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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
};

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
              <a href="#myLikes">What I Do</a>
            </li>
            <li className="page-scroll">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="page-scroll">
              <a href="#about">About</a>
            </li>
            <li className="page-scroll">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
    {/* Header */}
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <span className="name">Geek Vader</span>
              <span className="skills">May the Knowledge be with you</span>
              <hr className="star-light" />
            </div>
            <img
              className="img-responsive img-bigScreen"
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052055/glass_cdjbpa.png"
              alt="glasses image"
              title="geek loves glasses"
            />
          </div>
        </div>
        <div className="seeMore-btn text-center btn-style">
          <div className="btn-styleLine double-line page-scroll">
            <a href="#portfolio" className="btn btn-lg btn-outline">
              <i className="fa fa-fw fa-arrow-circle-down" />
              See More
            </a>
          </div>
        </div>
      </div>
    </header>
    {/* My Likes Grid Section */}
    <section id="myLikes">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>What I Do</h2>
            <hr className="star-primary" />
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
                className="fa fa-fw fa-headphones"
                aria-hidden="true"
                title="This symbolizes I Love to listen good music
                      "
              />
            </a>
            <article className="portfolio-item-One">
              <header>
                <h3>Listen music</h3>
              </header>
              <p>
                All kind of melodious music because it suits into my ears. Four
                dollar toast messenger bag green juice, organic cliche tofu synth
                small batch locavore austin. Squid mlkshk authe ntic pinterest,
                pour-over gastropub Music seitan sartorial humblebrag.
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
                className="fa fa-fw fa-laptop"
                aria-hidden="true"
                title="This symbolizes I Like to design and develop websites
                      "
              />
            </a>
            <article className="portfolio-item-Two">
              <header>
                <h3>design and develop</h3>
              </header>
              <p>
                I am a front-End designer. I do design and coding of web
                application. Swag brooklyn banh mi stumptown loca vore yr migas
                tousled chicharrones sriracha cray leggings. Street art tousled
                kale chips poutine schlitz. Polaroid roof party austin.
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
                className="fa fa-fw fa-camera-retro"
                aria-hidden="true"
                title="This symbolizes I Love to capture moments
                      "
              />
            </a>
            <article className="portfolio-item-Three">
              <header>
                <h3>photography</h3>
              </header>
              <p>
                I Love to capture beautiful moments. life deep v austin schlitz
                drinking vinegar, messen ger bag slow-carb. Migas tumblr kombucha
                you probably hav en't heard of them +1 chicharrones. Tilde
                wayfarers craft beer stumptown, humblebrag ugh whatever.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <div>
      <hr className="loc-hr" />
    </div>
    {/* Portfolio Grid Section */}
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Portfolio</h2>
            <hr className="star-primary" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 portfolio-item">
          <a href="#" className="portfolio-link">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052402/portfolio_book_y7ypqt.png"
              className="img-responsive"
              alt=""
            />
          </a>
        </div>
        <div className="col-sm-3 portfolio-item">
          <a href="#" className="portfolio-link">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052400/portfolio_label_e5kv1h.png"
              className="img-responsive"
              alt=""
            />
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
      <div className="loadMore-btn text-center btn-style">
        <div className="btn-styleLine double-line">
          <a href="#" className="btn btn-lg btn-outline">
            <i className="fa fa-fw fa-plus" />
            Load More
          </a>
        </div>
      </div>
    </section>
    <div>
      <hr className="loc-hr" />
    </div>
    {/* About Section */}
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>About me</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 center-block about-item">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-One">
              <header>
                <h3>75%</h3>
                <h3>Photoshop</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
          <div className="col-sm-4 center-block about-item">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-One">
              <header>
                <h3>75%</h3>
                <h3>Photoshop</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
          <div className="col-sm-4 center-block about-item">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-One">
              <header>
                <h3>75%</h3>
                <h3>Photoshop</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
          <div className="col-sm-4 center-block about-item">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-One">
              <header>
                <h3>75%</h3>
                <h3>Photoshop</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
          <div className="col-sm-4 center-block about-item">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052399/psd_kvl8es.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-One">
              <header>
                <h3>75%</h3>
                <h3>Photoshop</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
          <div className="col-sm-4 about-item ">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052396/illustrator_a9kxav.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-Two">
              <header>
                <h3>65%</h3>
                <h3>Illustrator</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
          <div className="col-sm-4 about-item ">
            <img
              src="https://res.cloudinary.com/dasdezine/image/upload/v1458052396/knit_b0ngnp.png"
              className="img-responsive"
              alt=""
            />
            <article className="about-item-Three">
              <header>
                <h3>25%</h3>
                <h3>Knitting</h3>
              </header>
              <p>
                Four dollar toast messenger bag green juice, organic cliche tofu
                synth small batch locavore austin. Squid mlkshk authe ntic
                pinterest, pour-over gastropub XOXO seitan sartorial humblebrag.
              </p>
            </article>
          </div>
        </div>
        <div className="text-center btn-style double-line">
          <div className="btn-styleLine">
            <a href="#" className="btn btn-lg btn-outline">
              <i className="fa fa-fw fa-download" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Contact Section */}
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Contact Me</h2>
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
                <div className="btn-styleLine double-line page-scroll">
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
    </section>
    {/* Footer */}
    <footer className="text-center">
      <div className="footer-above">
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4">
              <h3>Location</h3>
              <p>
                63B East Kamalapur
                <br />
                Kolata 700028, WB India
              </p>
            </div>
            <div className="footer-col col-md-4">
              <h3>Around the Web</h3>
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.behance.net/dasdezine"
                    target="_blank"
                    className="btn-social btn-outline"
                    alt="Behance"
                    title="Behance"
                  >
                    <i className="fa fa-fw fa-behance" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://codepen.io/collection/ABajba/"
                    target="_blank"
                    className="btn-social btn-outline"
                    alt="Codepen"
                    title="Codepen"
                  >
                    <i className="fa fa-fw fa-codepen" aria-hidden="true" />
                    <span className="sr-only">codepen</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/dasdezine"
                    target="_blank"
                    className="btn-social btn-outline"
                    alt="Twitter"
                    title="Twitter"
                  >
                    <i className="fa fa-fw fa-twitter" aria-hidden="true" />
                    <span className="sr-only">twitter</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h3>Contact Info</h3>
              <ul className="list-inline">
                <li>
                  <a
                    href="tel:0091 90 51 314800"
                    className="btn-social btn-outline"
                    alt="My Phone number"
                    title="+91 9051314800"
                  >
                    <i className="fa fa-fw fa-phone" aria-hidden="true" />
                    <span className="sr-only">My Phone number</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ipabhi@gmail.com"
                    className="btn-social btn-outline"
                    alt="My E-mail ID"
                    title="My E-mail ID"
                  >
                    <i className="fa fa-fw fa-envelope" aria-hidden="true" />
                    <span className="sr-only">My E-mail</span>
                  </a>
                </li>
              </ul>
              <p>If you want to hire me please use phone contact or my E-mail.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Artworks created by{" "}
              <a href="https://www.behance.net/annadadej" target="_blank">
                Anna Dadej
              </a>
              <br />
              Copyright © dasdezine 2016
            </div>
          </div>
        </div>
      </div>
    </footer>
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
