import React from "react";
import "./button.css";

export default function Button({ action, text }) {
  return (
    <button className="mainbutton" onClick={action}>
      {text}
    </button>
  );
}
