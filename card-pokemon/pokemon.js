import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`

const PokemonName = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
`

const PokemonInfo = styled.p`
  font-size: 20px;
  margin-top: 20px;
`

const Pokemon = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = React.useState(null)

    React.useEffect(() => {
        async function fetchPokemon() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemon(response.data)
        }

        fetchPokemon()
    }, [id])

    if (!pokemon) {
        return <div>Loading...</div>
    }

    return (
        <PokemonContainer>
            <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonInfo>Height: {pokemon.height}</PokemonInfo>
            <PokemonInfo>Weight: {pokemon.weight}</PokemonInfo>
            <PokemonInfo>Types: {pokemon.types.map(type => type.type.name).join(', ')}</PokemonInfo>
        </PokemonContainer>
    )
}

export default Pokemon
