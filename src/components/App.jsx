import React from 'react';
import './App.scss';
import Portada from './Portada/Portada';
import Intro from './Intro/Intro'
import Portafolio from './portafolio/Portafolio';


function App() {
    return (
       
              <div className='App'>
     
                <div>
                    <Portada/>
                </div>
                <div>
                    <Intro/>
                </div>
                <div>
                    <Portafolio/>
                </div>
            </div>         

      
      
    
        
    );
}

export default App;
