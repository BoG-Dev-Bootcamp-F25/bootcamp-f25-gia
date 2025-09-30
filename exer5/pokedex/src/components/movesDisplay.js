import React from 'react';
import './styles/movesDisplay.css'

function MovesDisplay({ pokemonData }) {
    return (
        <div className="moves-panel">
            <h4 id="moves-title">Moves</h4>
            <div className="moves-list">
            {pokemonData.moves.map(moveObject => (
                // use the move name as the unique key
                <p key={moveObject.move.name}>
                    {moveObject.move.name}
                </p>
                ))}
            </div>
        </div> 
    );
}

export default MovesDisplay;