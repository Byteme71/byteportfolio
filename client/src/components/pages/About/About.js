import React from "react";
import "./About.css";
import me from "../../../photos/smaller-01.jpg";
import fullScreen from "../../../photos/pexels-photo-1166643.jpeg";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
// import * as Scroll from 'react-scroll';
// import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from "axios";
import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ReactModal from 'react-modal';
import cert from "../../../photos/bd1801e24261e7c293ab53218b6cfa54-jpg.jpg";
import firstPic from "../../../photos/html5.png";
import secondPic from "../../../photos/css3.png";
import thirdPic from "../../../photos/js.png";
import fourthPic from "../../../photos/node.png";
import fifthPic from "../../../photos/react.png";
import sixthPic from "../../../photos/express.png";
import seventhPic from "../../../photos/mongodb.png";       
import eighthPic from "../../../photos/mongoose.png";
import ninthPic from "../../../photos/mysql.png";
import tenthPic from "../../../photos/sequelize.png";
import eleventhPic from "../../../photos/mern.jpg";
import twelfthPic from "../../../photos/git.png";
import thirteenthPic from "../../../photos/ajax.png";
import fourteenthPic from "../../../photos/json.png";
import fifteenthPic from "../../../photos/restful_api.jpg";
import sixteenthPic from "../../../photos/npm.png";
import seventeenthPic from "../../../photos/yarn.png";
import eigthteenthPic from "../../../photos/terminal.png";
import ninteenthPic from "../../../photos/heroku.png";
import twentiethPic from "../../../photos/handlebars.png";
import twentyfirstPic from "../../../photos/jquery.png";
import twentysecondPic from "../../../photos/photoshop.png";
import twentythirdPic from "../../../photos/illustrator.png";
import twentyfourthPic from "../../../photos/indesign.jpg";
import projectOne from "../../../photos/1-01.jpg";
import projectTwo from "../../../photos/1-02.jpg";
import projectThree from "../../../photos/1-03.jpg";
import projectFour from "../../../photos/1-04.jpg";



