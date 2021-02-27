import React from "react";
import styles from "./WebApp.module.scss";
const WebApps = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Web i Apps</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Web i Apps</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default WebApps;
