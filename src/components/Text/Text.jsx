import React from "react";
import "./Text.css";

export const Text = ({ size, text, color, textDecoration }) => {
  let fontSize;
  switch (size) {
    case "5xl":
      fontSize = "48px";
      break;
    case "4xl":
      fontSize = "36px";
      break;
    case "3xl":
      fontSize = "30px";
      break;
    case "2xl":
      fontSize = "24px";
      break;
    case "xl":
      fontSize = "20px";
      break;
    case "lg":
      fontSize = "18px";
      break;
    case "md":
      fontSize = "16px";
      break;
    case "sm":
      fontSize = "14px";
      break;
    case "xs":
      fontSize = "12px";
      break;
    default:
      fontSize = "16px";
  }
  return (
    <p
      className="text"
      style={{
        fontSize: fontSize,
        color: color,
        textDecoration: textDecoration,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