class About extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  state = {
    scroll: false,
    clicked: false,
    showModal: false,
    randomFact: []
  };

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    axios.request({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
      method: "get",
      headers : {"X-Mashape-Key":"mRST8vI7Urmshu7LufdArXefa02up1mUy2JjsnbujyNyk5oMSG"}
    }).then(response => {
      console.log("these are the results", response.data[0])
      this.setState({
        randomFact: response.data[0]
      })
    });

  }
  

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
  

  goToTop = () => {
    scroll.scrollToTop();
  }



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
  // height: window.innerHeight,
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
          <Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}><i className= "animated infinite bounce slower fas fa-angle-down forAboutPage4"></i></Link>
        </div>
        
        </div>
      <div className="mySkills test2">
        <h1 className="text-justify text-center forMoving">My Skills!</h1>

        <div className="firstLogoCont">
          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder" src={firstPic} alt="Html5"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder" src={secondPic} alt="Css3"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder" src={thirdPic} alt="js"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder nodeCenter" src={fourthPic} alt="node"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder reactCenter" src={fifthPic} alt="React"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder expressCenter" src={sixthPic} alt="Express"></img>
          </div>

        </div>

        <div className="firstLogoCont">
          
          <div className="img-fluid rounded img-thumbnail allPics fixMongo">
            <img className="img-fluid rounded img-thumbnail noBorder mongoCenter" src={seventhPic} alt="Mongodb"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder mongooseCenter" src={eighthPic} alt="Mongoose"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder mysqlCenter" src={ninthPic} alt="Mysql"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder sequelizeCenter" src={tenthPic} alt="Sequelize"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder mernCenter" src={eleventhPic} alt="Mern"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder gitCenter" src={twelfthPic} alt="Git"></img>
          </div>
        
        </div>

        <div className="firstLogoCont">
        
          <div className="img-fluid rounded img-thumbnail allPics fixAjax">
            <img className="img-fluid rounded img-thumbnail noBorder ajaxCenter" src={thirteenthPic} alt="Ajax"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder JsonCenter" src={fourteenthPic} alt="Json"></img>
          </div>
          
          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder restCenter" src={fifteenthPic} alt="Rest API"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder npmCenter" src={sixteenthPic} alt="NPM"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder yarnCenter" src={seventeenthPic} alt="Yarn"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder terminalCenter" src={eigthteenthPic} alt="Terminal"></img>
          </div>
        
        </div>

        <div className="firstLogoCont">
        
          <div className="img-fluid rounded img-thumbnail allPics fixHeroku">
            <img className="img-fluid rounded img-thumbnail noBorder herokuCenter" src={ninteenthPic} alt="Heroku"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder handlebarsCenter" src={twentiethPic} alt="Handlebars"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder jqueryCenter" src={twentyfirstPic} alt="jQuery"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder photoshopCenter" src={twentysecondPic} alt="Photoshop"></img>
          </div>

          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder illustratorCenter" src={twentythirdPic} alt="Illustrator"></img>
          </div>
          
          <div className="img-fluid rounded img-thumbnail allPics">
            <img className="img-fluid rounded img-thumbnail noBorder indesignCenter" src={twentyfourthPic} alt="Indesign"></img>
          </div>

        </div>

      <div className="api-toggle">
          <Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}><i className= "animated infinite bounce slower fas fa-angle-down forAboutPage4"></i></Link>
      </div>

      </div>

      <div className="apiRandom test3">
        
        <div className="putApiHere">
          <h1>Here's a Random Famous Quote API!</h1>
          <h3>Using AJAX, Axios & JSON:</h3>
          <p className="quoteStyle"><strong>Quote:</strong> {this.state.randomFact.quote}</p>
          <p className="authorStyle"><strong>Author:</strong> {this.state.randomFact.author}</p>
        </div>

        <div className="projects-toggle">
          <Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}><i onClick={this.checkStateOf} className={this.state.clicked === true ? "animated infinite bounce slower fas fa-angle-up forAboutPage3" : "animated infinite bounce slower fas fa-angle-down forAboutPage4"}></i></Link>
        </div>

      </div>

      <div className="myProjects test4">
        
        <h1 className="projectsHeader">My Projects!</h1>

        <div className="container-a1">
          
          <ul className="caption-style-1">
            
            <li>
      
              <a href="https://my-pain-pal.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="one" src={projectOne} alt="Project 1"></img>
              				<div className="caption">
					<div className="blur"></div>
					<div className="caption-text">
						<h1>My Pain Pal</h1>
						<p>Built with Javascript, HTML5, CSS3, Node.js, Express.js, Sequelize, MySQL, JQuery, Bootstrap, HandleBars, Session, Routes, NPM, MVC, Body Parser, Path, JSON, AJAX & REST API.</p>
					</div>
                </div>
                </a>
            </li>
            <li>
        
              <a href="http://danibyte.co/" target="_blank" rel="noopener noreferrer"><img className="two" src={projectTwo} alt="Project 2"></img>
              				<div className="caption">
					<div className="blur"></div>
					<div className="caption-text">
						<h1>My Portfolio Website</h1>
						<p>Full Stack MERN website with an API. Built with React, JSX, MongoDB, Mongoose, Express.js, Javascript,  Node.js, CSS3, Routes, Body Parser, YARN, Path, JSON, AJAX, Bootstrap, & REST API.</p>
					</div>
                </div>
                </a>
            </li>
            <li>

              <a href="https://tluczak112.github.io/project_1/" target="_blank" rel="noopener noreferrer"><img className="three" src={projectThree} alt="Project 3"></img>
              				<div className="caption">
					<div className="blur"></div>
					<div className="caption-text">
						<h1>MTL - Music Tickets Lyrics</h1>
						<p>Built with JQuery, API, SVG, Materialize, Javascript, CSS3, & HTML5.</p>
					</div>
                </div>
                </a>
            </li>
            <li>

              <a href="https://nyt-ds.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="four" src={projectFour} alt="Project 4"></img>
              				<div className="caption">
					<div className="blur"></div>
					<div className="caption-text">
						<h1>New York Times Scraper</h1>
						<p>Built with Axios, React, Node.js, Express.js, Javascript, REST API, Routes, Router, JSX, MongoDB, Mongoose, Body Parser, Path, HTML5 & CSS3.</p>
					</div>
                </div>
                </a>
            </li>
            
              </ul>
          
        </div>



        <div className="to-top-toggle">
        <i onClick={this.goToTop} className="animated infinite bounce slower fas fa-angle-up forAboutPage3"></i>
              </div>
              
            


      </div>

    </div>

    
       );
  }
}


export default About;
