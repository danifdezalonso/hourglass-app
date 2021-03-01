import React from "react";
import styles from "./Servei.module.scss";
import { NavLink } from "react-router-dom";
import love from "../images/Icon/love.svg";

const Servei = (props) => {
  return (
    <NavLink
      to="/ServiceDetail"
      className={styles.Servei__navigation}
      activeClassName={styles.active__page}
    >
      <div className={styles.box}>
        <div className={styles.box__image}>
          <img src={props.image} alt={props.imageAlt} />
        </div>
        <div className={styles.box__text}>
          <div className={styles.box__text__upper}>
            <div className={styles.box__text__upper__title}>{props.title}</div>
            <img className={styles.box__text__upper__heart} src={love} alt="fav"></img>
          </div>
          <div className={styles.box__text__description}>{props.description}</div>
        </div>

        {/* <button className={styles.box__button}>Seleccionar</button> */}
      </div>
    </NavLink>
  );
};

export default Servei;
