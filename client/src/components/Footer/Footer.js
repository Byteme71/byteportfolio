import React from "react";
import "./Footer.css";
import ReactModal from 'react-modal';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom'
import resume from "../../photos/Daniela-Shvartsman-Resume-2018.jpg";


class Footer extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }


// const Footer = () => (
   render () {
  return (
  <footer className="footer">
    <h5>Stay in touch!</h5>
    <hr/>
    <div className="contactIcons">
      <a href="https://www.linkedin.com/in/shvartsmand/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/Byteme71" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
      <i class="fas fa-file resumeOpener" onClick={this.handleOpenModal}></i>
        <ReactModal 
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
           contentLabel="Minimal Modal Example"
        >
          <img className="resumeStyle" src={resume} alt="Resume"/>
          <div className="centerClose">
            <button type="button" className="btn btn-outline-info" onClick={this.handleCloseModal}>Close Resume</button>
          </div>
        </ReactModal>
      <a href="https://plus.google.com/u/0/+DanielaShvartsman" target="_blank" rel="noopener noreferrer"><i class="fab fa-google-plus"></i></a>
      <a href="https://codepen.io/byteme71/#" target="_blank" rel="noopener noreferrer"><i class="fab fa-codepen"></i></a>
      <a href="https://medium.com/@shvartsmand" target="_blank" rel="noopener noreferrer"><i class="fab fa-medium"></i></a>
      <a href="https://stackexchange.com/users/13428720/daniela-shvartsman" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow"></i></a>
      <a href="https://www.freecodecamp.org/byteme71" target="_blank" rel="noopener noreferrer"><i class="fab fa-free-code-camp"></i></a>
      <a href="https://www.hackerrank.com/Shvartsmand" target="_blank" rel="noopener noreferrer"><i class="fab fa-hackerrank"></i></a>
    </div>
    <span>Made by Daniela Shvartsman &#169; </span>
    </footer>
// );
    );
  }
}

const props = {};

ReactDOM.render(<Footer {...props} />, document.getElementById('root'))

export default Footer;
