import React from "react";
import styles from "./PublicitatMarqueting.module.scss";

const PublicitatMarqueting = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Publicitat i Màrqueting</li>
            </span>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Publicitat i Màrqueting</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default PublicitatMarqueting;
