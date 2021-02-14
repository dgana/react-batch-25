import React from "react";
import "./styles.css";

const Text = ({ text, type, gutterBottom }) => {
  return (
    <p className={`text ${type} ${gutterBottom ? "gutterBottom" : ""}`}>
      {text}
    </p>
  );
};

export default Text;
