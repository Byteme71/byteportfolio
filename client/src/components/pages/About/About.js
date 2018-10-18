import React from "react";
import "./About.css";
import me from "../../../photos/smaller-01.jpg";
import fullScreen from "../../../photos/pexels-photo-1166643.jpeg";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
// import * as Scroll from 'react-scroll';
// import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import axios from "axios";
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ReactModal from 'react-modal';
import cert from "../../../photos/bd1801e24261e7c293ab53218b6cfa54-jpg.jpg";
import firstPic from "../../../photos/html5.png"



//regex for email ^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$//

class About extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  
  state = {
    scroll: false,
    clicked: false,
    showModal: false
  };

   handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

    scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
    }
  
   scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

handleOnClick = () => {
  if (this.state.scroll === false) {
    // scroll.scrollToBottom();
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
  
  checkStateOf = () => {
    if (this.state.clicked === false) {
      this.setState({
      clicked: true
    })
    } else if (this.state.clicked === true) {
      scroll.scrollToTop();
      this.setState({
        clicked: false
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
  height: "100vh",
  position: "relative"
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
      <Fade duration={2000} delay={1200} top cascade>
        <h1 className="myName text-justify">Daniela Shvartsman</h1>
        <h2 className="firstTitle text-justify">Full Stack Web Developer</h2>
      </Fade>
        <div className = "about-me-toggle"><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}><i onClick={this.handleOnClick} className={this.state.scroll === true ? "animated infinite bounce slower fas fa-angle-up forAboutPage1" : "animated infinite bounce slower fas fa-angle-down forAboutPage2"}></i></Link></div>
    </div>

      <div className="test1" id="aboutMe">
      <h1 className="aboutMe text-center text-justify">About Me!</h1>

        <p className="text-center text-justify forMargin">
          A confident, passionate, motivated & knowledgeable Full Stack Web Developer who always strives to continue learning and excelling. My background in Interior Design / Architecture brings a versatile edge to Web Development. Interior Design / Architecture enriched my attention to detail bringing a keen eye for debugging and carefully reading code, helping me figure out how to fix most issues. My drive and willingness to complete projects / applications successfully and in a timely fashion is a valuable addition to any team. I am fervent to keep learning and strengthening my skills, as I am a quick and efficient learner. My positive, excitable attitude works great with other people!
        </p>
        <p className="text-center text-justify forMargin">
          I began my journey as a Full Stack Web Developer taking a few udemy online courses to learn all of the basics such as HTML, CSS and Javascript. Completing the self teaching, I enrolled myself at UCLA Extension to go through a rigorous Full Stack Bootcamp.We were taught in a rigorous, fast paced, hands - on class, learning theory and application of full - stack web development.We covered computer science fundamentals, design patterns & algorithms. Vigorously dove into the basics of coding and data structure.
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
        <div className="centerThisButton">
          <button type="button" className="btn btn-success fixButton" onClick={this.handleOpenModal}>View Certificate</button>
          </div>
        <ReactModal 
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
           contentLabel="Minimal Modal Example"
        >
          <img className="certStyle" src={cert} alt="Certificate"/>
          <div className="centerClose">
            <button type="button" className="btn btn-success fixButton" onClick={this.handleCloseModal}>Close Certificate</button>
          </div>
        </ReactModal>

        <div className="skills-toggle">
          <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}><i onClick={this.checkStateOf} className={this.state.clicked === true ? "animated infinite bounce slower fas fa-angle-up forAboutPage3" : "animated infinite bounce slower fas fa-angle-down forAboutPage4"}></i></Link>
          </div>
    </div>
      <div className="mySkills test2">
        <h1 className="text-justify text-center">My Skills</h1>
        <div className="firstLogoCont">
          <div className="img-fluid rounded img-thumbnail firstPic">
            <img className="img-fluid rounded img-thumbnail" src={firstPic} alt="Html5"></img>
          </div>
        </div>
      </div>
    </div>
// );
    
       );
  }
}


export default About;
