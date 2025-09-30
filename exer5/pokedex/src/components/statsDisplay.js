import React from 'react';
import './styles/statsDisplay.css'

function StatsDisplay({ pokemonData }) {
    return (
        <div className="stats-panel">
            <h4 id="stats-title">Info</h4>
            <div className="general-stats">
                <p>height: {pokemonData.height / 10}m</p>
                <p>weight: {pokemonData.weight / 10}kg</p>
            
                {pokemonData.stats.map(statObject => (
                    <p key={statObject.stat.name}>
                        {statObject.stat.name}: {statObject.base_stat}
                    </p>
                ))}
            </div>
        </div> 
    );
}

export default StatsDisplay;