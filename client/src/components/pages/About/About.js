import React from "react";
import "./About.css";
import me from "../../../photos/smaller-01.jpg";
import fullScreen from "../../../photos/pexels-photo-1166643.jpeg";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import axios from "axios";


//regex for email ^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$//
class About extends React.Component {

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

// const About = () => (
  render() {
  
    
let myPhotoStyle = {
  "width": "22%",
  "marginTop": "5%",
  "marginLeft": "15%",
  "marginBottom": "1%"
}

let firstBackgroundStyle = {
  backgroundImage: `url(${fullScreen})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: window.innerHeight,
  height: "100vh"
  // top: '0',
  // bottom: '0',
  // left: '0',
  // right: '0',
  // position: 'absolute'
} 
  
  return (
  <div>
    <div className="fullScreen" style={firstBackgroundStyle}>
      <Flip top duration={2500}>
        <img className="plsWork img-responsive img-fluid rounded img-thumbnail rounded-circle" src={me} alt="Daniela Shvartsman" style={myPhotoStyle}></img>
      </Flip>
      <Fade duration={3500} delay={2000} top cascade>
        <h1 className="myName text-justify">Daniela Shvartsman</h1>
        <h2 className="firstTitle text-justify">Full Stack Web Developer</h2>
      </Fade>
      <div className = "down-arrow footer-toggle"> </div>
      <i onClick={this.handleOnClick} className={this.state.scroll === true ? "animated infinite bounce slower fas fa-angle-up" : "animated infinite bounce slower fas fa-angle-down"}></i>

    </div>


      <h1 className="aboutMe text-center text-justify">About Me!</h1>

        <p className="text-center text-justify forMargin">
          A confident, passionate, motivated & knowledgeable Full Stack Web Developer who always strives to continue learning and excelling. My background in Interior Design / Architecture brings a versatile edge to Web Development. Interior Design / Architecture enriched my attention to detail bringing a keen eye for debugging and carefully reading code, helping me figure out how to fix most issues. My drive and willingness to complete projects / applications successfully and in a timely fashion is a valuable addition to any team. I am fervent to keep learning and strengthening my skills, as I am a quick and efficient learner. My positive, excitable attitude works great with other people!
        </p>
        <p className="text-center text-justify forMargin">
          I began my journey as a Full Stack Web Developer taking a few udemy onlind courses to learn all of the basics such as HTML, CSS and Javascript.Completing the self teaching, I enrolled myself at UCLA Extension to go through a rigorous Full Stack Bootcamp.We were taught in a rigorous, fast paced, hands - on class, learning theory and application of full - stack web development.We covered computer science fundamentals, design patterns & algorithms.Vigorously dove into the basics of coding and data structure.
        </p>
        <p className="text-justify myListTitle">
        Completing the Bootcamp we mastered:
        <ul className="text-left text-justify myList">
          <li>
            Building and implementing dynamic end-to-end web applications
          </li>
          <li>
            Developing user-friendly, programmer-friendly, customer-friendly, reliable, and easily readable JavaScript applications
            </li>
          <li>
            Building versatile JavaScript applications
          </li>
          <li>
            Understanding concepts and terminology of object-oriented programming

          </li>
          <li>
            Designing applications employing the most common design patterns
          </li>
          <li>
            Coding HTML / CSS, JavaScript, jQuery, Node.js, MERN stack(MongoDB, Express, React, Node), and MySQL etc.
          </li>
        </ul>
        </p>
      <p className = "text-center text-justify forMargin">
        My learning will not stop there, I will continue to stay on top of the ever changing coding world. I will continue to strive to master every in demand framework, scripting language and database.
      </p>
    </div>
// );
    
       );
  }
}


export default About;
