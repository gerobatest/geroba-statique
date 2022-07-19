import React, {useRef} from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import docData from './Document-data';
import '../style/Doc.scss'

export default function Doc() {

  const scrollable = useRef(null); 
  
  //const scrollHeight = scrollable.current?.clientHeight / 2;
  const scrollHeight = 250;
  console.log(scrollHeight);

  const scrollUp = () => {
    const scrollLength = -scrollHeight; //calcul moitié de la div final
    scrollable.current.scrollBy({top: scrollLength, behavior: "smooth"})
    console.log(scrollHeight);
  }

  const scrollDown = () => {
    const scrollLength = scrollHeight; //calcul moitié de la div final
    scrollable.current.scrollBy({top: scrollLength, behavior: "smooth"})
    console.log(scrollHeight);
  }

  return (
    <>
    <div className="scroll-container">
      <div className="doc-container" ref={scrollable}>

        {/* Les documents */}
        {docData.map((slide, index) =>{
            return(     
                <div className="single-doc-container" id={index} key={index}>
                    
                      <img src={slide.image} alt={slide.image}/>
                    <a href={slide.document} target="_blank" rel="noopener noreferrer">
                      <p className="doc-number">Document {index + 1}</p>
                    </a>
                    
                    <p className="doc-name">{slide.name}</p> 
                </div>    
            ) 
        })}
      </div>

      <button className="scroll-up" onClick={scrollUp}><IoIosArrowUp/></button>
      <button className="scroll-down" onClick={scrollDown}><IoIosArrowDown/></button>
    </div>

    
    </>
  )
}
