import React from "react";
import styles from "./Compra.module.scss";
const Compra = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Compra</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Compra</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Compra;
