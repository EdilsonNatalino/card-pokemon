import React from 'react'
import './card.css'

const Card = ({ pokemon, onClick }) => {
    return (
        <div className='card' onClick={onClick}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
        </div>
    )
}

export default Card



