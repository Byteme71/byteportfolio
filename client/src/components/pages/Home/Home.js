import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
// import Tada from "react-reveal/Tada";
// import Bounce from 'react-reveal/Bounce';
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
          <Fade>
            <h1 className="newFirst">I'm</h1>
          <h1 className="initialText">Daniela Shvartsman</h1>
        </Fade>
          <Flip top cascade delay={1600}>
            <h4 className="thirdText">a Full Stack Web Developer</h4>
            <div className="centerBtn"> <Link className="noEffect" to="/about">
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
