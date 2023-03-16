import SearchPokemon from "../components/SearchPokemon/SearchPokemon";
// import SuggestCatches from "../components/SuggestCatches/SuggestCatches";

import styles from "./CatchPage.module.css";

const CatchPage = () => {
  return (
    <main className={styles.main_section}>
      <SearchPokemon />
      {/* <SuggestCatches /> */}
    </main>
  );
};

export default CatchPage;
