import React from 'react';
import './ScrollBtn.css'

export const Header =() =>{
      Howler.volume(0.8);
  const d = new Howl({
    src: ['/sounds/C3.mp3'],
    preload: true,
  });
  const re = new Howl({
    src: ['/sounds/D3.mp3'],
    preload: true
  });
  const mi = new Howl({
    src: ['/sounds/E3.mp3'],
    preload: true
  });
  const fa = new Howl({
    src: ['/sounds/F3.mp3'],
    preload: true
  });
  const sol = new Howl({
    src: ['/sounds/G3.mp3'],
    preload: true
  })
  const la = new Howl({
    src: ['/sounds/A3.mp3'],
    preload: true
  });
  const si = new Howl({
    src: ['/sounds/B3.mp3'],
    preload: true
  });
  const d2 = new Howl({
    src: ['/sounds/C4.mp3'],
    preload: true
  });
  const re2 = new Howl({
    src: ['/sounds/D4.mp3'],
    preload: true
  });
  const mi2 = new Howl({
    src: ['/sounds/E4.mp3'],
    preload: true
  });
  const fa2 = new Howl({
    src: ['/sounds/F4.mp3'],
    preload: true
  });
  const chord = new Howl({
    src: ['/sounds/C2.mp3'],
    preload: true
  });
      return <header id="top-header">
      <div id="page-top" className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <div className='nombre'>
                <span className='name' onMouseDown={()=>chord.play()}>Rodrigo Lago</span>
              </div>
              <h3 className="char" onMouseDown={() => d.play()}>P</h3>
              <h3 className='char' onMouseDown={() => re.play()}>r</h3>
              <h3 className='char' onMouseDown={() => mi.play()}>o</h3>
              <h3 className='char' onMouseDown={() => fa.play()}>g</h3>
              <h3 className='char' onMouseDown={() => sol.play()}>r</h3>
              <h3 className='char' onMouseDown={() => la.play()}>a</h3>
              <h3 className='char' onMouseDown={() => si.play()}>m</h3>
              <h3 className='char' onMouseDown={() => d2.play()}>a</h3>
              <h3 className='char' onMouseDown={() => re2.play()}>d</h3>
              <h3 className='char' onMouseDown={() => mi2.play()}>o</h3>
              <h3 className='char' onMouseDown={() => fa2.play()}>r <br /></h3>
              <span className="skills" ></span>
              <hr className="star-light" onClick={() => mi.play()} />
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
}