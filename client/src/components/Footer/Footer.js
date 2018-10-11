import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <h5>Stay in touch!</h5>
    <hr/>
    <div className="contactIcons">
      <a href="https://www.linkedin.com/in/shvartsmand/" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/Byteme71" target="_blank"><i class="fab fa-github"></i></a>
      <i class="fas fa-file"></i>
      <a href="https://plus.google.com/u/0/+DanielaShvartsman" target="_blank"><i class="fab fa-google-plus"></i></a>
      <i class="fab fa-codepen"></i>
      <i class="fab fa-medium"></i>
      <i class="fab fa-stack-overflow"></i>
      <i class="fab fa-free-code-camp"></i>
      <i class="fab fa-hackerrank"></i>
    </div>
    <span>Made by Daniela Shvartsman &#169; </span>
  </footer>
);

export default Footer;
