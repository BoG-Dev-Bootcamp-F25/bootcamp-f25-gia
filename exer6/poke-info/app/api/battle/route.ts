import { NextResponse } from 'next/server';

async function getPokemonTotalStats(name: string): Promise<number> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error(`Pokemon not found: ${name}`);
  }
  const data = await res.json();
  
  // sum basestat values
  const totalStats = data.stats.reduce(
    (sum: number, stat: any) => sum + stat.base_stat,
    0
  );
  return totalStats;
}

export async function POST(request: Request) {
  try {
    // go parse girl
    const body = await request.json();
    const { pokemon1, pokemon2 } = body;

    if (!pokemon1 || !pokemon2) {
      return NextResponse.json(
        { error: 'Missing pokemon1 or pokemon2 in request body' },
        { status: 400 }
      );
    }

    const [stats1, stats2] = await Promise.all([
      getPokemonTotalStats(pokemon1.toLowerCase()),
      getPokemonTotalStats(pokemon2.toLowerCase()),
    ]);

    let winner = null;
    if (stats1 > stats2) {
      winner = pokemon1;
    } else if (stats2 > stats1) {
      winner = pokemon2;
    } else {
      winner = 'draw';
    }

    return NextResponse.json(
      {
        winner: winner,
        [pokemon1]: stats1,
        [pokemon2]: stats2,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    // specific error handler
    if (error.message.includes('Pokemon not found')) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    // generic server error handler
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}