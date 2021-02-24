import React from "react";
import SignUpLogin from "./SignUpLogin";
import styles from "./Profile.module.scss";

const Profile = ({ handleLogout, user }) => {
  return (
    <>
      {user ? (
        <>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Profile</li>
            </span>
            <span className={styles.breadcrumb__right}>
              <li>
                <button onClick={handleLogout}>Log out </button>
              </li>
            </span>
          </ul>
          <h1>El meu perfil</h1>
        </>
      ) : (
        <SignUpLogin />
      )}
    </>
  );
};

export default Profile;
