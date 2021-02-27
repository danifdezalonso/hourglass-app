import React from "react";
import styles from "./All.module.scss";

const All = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Tots els serveis</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Tots els serveis</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default All;
