import React from "react";
import "./Navbar.css";
import logo from "../../assets/sigma.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-nav">
        <img src={logo} alt="logo" />
        <h2>Sigma-UI</h2>
      </div>
      <div className="right-nav">
        <a href="/">Home</a>
        <a href="/">Documentation</a>
        <a
          href="https://github.com/SudiptaChakraborty51/sigma-ui"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
