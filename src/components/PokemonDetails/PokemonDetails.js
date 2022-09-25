import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import PokemonImage from "../PokemonImage/PokemonImage";

const PokemonDetails = () => {
  let { pokemon } = useParams();
  const { pokemonData, loading, error } = usePokemonDetails(pokemon);

  return (
    <>
      {loading ? (
        <div className="pd-loading">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container">
          <PokemonImage
            loading={loading}
            error={error}
            pokemonDetails={pokemonData}
            pokemonOnDisplay={pokemon}
          />
          <div className="folders">
            <details>
              <summary>Moves</summary>
              <div className="details-text">
                {pokemonData.moves.map(
                  ({ move, version_group_details }, index) => {
                    return (
                      <div className="inside-folder" key={index}>
                        <div>{move.name}</div>
                        <div>
                          [Level {version_group_details[0].level_learned_at}]
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </details>
            <details>
              <summary>Abilities</summary>
              <div className="details-text">
                {pokemonData.abilities.map(({ ability, is_hidden }, index) => {
                  return (
                    <div className="inside-folder" key={index}>
                      <div>{ability.name}</div>
                      {is_hidden && <div>[HIDDEN]</div>}
                    </div>
                  );
                })}
              </div>
            </details>
            <details>
              <summary>Stats</summary>
              <div className="details-text">
                {pokemonData.stats.map(({ base_stat, stat }, index) => {
                  return (
                    <div className="inside-folder" key={index}>
                      <div>{stat.name}</div>
                      <div>{base_stat}</div>
                    </div>
                  );
                })}
              </div>
            </details>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
