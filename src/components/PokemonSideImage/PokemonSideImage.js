import React, { useContext } from "react";
import usePokemonOnDisplay from "../../hooks/usePokemonOnDisplay";
import { PokemonListContext } from "../../contexts/PokemonListContext";
import PokemonImage from "../PokemonImage/PokemonImage";

const PokemonSideImage = () => {
  const { loading, pokemonDetails } = usePokemonOnDisplay();
  const { error, pokemonOnDisplay } = useContext(PokemonListContext);

  return (
    <PokemonImage
      loading={loading}
      pokemonDetails={pokemonDetails}
      error={error}
      pokemonOnDisplay={pokemonOnDisplay}
    />
  );
};

export default PokemonSideImage;
