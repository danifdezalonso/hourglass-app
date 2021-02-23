import React from "react";
import styles from "./Servei.module.scss";
import love from "../images/Icon/love.svg";

const Servei = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.box__icon}> 
        <img className={styles.box__icon__icon} src={love} alt="fav"></img>
      </div>
      <div className={styles.box__title}>{props.title}</div>
      <div className={styles.box__description}>{props.description}</div>
      <div className={styles.box__image}>
        <img src={props.image} alt={props.imageAlt} />
      </div>
      <button className={styles.box__button}>Seleccionar</button>
    </div>
  );
};

export default Servei;
