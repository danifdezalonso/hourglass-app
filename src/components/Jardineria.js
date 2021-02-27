import React from "react";
import { Link } from "react-router-dom";
import styles from "./Jardineria.module.scss";

const Jardineria = () => {
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
              <li>Jardineria</li>
            </Link>
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
