import { useContext, useRef, useCallback } from "react";
import { PokemonListContext } from "../../contexts/PokemonListContext";
import usePokemonList from "../../hooks/usePokemonList";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import PokemonItem from "../PokemonItem/PokemonItem";
import "./PokemonList.css";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import { useHistory } from "react-router-dom";

const PokemonList = () => {
  const {
    pokemonList,
    loading,
    error,
    hasMore,
    updateOffset,
    setPokemonOnDisplay,
  } = useContext(PokemonListContext);

  const lastPokemonObserver = useRef();
  const listCenter = useRef();

  const windowDimensions = useWindowDimensions();

  let history = useHistory();

  const getListCenter = useCallback(
    (el) => {
      if (el) {
        listCenter.current = -(el.offsetHeight / 2);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [windowDimensions]
  );

  const handleSetActice = (to) => {
    setPokemonOnDisplay(to);
  };

  const navigateToDetails = (pokemon) => {
    history.push(`/${pokemon}`);
  };

  const lastPokemonElement = useCallback(
    (element) => {
      if (loading) return;
      if (lastPokemonObserver.current) {
        lastPokemonObserver.current.disconnect();
      }

      lastPokemonObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          updateOffset();
        }
      });
      if (element) {
        lastPokemonObserver.current.observe(element);
      }
    },
    [loading, hasMore, updateOffset]
  );

  usePokemonList();

  return (
    <div className="load-err-container">
      <div
        className="pokemon-list-container"
        id="pokemon-list-container"
        ref={getListCenter}
      >
        <PokemonItem isVisible={false} />
        <PokemonItem isVisible={false} />
        <PokemonItem isVisible={false} />

        {pokemonList.map((p, index) => {
          if (pokemonList.length === index + 1) {
            return (
              <div key={index}>
                <ScrollLink
                  to={p.name}
                  spy={true}
                  onSetActive={handleSetActice}
                  containerId="pokemon-list-container"
                  offset={listCenter.current}
                  className="hide-scroll-components"
                />
                <ScrollElement
                  name={p.name}
                  onClick={() => navigateToDetails(p.name)}
                >
                  <PokemonItem
                    innerRef={lastPokemonElement}
                    key={index}
                    index={index + 1}
                    pokemon={p}
                    isVisible={true}
                  />
                </ScrollElement>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <ScrollLink
                  to={p.name}
                  spy={true}
                  onSetActive={handleSetActice}
                  containerId="pokemon-list-container"
                  offset={listCenter.current}
                  className="hide-scroll-components"
                />
                <ScrollElement
                  name={p.name}
                  onClick={() => navigateToDetails(p.name)}
                >
                  <PokemonItem
                    key={index}
                    index={index + 1}
                    pokemon={p}
                    isVisible={true}
                  />
                </ScrollElement>
              </div>
            );
          }
        })}
      </div>
      {loading && <Loading />}
      {error && <Error message={"Couldn't refresh pokemon list"} />}
    </div>
  );
};

export default PokemonList;
