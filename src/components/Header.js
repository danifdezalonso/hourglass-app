import React from "react";
import Button from "./Buttons/ButtonNavBar"; // Component Botó
import SearchPage from "./SearchPage"; // Component de Cerca
import styles from "./Header.module.scss"; // CSS especific del component
import "./App.module.scss"; // Reset i CSS general
import logo from "../images/Logo/LogoFP.png";
import IconPlus from "../images/Icon/plus_icon.svg";
import IconChat from "../images/Icon/plus_chat.svg";
import IconProfile from "../images/Icon/plus_profile.svg";
import IconHome from "../images/Icon/plus_home.svg";
import IconFavs from "../images/Icon/plus_heart.svg";

const Header = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className={styles.container__fluid}>
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
            <Button text="Afegeix" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div className={styles.container__mobile}>
        <div className={styles.mobile__tabbar}>
          <div className={styles.mobile__tabbar__option}>
            <img src={IconHome} alt="Logo 1"></img>
            <p className={styles.mobile__tabbar__option__title}>Inici</p>
          </div>
          <div className={styles.mobile__tabbar__option}>
            <img src={IconFavs} alt="Logo 1"></img>
            <p className={styles.mobile__tabbar__option__title}>Favorits</p>
          </div>
          <div className={styles.mobile__tabbar__option}>
            <img src={IconPlus} alt="Logo 1"></img>
            <p className={styles.mobile__tabbar__option__title}>Afegir</p>
          </div>
          <div className={styles.mobile__tabbar__option}>
            <img src={IconChat} alt="Logo 1"></img>
            <p className={styles.mobile__tabbar__option__title}>Missatges</p>
          </div>
          <div className={styles.mobile__tabbar__option}>
            <img src={IconProfile} alt="Logo 1"></img>
            <p className={styles.mobile__tabbar__option__title}>Perfil</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
