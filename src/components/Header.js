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

const Header = ({ handleLogout }) => {
  return (
    <>
      {/* DESKTOP */}
      <div className={styles.container__fluid}>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <div className={styles.header__logo}>
              <Link to="/" exact>
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
              </ul>
            </div>
            <button
              className={styles.header__navigaton__secondary__button}
              onClick={handleLogout}
            >
              Desconnectar
            </button>
            <Link to="/add">
              <Button text="Afegeix" />
            </Link>
          </div>
        </div>
      </div>
      {/* MOBILE */}

      <div className={styles.container__searchBar}>
        <Link to="/" onlyActiveOnIndex>
          <img src={logo} alt="Logo"></img>
        </Link>
        <SearchPage className={styles.mobile__searchBar} />
      </div>

      <div className={styles.container__mobile}>
        <div className={styles.mobile__tabbar}>
          <div className={styles.mobile__tabbar__option}>
            <NavLink
              className={styles.mobile__tabbar__option}
              activeClassName={styles.active__page__mobile}
              to="/"
              exact
            >
              <img src={IconHome} alt="Logo inici"></img>
              <div className={styles.mobile__tabbar__option__title}>Inici</div>
            </NavLink>
          </div>
          <NavLink
            className={styles.mobile__tabbar__option}
            activeClassName={styles.active__page__mobile}
            to="/favs"
          >
            <img src={IconFavs} alt="Logo favs"></img>
            <p className={styles.mobile__tabbar__option__title}>Favorits</p>
          </NavLink>
          <NavLink
            className={styles.mobile__tabbar__option}
            activeClassName={styles.active__page__mobile}
            to="/add"
          >
            <img src={IconPlus} alt="Logo afegir"></img>
            <p className={styles.mobile__tabbar__option__title}>Afegir</p>
          </NavLink>
          <NavLink
            className={styles.mobile__tabbar__option}
            activeClassName={styles.active__page__mobile}
            to="/chat"
          >
            <img src={IconChat} alt="Logo missatges"></img>
            <p className={styles.mobile__tabbar__option__title}>Missatges</p>
          </NavLink>
          <NavLink
            className={styles.mobile__tabbar__option}
            activeClassName={styles.active__page__mobile}
            to="/profile"
          >
            <img src={IconProfile} alt="Logo perfil"></img>
            <p className={styles.mobile__tabbar__option__title}>Perfil</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
