import React from "react";
import "./Pokeball.css";

const Pokeball = () => {
  return (
    <>
      <div className="pokeball-container">
        <div className="center-circle"></div>
        <div className="top-half-circle half-circle"></div>
        <div className="bottom-half-circle half-circle"></div>
      </div>
    </>
  );
};

export default Pokeball;
