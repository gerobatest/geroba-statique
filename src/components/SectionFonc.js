import React, {useState} from 'react';
import '../style/Section.scss';
import '../style/Modal.scss';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineX } from "react-icons/hi";



function SectionFonc(props) {

    
//texte limit
const Existant  = ({ content,limit}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    };
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    if (content.length <= limit) {
      return <div>{content}</div>
    }


    const toShow = content.substring(0, limit) + "...";
    return (
        <>
            <div> 
                {toShow} 
                <a onClick={toggleModal}  className="openFonc"  href={"/"}>En savoir plus &#62;</a>
                
                {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-1.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 1</h1>
                                <p className="lightTitle">Mode Existant</p>
                                <div className="sm-container">
                                    <p className="sm-paragraph">
                                        C’est ce qui existe sur le terrain, l’état « 0 ».
                                        Suspendisse potenti. Proin elementum erat vitae
                                        dictum aliquet. Aenean porta posuere mi, ut
                                        hendrerit arcu malesuada a. Etiam et porttitor
                                        turpis. Aenean efficitur id nisl sed ultrices.
                                        Suspendisse porttitor mollis ornare.      
                                    </p>
                                    <p className="sm-paragraph">
                                        Mauris pharetra porttitor ipsum ac lobortis.
                                        Donec sed condimentum erat. Nullam pretium
                                        rutrum finibus. Pellentesque dui urna, luctus at
                                        rutrum a, condimentum sit amet orci. Nulla
                                        facilisi.
                                    </p> 
                                </div>
                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
            </div>
        </>
        )
    }

  const Etude = ({ content,limit}) => {
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
    </div>
  }


  const Depots = ({ content,limit}) => {
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
    </div>
  }


  const Travaux = ({ content,limit}) => {
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
    </div>
  }


  const Gestion = ({ content,limit}) => {
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
    </div>
  }


  const Batiment = ({ content,limit}) => {
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
    </div>
  }
  //fin texte limit 


    return (

        <>
             <div className="sectionContainer" id="fonctions">
                <div className="sectionImage">
                    <Parallax translateX={['-200px', '100px']}>    
                        <img src="/engineer.png" alt="Construction worker"/>
                    </Parallax>  
                </div>
                <div className="sectionText">
                    <h1 className="title" >
                        {props.title}
                    </h1>
                    <p className="paragraph">
                        La solution permet de gérer les équipements dans
                        ses différentes étapes de vie : l'Existant, les Etudes,
                        les Dépôts, les Travaux de remplacement, la Gestion
                        du patrimoine dans le temps et les thématiques
                        Routes / Bâtiments.
                    </p>
                    <ol>
                        <li>
                            <div className='modeLong'>
                                    <b>Mode « Existant » :</b>
                                    <Existant content = " C'est ce qui existe sur le terrain, l'état « 0 ». La solution permet de gérer les équipements dans ses différentes étapes de vie : l'Existant, les Etudes,les Dépôts, les Travaux de remplacement, la Gestion du patrimoine dans le temps et les thématiquesRoutes / Bâtiments. " limit = {51} /> 
                            </div>  
                        </li>
                        <li>
                            <b className='bB'>Mode « Etude » :</b> 
                            <div className='modeLong'>
                            <Etude content=" Il s'agit du fruit de l'expertise
                            de l'existant et la définition de ce qu'il devrait y
                            avoir. blablababla" limit={97}/>
                            </div> 
                        </li>
                        <li>
                            <b>Mode « Dépôts » :</b> 
                            <div>
                                <Depots content=" Pour les objets qui le
                            nécessitent, c'est la gestion des équipements qui
                            sont dans des dépôts localisés et qui serviront à
                            des travaux de maintenance. blablabla" limit={155}/>
                            </div>
                        </li>
                        <li>
                          <b>Mode « Travaux » :</b>
                            <div>
                                <Travaux content=" La maîtrise d'ouvrage
                                décide d'engager des travaux de changement
                                ou de maintenance ; elle confie une mission à
                                une entreprise ou en régie et le maître d'oeuvre
                                va suivre les actions, pas à pas suivant le détail,
                                modulable, défini en amont. "/>
                            </div>
                        </li>
                        <li>
                            <b>Mode « Gestion » :</b> 
                            <div>
                                <Gestion content=" Le patrimoine doit être
                            surveillé à la fois sur le plan physique et
                            fonctionnel. Des actions de surveillances sont
                            définies sur tout ou une partie du patrimoine et
                            les éventuels besoins d'intervention identifiés
                            puis suivis. balabalab" limit={231}/>
                            </div>
                        </li>
                        <li>
                            <b>Mode « Route et Bâtiment » :</b> 
                            <div>
                               <Batiment content= "Integer ut odio vitae ex posuere sollicitudin. Aliquam lobortis tincidunt aliquet. Donec libero erat, pulvinar id nunc id, volutpat laoreet tortor. Praesent dapibus lacus molestie. blabalaba" limit={181}/> 
                            </div>
                        </li>
                    </ol>
                    <p className="paragraph">
                        Chacun des acteurs peut alimenter la base, définir
                        des missions, échanger des informations et/ou des
                        photos en fonction des droits qui lui sont ouverts.
                    </p>
                </div>
            </div>

        </>   
  )
}

export default SectionFonc;