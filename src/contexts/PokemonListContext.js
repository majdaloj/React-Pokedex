import React, { createContext, useReducer } from 'react'
import PokemonListReducer from './PokemonListReducer'
import { POKEMON_LIST_ACTIONS } from './PokemonListActions'

const initialState = {
    offset: 0,
    pokemonList: [],
    error: false,
    loading: true,
    hasMore: true,
    pokemonOnDisplay: "bulbasaur"
}

export const PokemonListContext = createContext(initialState)

export const PokemonListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PokemonListReducer, initialState)

    const setLoading = (isLoading) => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.SET_LOADING,
            payload: isLoading
        }) 
    }

    const setError = (hasError) => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.SET_ERROR,
            payload: hasError
        }) 
    }

    const setHasMore = (newHasMore) => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.SET_HAS_MORE,
            payload: newHasMore
        }) 
    }

    const updateOffset = () => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.UPDATE_OFFSET
        })
    }

    const updatePokemonList = (newPokemon) => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.UPDATE_POKEMON_LIST,
            payload: newPokemon
        })
    }

    const resetPokemonList = () => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.RESET_POKEMON_LIST,
        })
    }

    const setPokemonOnDisplay = (pokemonToDisplay) => {
        dispatch({
            type: POKEMON_LIST_ACTIONS.SET_POKEMON_ON_DISPLAY,
            payload: pokemonToDisplay
        })
    }

    return (
        <PokemonListContext.Provider value={{
            offset: state.offset,
            pokemonList: state.pokemonList,
            error: state.error,
            loading: state.loading,
            hasMore: state.hasMore,
            pokemonOnDisplay: state.pokemonOnDisplay,
            updateOffset,
            updatePokemonList,
            setError,
            setHasMore,
            setLoading,
            resetPokemonList,
            setPokemonOnDisplay,
        }}>
            {children}
        </PokemonListContext.Provider>
    )
}