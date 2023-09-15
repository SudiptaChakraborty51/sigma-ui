import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/sigma.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const components = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "headings",
    "text",
    "image",
  ];

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      if (components.includes(searchInput.toLowerCase())) {
        navigate(`/components/${searchInput.toLowerCase()}`);
      } else {
        alert("Sorry, no such component found!");
      }
    }
    setSearchInput("");
  };

  return (
    <nav className="navbar">
      <div className="left-nav" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <h2>Sigma UI</h2>
      </div>
      <div className="middle-nav">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search components..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}><i className="fas fa-search"></i> Search</button>
        </div>
      </div>
      <div className="right-nav">
        <a href="/">Home</a>
        <a href="/components">Components</a>
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
