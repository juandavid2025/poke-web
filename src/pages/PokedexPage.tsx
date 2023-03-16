import Pokedex from "../components/Pokedex/Pokedex";

import styles from "./PokedexPage.module.css";

const PokedexPage = () => {
  return (
    <main className={styles.pokedex_page}>
      <Pokedex />
    </main>
  );
};

export default PokedexPage;
