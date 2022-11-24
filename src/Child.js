import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, newColor}) {
  const handleClick = () => {
    onChangeColor(newColor);
  };
  return <div className="child" 
  onClick={handleClick}
  style={{ backgroundColor: newColor }} />;
}

export default Child;
