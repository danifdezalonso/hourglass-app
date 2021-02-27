import React from "react";
import { Link } from "react-router-dom";
import styles from "./Neteja.module.scss";

const Neteja = () => {
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
              <li>Neteja</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Neteja</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Neteja;
