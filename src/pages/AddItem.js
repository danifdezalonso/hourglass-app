import React from "react";
import styles from "./Profile.module.scss";

const AddItem = ({ handleLogout }) => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <span className={styles.breadcrumb__left}>
                <li>Home</li>
                <li>Afegir servei</li>
              </span>
            </ul>
          </div>
        </div>
        <h1>Afegeix servei</h1>

        {/* contingut aqui */}
      </div>
    </>
  );
};

export default AddItem;
