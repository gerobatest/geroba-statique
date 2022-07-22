import React from 'react'
import '../style/Section.scss'
import Doc from "./Doc";

function SectionTelechargement() {
  return( 
        <>
            <div className="container-telechargement" id="téléchargement">     
                <h1 className="title titleTelechargement" >Téléchargements</h1>
                <div className="sm-container">
                    <p className="sm-paragraph">
                        Les documents importants à télécharger...
                        consectetur adipisclning elit. Suspendisse ert
                        iololl eras pellentesque elementum lobortis. Sed
                        ac rtef nunc auctor, molestie turpis vitae,
                        dapibus magna.
                    </p>
                    <p className="sm-paragraph">
                        Integer ut odio vitae ex posuere sollicitudin.
                        Aliquam lobortis tincidunt lorem sed aliquet.
                        Donec libero erat, pulvinar id nunc id, volutpat
                        laoreet tortor. Praesent dapibus lacus molestie
                        dapibus auctor.
                    </p> 
                </div>
                                
                <Doc/>
            </div>
            
        </>
  )
}

export default SectionTelechargement