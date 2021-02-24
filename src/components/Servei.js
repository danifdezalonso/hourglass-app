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
        <div className={styles.box__title}>{props.title}</div>
        <div className={styles.box__description}>{props.description}</div>
        <div className={styles.box__image}>
          <img src={props.image} alt={props.imageAlt} />
        </div>

        {/* <button className={styles.box__button}>Seleccionar</button> */}
      </div>
    </NavLink>
  );
};

export default Servei;
