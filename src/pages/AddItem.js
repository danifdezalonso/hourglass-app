import React from "react";
import styles from "./Profile.module.scss";

const AddItem = ({ handleLogout }) => {
  return (
    <>
      <ul className={styles.breadcrumb}>
        <span className={styles.breadcrumb__left}>
          <li>Home</li>
          <li>Afegir servei</li>
        </span>
      </ul>
      <h1>Afegeix serveis</h1>
    </>
  );
};

export default AddItem;
