import pokemonTitleImage from "../../assets/pokemon.png";

import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <img
        alt="Pokemon Yellow Title"
        src={pokemonTitleImage}
        className={styles.title_image}
      />
      <nav>
        <ul className={styles.nav_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.link_active : ""}`
              }
            >
              Catch
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pokedex"
              className={({ isActive }) =>
                `${styles.nav_link} ${styles.pokedex_link} ${
                  isActive ? styles.pokedex_active : ""
                }`
              }
            >
              Pokedex
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
