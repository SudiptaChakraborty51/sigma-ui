import React from "react";
import "./Navbar.css";
import logo from "../../assets/sigma.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="left-nav" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <h2>Sigma UI</h2>
      </div>
      <div className="right-nav">
        <a href="/">Home</a>
        <a href="/documentation">Documentation</a>
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
