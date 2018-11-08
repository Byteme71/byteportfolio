import React from "react";
import axios from "axios";
import "./Contact.css";
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Contact extends React.Component {
   
  state = {
    scroll: false,
    contactsToSave: {
      name: "",
      email: "",
      message: ""
    }
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

  //regex for email ^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$//


  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };


  submitContact = (event) => {
    event.preventDefault();
    document.location.reload()

      console.log("this is the name", this.state.name)
      console.log("this is the email", this.state.email)
      console.log("this is the message", this.state.message)

    let saveName = this.state.name;
    let saveEmail = this.state.email;
    let saveMessage = this.state.message;

      this.setState({
        contactsToSave:{
        name: saveName,
        email: saveEmail,
        message: saveMessage,
        }
      },()=> {
        axios.post("/api/contact", this.state.contactsToSave).then(response=>{
          if (response){
            console.log("contact saved")
          }
        }).catch(err=>{
          console.log("error", err)
        }) 
      })
  }

  render() {
    return (
      <div>
        <div className="contactMe">
          <div className="card">
            <div className="card-body cardEdit">
              
              <h1 className="card-title">Lets keep in touch!</h1>
              <h6 className="card-subtitle mb-2 text-muted">Made with MongoDB, Mongoose & Axios. </h6>
              <form className="form" onSubmit={this.submitContact}>
                <div className="form-group">
                  <input
                value={this.state.value}
                name="name"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter your name!"
                className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input value={this.state.value} name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter your email!"
                className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea value={this.state.value} name="message" onChange={this.handleInputChange} type="text" placeholder="Write me a message!" className="form-control messageBox" rows="3"></textarea>
                </div>
                <div className="contactButton">
                  <button className="btn btn-outline-primary mt-2">Contact Me!</button>
                </div>
                </form>
              </div>
          </div>

          <div className="footer-toggle-contact">
              <i onClick={this.handleOnClick} className={this.state.scroll === true ? "animated infinite bounce slower fas fa-angle-up forAboutPage3" : "animated infinite bounce slower fas fa-angle-down forAboutPage4"}></i>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Contact;
