import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: { params: { type: string } }
) {
  // debugging rah
  console.log('CONTEXT CHECK');
  console.log(context.params);

  const params = await context.params;
  const typeName = params.type.toLowerCase();

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Type not found' },
        { status: 400 }
      );
    }

    const data = await res.json();

    const pokemonList = data.pokemon.map(
      (p: any) => p.pokemon.name
    );

    return NextResponse.json({ pokemon: pokemonList }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}