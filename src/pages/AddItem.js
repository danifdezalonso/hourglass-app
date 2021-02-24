import React from "react";
import SignUpLogin from "./SignUpLogin";
import styles from "./Profile.module.scss";

const AddItem = ({ handleLogout, user }) => {
  return (
    <>
      {user ? (
        <>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Afegir servei</li>
            </span>
            <span className={styles.breadcrumb__right}>
              <li>
                <button onClick={handleLogout}>Log out </button>
              </li>
            </span>
          </ul>
          <h1>Afegeix serveis</h1>
        </>
      ) : (
        <SignUpLogin />
      )}
    </>
  );
};

export default AddItem;
