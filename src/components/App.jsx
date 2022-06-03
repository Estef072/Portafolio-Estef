import React from 'react';
import './App.scss';
import Portada from './portada/Portada';
import Intro from './Intro/Intro';
import Portafolio from './portafolio/Portafolio';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <Portada />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Portafolio />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
