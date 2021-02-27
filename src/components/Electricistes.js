import React from "react";
import { Link } from "react-router-dom";
import styles from "./Electricistes.module.scss";

const Electricistes = () => {
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
              <li>Profile</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Electricistes</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Electricistes;
