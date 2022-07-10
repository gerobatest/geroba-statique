import React from 'react'
import '../style/Modal.scss';
import'../style/Section.scss';


export default function Modal(props){
  return(
      <div className="modal">
          <button className="closePopUp" onclick={props.function}>X</button>
          <img src={props.img} alt={props.mode}/>
          <h1 className="title">{props.title}</h1>
          <p className="lightTitle">Mode {props.mode}</p>
          <div className="sm-container">
            <p className="sm-paragraph">
                {props.texte1}     
            </p>
            <p className="sm-paragraph">
                {props.texte2}
            </p> 
          </div>
      </div>
  )
};


