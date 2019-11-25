import React from "react";
import Tilt from "react-tilt";

export default function Graphics() {
  return (
    <>
      <div className="colorContainer">
        <Tilt
          className="Tilt"
          options={{ max: 25 }}
          style={{ height: 250, width: 250 }}
        >
          <div className="Tilt-inner">
            <div className="color"></div>
          </div>
        </Tilt>
      </div>
    </>
  );
}
