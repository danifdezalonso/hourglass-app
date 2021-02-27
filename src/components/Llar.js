import React from "react";
import styles from "./Llar.module.scss";
import { Link } from "react-router-dom";
const All = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to={window.location.pathname}>
              <li>Llar</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Llar</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default All;
