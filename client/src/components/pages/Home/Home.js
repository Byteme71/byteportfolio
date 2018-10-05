import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";
import "./Home.css";
import Bounce from 'react-reveal/Bounce';
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Home extends React.Component {

  // initial form state
  state = {
    scroll: false,
  };



  handleOnClick = () => {
    if (this.state.scroll === false) {
      scroll.scrollToBottom();
      this.setState({
        scroll: true
      })
    } else if (this.state.scroll === true){
      scroll.scrollToTop();
       this.setState({
         scroll: false
       })
    }
     
  }

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
            < div className = "down-arrow footer-toggle"> </div>
          <i onClick={this.handleOnClick} className={this.state.scroll === true ? "animated infinite bounce slower fas fa-angle-up" : "animated infinite bounce slower fas fa-angle-down"}></i>
          {/* <i class="fas fa-angle-up"></i> */}
        </div>
      </div>
    );
  }
}

export default Home;
