import React, { useContext } from "react";
import "./Portfolio.css";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Screenshot_1 from "../../img/Screenshot_1.png";
import Screenshot_2 from "../../img/Screenshot_2.png";
import Screenshot_3 from "../../img/Screenshot_3.png";
import Screenshot_4 from "../../img/Screenshot_4.png";
import Screenshot_5 from "../../img/Screenshot_5.png";
import Screenshot_6 from "../../img/Screenshot_6.png";
import { themeContext } from "../../Context";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";import { Link } from "react-scroll";
;
// import required modules



const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
       <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 2,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <img className="slide-image" src={Screenshot_1}/>        
            <div class="descriptions">
                <h1>Personal portfolio</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <div className="languages">
                  <p className="language">Reactjs</p>
                <p className="language">Nodejs</p>
                </div>
              <div className="redirect-links">
                <a href="#" className="button">visit <ion-icon className="ion-icons" name="arrow-round-forward"></ion-icon></a>
                <a href="#" className="button">code <ion-icon className="ion-icons" name="logo-github"></ion-icon></a>

              </div>
          
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className="slide-image" src={Screenshot_6}/>        
            <div class="descriptions">
                <h1>Rise up</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <div className="languages">
                  <p className="language">Reactjs</p>
                <p className="language">Nodejs</p>
                </div>
              <div className="redirect-links">
                <a href="#" className="button">visit <ion-icon className="ion-icons" name="arrow-round-forward"></ion-icon></a>
                <a href="#" className="button">code <ion-icon className="ion-icons" name="logo-github"></ion-icon></a>

              </div>
          
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <img className="slide-image" src={Screenshot_2}/>        
            <div class="descriptions">
                <h1>Sillion africa</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <div className="languages">
                  <p className="language">Reactjs</p>
                <p className="language">Nodejs</p>
                </div>
              <div className="redirect-links">
                <a href="#" className="button">visit <ion-icon className="ion-icons" name="arrow-round-forward"></ion-icon></a>
                <a href="#" className="button">code <ion-icon className="ion-icons" name="logo-github"></ion-icon></a>

              </div>
          
    </div>
        </SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Portfolio;
