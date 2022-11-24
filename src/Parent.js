import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
 const handleChangedColor = (newColor) => {
     newColor = getRandomColor();
    setColor(newColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangedColor} />
      <Child />
    </div>
  );
}

export default Parent;
