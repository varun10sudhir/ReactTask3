import React, { useState } from "react";

function ColorPicker({ colors }) {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBackgroundColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && (
        <p>
          Selected Color: {selectedColor}
          <br />
          <button className="reset-button" onClick={() => setBackgroundColor("")}>
            Reset Background
          </button>
        </p>
      )}
      <div
        className="background"
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
}

export default ColorPicker;