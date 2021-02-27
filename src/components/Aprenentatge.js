import React from "react";
import styles from "./Aprenentatge.module.scss";
import { Link } from "react-router-dom";

const Aprenentatge = () => {
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
              <li>Aprenentatge</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Aprenentatge</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Aprenentatge;
