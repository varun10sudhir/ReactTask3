import React from "react";
import ColorPicker from "./ColorPicker";
import "./App.css";

function App() {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3399",
    "#33FFFF",
    "#FFD700",     // Gold
    "#7CFC00",     // Lawn Green
    "#8A2BE2",     // Blue Violet
    "#FFA07A",     // Light Salmon
    "#00BFFF",     // Deep Sky Blue
    "cyan",        // Cyan
    "slateblue",   // Slate Blue
    "#FF5733",     // Red
    "#FF4500",     // OrangeRed
    "#FF6347",     // Tomato
    "#FF7F50",     // Coral
    "#FF8C00",     // Dark Orange
    "#33FF57",     // Lime Green
    "#32CD32",     // Lime
    "#00FF00",     // Green
    "#4169E1",     // Royal Blue
    "#0000FF",     // Blue
    "#6495ED",     // Cornflower Blue
    "#808080",     // Gray
    "#D3D3D3",     // Light Gray
    "#A9A9A9",     // Dark Gray
    "#B0E0E6",     // Powder Blue
    "#ADD8E6",     // Light Blue
    "#4682B4",     // Steel Blue
    "#5F9EA0",     // Cadet Blue
    "#2F4F4F",     // Dark Slate Gray
    "#708090",     // Slate Gray
    "#708090",     // Zinc
    "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF3399",
  "#33FFFF",
  "#FFD700",     // Gold
  "#7CFC00",     // Lawn Green
  "#8A2BE2",     // Blue Violet
  "#FFA07A",     // Light Salmon
  "#00BFFF",     // Deep Sky Blue
  "cyan",        // Cyan
  "slateblue",   // Slate Blue
  "#FF5733",     // Red
  "#FF4500",     // OrangeRed
  "#FF6347",     // Tomato
  "#FF7F50",     // Coral
  "#FF8C00",     // Dark Orange
  "#33FF57",     // Lime Green
  "#32CD32",     // Lime
  "#00FF00",     // Green
  "#4169E1",     // Royal Blue
  "#0000FF",     // Blue
  "#6495ED",     // Cornflower Blue
  "#808080",     // Gray
  "#D3D3D3",     // Light Gray
  "#A9A9A9",     // Dark Gray
  "#B0E0E6",     // Powder Blue
  "#ADD8E6",     // Light Blue
  "#4682B4",     // Steel Blue
  "#5F9EA0",     // Cadet Blue
  "#2F4F4F",     // Dark Slate Gray
  "#708090",     // Slate Gray
  "#708090",     // Zinc
  "#800080",     // Purple
  "#9932CC",     // Dark Orchid
  "#663399",     // Rebecca Purple
  "#8B4513",     // Saddle Brown
  "#008000",     // Green
  "#008080",     // Teal
  "#A0522D",     // Sienna
  ];

  return (
    <div className="App">
      <center><h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
      </center>
    </div>
  );
}

export default App;