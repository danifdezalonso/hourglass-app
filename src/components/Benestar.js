import React from "react";
import styles from "./Benestar.module.scss";
import { Link } from "react-router-dom";

const Benestar = () => {
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
              <li>Benestar</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Benestar</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Benestar;
