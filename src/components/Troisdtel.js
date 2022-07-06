import React, {useEffect, useState} from 'react';
import '../style/Commun.scss';
import '../style/Troisdtel.scss';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import '../style/Troisdtel.scss';
import docData from './Document-data';


const Troisdtel = function() {

    const slideLength = docData.length; 
    const [currentSlide, setCurrentSlide] = useState(0);

    let deg = 0;
    let nElements;

    window.onresize = () =>{
        responsiveDisplay(); 
    }

    useEffect(() =>{
        setCurrentSlide(0);
    }, [])

    useEffect(() => {
        responsiveDisplay();
    });

    function  responsiveDisplay(){
        let z; //largeur du slider 3D selon la dimension de l'écran
        if(window.innerWidth < 400)
            z = 65;
        else if(window.innerWidth < 769)
            z = 100;
        else if(window.innerWidth < 821 )
            z = 120;
        else if(window.innerWidth >= 700)
            z = 180; 

        const span = document.querySelectorAll('.box span');

        nElements = span.length;

        span.forEach((element, i) => {
            const valeur = (360/ nElements) * (i+1);
            element.style.transform = 'rotateY('+ valeur +'deg) translateZ(' + z + 'px)';
        });

        
    }

    function clickButtonLeftD(){
        
        deg -= 360/ nElements; 
        const boxx = document.querySelector('.box');
        boxx.style.transform = 'perspective(1000px) rotateY(' + deg +'deg)';
        setCurrentSlide(currentSlide === 0 ? slideLength -1 : currentSlide -1);

        //specifier la classe active ici

    }

    function clickButtonRightD(){
  
        deg += 360/ nElements; 
        const boxx = document.querySelector('.box');
        boxx.style.transform = 'perspective(1000px) rotateY('+deg+'deg)';
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    

    return (
        <div className='sel'>

            <div className='box'>

                {/* Les documents */}
                {docData.map((slide, index) =>{
                    return(     
                        <>
                            <span className={`documents ${currentSlide === index ? 'current':''} `} id={index} key = {index}>
                                <a href={slide.document} target="_blank" rel="noreferrer">
                                    <img src = {slide.image}  alt={slide.name} title={slide.name}/> 
                                    </a>    
                                    <p className="fileName"> {slide.name}</p>     
                            </span>  
                        </>    
                    ) 
                })}

            </div>

            <div onClick={clickButtonLeftD} className='leftD'><AiOutlineLeft /></div>
            <div onClick={clickButtonRightD} className='rightD'><AiOutlineRight /></div>
            <div className="shadow"></div>
        </div>
  );
}
export default Troisdtel;





