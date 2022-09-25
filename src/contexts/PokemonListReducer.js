import { POKEMON_LIST_ACTIONS, LIMIT_INCREMENT } from "./PokemonListActions";

const PokemonListReducer = (state, action) => {
  switch (action.type) {
    case POKEMON_LIST_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case POKEMON_LIST_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POKEMON_LIST_ACTIONS.SET_HAS_MORE:
      return {
        ...state,
        hasMore: action.payload,
      };
    case POKEMON_LIST_ACTIONS.UPDATE_OFFSET:
      return {
        ...state,
        offset: state.offset + LIMIT_INCREMENT,
      };
    case POKEMON_LIST_ACTIONS.UPDATE_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.payload],
      };
    case POKEMON_LIST_ACTIONS.RESET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [],
      };
    case POKEMON_LIST_ACTIONS.SET_POKEMON_ON_DISPLAY:
      return {
        ...state,
        pokemonOnDisplay: action.payload,
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
