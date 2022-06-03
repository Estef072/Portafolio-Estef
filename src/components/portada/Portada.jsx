import React from 'react';
import './Portada.scss';
import logo from '../../assetes/tortu.png';
import video from '../../assetes/por1.mp4';

function portada() {
  return (

    <div className="container" id="Home">
      <div>
        <img className="foto" src={logo} alt="logo" />
        <a className="texto" href="#Home">HOME </a>
        <a className="texto" href="#About me">ABOUT ME  </a>
        <a className="texto" href="#Portafolio">PORTFOLIO</a>
        <a className="text0" href="#Contact">CONTACT </a>
        <div className="Contenedor">
          <video className="video" src={video} autoPlay loop muted />
          <div className="centrar">
            <div className="grid-filas">
              <div className="dis"> Portafolio</div>
              <div className="dis"> Estefania Elvira</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default portada;
