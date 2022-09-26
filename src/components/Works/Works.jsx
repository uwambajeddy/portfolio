import React, { useContext } from "react";
import "./Works.css";
import reactjs from "../../img/reactjs.png";
import nodejs from "../../img/nodejs.png";
import git from "../../img/git.png";
import figma from "../../img/figma.png";
import mongodb from "../../img/mongodb.webp";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works with All these
          </span>
          <span>Skill and tools </span>
          <spane>
            These are skills and tools I used the most in my career 
            <br />
           but my skills are not limited them only,
            <br />
            I also have more skills that are related to software development
            <br />
            which I mentioned in the services section above
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={git} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={figma} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
