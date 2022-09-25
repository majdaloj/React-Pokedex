import Error from "../Error/Error";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Types from "../Types/Types";
import "./PokemonImage.css";


const PokemonSideImage = ({ loading, pokemonDetails, error, pokemonOnDisplay }) => {
    return (
      <div className="pokemon-side-image-container">
        <div className="pokemon-display-details">
          {!error ? (
            <p>{!loading && pokemonDetails.name}</p>
          ) : (
            <Error message={`Could not load ${pokemonOnDisplay}`} />
          )}
        </div>
        <div className="pokemon-image">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          {loading ? (
            <LoadingSpinner height={240} width={240} />
          ) : (
            <img
              className="psi-sprite"
              src={pokemonDetails.sprites.front_default}
              alt={`${pokemonDetails.name} sprite`}
            />
          )}
        </div>
        <div className="pokemon-display-details taller">
          Types:
          {!loading && <Types typesCollection={pokemonDetails.types} />}
        </div>
      </div>
    );
  };

  export default PokemonSideImage;