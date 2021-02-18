import React from "react";
import Button from "./Buttons/ButtonNavBar"; // Component Botó
import SearchPage from "./SearchPage"; // Component de Cerca
import styles from "./Header.module.scss"; // CSS especific del component
import "./App.module.scss"; // Reset i CSS general
import logo from "../images/Logo/LogoFP.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__logo}>
          <img src={logo} alt="Logo"></img>
        </div>
        <SearchPage className={styles.header__searchBar} />
      </div>
      <div className={styles.header__right}>
        <div className={styles.header__navigationBar}>
          <ul className={styles.header__navigationBar__llista}>
            <a href="#">
              <li>Missatges</li>
            </a>
            <a href="#">
              <li>Perfil</li>
            </a>
          </ul>
        </div>
        <Button text="Afegeix servei" />
      </div>
    </div>
  );
};

export default Header;
