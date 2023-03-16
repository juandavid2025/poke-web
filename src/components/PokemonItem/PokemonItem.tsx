import React from "react";
import { Pokemon } from "../../model/pokemon";
import pokeballImg from "../../assets/pokeball.png";
import PokemonCard from "../PokemonCard/PokemonCard";

import styles from "./PokemonItem.module.css";

const PokemonItem: React.FC<{ pokemon: Pokemon | null }> = (props) => {
  const pokemonItem = props.pokemon;

  let content = (
    <img
      src={pokeballImg}
      alt="red normal pokeball"
      className={styles.pokeball_img}
    />
  );

  if (pokemonItem) {
    content = <PokemonCard pokemon={pokemonItem} />;
  }

  return <div className={styles.pokemon_item}>{content}</div>;
};

export default PokemonItem;
