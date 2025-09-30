import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonDisplay from './components/pokemonDisplay';
import StatsDisplay from './components/statsDisplay';
import Controls from './components/controls';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const URL = "https://pokeapi.co/api/v2/pokemon/"

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`${URL}/${pokemonId}/`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
        setPokemonData(null);
      }
    };
  
    fetchPokemon();
  }, [pokemonId]);

  const handlePrevClick = () => {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1)
    }
  };

  const handleNextClick = () => {
    setPokemonId(pokemonId + 1)
  };


  return (
    <div className='App'>
      <h1>Exercise 5 - PokeDex!</h1>

      <div className="pokedex-container">

        <div className="left-column">
          {pokemonData ? (
            <>
              <PokemonDisplay pokemonData={pokemonData} />
              <Controls
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
              />
            </>
          ) : (
            <p>Loading Pokémon...</p>
          )}
        </div>

        <div className="right-column">
          {pokemonData ? (
            <StatsDisplay pokemonData={pokemonData} />
          ) : (
            <p>Loading stats...</p>
          )}
        </div>

      </div>

    </div>
  );
}

export default App;
