import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "./Home.css";
import Bounce from 'react-reveal/Bounce';

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
      
            <Bounce top>
            <h1 className="newFirst">Hey, I'm</h1>
            </Bounce>
          <div className="help">
              <LightSpeed left delay={1300}>
              <h1 className="initialText">Daniela</h1>
            </LightSpeed>
            <LightSpeed right delay={1300}>
              <h1 className="initialText name">Shvartsman</h1>
              </LightSpeed>
              </div>
       
          <Fade bottom cascade delay={2300}>
            <h4 className="thirdText">a Full Stack Web Developer</h4>
            <div className="centerBtn"> <Link className="noEffect" to="/about">
              <button type="button" className="btn btn-outline-info">
               Click me to learn more!</button></Link>  
              </div>
        </Fade>
      </div>       
      </div>
    );
  }
}

export default Home;
