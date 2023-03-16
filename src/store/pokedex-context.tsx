import React, { useState } from "react";
import { Pokemon } from "../model/pokemon";

const PokedexContext = React.createContext<{
  searchPokemon: Pokemon | null;
  pokedex: Pokemon[];
  addToPokedex: (pokemon: Pokemon) => void;
  removeFromPokedex: (id: number) => void;
  setSearchedPokemon: (pokemon: Pokemon) => void;
}>({
  searchPokemon: null,
  pokedex: [],
  addToPokedex: () => {},
  removeFromPokedex: () => {},
  setSearchedPokemon: () => {},
});

export const PokedexContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<Pokemon | null>(null);

  const addToPokedex = (pokemon: Pokemon) => {
    if (pokedex.findIndex((poke) => poke.id === pokemon.id) === -1) {
      setPokedex((prevState) => [...prevState, pokemon]);
      console.log("added");
    }
  };

  const removeFromPokedex = (id: number) => {
    setPokedex((prevState) => prevState.filter((pokemon) => pokemon.id !== id));
  };

  const setSearchedPokemon = (pokemon: Pokemon) => {
    setSearchPokemon(pokemon);
  };

  return (
    <PokedexContext.Provider
      value={{
        searchPokemon,
        pokedex,
        addToPokedex,
        removeFromPokedex,
        setSearchedPokemon,
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};

export default PokedexContext;
