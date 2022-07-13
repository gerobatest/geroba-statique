import React from 'react'
import ClientData from "./ClientData";
import Slider from "react-slick";
import '../style/Commun.scss';
import '../style/SectionDemo.scss';
import '../style/VideoDemo.scss';
import "../style/Clients.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SectionDemo() {

  //Slider clients
  const settings = {
    infinite: true,
    centerMode:true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
        <div id="demo">
          <h1 className="title titleDemo">
              Démo
          </h1>
          <div className="sm-container">
            <p className="sm-paragraph">
                First line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.      
            </p>
            <p className="sm-paragraph">
                Second line. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. 
            </p> 
          </div>
          
          {/* Video demonstration */}
          <div className="video-container" id="test">

            {/* Si la vidéo est enregistrée localement */}
            <video className="videoDemo" width="640" height="264" controls
              src="/GerobaDemo.mp4" type="video/mp4">
            </video>


            {/* Si la vidéo est en ligne 
            <iframe 
              src="https://www.youtube.com/embed/avBbvVwLMnY"
              className="videoDemo"
              title="Geroba demonstration"
            />   */}

          </div>
          
          {/*Slider collaborations*/}
          <p className="pclients"><i>Ils nous font confiance... Voici quelques exemples de collaborations qui illustrent notre savoir-faire.</i></p>
          <div className="cards">
            <Slider {...settings}>
              {ClientData.map((item) => (
              <div key="item" className="card"> 
                
                <img className="clientLogo" src={item.imgPath} alt={item.title} title={item.title}/>
              </div>
              ))}
            </Slider>     
          </div>
        </div>
  )
}

export default SectionDemo;