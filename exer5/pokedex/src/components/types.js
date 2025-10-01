import React from 'react';
import './styles/types.css'

function Types({ pokemonData }) {
    const typeColors = {
        normal: '#A8A77A', fire: '#EE8130', water: '#6390F0',
        electric: '#F7D02C', grass: '#7AC74C', ice: '#96D9D6',
        fighting: '#C22E28', poison: '#A33EA1', ground: '#E2BF65',
        flying: '#A98FF3', psychic: '#F95587', bug: '#A6B91A',
        rock: '#B6A136', ghost: '#735797', dragon: '#6F35FC',
        dark: '#705746', steel: '#B7B7CE', fairy: '#D685AD',
    };

    return (
        <div className="types">
            <h4 id="types-header">Types:</h4>
            <div>
                {pokemonData.types.map(typeObject => (
                    <p key={typeObject.type.name} className="type-badge" style={{ backgroundColor: typeColors[typeObject.type.name] }}>
                        {typeObject.type.name}
                    </p>
                ))}
            </div>
        </div> 
    );
}

export default Types;