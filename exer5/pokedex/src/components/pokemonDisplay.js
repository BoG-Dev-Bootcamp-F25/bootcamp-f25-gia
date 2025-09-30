import React from 'react';

function PokemonDisplay({ pokemonData }) {
    return (
        <>
            <img
            src={pokemonData.sprites.front_default}
            alt={`Image of ${pokemonData.name}`}
            style={{ border: '2px solid black', width: '300px'}}
            />

            <h2>{pokemonData.name}</h2>
        </>
    );
}

export default PokemonDisplay;