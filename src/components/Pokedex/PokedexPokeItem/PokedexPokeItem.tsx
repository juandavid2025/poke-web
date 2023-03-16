import pokeballImg from "../../../assets/pokeball.png";
import { Pokemon } from "../../../model/pokemon";
import style from "./PokedexPokeItem.module.css";

const PokedexPokeItem: React.FC<{ pokemon: Pokemon | undefined }> = (props) => {
  const myPokemon = props.pokemon;

  let content = (
    <img src={pokeballImg} alt="pokeball" className={style.pokeImem_img} />
  );

  if (myPokemon) {
    content = (
      <img
        src={myPokemon.frontSprite}
        alt="pokemon sprite"
        className={style.pokeImem_img}
      />
    );
  }

  return <div className={style.pokedex_poke_item}>{content}</div>;
};

export default PokedexPokeItem;
