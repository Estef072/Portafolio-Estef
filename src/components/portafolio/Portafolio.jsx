import React from 'react'
import './Portafolio.scss'
import Video from '../../assetes/video.mp4'


const Portafolio = () => {
  return (
    <div className='portafolio'>
        <article className='tit' id ='Portafolio'>*PORTAFOLIO*</article>
        <div className='texto-por'>
            <h1 className="pl-title">Estefania's creative portfolio</h1>
            <p className="pl-desc">
                Este es mi portafolio creativo, el cual muestra algunos
                de los datos desarrollados durante todo el semestre
            </p>
        </div>
        <div className='pl-lis'>
               <form method="get" action="http://3.135.147.195:3008/index.html">
                  <button href="http://3.135.147.195:3008/index.html" className='button'>
                  <video className = 'v'src={Video}  autoPlay loop muted alt="video-html" />
                      
                  </button>
                </form>
                <form method="get" action="http://3.135.147.195:3001">
                  <button className='button'>
                  <video className = 'v'src={Video}  autoPlay loop muted alt="video-html" />
                     
                  </button>
               </form>

               <form method="get" action="http://3.135.147.195:3013">
                  <button className='button'>
                  <video className = 'v'src={Video}  autoPlay loop muted alt="video-html" />
                     
                  </button>
               </form>

               <form method="get" action="http://3.135.147.195:3012">
                  <button className='button'>
                  <video className = 'v'src={Video}  autoPlay loop muted alt="video-html" />
                     
                  </button>
               </form>
               
        </div>

       
    </div>
           
          
  )
}

export default Portafolio