import { Pokemon } from "../model/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export const searchPokemon = async (pokemonName: string) => {
  const request = await fetch(BASE_URL + `/pokemon/${pokemonName}`);

  if (!request.ok) {
    request.status === 404
      ? alert("not found")
      : console.log("Other error found");
    return;
  }
  const data = await request.json();

  return {
    id: data.id,
    name: data.name,
    frontSprite: data.sprites.front_default,
    types: data.types.map(
      (typeItem: { type: { name: string } }) => typeItem.type.name
    ),
    stats: data.stats.map(
      (statItem: { base_stat: number; stat: { name: string } }) => {
        return { name: statItem.stat.name, value: statItem.base_stat };
      }
    ),
  } as Pokemon;
};
