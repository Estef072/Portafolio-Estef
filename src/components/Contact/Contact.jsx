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
        <form method="get" action="http://3.135.147.195:3008/index.html">
          <button type="button" className="button1">
            <img className="g" src={FB} alt="video-html" />
          </button>
        </form>
        <form method="get" action="http://3.135.147.195:3008/index.html">
          <button type="button" className="button1">
            <img className="g" src={IG} alt="video-html" />
          </button>
        </form>
        <form method="get" action="https://wa.me/qr/RSOWOJKW3Y4FF1">
          <button type="button" className="button1">
            <img className="g" src={What} autoPlay loop muted alt="video-html" />
          </button>
        </form>
        <form method="get" action="http://3.135.147.195:3008/index.html">
          <button type="button" className="button1">
            <img className="g" src={Lin} autoPlay loop muted alt="video-html" />
          </button>
        </form>
      </div>
    </div>

  );
}

export default Contact;
