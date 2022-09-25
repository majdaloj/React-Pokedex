import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const usePokemonDetails = (pokemon) => {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonType, setPokemonType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();

  const getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setPokemonType(res.data.types[0].type.name);
        console.log(res.data);
        setPokemonData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
        history.push("/not-found");
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getPokemon, []);

  return { pokemonData, pokemonType, loading, error };
};

export default usePokemonDetails;
