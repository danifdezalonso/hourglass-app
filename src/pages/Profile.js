import React from "react";
import SignUpLogin from "./SignUpLogin";
import styles from "./Profile.module.scss";

const Profile = ({ handleLogout, user }) => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <span className={styles.breadcrumb__left}>
                <li>Home</li>
                <li>Profile</li>
              </span>
            </ul>
          </div>
        </div>
        <h1>Els meu perfil</h1>

        {/* contingut aqui */}
      </div>
    </>
  );
};

export default Profile;
