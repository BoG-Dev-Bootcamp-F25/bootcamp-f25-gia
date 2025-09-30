import React from 'react';

function StatsDisplay({ pokemonData }) {
    return (
        <div className="stats-panel">
            <h4>Info</h4>
            <p>height: {pokemonData.height / 10}m</p>
            <p>weight: {pokemonData.weight / 10}kg</p>
        
            {pokemonData.stats.map(statObject => (
                <p key={statObject.stat.name}>
                    {statObject.stat.name}: {statObject.base_stat}
                </p>
            ))}
        </div> 
    );
}

export default StatsDisplay;