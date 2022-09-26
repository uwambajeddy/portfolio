import React, { useContext } from "react";
import "./Portfolio.css";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import Sidebar from "../../img/sidebar.png";
import reactjs from "../../img/reactjs-small.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
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
     {/*  <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper> */}
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
        <img className="slide-image" src={Ecommerce}/>        
            <div class="descriptions">
                <h1>John Wick 3</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <div className="languages">
                  <p className="language">Reactjs</p>
                <p className="language">Nodejs</p>
                </div>
                <Link to="contact" smooth={true} spy={true}>
            <button className="button">Hire Me</button>
          </Link>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={HOC}/>        
            <div class="descriptions">
                <h1>John Wick 3</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={MusicApp}/>        
            <div class="descriptions">
                <h1>John Wick 3</h1>
                <p>
                    After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.
                </p>
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
    </div>
        </SwiperSlide>

    
      </Swiper>
    </div>
  );
};

export default Portfolio;
