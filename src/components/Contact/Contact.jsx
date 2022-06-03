/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import './Contact.scss';
import FB from '../../assetes/fb.png';
import IG from '../../assetes/ig.png';
import What from '../../assetes/what.png';
import Lin from '../../assetes/lin.png';

function Contact() {
  return (
    <div className="Contacto">
      <article className="titu" id="Contact">*CONTACT*</article>
      <div className="t-c">
        <h1 className="cl">Puedes contactarme:</h1>
      </div>
      <div className="cl-contact">
        <form method="get" action="https://www.facebook.com/estefania.elviraramos.7/">
          <button className="button1">
            <img className="g" src={FB} alt="video-html" />
          </button>
        </form>
        <form method="get" action="https://www.instagram.com/estef_elvira/">
          <button className="button1">
            <img className="g" src={IG} alt="video-html" />
          </button>
        </form>
        <form method="get" action="https://wa.me/qr/RSOWOJKW3Y4FF1">
          <button className="button1">
            <img className="g" src={What} autoPlay loop muted alt="video-html" />
          </button>
        </form>
        <form method="get" action="https://www.linkedin.com/in/sayra-estefan%C3%ADa-elvira-ramos/">
          <button className="button1">
            <img className="g" src={Lin} autoPlay loop muted alt="video-html" />
          </button>
        </form>
      </div>
    </div>

  );
}

export default Contact;
