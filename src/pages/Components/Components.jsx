import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";

const Components = () => {
  return (
    <div className="components">
      <h1>All Components</h1>
      <ul className="components-list">
        <Link to="/components/avatar" className="navlink">
          <li>Avatar</li>
        </Link>
        <Link to="/components/alert" className="navlink">
          <li>Alert</li>
        </Link>
        <Link to="/components/badge" className="navlink">
          <li>Badge</li>
        </Link>
        <Link to="/components/button" className="navlink">
          <li>Button</li>
        </Link>
        <Link to="/components/card" className="navlink">
          <li>Card</li>
        </Link>
        <Link to="/components/headings" className="navlink">
          <li>Headings</li>
        </Link>
        <Link to="/components/text" className="navlink">
          <li>Text</li>
        </Link>
        <Link to="/components/image" className="navlink">
          <li>Image</li>
        </Link>
      </ul>
    </div>
  );
};

export default Components;
