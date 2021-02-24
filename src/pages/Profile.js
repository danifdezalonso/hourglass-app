import React from "react";
import SignUpLogin from "./SignUpLogin";
import styles from "./Profile.module.scss";

const Profile = ({ handleLogout, user }) => {
  return (
    <>
      <ul className={styles.breadcrumb}>
        <span className={styles.breadcrumb__left}>
          <li>Home</li>
          <li>Profile</li>
        </span>
      </ul>
      <h1>El meu perfil</h1>
    </>
  );
};

export default Profile;
