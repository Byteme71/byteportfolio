import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <h5>Stay in touch!</h5>
    <hr/>
    <div className="contactIcons">
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-github"></i>
      <i class="fas fa-file"></i>
      <i class="fab fa-google-plus"></i>
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
