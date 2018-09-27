import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
// import Footer from "./components/Footer.js";
import About from "./components/pages/About.js";
// import Home from "./components/pages/Home.js";


const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
