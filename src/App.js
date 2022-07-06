import React from "react";
import Navbar from './components/Navbar';
import SectionSolution from './components/SectionSolution';
import SectionComment from './components/SectionComment';
import SectionFonc from './components/SectionFonc';
import SectionTelechargement from './components/SectionTelechargement';
import Troisdtel from './components/Troisdtel';
//import AppSlide from './components/AppSlide';
import SectionDemo from './components/SectionDemo';
import Footer from './components/Footer';
import Fill from './components/Fill';
import { ParallaxProvider } from 'react-scroll-parallax';

function App(){
  return (
      <>
          <Navbar/> 
          <ParallaxProvider> 
            <SectionSolution title="Solution de mobilité"/>
            <SectionComment/>
            <SectionFonc title="Fonctionnalités"/>
          </ParallaxProvider>
          <SectionTelechargement/>  
          <Troisdtel/>
          {/* <AppSlide/> */}
          <SectionDemo/> 
          <Footer/>
          <Fill/>
      </>
    );
}

export default App;
