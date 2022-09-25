import React, { useContext, useEffect, useState } from "react";
import { PokemonListContext } from "../../contexts/PokemonListContext";
import "./PokemonItem.css";
import Pokeball from "../Pokeball/Pokeball";

const PokemonItem = ({ index, pokemon, innerRef, isVisible }) => {
  const { pokemonOnDisplay } = useContext(PokemonListContext);
  const [classes, setClasses] = useState("item");

  useEffect(() => {
    if (pokemon && pokemonOnDisplay === pokemon.name && isVisible) {
      setClasses("item item-active");
    } else if (pokemon && pokemonOnDisplay === pokemon.name) {
      setClasses("item item-active invisible");
    } else if (isVisible) {
      setClasses("item");
    } else {
      setClasses("item invisible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonOnDisplay]);
  return pokemon ? (
    <div ref={innerRef} className={classes}>
      <Pokeball />
      <p className="index">{index}</p>
      <p className="name">{pokemon.name}</p>
    </div>
  ) : (
    <div className={classes}></div>
  );
};

export default PokemonItem;
