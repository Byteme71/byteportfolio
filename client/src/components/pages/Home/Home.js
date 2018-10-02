import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import Bounce from 'react-reveal/Bounce';
import Flip from "react-reveal/Flip";
import "./Home.css";

class Home extends React.Component {
  // initial form state
  // state = {
  //   articles: [],
  //   articlesToSave:{
  //     title: "",
  //     date: "",
  //     snippet:"",
  //     url: ""
  //   }
  // };


  render() {
    return (
      <div>
        <div className="fullscreen">
         <Tada>
          <h1 className="initialtext">What is a Dani-Byte, you ask?!</h1>
        </Tada>
          <Flip top cascade delay={2500}>
            <div className="help">
              <h2 className="secondtext"> Dani-Byte = </h2> <h2 className="nme"> Daniela Shvartsman </h2>
              </div>
            <h4 className="thirdtext">A terabyte is 1,024 GB but a Dani-Byte is filled with endless energy, positivity and passion!</h4>
            <div className="centerbtn"> <Link className="noeffect" to="/about">
              <button type="button" className="btn btn-outline-info">
               Click me to learn more!</button></Link>  
              </div>
        </Flip>
      </div>       
      </div>
    );
  }
}

export default Home;
