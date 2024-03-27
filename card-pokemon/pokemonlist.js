import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Card from './card'

const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        async function fetchPokemons() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
            setPokemons(response.data.results)
        }

        fetchPokemons()
    }, [offset])

    const handleLoadMore = () => {
        setOffset(offset + 10)
    }

    return (
        <PokemonListContainer>
            {pokemons.map(pokemon => (
                <Link key={pokemon.url} to={`/pokemon/${pokemon.url.split('/')[6]}`}>
                    <Card pokemon={pokemon} />
                </Link>
            ))}
            <button onClick={handleLoadMore}>Carregar mais</button>
        </PokemonListContainer>
    )
}

export default PokemonList
