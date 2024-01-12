import { useEffect, useState } from "react";
import "./RandomColor.css";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorCode(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHEXColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorCode(hex.length)];
    }
    setColor(hexColor);
  }
  function handleRandomRGBColor() {
    const r = randomColorCode(256);
    const g = randomColorCode(256);
    const b = randomColorCode(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (colorType === "rgb") handleRandomRGBColor();
    else handleRandomHEXColor;
  }, [colorType]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="buttons">
        <button onClick={() => setColorType("hex")}>Generate HEX Color</button>
        <button onClick={() => setColorType("rgb")}>Generate RGB Color</button>
        <button
          onClick={
            colorType === "hex" ? handleRandomHEXColor : handleRandomRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          marginTop: "30px",
        }}
      >
        <h3>
          {colorType === "rgb"
            ? "Generating RGB Color"
            : "Generating HEX Color"}
        </h3>
        <br />
        <h1>{color}</h1>
      </div>
    </div>
  );
}
