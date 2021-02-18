import React from "react";
import Button from "./Buttons/ButtonNavBar";
import SearchPage from "./SearchPage";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__llista}>
      <div className="header__logo">Logo</div>
      <SearchPage />
      <div className="header__navigationBar">
        <ul className={styles.header__llista}>
          <li>Missatges</li>
          <li>Perfil</li>
        </ul>
      </div>
      <Button text="Afegeix" />
    </div>
  );
};

export default Header;
