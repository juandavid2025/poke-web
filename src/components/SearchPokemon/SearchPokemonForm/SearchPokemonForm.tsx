import { useContext, useRef } from "react";
import PokedexContext from "../../../store/pokedex-context";

import { searchPokemon } from "../../../util/requests";

import styles from "./SearchPokemonForm.module.css";

const SearchPokemonForm = () => {
  const ctx = useContext(PokedexContext);
  const pokeNameInputRef = useRef<HTMLInputElement>(null);

  const searchPokemonHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const searchFunction = async () => {
      if (isFinite(+pokeNameInputRef.current!.value)) {
        alert("Not numbers please");
        pokeNameInputRef.current!.value = "";
        return;
      }
      const pokemon = await searchPokemon(pokeNameInputRef.current!.value);

      if (pokemon) {
        ctx.setSearchedPokemon(pokemon);
      }
    };
    searchFunction();
  };

  return (
    <>
      <form onSubmit={searchPokemonHandler} className={styles.form}>
        <label htmlFor="pokeName">Search your pokemon</label>
        <input
          type="text"
          name="pokemonName"
          id="pokeName"
          placeholder="ex: picachu"
          ref={pokeNameInputRef}
        />
        <button className={styles.search_btn}>Search &rarr;</button>
      </form>
    </>
  );
};

export default SearchPokemonForm;
