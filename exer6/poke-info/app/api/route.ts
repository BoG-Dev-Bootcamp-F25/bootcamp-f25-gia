import { NextResponse } from 'next/server';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

export async function GET(request: Request) {
  try {
    const speciesRes = await fetch(
      `${POKEAPI_BASE_URL}/pokemon-species?limit=1`
    );
    if (!speciesRes.ok) {
      throw new Error('Failed to fetch Pokemon count');
    }
    const speciesData = await speciesRes.json();
    const count = speciesData.count;

    // get the random ID between 1 and the total count
    const randomId = Math.floor(Math.random() * count) + 1;

    // fetch pokemon w/ ID
    const pokemonRes = await fetch(`${POKEAPI_BASE_URL}/pokemon/${randomId}`);
    if (!pokemonRes.ok) {
      throw new Error('Failed to fetch random Pokemon');
    }
    const data = await pokemonRes.json();

    // get and return the data
    const pokemonData = {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map((typeInfo: any) => typeInfo.type.name),
    };

    return NextResponse.json(pokemonData, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}