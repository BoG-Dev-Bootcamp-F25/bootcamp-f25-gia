import { NextResponse } from 'next/server';

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
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Pokemon not found' },
        { status: 400 } // 400 for invalid data as requested
      );
    }

    const data = await res.json();

    // required fields
    const pokemonData = {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map((typeInfo: any) => typeInfo.type.name),
    };

    return NextResponse.json(pokemonData, { status: 200 });
  } catch (error) {
    // any other error handler
    console.error(error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}