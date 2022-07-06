import React from 'react';
import '../style/Section.scss';
import worker from '../images/engineer.png';
import { Parallax } from 'react-scroll-parallax';

function SectionFonc(props) {
  return (
            <div className="sectionContainer" id="fonctions">
                <div className="sectionImage">
                    <Parallax translateX={['-200px', '40px']}>    
                        <img src={worker} alt="Construction worker"/>
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
                            <b>Mode « Existant » :</b> C'est ce qui existe sur le
                            terrain, l'état « 0 ». <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
                        </li>
                        <li>
                            <b>Mode « Etude » :</b> Il s'agit du fruit de l'expertise
                            de l'existant et la définition de ce qu'il devrait y
                            avoir. <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
                        </li>
                        <li>
                            <b>Mode « Dépôts » :</b> Pour les objets qui le
                            nécessitent, c'est la gestion des équipements qui
                            sont dans des dépôts localisés et qui serviront à
                            des travaux de maintenance. <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
                        </li>
                        <li>
                            <b>Mode « Travaux » :</b> La maîtrise d'ouvrage
                            décide d'engager des travaux de changement
                            ou de maintenance ; elle confie une mission à
                            une entreprise ou en régie et le maître d'oeuvre
                            va suivre les actions, pas à pas suivant le détail,
                            modulable, défini en amont. <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
                        </li>
                        <li>
                            <b>Mode « Gestion » :</b> Le patrimoine doit être
                            surveillé à la fois sur le plan physique et
                            fonctionnel. Des actions de surveillances sont
                            définies sur tout ou une partie du patrimoine et
                            les éventuels besoins d'intervention identifiés
                            puis suivis. <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
                        </li>
                        <li>
                            <b>Mode « Route et Bâtiment » :</b> Integer ut odio
                            vitae ex posuere sollicitudin. Aliquam lobortis
                            tincidunt aliquet. Donec libero erat,
                            pulvinar id nunc id, volutpat laoreet tortor.
                            Praesent dapibus lacus molestie. <a className="openFonc" href={"/"}>En savoir plus &#62;</a>
                        </li>
                    </ol>
                    <p className="paragraph">
                        Chacun des acteurs peut alimenter la base, définir
                        des missions, échanger des informations et/ou des
                        photos en fonction des droits qui lui sont ouverts.
                    </p>
                </div>
            </div>
  )
}

export default SectionFonc;