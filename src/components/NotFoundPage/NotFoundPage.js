import React from "react";
import "./NotFoundPage.css";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <img
          className="wobuffet"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
          alt="Wobuffet Sprite"
        />
        <p>404 Not Found</p>
        <div className="decor-circle"></div>
      </div>
      <RouterLink to="/" className="btn-back">
        Back To Home
      </RouterLink>
    </div>
  );
};

export default NotFoundPage;
