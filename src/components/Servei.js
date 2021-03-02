import React from "react";
import styles from "./Servei.module.scss";
import { NavLink } from "react-router-dom";

const Servei = (props) => {
  return (
    <NavLink
      to="/ServiceDetail"
      className={styles.Servei__navigation}
      activeClassName={styles.active__page}
    >
      <div className={styles.box}>
        <div className={styles.box__image}>
          <img src={props.url} alt={props.imageAlt} />
        </div>
        <div className={styles.box__text}>
          <div className={styles.box__text__upper}>
            <div className={styles.box__text__upper__title}>{props.title}</div>
          </div>
          <div className={styles.box__text__description}>
            {props.description}
          </div>
          <div className={styles.box__text__description}>{props.option}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Servei;
