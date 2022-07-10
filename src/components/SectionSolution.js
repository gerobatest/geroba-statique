import React, {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {sliderData} from "./data-slider";
import '../style/Commun.scss';
import '../style/Section.scss'; 
import '../style/Slider.scss';
import { Parallax } from 'react-scroll-parallax';

const SectionText = (props) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);

  };
  const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);

  };

  function auto () {
      slideInterval = setInterval(nextSlide, intervalTime)
  }
  
  useEffect(() =>{
      setCurrentSlide(0)
  }, [])

  useEffect(() =>{
      if (autoScroll){
          auto();
      }
      return () => clearInterval(slideInterval);
  }, [currentSlide]);


  const moveDot = index => {
     setCurrentSlide(index)
  }

  return (
    <>
      <div id="home">
        <div className='slider'>    
            <AiOutlineArrowLeft className = "arrow prev"
                onClick={prevSlide}
            />
            <AiOutlineArrowRight className = "arrow next" 
                onClick={nextSlide}
            />

            {sliderData.map((slide, index) =>{
                return(     
                    <div className={index === currentSlide ?
                      "slide current" : "slide"} key = {index}>
                          {index === currentSlide && (
                              <>
                                  <img src={slide.image} alt="slide"/>
                                  <div className='contenue'>
                                      <h2>{slide.heading}</h2>
                                      <p>{slide.desc}</p>
                                  </div>
                              </>          
                          )}
                      </div>         
                ) 
            })}

            <div className='textslide'>
                <h1>GESTION </h1>
                <h1>ROUTES</h1>
                <h1> BÂTIMENTS</h1>
            </div>
            
            <div className='container-dots' /*point slide*/> 
                {Array.from({length: 3}).map((item, index,) => (
                    <div key={index}
                    onClick={() => moveDot(index + 0)}
                    className={currentSlide === index + 0? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>   
        <div className="sectionContainer">

            {/* Image avec Parallax */}
            <div className="sectionImage">
              <Parallax translateX={['-200px', '40px']}>     
                <img className="iMac" src="imac.png" alt="iMac"/>
              </Parallax>      
            </div>

            <div className="sectionText">
              <h1 className="title" >
                  {props.title}
              </h1>
              <p className="paragraph">
                La solution GEROBA permet de procéder à un état
                des lieux permanent du patrimoine routier
                permettant de répondre aux besoins des
                collectivités sur le sujet de la gestion de celui-ci. Elle
                a particulièrement pris en compte le volet "mise à
                jour" afin que garantir que la base puisse être
                actualisée.
              </p>
              <p className="paragraph">
                La solution a été développée autour de quelques
                concept fondamentaux : <b>une version pour les
                gestionnaire pour PC et une version mobile pour
                toutes les interventions terrain.</b>
              </p>
              <p className="paragraph">
                L'application est simple d'utilisation et adaptée à la
                fois aux cadres managers et aux agents de terrain.
                Elle permet que celui qui réalise une action (régie
                et/ou entreprise) renseigne lui même la base, sans
                compétence numérique.
              </p>
              <p className="paragraph">
                Elle permet également une gestion dynamique des
                stocks, de l'usine à la pose des équipements.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default SectionText;
