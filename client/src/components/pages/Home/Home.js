import React from "react";
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
          <h2 className="secondtext">Dani-Byte = Daniela Shvartsman</h2>
          <h3 className="thirdtext">A terabyte is 1,024 GB but a Dani-Byte is filled with endless energy, positivity and passion!</h3>
          <button type="button" className="btn btn-outline-info">Click me to learn more!</button>  
        </Flip>
      </div>       
      </div>
    );
  }
}

export default Home;
