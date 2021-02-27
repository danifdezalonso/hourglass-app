import React from "react";
import styles from "./Consultoria.module.scss";

const Consultoria = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Consultoria</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Consultoria</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
