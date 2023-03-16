import { useContext } from "react";
import PokedexContext from "../../store/pokedex-context";
import SearchPokemonForm from "./SearchPokemonForm/SearchPokemonForm";
import PokemonItem from "../PokemonItem/PokemonItem";

const SearchPokemon = () => {
  const ctx = useContext(PokedexContext);
  const foundPokemon = ctx.searchPokemon;

  return (
    <>
      <SearchPokemonForm />
      <PokemonItem pokemon={foundPokemon} />
    </>
  );
};

export default SearchPokemon;
