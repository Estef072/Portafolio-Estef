import React from 'react';
import './Intro.scss';
import Yo1 from '../../assetes/yo1.png';

function Intro() {
  return (
    <div className="intro">
      <div className="i-l">
        <div clasName="parteI-wrapper">
          <article className="titulo" id="About me">*About me*</article>
          <h2 className="intro-1"> Hello my name is </h2>
          <h1 className="name"> Estefania Elvira </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Programacion Web</div>
              <div className="i-title-item">Python</div>
              <div className="i-title-item">SQL</div>
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">Java</div>
              <div className="i-title-item">Javascript</div>
            </div>
          </div>
          <div className="i-desc">Soy Estefania, una estudiante de ingenieria en Ciencias de la computacion en la Universidad del Valle de Guatemala.Actualmente estoy concluyendo mi quinto semestre, con aproximadamente 30 cursos aprobados; También sé programar en distintos lenguajes, tales como: python, kotlin,HTML,Javascript,Java,C,C++</div>
          <form method="get" action="https://drive.google.com/file/d/17h-j8SeI-tUEYTo-O53OquBY-nXJcHuT/view?usp=sharing">
            <button type="button" href="http://3.135.147.195:3008/index.html" className="button"> Ver más</button>
          </form>
        </div>
      </div>

      <div className="i-r">
        <div className="img-i"> </div>
        <img src={Yo1} className="fotoM" alt="foto yo" />
      </div>

    </div>
  );
}

export default Intro;
