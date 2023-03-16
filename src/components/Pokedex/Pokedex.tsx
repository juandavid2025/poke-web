import { useContext } from "react";
import PokedexContext from "../../store/pokedex-context";
import { Pokemon } from "../../model/pokemon";
import PokedexPokeItem from "./PokedexPokeItem/PokedexPokeItem";

import styles from "./Pokedex.module.css";

const totalNumberOfPokemons = 150;

const Pokedex = () => {
  const ctx = useContext(PokedexContext);

  const completePokedexArray: (Pokemon | undefined)[] = [];

  for (let i = 0; i < totalNumberOfPokemons; i++) {
    const pokemonOnPosition = ctx.pokedex.find((poke) => poke.id === i + 1);

    if (pokemonOnPosition) {
      completePokedexArray.push(pokemonOnPosition);
    } else {
      completePokedexArray.push(undefined);
    }
  }

  return (
    <div className={styles.pokedex}>
      {completePokedexArray.map((item, index) => (
        <PokedexPokeItem key={`pokedex-${index}`} pokemon={item} />
      ))}
    </div>
  );
};

export default Pokedex;
