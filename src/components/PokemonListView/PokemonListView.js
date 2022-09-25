import React from "react";
import PokemonList from "../PokemonList/PokemonList";
import { PokemonListProvider } from "../../contexts/PokemonListContext";
import PokemonSideImage from "../PokemonSideImage/PokemonSideImage";
import "./PokemonListView.css";

const PokemonListView = () => {
  return (
    <PokemonListProvider>
      <div className="pokemon-list-view-container">
        <PokemonSideImage />
        <PokemonList />
      </div>
    </PokemonListProvider>
  );
};

export default PokemonListView;
