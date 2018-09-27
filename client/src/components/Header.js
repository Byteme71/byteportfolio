// import React from "react";
// import {Link} from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="mb-4 text-cetnter">
//       <h1>New York Times</h1>

//       <Link to="/" className="text-center badge badge-primary">Home</Link>
//       {" "}
//       <Link to="/savedArticles" className="text-center badge badge-primary">Saved</Link>
//     </header>
//   );
// };

// export default Header;



import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" 
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
