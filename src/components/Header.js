import React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./Buttons/ButtonNavBar"; // Component Botó
import SearchPage from "./SearchPage"; // Component de Cerca
import styles from "./Header.module.scss"; // CSS especific del component
import "./App.module.scss"; // Reset i CSS general
import logo from "../images/Logo/Logo.svg";
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
              <Link to="/">
                <img src={logo} alt="Logo"></img>
              </Link>
            </div>
            <SearchPage className={styles.header__searchBar} />
          </div>
          <div className={styles.header__right}>
            <div className={styles.header__navigationBar}>
              <ul className={styles.header__navigationBar__llista}>
                <NavLink
                  to="/chat"
                  className={styles.header__navigation__llista__item}
                  activeClassName={styles.active__page}
                >
                  <li>Missatges</li>
                </NavLink>
                <NavLink
                  to="/profile"
                  className={styles.header__navigation__llista__item}
                  activeClassName={styles.active__page}
                >
                  <li>Perfil</li>
                </NavLink>
                <NavLink
                  to="/favs"
                  className={styles.header__navigation__llista__item}
                  activeClassName={styles.active__page}
                >
                  <li>Favorits</li>
                </NavLink>
                <NavLink
                  to="/login"
                  className={styles.header__navigation__llista__item}
                  activeClassName={styles.active__page}
                >
                  <li>Accedir</li>
                </NavLink>
              </ul>
            </div>
            <Link to="/add">
              <Button text="Afegeix" />
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}

      <div className={styles.container__searchBar}>
        <Link to="/">
          <img src={logo} alt="Logo"></img>
        </Link>
        <SearchPage className={styles.mobile__searchBar} />
      </div>

      <div className={styles.container__mobile}>
        <div className={styles.mobile__tabbar}>
          <div className={styles.mobile__tabbar__option}>
            <Link to="/">
              <img src={IconHome} alt="Logo inici"></img>
              <div className={styles.mobile__tabbar__option__title}>Inici</div>
            </Link>
          </div>
          <Link to="/favs">
            <div className={styles.mobile__tabbar__option}>
              <img src={IconFavs} alt="Logo favs"></img>
              <p className={styles.mobile__tabbar__option__title}>Favorits</p>
            </div>
          </Link>
          <Link to="/add">
            <div className={styles.mobile__tabbar__option}>
              <img src={IconPlus} alt="Logo afegir"></img>
              <p className={styles.mobile__tabbar__option__title}>Afegir</p>
            </div>
          </Link>
          <Link to="/chat">
            <div className={styles.mobile__tabbar__option}>
              <img src={IconChat} alt="Logo missatges"></img>
              <p className={styles.mobile__tabbar__option__title}>Missatges</p>
            </div>
          </Link>
          <Link to="/profile">
            <div className={styles.mobile__tabbar__option}>
              <img src={IconProfile} alt="Logo perfil"></img>
              <p className={styles.mobile__tabbar__option__title}>Perfil</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
