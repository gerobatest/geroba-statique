import React from 'react'
import { Parallax } from 'react-scroll-parallax';

function SectionComment() {
  return (
        <div className="sectionContainer" id="about">
            <div className="sectionText">
                <h1 className="title" >
                    Comment ça marche?
                </h1>
                <p className="paragraph">
                    Disposer d'une base de données multithématiques,
                    évolutive en fonction des besoins de la collectivité
                    (aussi bien sur les modèles de données que sur les
                    thématiques) qui permette de tenir à jour la base de
                    données aisément, établir de la programmation
                    d'intervention, récurrente ou à la volée, établir des
                    requêtes, des suivis de travaux, etc.
                </p>
                <p className="paragraph">
                    La base ainsi constituée permet d'anticiper sur les
                    actions de maintenance préventive et les
                    renouvellements et ainsi de générer des économies
                    substantielles.
                </p>
                <p className="paragraph">
                    La facilité d'utilisation est un élément majeur de nos
                    interfaces. Si on veut que quiconque mette à jour la
                    base informative, il faut que des personnes
                    non-initiées avec l'informatique puisse utiliser
                    simplement la solution.
                </p>
                <p className="paragraph">
                    Grâce à des menus programmables par
                    l'administrateur local de l'application, chaque écran
                    est configurable en fonction du besoin défini par
                    chaque collectivité.
                </p>
                <p className="paragraph">
                    La gestion multithématique de l'application permet
                    de couvrir tous les besoins au sein d'une même
                    direction.
                </p>
            </div>

            <div className="sectionImage">
                <Parallax translateX={['200px', '-40px']}> 
                    <img src="/tablette.avif" alt="Tablette avec carte"/>
                </Parallax>
            </div>
        </div>
  )
}

export default SectionComment