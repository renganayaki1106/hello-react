import React, { useState } from "react";

const DynamicColor = () => {
  const [color, setColor] = useState("white");
  const [btnColors, setBtnColors] = useState("white");

  const changeColor = (col) => {
    setColor(col);
  };

  const colors = ["lightblue", "lightgreen", "lightcoral"];

  return (
    <>
      <div className="all-app" style={{ backgroundColor: color }}>
        <h1>Dynamic Color App</h1>
        <button className="btn" onClick={() => changeColor("blue")}>
          blue
        </button>
        <button className="btn" onClick={() => changeColor("red")}>
          red
        </button>
        <button className="btn" onClick={() => changeColor("orange")}>
          orange
        </button>
        <button className="btn" onClick={() => changeColor("green")}>
          green
        </button>

        <hr style={{margin:'30px'}} />

        <h1>Button background Changing App</h1>

        <div>
          {colors.map((c) => (
            <button
              key={c}
              style={{
                backgroundColor: btnColors === c ? c : "white",
                color: btnColors === c ? "black" : "gray",
                border: "1px solid gray",
                margin: "5px",
                padding: "10px 15px",
                cursor: "pointer",
              }}
              onClick={() => setBtnColors(c)}
            >
              {c.replace("light", "")}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default DynamicColor;
