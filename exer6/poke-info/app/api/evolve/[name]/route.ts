import { NextResponse } from 'next/server';

function findNextEvolution(chain: any, currentName: string): string | null {
  if (chain.species.name === currentName) {
    // check for evolution
    if (chain.evolves_to.length > 0) {
      return chain.evolves_to[0].species.name;
    } else {
      // final form yay
      return currentName;
    }
  }

  for (const nextNode of chain.evolves_to) {
    const nextEvolution = findNextEvolution(nextNode, currentName);
    if (nextEvolution) {
      return nextEvolution;
    }
  }

  // not found in this branch
  return null;
}

export async function GET(
  request: Request,
  context: { params: { name: string } }
) {
  // debugging rah
  console.log('CONTEXT CHECK');
  console.log(context.params);

  const params = await context.params;
  const pokemonName = params.name.toLowerCase();

  try {
    const speciesRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    );
    if (!speciesRes.ok) {
      return NextResponse.json(
        { error: 'Pokemon species not found' },
        { status: 400 }
      );
    }
    const speciesData = await speciesRes.json();
    const evoChainUrl = speciesData.evolution_chain.url;

    // evolution chain data
    const evoChainRes = await fetch(evoChainUrl);
    if (!evoChainRes.ok) {
      throw new Error('Failed to fetch evolution chain');
    }
    const evoData = await evoChainRes.json();

    // next evolution ya
    const nextEvolutionName = findNextEvolution(evoData.chain, pokemonName);

    if (nextEvolutionName) {
      return NextResponse.json(
        {
          current_pokemon: pokemonName,
          next_evolution: nextEvolutionName,
        },
        { status: 200 }
      );
    } else {
      // fallback for tweaking
      return NextResponse.json(
        { error: 'Could not find evolution path' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}