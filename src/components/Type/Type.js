import React from "react";
import typeColours from "../../assets/type-colours.json";
import "./Type.css";

function Type({ typeObject }) {
  return (
    <span
      className="type-badge"
      style={{ backgroundColor: typeColours[typeObject.type.name] }}
    >
      {typeObject.type.name}
    </span>
  );
}

export default Type;
