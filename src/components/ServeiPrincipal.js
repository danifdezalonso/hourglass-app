import React from "react";
import styles from "./ServeiPrincipal.module.scss";

const ServeiPrincipal = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.box__image}>
        <img src={props.image} alt={props.imageAlt} />
      </div>
      <div className={styles.box__text}>{props.description}</div>
    </div>
  );
};

export default ServeiPrincipal;
