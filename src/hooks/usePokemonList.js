import axios from 'axios'
import { useEffect, useContext} from 'react'
import { PokemonListContext } from '../contexts/PokemonListContext'
import { LIMIT_INCREMENT } from '../contexts/PokemonListActions'

const usePokemonList = () => {
    const {
        offset,
        setLoading,
        setError,
        setHasMore,
        updatePokemonList,
        resetPokemonList
    } = useContext(PokemonListContext)

    useEffect(() => {
        resetPokemonList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon',
            params: { offset, limit: LIMIT_INCREMENT }
        }).then((res) => {
            updatePokemonList(res.data.results)
            setHasMore(parseInt(res.data.count) - offset > 0)
            setLoading(false)
        }).catch((err) => {
            setError(true)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset])
}
export default usePokemonList
