import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
        setPokemonData(null);
      }
    };
  
    fetchPokemon();
  }, [pokemonId]);


  return (

    <div className='App'>
      <h1>Exercise 5 - PokeDex!</h1>

      {pokemonData ? (
        <>
          <img
            src={pokemonData.sprites.front_default}
            alt={`Image of ${pokemonData.name}`}
            style={{ border: '2px solid black', width: '200px'}}
          />

          <h2>{pokemonData.name}</h2>
        </>
      ) : (
        <p>Loading Pokémon...</p>
      )}
    </div>
  );
}

export default App;
