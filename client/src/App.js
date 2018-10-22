import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";


const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </div>
  </Router>
);

export default App;
