import { useContext } from "react";
import PokedexContext from "../../store/pokedex-context";
import pokedexIcon from "../../assets/pokedex_icon.png";
import { Pokemon } from "../../model/pokemon";

import styles from "./PokemonCard.module.css";

const pokemonTypeColors = new Map<string, string>([
  ["normal", "#A8A77A"],
  ["fire", "#fc6c6d"],
  ["water", "#76befe"],
  ["electric", "#ffd76f"],
  ["grass", "#49d0b0"],
  ["ice", "#96D9D6"],
  ["fighting", "#C22E28"],
  ["poison", "#A33EA1"],
  ["ground", "#E2BF65"],
  ["flying", "#A98FF3"],
  ["psychic", "#F95587"],
  ["bug", "#A6B91A"],
  ["rock", "#B6A136"],
  ["ghost", "#735797"],
  ["dragon", "#6F35FC"],
  ["dark", "#705746"],
  ["steel", "#B7B7CE"],
  ["fairy", "#D685AD"],
]);

const firstLetterToUpper = (chain: string) => {
  return chain.charAt(0).toUpperCase() + chain.slice(1);
};

const PokemonCard: React.FC<{ pokemon: Pokemon }> = (props) => {
  const ctx = useContext(PokedexContext);

  const pokedexIconClickHandler = () => {
    ctx.addToPokedex(props.pokemon);
  };

  const pokemonColors = props.pokemon.types.map((type) =>
    pokemonTypeColors.get(type)
  );
  const gradient =
    pokemonColors.length > 1
      ? `linear-gradient(${pokemonColors.join(",")})`
      : pokemonColors[0];

  return (
    <div
      className={styles.card}
      style={{
        background: gradient,
      }}
    >
      <img
        src={pokedexIcon}
        alt="pokedex icon"
        className={styles.pokedex_icon}
        onClick={pokedexIconClickHandler}
      />
      <div className={styles.name_types_container}>
        <p className={styles.pokemon_name}>
          {firstLetterToUpper(props.pokemon.name)}
        </p>
        <ul className={styles.pokemon_types_list}>
          {props.pokemon.types.map((type) => (
            <li key={type}>
              <p>{firstLetterToUpper(type)}</p>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={props.pokemon.frontSprite}
        alt="Pokemon Sprite"
        className={styles.pokemon_sprite}
      />
      <div className={styles.stats_container}>
        {props.pokemon.stats.map((stat) => (
          <p key={stat.name}>{`${stat.name}: ${stat.value}`}</p>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;

// normal: "#A8A77A",
// fire: "#fc6c6d",
// water: "#76befe",
// electric: "#ffd76f",
// grass: "#49d0b0",
// ice: "#96D9D6",
// fighting: "#C22E28",
// poison: "#A33EA1",
// ground: "#E2BF65",
// flying: "#A98FF3",
// psychic: "#F95587",
// Bug: "#A6B91A",
// rock: "#B6A136",
// ghost: "#735797",
// dragon: "#6F35FC",
// dark: "#705746",
// steel: "#B7B7CE",
// fairy: "#D685AD",
