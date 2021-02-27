import React from "react";
import styles from "./Gossos.module.scss";

const Gossos = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Cangur</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Cangur</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Gossos;
