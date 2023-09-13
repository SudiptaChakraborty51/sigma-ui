import React from "react";
import "./Button.css";

export const PrimaryButton = ({ text, bgColor }) => {
  return (
    <button className="btn" style={{ backgroundColor: bgColor }}>
      {text}
    </button>
  );
};

export const OutlineButton = ({ text, color }) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: "transparent",
        color: color,
        border: `1px solid ${color}`,
        transition: "all 0.3s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = color;
        e.target.style.color = "var(--white-color)";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = color;
      }}
    >
      {text}
    </button>
  );
};

export const LinkButton = ({ text, color, targetURL }) => {
  return (
    <a
      href={targetURL}
      target="_blank"
      rel="noreferrer"
      className="link-btn"
      style={{
        color: color,
      }}
    >
      {text}
    </a>
  );
};

export const IconButton = ({ icon, text, bgColor }) => {
  return (
    <button className="icon-btn" style={{ backgroundColor: bgColor }}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export const FloatingButton = ({ icon, bgColor }) => {
  return (
    <button className="floating-btn" style={{ backgroundColor: bgColor }}>
      {icon}
    </button>
  );
};
