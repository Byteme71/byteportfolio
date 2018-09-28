import React from "react";
import axios from "axios";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
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
        <Fade left>
          <h1>Daniela</h1>
          </Fade>
          <Fade right>
            <h1>Shvartsman</h1>
          </Fade>
      </div>
        
      </div>
    );
  }
}

export default Home;
