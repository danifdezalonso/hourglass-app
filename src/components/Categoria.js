import React from "react";
import styles from "./Categoria.module.scss";
// import { NavLink } from "react-router-dom";

const Categoria = (props) => {
  return (
    // <NavLink
    //   to="/ServiceDetail"
    //   className={styles.Servei__navigation}
    //   activeClassName={styles.active__page}
    // >
      <div className={styles.box}>
        <div className={styles.box__container}>
            <img className={styles.box__container__img}src={props.image} alt={props.imageAlt} />
        </div>
        <div className={styles.box__title}>{props.title}</div>
        <div className={styles.box__description}>{props.description}</div>
    </div>
  );
};

export default Categoria;
