import React from "react";
import styles from "./Jardineria.module.scss";
const Jardineria = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Jardineria</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Jardineria</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Jardineria;
