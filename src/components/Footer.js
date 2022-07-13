import React, {useState} from 'react';
import '../style/Footer.scss';
import {AiTwotoneHome} from 'react-icons/ai';
import {GiRotaryPhone} from 'react-icons/gi'; 
import {MdEmail} from 'react-icons/md';
import {FaGlobe} from 'react-icons/fa';


import Map from "./Map/Map";
import Layers from "./Map/Layers";
import TileLayer from "./Map/TileLayer";
import VectorLayer from "./Map/VectorLayer";
import osm from "./Map/osm";
import vector from "./Map/vector";
import Controls from "./Map/Controls";
import FullScreenControl from "./Map/FullScreenControl";
import { Circle as CircleStyle,Style } from 'ol/style';
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import mapConfig from "../config.json";
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon} from 'ol/style';


import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




const iconFeature = new Feature({
  geometry: new Point([1.253639, 44.414870]),
  name: '81 rue du Moulin, 46140 SAUZET, France'
});


const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/location.avif',
    scale: 1.5
  }),
});

iconFeature.setStyle(iconStyle);

const geojsonObject2 = mapConfig.geojsonObject2;

function Footer() {

  //const [center, setCenter] = useState([44.60001675785579, 4.822871862155328]); //map focus
  const [center, setCenter] = useState([1.253327, 44.414888]); //map focus

  //const [zoom, setZoom] = useState(9);
  const [zoom, setZoom] = useState(18)

  const [showLayer2, setShowLayer2] = useState(true);
 
  const [showCancelButton, setShowCancelButton] = useState(false); //Bouton annuler
  const [showSendButton, setShowSendButton] = useState(false);  //Bouton envoyer 

  const [formVal, setFormVal] = useState({
    name:'',
    fname:'',
    email:'',
    message:''
  });
  

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormVal(prevState=>{
      setShowCancelButton(true)
      if (value === '')
        setShowSendButton(false)
      return {
      ...prevState,[name]:value
    }})

    let all_filled = true

    Object.values(formVal).forEach((item)=>{
      if (item === '')
      {
        all_filled = false
        
      }
    })
    if (all_filled)
    {
      setShowSendButton(true)
    }
  }


  //envoyer les données de la forme
  /*const submitHandler = async (e) => {
    e.preventDefault();
    if(!nameVal || !fNameVal || !emailVal ||!messageVal){
      return toast.error('Completer touts les champs');
    }
    try{
      const {data} = await axios.post(`/send`, {
        formVal.name, 
        fNameVal,
        emailVal,
        messageVal
      });
      toast.success(data.message);
    } catch(err){
      toast.error(
        err.response && err.response.data.message?
        err.response.data.message: 
        err.message
      );
    }
  }*/

  //Efface tous les champs 
  const cancelForm = () =>{
    setShowCancelButton(false)
    setShowSendButton(false)
    setFormVal({
      name:'',
      fname:'',
      email:'',
      message:''
    })
    document.getElementById("contact-form").reset();
  };

  //mois actuel
  const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  const currentMonthNum = new Date().getMonth();
  const currentMonth = MONTHS[currentMonthNum];

  //année actuelle 
  const currentYear =  new Date().getUTCFullYear();

  return (
      <div className="footer" id="contact">
        <div className="footerRow1">

          {/*map */}
          <div className="map" id="map">

            <Map center={fromLonLat(center)} zoom={zoom}>
              <Layers>
                <TileLayer
                  source={osm()}
                  zIndex={0}
                />

                {showLayer2 && (
                  <VectorLayer
                    source={vector({ features: new GeoJSON().readFeatures(geojsonObject2, { featureProjection: get('EPSG:3857') }) })}
                    style={iconStyle}
                  />
                )}
              </Layers>

              <Controls>
                <FullScreenControl />
              </Controls>

            </Map>

            <div>
              <input
                className="mapLocation"
                type="checkbox"
                checked={showLayer2}
                onChange={event => setShowLayer2(event.target.checked)}
                /> 
              {/*81 rue du Moulin, 46140 SAUZET, France*/}
          </div>
            
            {/* <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.568638801216!2d5.039171219992005!3d47.30322869062392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f29dcdf6153427%3A0xcd5baeadbd91bcfe!2s81%20Rue%20des%20Moulins%2C%2021000%20Dijon%2C%20France!5e0!3m2!1sen!2smu!4v1655443666207!5m2!1sen!2smu" 
              title="81 Rue des Moulins, 21000 Dijon, France"
              width="100%" 
              height="100%" 
              allowFullScreen="" 
              loading="lazy" 
              border="none"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe> */}
          </div>


          <div className="contact-container">
            <ToastContainer position="bottom-center" limit={1}/>
            <h1 className="title" > 
              Contactez-nous
            </h1> 

            <form id="contact-form" /*onSubmit={submitHandler}*/>
              {/* Nom */}
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  defaultValue={formVal.name} 
                  onChange={handleChange} 
                  required="required"
                />
                <span className="floating-label">Nom<span className="star">*</span></span>
              </div>

              {/* Prénom */}
              <div>
                <input 
                  type="text" 
                  id="fname" 
                  name="fname" 
                  defaultValue={formVal.fname} 
                  onChange={handleChange} 
                  required="required"
                  />
                <span className="floating-label">Prénom<span className="star">*</span></span>
              </div>

              {/* Email */}
              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  defaultValue={formVal.email} 
                  onChange= {handleChange} 
                  required="required"
                  />
                <span className="floating-label">Email<span className="star">*</span></span>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name='message' 
                  placeholder=" " 
                  onChange={handleChange} 
                  required="required"
                  />
                <span className="floating-label message" >Message</span>
              </div>

              <div className="form-btn">

                {showCancelButton && (
                  <button onClick={cancelForm} type="button">
                    ANNULER
                  </button>
                )}

                {showSendButton && (
                <button
                  type="submit">
                  ENVOYER
                </button>
                )}
                
              </div>
            </form>
            
            <div className="contact-info">
              <p><AiTwotoneHome color="#F15a22"/> : 81 rue du Moulin, 46140 SAUZET, France.</p>
              <p><GiRotaryPhone color="#F15a22"/> : +33 (0) 6 31 89 80 34</p>
              <p><MdEmail color="#F15a22"/> : contact@gerobamaster.fr</p>
              <p><FaGlobe color="#F15a22"/> : www.geroba.fr</p>
            </div>
          </div>

        </div>

        <div className="footerRow2">
          <p><i>Conçu et développé par  &nbsp;&nbsp; <img className="footerLogo" src="gerobaFooter.jpg" alt="gds group"></img> &nbsp;&nbsp; Tous droits réservés &copy; {} {currentMonth} {currentYear}</i></p>
         
        </div>
      </div>   
)}
      

export default Footer;