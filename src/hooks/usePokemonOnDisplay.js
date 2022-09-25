import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { PokemonListContext } from "../contexts/PokemonListContext";

const usePokemonOnDisplay = () => {
  const { pokemonOnDisplay, setError } = useContext(PokemonListContext);
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonOnDisplay}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemonDetails(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(e);
      });
    return () => cancel();
  }, [pokemonOnDisplay, setError]);

  return { loading, pokemonDetails };
};

export default usePokemonOnDisplay;
